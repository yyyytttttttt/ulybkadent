export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import FormData from 'form-data'
import fetch from 'node-fetch'

const API_KEY = '51d63a19927a083ee96a8facbd1a5b9f'
const CERT_IMAGE_PATH = path.join(process.cwd(), 'public', 'certificates', 'default-certificate.png')

async function sendEmailViaRestAPI({ email, name }) {
  if (!fs.existsSync(CERT_IMAGE_PATH)) {
    throw new Error(`❌ Сертификат не найден: ${CERT_IMAGE_PATH}`)
  }

  const form = new FormData()
  form.append('from_email', 'ulybkadent@mail.ru')
  form.append('from_name', 'Улыбка Dent')
  form.append('to', email)
  form.append('subject', `Ваш сертификат, ${name}!`)
  form.append('text', `Здравствуйте, ${name}! Благодарим за оплату. Ваш сертификат во вложении.`)
  form.append('html', `<h2>Здравствуйте, ${name}!</h2><p>Ваш сертификат во вложении 🎁</p>`)
  form.append('payment', 'credit')
  form.append('attachments[]', fs.createReadStream(CERT_IMAGE_PATH), {
    filename: 'Сертификат.png',
    contentType: 'image/png',
  })

  const response = await fetch('https://api.mailopost.ru/v1/email/messages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    body: form,
  })

  const result = await response.json()
  if (!response.ok) {
    console.error('❌ Ошибка при отправке:', result)
    throw new Error('Ошибка API Mailopost')
  }

  console.log('✅ Отправлено:', result)
  return result
}

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('📩 Webhook получен от YooKassa:', JSON.stringify(body, null, 2))

    if (body.event !== 'payment.succeeded') {
      return NextResponse.json({ ok: true })
    }

    const metadata = body.object?.metadata || {}
    const { name, email } = metadata

    if (!name || !email) {
      console.error('❌ Отсутствует name или email в metadata')
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    await sendEmailViaRestAPI({ email, name })

    return NextResponse.json({ success: true, message: 'Письмо отправлено' })
  } catch (error) {
    console.error('❌ Ошибка сервера:', error)
    return NextResponse.json(
      {
        error: 'Ошибка сервера',
        details: error.message,
      },
      { status: 500 }
    )
  }
}
