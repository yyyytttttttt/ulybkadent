import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

const Block = ({ text, blockText, imageSrc,href }) => {
  return (
    <section className="flex justify-between bg-[#E8E2CF] rounded-[12px] px-[2.5%] py-[2.5%] items-center mb-[2%]">
      <div className='w-[85%] '>
        <p className="font-sfRegular text-30px-12px mb-[1%]">{text}</p>
        <p className="font-sfRegular text-20px-11px mb-[3%] ">{blockText}</p>
        <Link href={href} className='text-[#1f3475] underline underline-offset-4 font-sfRegular text-16px-11px flex items-center cursor-pointer'>
          Перейти
        </Link>
      </div>
      
      <div className="w-[30%] xs:w-[15%]">
        <Image
          src={imageSrc} // Путь к изображению из папки public
          alt="us" // Текст для описания изображения
          width={172} // Ширина изображения
          height={133} // Высота изображения
        />
      </div>
    </section>
  );
}

export default Block;
