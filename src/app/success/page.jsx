'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen bg-[#E8E2CF] flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="text-5xl mb-4">🎁</div>
        <h1 className="text-2xl font-bold text-[#293D7A] mb-3">Спасибо за оплату!</h1>
        <p className="text-gray-800 mb-2">
          Ваш <strong>подарочный сертификат</strong> успешно оформлен.
        </p>
        <p className="text-gray-700 mb-6">
          Он отправлен на указанную вами <strong>электронную почту</strong>.
        </p>
        <div className="text-sm text-gray-500 mb-6">
          Пожалуйста, <strong>предъявите сертификат и чек</strong> при использовании в клинике.
        </div>
        <Link
          href="/"
          className="inline-block bg-[#293D7A] text-white px-5 py-2 rounded-lg hover:bg-[#1e2f63] transition"
        >
          Вернуться на главную
        </Link>
      </motion.div>
    </div>
  )
}

export default Page
