import Layout from "@/app/layouts/Layout"
import Image from "next/image"
import Block from "@/app/components/Ilainer/Block"
import Block2 from "@/app/components/Ilainer/Block2"
import Block3 from "@/app/components/Ilainer/Block3"
import Head from "next/head"
export async function generateMetadata() {
    return {
      title: "Элайнеры – капы для исправления прикуса | Стоматология Улыбка в Балашихе",
      description:
        "Элайнеры – прозрачные капы для исправления прикуса. Альтернатива брекетам без дискомфорта. Исправление прикуса в клинике «Улыбка».",
      keywords: [
        "элайнеры",
        "исправление прикуса",
        "каппы для зубов",
        "ортодонтия",
        "прозрачные брекеты",
        "клиника Улыбка",
        "элайнеры Балашиха",
        "коррекция зубов без брекетов",
      ],
      robots: "index, follow",
      canonical: "https://ulybkadent.ru/News/Ilainer",
      openGraph: {
        title: "Элайнеры – капы для исправления прикуса | Клиника «Улыбка»",
        description:
          "Современные элайнеры для исправления прикуса. Прозрачные капы – комфортное и эффективное решение вместо брекетов.",
        url: "https://ulybkadent.ru/News/Ilainer",
        type: "website",
        site_name: "Стоматология «Улыбка»",
        locale: "ru_RU",
        images: [
          {
            url: "https://ulybkadent.ru/images/ssilka.jpeg",
            width: 1200,
            height: 630,
            alt: "Элайнеры для исправления прикуса в стоматологии «Улыбка»",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Элайнеры – капы для исправления прикуса | Клиника «Улыбка»",
        description:
          "Ищете альтернативу брекетам? Элайнеры – комфортный способ выровнять зубы. Запишитесь на консультацию в клинике «Улыбка».",
        images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
      },
    };
  }
const page = () => {
  return (
    <Layout>
       
        <section>
            <div>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-[2%]">
                    <div className="w-[100%] xs:w-[80%] sm:w-[55%] flex flex-col justify-center gap-8 sm:gap-16">
                        <p className="font-sfMedium text-30px-12px text-[#293D7A]">Капы для исправления прикуса (Элайнеры)</p>
                        <p className="font-sfLight text-20px-11px text-[#293D7A]">Элайнеры – это современное и удобное решение для исправления прикуса.
                        Они представляют собой прозрачные капы, которые носятся на зубах
                        и постепенно перемещают их в нужное положение. Элайнеры являются отличной альтернативой традиционным брекетам, предлагая множество преимуществ как для подростков, так и для взрослых</p>
                    </div>
                    <div className="w-[60%] xs:w-[40%]">
                        <Image
                                src="/images/il.png" // Путь к изображению из папки public
                                alt="us" // Текст для описания изображения
                                width={669} // Ширина изображения
                                height={657} // Высота изображения
                                quality={100}
                            />
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 mb-[2%]">
                <div className="w-[80%] sm:w-[50%] flex flex-col gap-8">
                    <p className="font-sfMedium text-30px-12px text-[#293D7A] text-center">Как работают элайнеры?</p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A] text-center">Элайнеры работают по принципу постепенного смещения зубов. Пациент носит каждую капу в течение примерно двух недель, после чего заменяет 
                    её на следующую в наборе. Каждый следующий элайнер немного изменяет положение зубов, приближая их к идеальному выравниванию</p>
                </div>
                <div className="w-[40%]">
                    <Image
                                src="/images/il2.png" // Путь к изображению из папки public
                                alt="us" // Текст для описания изображения
                                width={434} // Ширина изображения
                                height={434} // Высота изображения
                                quality={100}
                /></div>
            </div>
            <Block/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-4 md:gap-16 mb-[2%] items-stretch ">
                    <Block2
                    Text="виртуальный 3D план"
                    Text1="2 коррекции 3D плана"
                    Text2="до 30 этапов в плане"
                    Text3="400 000 ₽"
                    
                    />
                    <Block2
                    Text="виртуальный 3D план"
                    Text1="не более 14 этапов"
                    Text2=""
                    Text3="280 000 ₽"
                    
                    />

            </div>
            <Block3/>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="font-sfMedium text-30px-12px text-[#293D7A] w-[90%] text-center">Для поддержания гигиены и эффективности лечения важно правильно ухаживать за элайнерами</p>
                <p className="font-sfLight text-20px-11px text-[#293D7A] w-[80%] sm:w-[40%] text-center">Чистите капы мягкой зубной щеткой и теплой водой ежедневно
                Избегайте горячих напитков и еды с капами
                Храните капы в специальном контейнере, когда не носите их
                </p>
                <div className="w-[40%]">
                    <Image className="w-[100%]"
                                    src="/images/il6.png" // Путь к изображению из папки public
                                    alt="us" // Текст для описания изображения
                                    width={501} // Ширина изображения
                                    height={501} // Высота изображения
                                    quality={100}
                    />
                </div>
            </div>
            <div className="mb-[2%]">
                
                    
                
                    <img
                        src="/images/il13.png"
                        alt="Описание изображения"
                        className="w-full h-auto" // Tailwind классы для адаптивности
                
                        loading="lazy"
                    />
               
            </div>

        </section>
    </Layout>
  )
}

export default page