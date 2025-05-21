import Image from "next/image"

const F = ({imageSrc,href,Text1,Text2,Text3}) => {
  return (
    <div className="flex justify-end relative mb-[4%] md:h-auto">
            <div className="w-[65%] md:w-[55%]">
              <Image className="w-[100%] rounded-[20px] xs:rounded-[40px] md:rounded-[70px]"
                  src={imageSrc} // Путь к изображению из папки public
                  alt="altText"
                  // Текст для описания изображения
                  width={701} // Ширина изображения
                  height={1056}
                  quality={100}  // Высота изображения
              />
            </div>
            <div className="absolute left-1  top-[30%] flex flex-col " >
               
                <a href={href} 
                  className="text-[#1F3475] border  border-[#1F3475] py-[2%] mb-[4%] text-30px-12px w-[25%] flex items-center justify-center rounded-[7px] transition duration-500 ease-in-out hover:bg-[#1F3475] hover:text-white"
                  >
                    Записаться
                 </a>

                <p className="font-novoposelensky text-42px-16px text-[#184FF8] w-[80%] mb-[4%]">{Text1}</p>
                <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[1%]">{Text2}</p>
                <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[1%]">{Text3}</p>
                
            </div>
        </div>
  )
}

export default F