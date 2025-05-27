export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

function getCertificatePathByAmount(amount) {
  const knownAmounts = ['1', '5', '10']
  const safeAmount = parseInt(amount, 10).toString()
  const filename = `certificate-${safeAmount}.png`
  const fullPath = path.join(process.cwd(), 'public', 'certificates', filename)

  return knownAmounts.includes(safeAmount) && fs.existsSync(fullPath)
    ? fullPath
    : path.join(process.cwd(), 'public', 'certificates', 'default-certificate.png')
}

async function sendEmailWithCertificate({ email, name, amount }) {
  const CERT_IMAGE_PATH = getCertificatePathByAmount(amount)

  if (!fs.existsSync(CERT_IMAGE_PATH)) {
    throw new Error(`❌ Сертификат не найден: ${CERT_IMAGE_PATH}`)
  }

  const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH)

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'ulybkadent@mail.ru', // 
      pass: 'uJdb9sLn2nFfJzbVCqPn', // обязательно пароль приложения, не обычный!
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
    logger: true,
    debug: true,
  })

  const info = await transporter.sendMail({
    from: '"Улыбка" <ulybkadent@mail.ru>', // должен совпадать с user
    to: email,
    bcc: 'ulybkadent@mail.ru',
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
  })

  console.log('✅ Письмо отправлено:', info.messageId)
}

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('📩 Webhook получен от YooKassa:', JSON.stringify(body, null, 2))

    if (body.event !== 'payment.succeeded') {
      return NextResponse.json({ ok: true })
    }

    const metadata = body.object?.metadata || {}
    const { name, email, amount } = metadata

    if (!name || !email || !amount) {
      console.error('❌ Отсутствует name, email или amount в metadata')
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    await sendEmailWithCertificate({ email, name, amount })

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
