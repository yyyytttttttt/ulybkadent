
import React from 'react'
import Image from 'next/image'

const Rec = ({sv,imageSrc,title,subTitle}) => {
  return (
    <section className='bg-[#BDB295] py-[6%]  flex flex-col justify-center items-center gap-16 rounded-[30px] md:rounded-[70px]'>
        <p className='font-sfRegular text-white text-42px-16px w-[80%] text-center'>{title}</p>
        <p className='font-sfLight text-30px-12px text-white w-[80%] text-center'>{subTitle}</p>
        <div className='w-[30%] text-white h-[40%] '>
       
            <Image className='w-[100%]  h-[100%] '
              src={imageSrc}// Путь к изображению из папки public
              alt="us" // Текст для описания изображения
              width={172} // Ширина изображения
              height={133} // Высота изображения
            />
        
            
        </div>

    </section>
  )
}

export default Rec