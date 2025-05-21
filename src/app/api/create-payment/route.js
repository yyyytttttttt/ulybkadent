import { NextResponse } from 'next/server'
import YooKassa from 'yookassa'

const yookassa = new YooKassa({
  shopId: process.env.YOOKASSA_SHOP_ID,
  secretKey: process.env.YOOKASSA_SECRET_KEY,
})

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, amount } = body

    const payment = await yookassa.createPayment({
      amount: {
        value: `${amount}.00`,
        currency: 'RUB',
      },
      confirmation: {
        type: 'redirect',
        return_url: 'https://ulybkadent.ru/success',
      },
      capture: true,
      description: `Сертификат на ${amount}₽ для ${name}`,
      metadata: { name, email, phone, amount },
       receipt: {
    customer: {
      email, 
    },
    items: [
      {
        description: `Подарочный сертификат`,
        quantity: 1.0,
        amount: {
          value: `${amount}.00`,
          currency: 'RUB',
        },
        vat_code: 1, 
        payment_mode: 'full_payment',
        payment_subject: 'service',
      },
    ],
  },
    })

    return NextResponse.json({
      confirmation_url: payment.confirmation.confirmation_url,
    })

  } catch (err) {
    console.error('Ошибка при создании платежа:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
