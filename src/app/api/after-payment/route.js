import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import PDFDocument from 'pdfkit'
import { Readable } from 'stream'
import path from 'path'

// 🔧 Генератор PDF-сертификата
async function generatePdf({ name, amount }) {
  const doc = new PDFDocument()
  const stream = new Readable({ read() {} })

  doc.on('data', chunk => stream.push(chunk))
  doc.on('end', () => stream.push(null))

  // Регистрируем кастомный шрифт
  doc.registerFont(
    'Roboto',
    path.resolve(process.cwd(), 'public/fonts/Roboto-Regular.ttf')
  )
  doc.font('Roboto')

  // Устанавливаем метаданные
  doc.info = {
    Title: 'Подарочный сертификат',
    Author: 'Улыбка'
  }

  // 🖨 Рендерим контент PDF
  doc.fontSize(24).text('🎁 Подарочный сертификат', { align: 'center' })
  doc.moveDown()
  doc.fontSize(18).text(`Имя: ${name}`)
  doc.text(`Сумма: ${amount}₽`)
  doc.text(`Дата: ${new Date().toLocaleDateString('ru-RU')}`)

  doc.end()

  const chunks = []
  for await (const chunk of stream) chunks.push(chunk)
  return Buffer.concat(chunks)
}

// 📧 Отправка письма с вложением
async function sendEmailWithAttachment({ email, name, pdfBuffer }) {
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
    text: `Здравствуйте, ${name}! Ваш сертификат во вложении.`,
    attachments: [
      {
        filename: 'Сертификат.pdf',
        content: pdfBuffer
      }
    ]
  })
}

// 📬 Обработка POST-запроса
export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, amount } = body.object?.metadata || {}

    if (!name || !email || !amount) {
      return NextResponse.json({ error: 'Неверные данные' }, { status: 400 })
    }

    const pdfBuffer = await generatePdf({ name, amount })
    await sendEmailWithAttachment({ email, name, pdfBuffer })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Ошибка при генерации или отправке:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
