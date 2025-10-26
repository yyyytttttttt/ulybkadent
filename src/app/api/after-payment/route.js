export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// ---------- utils ----------
function normalizeAmount(raw) {
  if (raw == null) return null;
  const str = String(raw).replace(',', '.').trim();
  const num = Number.parseFloat(str);
  if (Number.isNaN(num)) return null;
  return Math.round(num); // 3000.00 -> 3000
}

function getCertificatePathByAmount(amount) {
  const amountRub = normalizeAmount(amount);
  const known = new Set([3000, 5000, 10000]);
  const base = path.join(process.cwd(), 'public', 'certificates');
  const filename = `certificate-${amountRub}.png`;
  const candidate = path.join(base, filename);

  return amountRub && known.has(amountRub) && fs.existsSync(candidate)
    ? candidate
    : path.join(base, 'public', 'certificates', 'default-certificate.png');
}

// анти-дубликаты webhook-событий (в проде — хранить в БД/Redis)
const sentIds = globalThis.__sentYooEvents || new Set();
globalThis.__sentYooEvents = sentIds;

// ---------- mailer ----------
async function sendEmailWithCertificate({ email, name, amount }) {
  const CERT_IMAGE_PATH = getCertificatePathByAmount(amount);
  if (!fs.existsSync(CERT_IMAGE_PATH)) {
    throw new Error(`❌ Сертификат не найден: ${CERT_IMAGE_PATH}`);
  }

  const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH);

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILRU_USER,          // 'ulybkadent@mail.ru'
      pass: process.env.MAILRU_APP_PASSWORD,  // пароль приложения Mail.ru
    },
    authMethod: 'LOGIN',
    tls: {
      minVersion: 'TLSv1.2',
    },
    connectionTimeout: 10000,
    ...(process.env.NODE_ENV === 'development'
      ? { logger: true, debug: true }
      : {}),
  });

  const info = await transporter.sendMail({
    from: `"Улыбка" <${process.env.MAILRU_USER}>`,
    to: email,
    bcc: process.env.MAILRU_USER,
    subject: `Ваш сертификат, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Здравствуйте, ${name}!</h2>
        <p>Благодарим за оплату. Ваш подарочный сертификат во вложении 🎁</p>
        <p><strong>Пожалуйста, предъявите чек и сертификат при использовании в клинике.</strong></p>
      </div>
    `,
    attachments: [
      {
        filename: 'Сертификат.png',
        content: imageBuffer,
        contentType: 'image/png',
      },
    ],
  });

  console.log('✅ Письмо отправлено:', info.messageId);
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
    const name = metadata.name || 'Клиент';
    const email = metadata.email;

    // сумма: metadata.amount -> object.amount.value
    const amount =
      metadata.amount ??
      body.object?.amount?.value ??
      null;

    if (!email || !amount) {
      console.error('❌ Отсутствует email или amount в metadata/amount', { email, amount });
      return NextResponse.json({ error: 'Missing email or amount' }, { status: 400 });
    }

    await sendEmailWithCertificate({ email, name, amount });

    if (eventId) sentIds.add(eventId);

    return NextResponse.json({ success: true, message: 'Письмо отправлено' });
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
