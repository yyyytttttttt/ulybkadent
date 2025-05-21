import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'


const Usluga = ({imageSrc , altText ='image', Text, buttonText ,Ptext}) => {
  return (
    <div className='mb-[2%] w-[100%] flex flex-col  h-full '>
        
            <div className='mb-[2%] w-[25%]' >
                <Image
                    src={imageSrc}// Путь к изображению из папки public
                    alt="altText" // Текст для описания изображения
                    width={70} // Ширина изображения
                    height={70} // Высота изображения
                />
            </div>
            

        
        <div className='flex flex-col justify-between h-full'>
        <div className='mb-[2%]'>
          <p className='text-[#1f3475] font-sfMedium text-20px-11px w-[80%]'>
            {Text}
          </p>
          <p className='text-[#1f3475] font-sfRegular text-20px-11px'>
            {Ptext}
          </p>
        </div>
        <div className="flex-grow"></div> {/* Добавлен пустой div, чтобы "толкнуть" кнопку вниз */}
        <Link href="/price-list"  className='text-[#1f3475] underline underline-offset-4 font-sfRegular text-16px-11px flex items-center transition-colors duration-300 hover:text-[#E8E2CF]'>
            Перейти
        </Link>
      </div>


    
    </div>
  )
}

export default Usluga