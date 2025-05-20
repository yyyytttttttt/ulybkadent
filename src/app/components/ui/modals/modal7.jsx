import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Modal7 = ({ onClose, imageSrc }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Плавное открытие модального окна
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Функция для закрытия окна при клике на фон
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300); // Задержка для завершения анимации
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleBackdropClick}
    >
      <div className={`bg-[#BDB295]  max-w-[1400px] w-[90%] xs:w-[70%] md:w-[50%]  5xl:w-[30%] py-[2%] px-[2%] relative rounded-[20px]  md:rounded-[70px] transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-75'}`}>
        <div className='mb-[2%] w-[30%]'>
          <Image
            src={imageSrc} // Путь к изображению из папки public
            alt="altText" // Текст для описания изображения
            width={226} // Ширина изображения
            height={230} // Высота изображения
          />
        </div>
        <p className='font-sfMedium text-30px-12px text-white pb-[2%]'>
            Комплексный уход для здоровой улыбки
        </p>
        <p className='text-white text-20px-11px mb-[2%]'>
            Наши программы включают регулярные осмотры, профессиональную чистку и процедуры по уходу за дёснами, чтобы ваша улыбка оставалась здоровой и красивой.»
        </p>
        <button onClick={() => {
            setIsVisible(false);
            setTimeout(() => {
              onClose();
            }, 300);
          }}
          className="absolute top-[5%] right-[5%] w-[7%]" aria-label="Закрыть">
            <svg className='text-[#1F3475] w-[100%]' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4323_14596)">
                    <path d="M4.50692 -0.863472C2.84568 -0.458248 1.41896 0.994633 1.03785 2.65507C0.764234 3.84109 0.969447 5.23468 1.56554 6.25268C1.70235 6.48 5.66002 10.552 10.3604 15.306L18.9207 23.9541L10.2431 32.7505C0.901042 42.2189 1.15512 41.9323 0.79355 43.3259C0.510161 44.4625 0.666514 45.6386 1.25284 46.7555C2.17141 48.5049 4.33103 49.3548 6.61768 48.8705C7.98577 48.574 7.6242 48.9002 16.9174 39.5108C21.6471 34.7371 25.5657 30.8232 25.6145 30.8232C25.6634 30.8232 29.582 34.7272 34.3116 39.5108C42.2856 47.5659 42.9599 48.2182 43.5462 48.495C45.569 49.4438 48.012 49.0583 49.4094 47.5659C50.7286 46.1625 51.0316 44.0078 50.1716 42.1991C49.8882 41.5963 49.2042 40.8846 41.113 32.7307L32.3572 23.9245L40.8687 15.2862C46.1749 9.90959 49.4778 6.48989 49.6342 6.21315C50.0641 5.44223 50.2205 4.71085 50.1716 3.65331C50.113 2.5167 49.8785 1.82485 49.2628 0.994633C48.0609 -0.616386 45.8817 -1.29835 43.9859 -0.646034C42.9012 -0.280346 42.4126 0.184181 33.9305 8.77298L25.6243 17.174L17.0738 8.55555C7.87827 -0.695457 8.10303 -0.497784 6.75449 -0.853592C6.08022 -1.03149 5.19096 -1.03149 4.50692 -0.863472Z" fill="#1F3475" />
                </g>
                <defs>
                    <clipPath id="clip0_4323_14596">
                    <rect width="49.112" height="49.112" fill="white" transform="translate(0.648438 0.183594)" />
                    </clipPath>
                </defs>
            </svg>
          
        </button>
        <div className='grid grid-cols-2 gap-4'>
            
                <Link className='border border-white  flex items-center justify-center rounded-[16px] py-[5%] text-white font-sfMedium text-20px-11px mb-[4%] cursor-pointer transition-all duration-700 ease-in-out hover:bg-[#E8E2CF] hover:text-[#1F3475] hover:border-[#E8E2CF]' href="/News/smile-care">
                    <p>Подробнее</p>
                </Link>
            
           
        </div>
      </div>
    </div>
  );
};

export default Modal7;

