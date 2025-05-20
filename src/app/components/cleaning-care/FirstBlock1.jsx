import React from "react";
import Image from "next/image";

const SecondBlock = ({imageSrc,dynamicOrder,dynamicOrder1,Text,Text2}) => {
  return (
    <div>
      <div className='flex justify-between flex-col xs:flex-row mb-[2%]  xs:items-center'>
          <div className={`mb-[2%] w-[80%] xs:w-[55%]${
        dynamicOrder ? `order-${dynamicOrder}` : ""
      }`}>
              <div className="  flex flex-col justify-center">
                  <p className="font-sfMedium text-30px-12px text-[#546495] mb-[2%] ">{Text}</p>
                  <p className="font-sfLight text-30px-12px text-[#B49C80]">
                    {Text2}
                  </p>
              </div>
          </div>
          <div className={`flex justify-end  mb-[4%] w-[100%] xs:w-[35%] ${
            dynamicOrder ? `order-${dynamicOrder1}` : ""
            }`}>
              <div className="w-[65%] xs:w-[100%] relative">
                  <Image 
                            src={imageSrc} // Путь к изображению из папки public
                            alt="altText"
                             // Текст для описания изображения
                            width={566} // Ширина изображения
                            height={561} // Высота изображения
                    />
                  <div className="absolute w-[40%] top-[75%] left-[-28%]">
                      <Image className="w-full h-auto  z-10"
                                src='/images/newzub.png' // Путь к изображению из папки public
                                alt="altText"
                                 // Текст для описания изображения
                                width={216} // Ширина изображения
                                height={216} // Высота изображения
                        />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SecondBlock;
