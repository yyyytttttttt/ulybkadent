import React from 'react'
import Image from 'next/image'

const ImgBlock = () => {
  return (
    <section className='flex flex-col xs:flex-row justify-between mb-[2%] '>
        <div className='w-[100%] xs:w-[47.9%] flex flex-col gap-1'>
            <Image className="w-[100%]"
                    src="/images/imgBlock1.png" // Путь к изображению из папки public
                    alt="altText"
                     // Текст для описания изображения
                    width={671} // Ширина изображения
                    height={474}
                    quality={100} // Высота изображения
            />
            <Image className=""
                    src="/images/imgBlock2.png" // Путь к изображению из папки public
                    alt="altText"
                     // Текст для описания изображения
                    width={671} // Ширина изображения
                    height={354}
                    quality={100} // Высота изображения
            />
            <Image className=""
                    src="/images/imgBlock3.png" // Путь к изображению из папки public
                    alt="altText"
                     // Текст для описания изображения
                    width={671} // Ширина изображения
                    height={354}
                    quality={100} // Высота изображения
            />
        </div>
        <div className='w-[100%] xs:w-[51.5%] flex flex-col gap-1'>
            <Image className=""
                    src="/images/imgBlock7.png" // Путь к изображению из папки public
                    alt="altText"
                     // Текст для описания изображения
                    width={722} // Ширина изображения
                    height={509}
                    quality={100} // Высота изображения
            />
            <Image className=""
                    src="/images/imgBlock5.png" // Путь к изображению из папки public
                    alt="altText"
                     // Текст для описания изображения
                    width={724} // Ширина изображения
                    height={354}
                    quality={100} // Высота изображения
            />
            <Image className=""
                    src="/images/imgBlock6.png" // Путь к изображению из папки public
                    alt="altText"
                     // Текст для описания изображения
                    width={724} // Ширина изображения
                    height={354}
                    quality={100} // Высота изображения
            />
        </div>
       
    </section>
  )
}

export default ImgBlock