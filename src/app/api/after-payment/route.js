// Указываем, что этот API-роут работает на Node.js (а не Edge Runtime)
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import PDFDocument from 'pdfkit'
import { Readable } from 'stream'
import fs from 'fs'
import path from 'path'

// 🔧 Путь к Roboto-Regular.ttf из public/fonts
const FONT_PATH = path.join(process.cwd(), 'public', 'fonts', 'Roboto-Regular.ttf')

// 🔧 Генерация PDF-сертификата
async function generatePdf({ name, amount }) {
  if (!fs.existsSync(FONT_PATH)) {
    throw new Error(`❌ Шрифт не найден по пути: ${FONT_PATH}`)
  }

  const doc = new PDFDocument()
  const stream = new Readable({ read() {} })

  doc.on('data', chunk => stream.push(chunk))
  doc.on('end', () => stream.push(null))

  doc.registerFont('Roboto', FONT_PATH)
  doc.font('Roboto')

  doc.info = {
    Title: 'Подарочный сертификат',
    Author: 'Улыбка'
  }

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
    console.error('❌ Ошибка при генерации или отправке:', err)
    return NextResponse.json({ error: String(err.stack) }, { status: 500 })
  }
}
