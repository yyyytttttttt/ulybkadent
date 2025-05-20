import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ModalCart = ({ Text, imageSrc, bgColor = '#FAE0D6', onButtonClick, as = 'link', href }) => {
  if (as === 'link' && href) {
    return (
      <Link href={href}>
        <div
          style={{ backgroundColor: bgColor }}
          className="flex items-center flex-col justify-center py-[8%] rounded-xl relative cursor-pointer"
        >
          <div>
            <Image
              src={imageSrc} // Путь к изображению из папки public
              alt={Text} // Текст для описания изображения
              width={99}
              height={99}
              loading="eager"
            />
          </div>

          <div className="absolute top-[65%] w-[80%] h-[38px] text-center items-center flex justify-center bg-black bg-opacity-30 text-white font-sfLight text-[11px] rounded-full hover:bg-opacity-50 transition duration-300">
            <p className="w-[80%]">{Text}</p>
          </div>
        </div>
      </Link>
    );
  }

  // Если `as` не `link`, возвращаем кнопку
  return (
    <div
      style={{ backgroundColor: bgColor }}
      onClick={onButtonClick}
      className="flex items-center flex-col justify-center py-[8%] rounded-xl relative cursor-pointer"
    >
      <div>
        <Image
          src={imageSrc} // Путь к изображению из папки public
          alt={Text} // Текст для описания изображения
          width={99}
          height={99}
          loading="eager"
        />
      </div>

      <div className="absolute top-[65%] w-[80%] h-[38px] text-center items-center flex justify-center bg-black bg-opacity-30 text-white font-sfLight text-[11px] rounded-full hover:bg-opacity-50 transition duration-300">
        <p className="w-[80%]">{Text}</p>
      </div>
    </div>
  );
};

export default ModalCart;
