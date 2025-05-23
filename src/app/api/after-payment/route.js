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
  try {
    // Проверка существования файла сертификата
    if (!fs.existsSync(CERT_IMAGE_PATH)) {
      throw new Error(`❌ Сертификат PNG не найден по пути: ${CERT_IMAGE_PATH}`)
    }

    const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH)

    // Настройка транспорта с актуальными параметрами для mail.ru
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465, // Используем порт для SSL
      secure: true, // true для порта 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
      connectionTimeout: 10000, // 10 секунд на подключение
      socketTimeout: 10000,    // 10 секунд на операции
      logger: true,            // Включить логирование
      debug: true              // Включить отладку
    })

    // Проверка соединения перед отправкой
    await transporter.verify()

    // Отправка письма
    const info = await transporter.sendMail({
      from: `"Улыбка" <${process.env.MAIL_USER}>`,
      to: email,
      bcc: process.env.ADMIN_EMAIL,
      subject: 'Ваш подарочный сертификат',
      text: `Здравствуйте, ${name}! Ваш подарочный сертификат во вложении.`,
      html: `
        <div>
          <h2>Здравствуйте, ${name}!</h2>
          <p>Ваш подарочный сертификат во вложении.</p>
          <p>С уважением, команда Улыбка</p>
        </div>
      `,
      attachments: [
        {
          filename: 'Сертификат.png',
          content: imageBuffer,
          contentType: 'image/png'
        }
      ]
    })

    console.log('Письмо отправлено:', info.messageId)
    return info
  } catch (error) {
    console.error('Ошибка при отправке письма:', error)
    throw error
  }
}

// 📬 Обработка POST-запроса
export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email } = body.object?.metadata || {}

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Неверные данные: отсутствует имя или email' }, 
        { status: 400 }
      )
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Неверный формат email' },
        { status: 400 }
      )
    }

    await sendEmailWithCertificate({ email, name })

    return NextResponse.json(
      { success: true, message: 'Письмо с сертификатом успешно отправлено' },
      { status: 200 }
    )
  } catch (err) {
    console.error('❌ Ошибка при обработке запроса:', err)
    
    // Определяем статус ошибки
    const status = err.code === 'ETIMEDOUT' ? 504 : 500
    
    return NextResponse.json(
      { 
        error: 'Ошибка при отправке письма',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      },
      { status }
    )
  }
}