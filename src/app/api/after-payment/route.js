import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import PDFDocument from 'pdfkit'
import { Readable } from 'stream'
import path from 'path'
import { promises as fs } from 'fs'

async function generatePdf({ name, amount }) {
  const doc = new PDFDocument()
  const stream = new Readable({ read() {} })

  doc.on('data', chunk => stream.push(chunk))
  doc.on('end', () => stream.push(null))

  // Абсолютный путь до TTF-шрифта
  const fontPath = path.resolve(process.cwd(), 'public/fonts/Roboto-Regular.ttf')
  const fontBuffer = await fs.readFile(fontPath)
  doc.registerFont('Roboto', fontBuffer)

  doc.font('Roboto')
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

async function sendEmailWithAttachment({ email, name, pdfBuffer }) {
  const transporter = nodemailer.createTransport({
    service: 'Mail.ru',
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

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, amount } = body.object.metadata

    const pdfBuffer = await generatePdf({ name, amount })
    await sendEmailWithAttachment({ email, name, pdfBuffer })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Ошибка при генерации или отправке:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
