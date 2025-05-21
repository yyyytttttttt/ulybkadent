import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Stat = ({ imageSrc, Text, Text1, href }) => {
  return (
    <div className='bg-[#293D7A] flex flex-col items-center opacity-85 py-[8%] rounded-[20px] md:rounded-[50px] h-full'>
      <div className='w-[90%] mb-[4%] flex justify-center'>
        <Image
          src={imageSrc} // Путь к изображению из папки public
          alt="us" // Текст для описания изображения
          width={634} // Ширина изображения
          height={200} // Высота изображения
          quality={100} 
        />
      </div>

      <div className='w-[90%] flex flex-col h-full'>
        <p className='font-sfRegular text-30px-12px text-white mb-[4%]'>
          {Text}
        </p>
        <p className='font-sfLight text-20px-11px text-white mb-[4%] flex-grow'>
          {Text1}
        </p>
        <div className='flex-grow'></div>
        <Link href={href}
          className='flex justify-center border border-white text-white py-[1%] rounded-[5px] cursor-pointer bg-inherit hover:bg-[#E8E2CF] hover:text-black transition duration-500'
          
        >
          перейти
        </Link>
      </div>
    </div>
  );
}

export default Stat;
