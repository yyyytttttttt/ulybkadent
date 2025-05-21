import React from 'react'
import Layout from '../../layouts/Layout'
import Image from 'next/image'
import Stat from '../components/News/Stat'
import Head from 'next/head'
export async function generateMetadata() {
    return {
      title: "Блог Улыбка | Стоматология Улыбка в Балашихе",
      description:
        "Читайте полезные советы по уходу за полостью рта, узнавайте о современных методах лечения и новостях клиники Улыбка.",
      keywords: [
        "стоматология",
        "новости стоматологии",
        "уход за зубами",
        "лечение зубов",
        "стоматолог Балашиха",
        "чистка зубов",
        "элайнеры",
        "ортодонтия",
      ],
      robots: "index, follow",
      canonical: "https://ulybkadent.ru/News",
      openGraph: {
        title: "Блог Улыбка | Новости, советы и стоматологические услуги",
        description:
          "Читайте полезные советы по уходу за зубами, узнавайте о современных методах лечения и новостях клиники Улыбка.",
        url: "https://ulybkadent.ru/News",
        type: "website",
        images: [
          {
            url: "https://ulybkadent.ru/images/ssilka.jpeg",
            width: 1200,
            height: 630,
            alt: "Блог стоматологии Улыбка",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Блог Улыбка | Новости, советы и стоматологические услуги",
        description:
          "Читайте полезные советы по уходу за зубами, узнавайте о современных методах лечения и новостях клиники Улыбка.",
        images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
      },
    };
  }
const page = () => {
  return (
    <Layout >
        
        <section>
            <div className='flex flex-col  md:flex-row justify-between mb-[2%]'>
                <div className='flex flex-col w-[100%]  md:w-[55%] justify-between'>
                    <div className=' flex bg-[#293D7A] rounded-[20px]  xs:rounded-[40px] md:rounded-[70px]  items-center justify-center opacity-80 py-[8%] mb-[2%]'>
                
                        <div className='w-[43%]'>
                            <p className='font-sfRegular text-30px-12px text-white'>БЛОГ УЛЫБКА </p>
                            <p className='font-sfLight text-20px-11px text-white'>Здесь вы найдете полезные советы
                            по уходу за полостью рта, узнаете
                            о современных методах лечения, прочитаете интересные истории
                            наших пациентов и будете в курсе
                            всех новостей клиники.
                            Мы стремимся делиться
                            с вами актуальной информацией,
                            чтобы вы могли заботиться
                            о своем здоровье и здоровье
                            своих близких</p>
                        </div>
                        <div className='w-[50%]'>
                            <Image
                                src="/images/blog1.png" // Путь к изображению из папки public
                                alt="us" // Текст для описания изображения
                                width={528} // Ширина изображения
                                height={528}
                                quality={100} // Высота изображения
                            />
                        </div>
                    </div>
                    <div className='px-[6%] bg-[#E8E2CF]  py-[8%] rounded-[20px]  xs:rounded-[40px] md:rounded-[70px] mb-[2%] '>
                        <div className='flex  gap-16 items-center mb-[10%]'>
                            <div className='w-[10%]'>
                                <Image
                                    src="/images/vk-12.png" // Путь к изображению из папки public
                                    alt="us" // Текст для описания изображения
                                    width={134} // Ширина изображения
                                    height={60}
                                    quality={100} // Высота изображения
                                />
                            </div>
                            <p className='font-sfRegular text-[#546495] text-30px-12px '>Улыбка теперь и в ВКонтакте</p>
                
                        </div>
                        <a className='flex w-[100%] justify-center border border-[#546495] font-sfRegular text-16px-11px text-[#546495] py-[1%] bg-inherit hover:bg-[#1F3475] hover:text-white transition duration-500 ' href="https://m.vk.com/ulybkadent">перейти</a>
                    </div>
                </div>
                <div className='w-[100%] md:w-[40%]  flex flex-row md:flex-col  gap-4'>
                            <div className='relative '>
                                <Image
                                    src="/images/blog2.png" // Путь к изображению из папки public
                                    alt="us" // Текст для описания изображения
                                    width={556} // Ширина изображения
                                    height={362}
                                    quality={100} // Высота изображения
                                />
                                <a className='absolute w-[35%] sm:w-[20%] flex justify-center py-[0.1%] xs:py-[0.5%]  text-16px-11px top-[60%] left-[5%] border border-[#1F3475] bg-inherit hover:bg-[#1F3475] hover:text-white transition duration-500 ' href="https://web.telegram.org/a/#-1001736442187">перейти</a>
                            </div>
                            <div className='relative'>
                                <Image
                                    src="/images/blog3.png" // Путь к изображению из папки public
                                    alt="us" // Текст для описания изображения
                                    width={556} // Ширина изображения
                                    height={531}
                                    quality={100} // Высота изображения
                                />
                                <a className='absolute w-[35%] sm:w-[20%] text-[#1F3475] text-16px-11px flex justify-center py-[0.1%] xs:py-[0.5%] top-[56%] left-[55%] border border-[#1F3475] bg-inherit hover:bg-[#1F3475] hover:text-white transition duration-500 ' href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fulybkadent%2F%3Figsh%3DcnRlazY4emVraXZx%26utm_source%3Dqr&is_from_rle">перейти</a>

                            </div>

                </div>

            </div>
            <p className='text-[#1F3475] font-sfLight text-30px-12px text-center mb-[2%]'>Добро пожаловать в Улыбка  NEWS</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-[2%]'>
                <Stat 
                    imageSrc="/images/st.png"
                    Text="Комплексный уход для здоровой улыбки, 
                    как мы заботимся о вашем здоровье" 
                    Text1="Здоровая и красивая улыбка — это не только эстетика, 
                    но и показатель вашего общего здоровья. В стоматологической клинике Улыбка мы предлагаем комплексный уход" 
                    href='/News/smile-care'   
                    
                    
                         
                
                />
                <Stat
                    imageSrc="/images/st1.png"
                    Text="Как работают элайнеры" 
                    Text1="Элайнеры – это современное и удобное решение 
                    для исправления прикуса. Они представляют собой прозрачные капы, которые носятся на зубах и постепенно перемещают 
                    их в нужное положение. Элайнеры являются отличной альтернативой традиционным брекетам" 
                    href='/News/Ilainer'
                
                />
                <Stat
                    imageSrc="/images/st2.png"
                    Text="Поддержите вашу улыбку в идеальной форме" 
                    Text1="Профессиональная чистка — важный шаг для сохранения здоровья зубов и поддержания естественной красоты улыбки." 
                    href='/News/cleaning-care'
                
                />
                <Stat
                     imageSrc="/images/st3.png"
                     Text="Пять советов по уходу за зубами" 
                     Text1="Здоровье зубов и десен — это не только красивая улыбка, но и важная составляющая общего здоровья. Вот пять простых, но эффективных советов, которые помогут
                        вам поддерживать отличное состояние полости рта" 
                        href='/News/top5-tooth-tips'
                
                />
            </div>
            
        </section>
    </Layout>
  )
}

export default page