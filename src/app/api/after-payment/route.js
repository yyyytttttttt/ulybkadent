// Указываем, что API-роут работает на Node.js
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const CERT_IMAGE_PATH = path.join(process.cwd(), 'public', 'certificates', 'default-certificate.png')

async function sendEmailWithCertificate({ email, name }) {
  if (!fs.existsSync(CERT_IMAGE_PATH)) {
    throw new Error(`❌ Сертификат не найден: ${CERT_IMAGE_PATH}`)
  }

  const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH)

  const transporter = nodemailer.createTransport({
    host: 'smtp.msndr.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
    connectionTimeout: 10000,
  })

  const info = await transporter.sendMail({
    from: `"Улыбка" <${process.env.MAIL_USER}>`,
    to: email,
    bcc: process.env.ADMIN_EMAIL,
    subject: `Ваш сертификат, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Здравствуйте, ${name}!</h2>
        <p>Благодарим за оплату. Ваш подарочный сертификат во вложении 🎁</p>
      </div>
    `,
    attachments: [
      {
        filename: 'Сертификат.png',
        content: imageBuffer,
        contentType: 'image/png',
      },
    ],
  })

  console.log('✅ Письмо отправлено:', info.messageId)
}

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('📩 Webhook получен от YooKassa:', JSON.stringify(body, null, 2))

    // Проверка, что это успешная оплата
    if (body.event !== 'payment.succeeded') {
      return NextResponse.json({ ok: true }) // ничего не делаем
    }

    const metadata = body.object?.metadata || {}
    const { name, email } = metadata

    if (!name || !email) {
      console.error('❌ Отсутствует name или email в metadata')
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    await sendEmailWithCertificate({ email, name })

    return NextResponse.json({ success: true, message: 'Письмо отправлено' })
  } catch (error) {
    console.error('❌ Ошибка сервера:', error)
    return NextResponse.json(
      {
        error: 'Ошибка сервера',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    )
  }
}
