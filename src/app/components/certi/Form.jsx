'use client'
import React from 'react'
import { useState } from 'react'
export default function CertificateForm({ amount, onClose }) {
    const [form,setForm]=useState({name:"",email:'',phone:''})
    const [loading,setloading]=useState(false)
    
    const handleChange =(field)=>(e)=>{
        setForm({...form,[field]:e.target.value})

    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setloading(true)

        const res =await fetch ('/api/create-payment',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({...form,amount})
        })
        const data = await res.json()

        if (data.confirmation_url){
            window.location.href =data.confirmation_url
        } else {
            alert('Ошибка при создании оплаты')
            setloading(false)
        }
    }
    console.log(form)
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Введите данные</h2>
        <form  onSubmit={handleSubmit} className="flex flex-col gap-3">
            
          <input
            onChange={handleChange('name')}
            value={form.name}
            required
            placeholder="Имя"
            className="border px-3 py-2 rounded"
          />
          <input
            onChange={handleChange('email')}
            value={form.email}
            required
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
          />
          <input
            onChange={handleChange('phone')}
            value={form.phone}
            type="tel"
            placeholder="Телефон (необязательно)"
            className="border px-3 py-2 rounded"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Купить за {amount} ₽
          </button>
          <button
            type="button"
            className="text-sm text-gray-600 mt-2"
            onClick={onClose}
          >
            Отмена
          </button>
        </form>
      </div>
    </div>
  )
}
