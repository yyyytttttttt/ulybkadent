import Image from "next/image";

const Loc3 = ({Text,imageSrc,Text2,Text3,href}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-[#BDB295] py-[8%] xs:py-[4%] px-[4%] rounded-t-[20px] md:rounded-t-[40px] h-full">
        <div className="flex justify-between mb-[6%]">
          <div>
            <p className="font-sfRegular text-white text-30px-12px mb-[6%]">{Text}</p>
           
          </div>
          <div className="w-[35%]">
            <Image
              className="w-full"
              src={imageSrc} // Путь к изображению из папки public
              alt="us" // Текст для описания изображения
              width={172} // Ширина изображения
              height={133} // Высота изображения
            />
          </div>
        </div>

        <p className="font-sfLight text-20px-11px text-white">
          {Text2}
        </p>
      </div>
      <a href={href}
        className="bg-[#E8E2CF] text-black py-[3%] transition-colors duration-300 hover:text-[#1F3475] w-full rounded-b-[20px]  md:rounded-b-[40px] flex items-center justify-center"
      >
        {Text3}
      </a>
    </div>
  );
};

export default Loc3;
