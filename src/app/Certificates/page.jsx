'use client'
import React, { useState } from "react";
import Layout from "../layouts/Layout";
import Image from "next/image";
import CertificateForm from "../components/certi/Form";

const Page = () => {
  const [open,setOpen]=useState(false)
  const [selectedAmount,setSelectedAmount]=useState(null)
 

  return (
    <Layout>
      <p className="font-sfMedium text-42px-16px text-[#1F3475] mb-[1%]">
        Подарочные сертификаты Улыбка
      </p>

      {/* Сетка сертификатов */}
      <div className="bg-[#E8E2CF] px-[2%] py-[2%] rounded-[20px]  md:rounded-[52px] grid grid-cols-2 md:grid-cols-3 gap-4 xs:gap-8 mb-[6%]">
        {/* Сертификат 1 */}
        <div>
          <Image src="/images/cert.png" alt="Подарочный сертификат" width={430} height={422} quality={100} className="w-[100%] mb-[2%]" />
          <p className="font-sfRegular text-20px-11px mb-[1%] text-[#293D7A]">Подарочный сертификат</p>
          <p className="font-sfMedium text-30px-12px mb-[4%] text-[#293D7A]">Уверенность в улыбке</p>
          <div className="flex justify-between">
            <p className="font-sfMedium text-40px-11px text-[#293D7A]">10 000 Р</p>
            <button
              onClick={()=>{
                setSelectedAmount(10000)
                setOpen(true)
              }}
              
              className="font-sfRegular text-20px-11px text-white bg-[#293D7A] px-[10%] py-[1%] rounded-[21px]"
            >
              Купить онлайн
            </button>
          </div>
        </div>

        {/* Сертификат 2 */}
        <div>
          <Image src="/images/cert1.png" alt="Подарочный сертификат" width={430} height={422} quality={100} className="w-[100%] mb-[2%]" />
          <p className="font-sfRegular text-20px-11px mb-[1%] text-[#293D7A]">Подарочный сертификат</p>
          <p className="font-sfMedium text-30px-12px mb-[4%] text-[#293D7A]">Профессиональный уход</p>
          <div className="flex justify-between">
            <p className="font-sfMedium text-40px-11px text-[#293D7A]">5 000 Р</p>
            <button
              onClick={()=>{
                setSelectedAmount(5000)
                setOpen(true)
              }}
             
              className="font-sfRegular text-20px-11px text-white bg-[#293D7A] px-[10%] py-[1%] rounded-[21px]"
            >
              Купить онлайн
            </button>
          </div>
        </div>

        {/* Сертификат 3 */}
        <div>
          <Image src="/images/cert2.png" alt="Подарочный сертификат" width={430} height={422} quality={100} className="w-[100%] mb-[2%]" />
          <p className="font-sfRegular text-20px-11px mb-[1%] text-[#293D7A]">Подарочный сертификат</p>
          <p className="font-sfMedium text-30px-12px mb-[4%] text-[#293D7A]">Забота о здоровье</p>
          <div className="flex justify-between">
            <p className="font-sfMedium text-40px-11px text-[#293D7A]">3 000 Р</p>
            <button
              onClick={()=>{
                  setSelectedAmount(3000)
                  setOpen(true)
                }}
              
              className="font-sfRegular text-20px-11px text-white bg-[#293D7A] px-[10%] py-[1%] rounded-[21px]"
            >
              Купить онлайн
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 xs:gap-[12%] mb-[6%]">
        <div>
          <p className="font-sfMedium text-[18px] md:text-40px-11px text-[#1F3475]">Как это работает</p>
        </div>
        <div className="flex flex-col gap-4 xs:gap-6">
          <div>
            <p className="font-sfMedium text-24px-15px text-[#1F3475]">Выберите номинал</p>
            <p className="flex flex-col font-sfRegular text-20px-11px">
              <span>3 000 ₽ – забота о здоровье зубов</span>
              <span>5 000 ₽ – профессиональный уход</span>
              <span>10 000 ₽ – уверенность в улыбке</span>
            </p>
          </div>
          <div>
            <p className="font-sfMedium text-24px-15px text-[#1F3475]">Заполните данные получателя</p>
            <p className="font-sfRegular text-20px-11px">
              <span>Добавьте имя, email и телефон.</span>
              
            </p>

          </div>
          <div>
            <p className="font-sfMedium text-24px-15px text-[#1F3475]">получите сертификат</p>
            <p className="flex flex-col font-sfRegular text-20px-11px">
              <span className="w-[80%] xs:w-full">Мы отправим его вам или получателю на электронную почту. Также вы можете</span>
              <span>забрать физический сертификат в стоматологии УЛЫБКА.</span>
              
            </p>

          </div>
        </div>
      </div>
      <div className="mb-[6%]  flex flex-col md:flex-row gap-4 xs:gap-[15%]">
        <div className="flex flex-col gap-4">
          <p className="font-sfMedium text-[18px] md:text-40px-11px text-[#1F3475]">Готовы порадовать близких?</p>
          <p className="font-sfRegular text-40px-11px flex flex-col">
            <span>Выберите сертификат и </span>
            <span>оформите за пару минут!</span>
          </p>
          <button className="font-sfRegular text-24px-15px text-white bg-[#293D7A] px-[2%] py-[1.5%] rounded-[21px] w-[40%]">Купить онлайн</button>
        </div>
        <div className="w-full md:w-[40%]">
          <Image src="/images/cem.png" alt="Подарочный сертификат" width={572} height={534} quality={100} className="w-[100%] mb-[2%]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-[7%]">
        <div>
          <p className="font-sfMedium text-[18px] md:text-40px-11px   text-[#1F3475]">Условия пользования</p>
        </div>
        <div className="mb-[6%]">
          <div className="flex flex-col font-sfRegular text-24px-15px ">
            <p>1. Подарочная карта действует 1 год с даты приобретения.</p>
            <p>
              2. Сертификат нельзя возвращать или обменивать на денежные средства.
            </p>
            <p className="flex flex-col">
              <span>3. Номинал сертификата расходуется единовременно или постепенно. Его </span>
              <span>можно распределять на несколько походов в клинику.</span>
            </p>
            <p>
              4 .При покупке нескольких сертификатов их номинал суммируется.
            </p>
            <p className="flex flex-col">
              <span>5. Разницу, превышающую номинал сертификата, необходимо доплатить </span>
              <span>отдельно.</span>
            </p>
            <p>
              6. Предъявить сертификат можно на кассе на этапе оплаты услуги
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[2%]">
        <a
          href="/docs/dogovor.docx"
          download
          className="inline-flex text-20px-11px flex-col xs:flex-row items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Скачать договор продажи сертификатов и все условия 
        </a>
      </div>
     { open && (

       <CertificateForm 
        amount={selectedAmount}
        onClose={() => {
          setOpen(false)
          setSelectedAmount(null)
    }}
       
       
       />
     )
    }

    
    
    </Layout>
  );
};

export default Page;
