// Указываем, что API-роут работает на Node.js
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

// 📍 Путь к PNG-файлу сертификата
const CERT_IMAGE_PATH = path.join(process.cwd(), 'public', 'certificates', 'default-certificate.png')

// 📧 Отправка письма с вложением
async function sendEmailWithCertificate({ email, name }) {
  if (!fs.existsSync(CERT_IMAGE_PATH)) {
    throw new Error(`❌ Сертификат PNG не найден по пути: ${CERT_IMAGE_PATH}`)
  }

  const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH)

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  await transporter.sendMail({
    from: `"Улыбка" <${process.env.MAIL_USER}>`,
    to: email,
    bcc: process.env.ADMIN_EMAIL,
    subject: 'Ваш подарочный сертификат',
    text: `Здравствуйте, ${name}! Ваш подарочный сертификат во вложении.`,
    attachments: [
      {
        filename: 'Сертификат.png',
        content: imageBuffer,
        contentType: 'image/png'
      }
    ]
  })
}

// 📬 Обработка POST-запроса
export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email } = body.object?.metadata || {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Неверные данные' }, { status: 400 })
    }

    await sendEmailWithCertificate({ email, name })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ Ошибка при отправке письма:', err)
    return NextResponse.json({ error: String(err.stack) }, { status: 500 })
  }
}
