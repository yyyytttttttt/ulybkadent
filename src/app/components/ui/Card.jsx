import React from 'react'
import Image from 'next/image' 


const Card = ({imageSrc , altText ='image', Text, buttonText ,onButtonClick}) => {
  return (
    <div className='mb-[2%] w-[100%] flex flex-col  h-full '>
        <div className='  flex items-center justify-center  bg-[#E8E2CF] pt-[16%] pb-[16%] rounded-xl mb-[2%]'>
            <div className='w-[35%]'>
              <Image
                  src={imageSrc}// Путь к изображению из папки public
                  alt="altText" // Текст для описания изображения
                  width={181} // Ширина изображения
                  height={181} // Высота изображения
              />
            </div>
            

        </div>
        <div className='flex flex-col justify-between h-full'>
        <div className='mb-[2%]'>
          <p className='text-[#1f3475] font-sfMedium text-20px-11px'>
            {Text}
          </p>
        </div>
        <div className="flex-grow"></div> {/* Добавлен пустой div, чтобы "толкнуть" кнопку вниз */}
        <button onClick={onButtonClick} className='text-[#1f3475] underline underline-offset-4 font-sfRegular text-16px-11px flex items-center'>
          {buttonText}
        </button>
      </div>


    
    </div>
  )
}

export default Card