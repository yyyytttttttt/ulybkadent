import React from "react";
import Image from "next/image";

const FirstBlock3 = ({Text,Text2,imageSrc,Text3,Text4,children }) => {
  return (
    <div className="relative bg-[#546495] py-[6%] px-[4%] rounded-lg md:rounded-[48px] mb-[6%]">
      <p className="font-sfMedium text-30px-12px text-white mb-[1%] ">{Text}</p>
      <p className="font-sfLight text-30px-12px text-white  mb-[2%]">
        {Text2}
      </p>
      <p className="font-sfLight text-30px-12px  flex flex-col text-white mb-[1%]">{children }</p>
      <p className="font-sfMedium text-30px-12px text-white mb-[1%]">{Text3}</p>
      <p className="font-sfLight text-30px-12px text-white ">
        {Text4}
      </p>
      
        <div className=" absolute top-[80%] 2xl:top-[60%] right-[-2%] 2xl:left-[-14%] w-[20%]">
          <Image className="w-full h-auto"
                src={imageSrc} // Путь к изображению из папки public
                alt="altText"
                 // Текст для описания изображения
                width={295} // Ширина изображения
                height={294} // Высота изображения
            />
        </div>
     

    </div>
  );
};

export default FirstBlock3;
