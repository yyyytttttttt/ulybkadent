import Image from "next/image"

const F = ({imageSrc,href,Text1,Text2,Text3}) => {
  return (
    <div className="flex flex-row w-full justify-between min-h-[270px]">
      <div className="flex justify-end relative mb-[4%] w-full md:h-auto">
              <div className="w-[65%] md:w-[55%] flex items-center">
                <Image className="w-full rounded-[20px] xs:rounded-[40px] md:rounded-[70px]"
                    src={imageSrc} // Путь к изображению из папки public
                    alt="altText"
                    // Текст для описания изображения
                    width={701} // Ширина изображения
                    height={1056}
                    quality={100}  // Высота изображения
                />
              </div>
              <div className="absolute left-0 top-[20%] sm:top-[30%] flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] pr-2 sm:pr-4">

                  <a href={href}
                    className="text-[#1F3475] border border-[#1F3475] py-2 px-4 text-30px-12px w-fit min-w-[120px] sm:min-w-[140px] flex items-center justify-center rounded-[7px] transition duration-500 ease-in-out hover:bg-[#1F3475] hover:text-white"
                    >
                      Записаться
                   </a>
                  <p className="font-novoposelensky text-42px-16px w-full xs:w-[80%] text-[#184FF8] break-words">{Text1}</p>
                  <p className="font-sfLight text-30px-12px text-[#1F3475]">{Text2}</p>
                  <p className="font-sfLight text-30px-12px text-[#1F3475]">{Text3}</p>

              </div>
          </div>
    </div>
  )
}

export default F