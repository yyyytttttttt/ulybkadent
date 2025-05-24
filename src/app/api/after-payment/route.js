// Указываем, что API-роут работает на Node.js
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

// 📍 Путь к PNG-файлу сертификата
const CERT_IMAGE_PATH = path.join(process.cwd(), 'public', 'certificates', 'default-certificate.png')

// 📧 Отправка письма через SMTP Mailopost
async function sendEmailWithCertificate({ email, name }) {
  try {
    // 1. Проверка файла сертификата
    if (!fs.existsSync(CERT_IMAGE_PATH)) {
      throw new Error(`❌ Файл сертификата не найден: ${CERT_IMAGE_PATH}`)
    }

    // 2. Чтение файла сертификата
    const imageBuffer = fs.readFileSync(CERT_IMAGE_PATH)

    // 3. Настройка SMTP транспорта (данные из вашего изображения)
    const transporter = nodemailer.createTransport({
      host: 'smtp.msndr.net', // SMTP-сервер Mailopost
      port: 465,              // Порт для SSL (из вашего изображения)
      secure: true,            // Использовать SSL
      auth: {
        user: 'ulybkadent@mail.ru', // Ваш логин из изображения
        pass: '51d63a19927a083ee96a8facbd1a5b9f' // API-ключ как пароль
      },
      tls: {
        rejectUnauthorized: true
      },
      connectionTimeout: 10000,   // 10 секунд на подключение
      logger: true               // Включить логирование
    })

    // 4. Отправка письма
    const info = await transporter.sendMail({
      from: '"Улыбка" <ulybkadent@mail.ru>', // Должен совпадать с логином
      to: email,
      subject: `Ваш сертификат, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Здравствуйте, ${name}!</h2>
          <p>Ваш подарочный сертификат во вложении.</p>
        </div>
      `,
      attachments: [{
        filename: 'Сертификат.png',
        content: imageBuffer,
        contentType: 'image/png'
      }]
    })

    console.log('Письмо отправлено:', info.messageId)
    return info
  } catch (error) {
    console.error('Ошибка отправки:', error)
    throw error
  }
}

// 📬 Обработка POST-запроса
export async function POST(req) {
  try {
    // 1. Получаем данные из запроса
    const { name, email } = await req.json()

    // 2. Валидация данных
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Укажите имя и email' },
        { status: 400 }
      )
    }

    // 3. Проверка формата email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Неверный формат email' },
        { status: 400 }
      )
    }

    // 4. Отправка письма
    await sendEmailWithCertificate({ email, name })

    return NextResponse.json(
      { success: true, message: 'Письмо отправлено!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Ошибка API:', error)
    return NextResponse.json(
      {
        error: 'Ошибка отправки',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}