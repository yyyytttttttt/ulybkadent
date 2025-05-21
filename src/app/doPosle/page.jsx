import React from 'react'
import Layout from '../../layouts/Layout'
import Image from 'next/image'
import HygienistWorks from '../components/HygienistWorks'

const page = () => {
  return (
    <Layout>
      <div className='bg-[#E8E2CF] px-[4%] py-[4%] flex flex-col md:flex-row justify-between mb-[2%] rounded-[25px]'>
        <div className='flex flex-col justify-center gap-2 xs:gap-6 w-full md:w-[65%] mb-6 md:mb-0'>
          <div className='flex flex-col gap-4 mb-6'>
            <p className='font-sfRegular text-20px-11px text-[#293D7A]'>
              ✨ Улыбка, которой можно гордиться
            </p>
            <p className='font-sfLight text-16px-11px text-[#293D7A] leading-relaxed'>
              Каждая улыбка на этой странице — это история о переменах: не только внешности,
              но и уверенности в себе. Мы рады поделиться с вами результатами нашей работы — честно,
              с заботой и гордостью за каждого пациента.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-sfRegular text-20px-11px text-[#293D7A]'>💬 Мы ценим доверие</p>
            <p className='font-sfLight text-16px-11px text-[#293D7A] leading-relaxed'>
              Все фото размещены с разрешения пациентов. Благодарим каждого, кто согласился показать 
              свою улыбку миру. Если вы мечтаете о подобных результатах — мы будем рады помочь вам сделать первый шаг.
            </p>
          </div>
        </div>

        <div className='w-full md:w-[30%] flex flex-col justify-center items-center'>
          <div className='mb-[2%] w-full'>
            <Image
              className='w-full'
              src='/images/rf.png'
              alt='us'
              width={50}
              height={50}
              quality={100}
            />
          </div>
          <p className='font-sfLight text-16px-11px text-[#293D7A] text-center'>
            Работа гигиенистов стоматологии “УЛЫБКА”
          </p>
        </div>
      </div>

      <HygienistWorks />
    </Layout>
  )
}

export default page
