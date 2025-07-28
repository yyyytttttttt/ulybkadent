'use client'
import React, { useState } from 'react'

export default function Page() {
  const [file, setFile] = useState(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      setError('Пожалуйста, выберите видео.')
      return
    }

    const formData = new FormData()
    formData.append('video', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Ошибка загрузки')

      const data = await res.json()
      console.log('Загружено:', data)
      setSuccess(true)
      setError('')
      setFile(null)
    } catch (err) {
      console.error(err)
      setError('Произошла ошибка при загрузке.')
      setSuccess(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 space-y-6 transition-all duration-300"
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Загрузка рилса 🎥
        </h1>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Выберите видео-файл
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-4 py-2 border border-dashed border-gray-400 text-gray-700 rounded-xl bg-white cursor-pointer hover:border-blue-500 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          🚀 Загрузить видео
        </button>

        {success && (
          <div className="text-green-600 text-center font-medium">
            ✅ Видео успешно загружено!
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center font-medium">
            ⚠️ {error}
          </div>
        )}
      </form>
    </div>
  )
}
