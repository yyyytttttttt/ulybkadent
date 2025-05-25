'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CertificateForm({ amount, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(true) // ✅ внутренний флаг для exit-анимации
  const modalRef = useRef(null)

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount }),
    })

    const data = await res.json()
    if (data.confirmation_url) {
      window.location.href = data.confirmation_url
    } else {
      alert('Ошибка при создании оплаты')
      setLoading(false)
    }
  }

  // Закрытие по клику вне
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Закрытие после анимации
  const handleExitComplete = () => {
    onClose()
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="w-full max-w-md rounded-2xl p-8 shadow-xl relative"
            style={{ backgroundColor: '#E8E2CF' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#293D7A]">Введите данные</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                onChange={handleChange('name')}
                value={form.name}
                required
                placeholder="Имя"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293D7A]"
              />
              <input
                onChange={handleChange('email')}
                value={form.email}
                required
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293D7A]"
              />
              <input
                onChange={handleChange('phone')}
                value={form.phone}
                type="tel"
                placeholder="Телефон (необязательно)"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293D7A]"
              />

              <button
                disabled={loading}
                type="submit"
                className={`px-4 py-2 rounded-lg text-white transition ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1e2f63]'
                }`}
                style={{ backgroundColor: '#293D7A' }}
              >
                {loading ? 'Загрузка...' : `Купить за ${amount} ₽`}
              </button>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="text-sm underline text-gray-600 hover:text-gray-800 mt-2 transition"
              >
                Отмена
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
