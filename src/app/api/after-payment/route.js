export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// ---------- utils ----------
function normalizeAmount(raw) {
  if (raw == null) return null;
  const n = Number.parseFloat(String(raw).replace(',', '.'));
  return Number.isNaN(n) ? null : Math.round(n);
}

function getCertificatePathByAmount(amount) {
  const amountRub = normalizeAmount(amount);
  const known = new Set([3000, 5000, 10000]);

  const base = path.join(process.cwd(), 'public', 'certificates');
  const filename = `certificate-${amountRub}.png`;
  const candidate = path.join(base, filename);

  return amountRub && known.has(amountRub) && fs.existsSync(candidate)
    ? candidate
    : path.join(base, 'default-certificate.png'); // ← фикс
}

// аккуратный разбор чека (если YooKassa его прислала во вебхуке)
function formatReceiptSummary(obj = {}) {
  const r = obj?.object?.receipt;
  if (!r) return 'Чек в объекте вебхука отсутствует.';
  const items = Array.isArray(r.items) ? r.items : [];
  const lines = [
    `Покупатель: ${r.customer?.email || r.customer?.phone || '—'}`,
    `Предметов: ${items.length}`,
    ...items.slice(0, 10).map((it, i) => {
      const name = it.description || it.title || `Товар ${i + 1}`;
      const qty = it.quantity ?? it.qty ?? '1';
      const price = it.amount?.value ?? it.price ?? '—';
      return `• ${name} — ${qty} x ${price} RUB`;
    }),
  ];
  if (items.length > 10) lines.push(`… и ещё ${items.length - 10} поз.`);
  return lines.join('\n');
}

// анти-дубликаты webhook-событий (в проде — хранить в БД/Redis)
const sentIds = globalThis.__sentYooEvents || new Set();
globalThis.__sentYooEvents = sentIds;

// ---------- mailer factory ----------
function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILRU_USER,          // 'ulybkadent@mail.ru'
      pass: process.env.MAILRU_APP_PASSWORD,  // пароль приложения Mail.ru
    },
    authMethod: 'LOGIN',
    tls: { minVersion: 'TLSv1.2' },
    connectionTimeout: 10000,
    ...(process.env.NODE_ENV === 'development' ? { logger: true, debug: true } : {}),
  });
}

// ---------- mailers ----------
async function sendEmailWithCertificate({ email, name, amount }) {
  const CERT_IMAGE_PATH = getCertificatePathByAmount(amount);
  if (!fs.existsSync(CERT_IMAGE_PATH)) {
    throw new Error(`❌ Сертификат не найден: ${CERT_IMAGE_PATH}`);
  }
  const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH);

  const transporter = createTransporter();

  const info = await transporter.sendMail({
    from: `"Улыбка" <${process.env.MAILRU_USER}>`,
    to: email,
    // bcc можно убрать, т.к. теперь шлём отдельную копию администратору
    subject: `Ваш сертификат, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Здравствуйте, ${name}!</h2>
        <p>Благодарим за оплату. Ваш подарочный сертификат во вложении 🎁</p>
        <p><strong>Пожалуйста, предъявите чек и сертификат при использовании в клинике.</strong></p>
      </div>
    `,
    attachments: [
      { filename: 'Сертификат.png', content: imageBuffer, contentType: 'image/png' },
    ],
  });

  console.log('✅ Письмо клиенту отправлено:', info.messageId);
  return { imageBuffer, certPath: CERT_IMAGE_PATH };
}

async function sendAdminCopy({ clinicEmail, clientEmail, clientName, amount, paymentId, webhookBody, imageBuffer }) {
  const transporter = createTransporter();

  const amountRub = normalizeAmount(amount);
  const receiptSummary = formatReceiptSummary(webhookBody);
  const status = webhookBody?.object?.status || webhookBody?.event || '—';

  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h3>Дубликат: сертификат отправлен клиенту</h3>
      <p><strong>Статус:</strong> ${status}</p>
      <p><strong>Payment ID:</strong> ${paymentId || '—'}</p>
      <p><strong>Сумма:</strong> ${amountRub ? amountRub + ' ₽' : (amount || '—')}</p>
      <p><strong>Клиент:</strong> ${clientName} &lt;${clientEmail}&gt;</p>
      <hr/>
      <pre style="white-space:pre-wrap;font-size:12px;line-height:1.45;">
${receiptSummary}
      </pre>
      <p style="color:#666">Полный JSON вебхука приложен файлом.</p>
    </div>
  `;

  const info = await transporter.sendMail({
    from: `"Улыбка (сервис)" <${process.env.MAILRU_USER}>`,
    to: clinicEmail, // ulybkadent@mail.ru
    subject: `Копия клиентского письма • ${clientName} • ${amountRub ? amountRub + ' ₽' : amount}`,
    html,
    attachments: [
      { filename: 'Сертификат.png', content: imageBuffer, contentType: 'image/png' },
      { filename: 'yookassa-webhook.json', content: Buffer.from(JSON.stringify(webhookBody, null, 2)), contentType: 'application/json' },
    ],
  });

  console.log('📎 Админ-копия отправлена:', info.messageId);
}

// ---------- handler ----------
export async function POST(req) {
  try {
    const body = await req.json();
    console.log('📩 Webhook получен от YooKassa:', JSON.stringify(body, null, 2));

    if (body.event !== 'payment.succeeded') {
      return NextResponse.json({ ok: true });
    }

    // защита от дублей
    const eventId = body.object?.id;
    if (eventId && sentIds.has(eventId)) {
      console.log('ℹ️ Дубликат события, пропускаю:', eventId);
      return NextResponse.json({ ok: true, duplicate: true });
    }

    const metadata = body.object?.metadata || {};
    const name   = metadata.name || 'Клиент';
    const email  = metadata.email;
    const amount = metadata.amount ?? body.object?.amount?.value ?? null;

    if (!email || !amount) {
      console.error('❌ Отсутствует email или amount в metadata/amount', { email, amount });
      return NextResponse.json({ error: 'Missing email or amount' }, { status: 400 });
    }

    // 1) письмо клиенту
    const { imageBuffer } = await sendEmailWithCertificate({ email, name, amount });

    // 2) дубликация «чека» и сертификата на почту клиники
    await sendAdminCopy({
      clinicEmail: process.env.MAILRU_USER,  // ulybkadent@mail.ru
      clientEmail: email,
      clientName : name,
      amount,
      paymentId  : eventId,
      webhookBody: body,
      imageBuffer,
    });

    if (eventId) sentIds.add(eventId);

    return NextResponse.json({ success: true, message: 'Письмо отправлено, копия администратору приложена' });
  } catch (error) {
    const msg = (error && error.message) || String(error);
    console.error('❌ Ошибка сервера:', msg);

    if (msg.includes('EAUTH') || msg.includes('535 5.7.0')) {
      return NextResponse.json(
        {
          error: 'Аутентификация SMTP не прошла',
          hint:
            'Включите 2FA в Mail.ru и используйте пароль приложения. ' +
            'Проверьте MAILRU_USER и MAILRU_APP_PASSWORD в переменных окружения.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        error: 'Ошибка сервера',
        details: process.env.NODE_ENV === 'development' ? msg : undefined,
      },
      { status: 500 }
    );
  }
}
