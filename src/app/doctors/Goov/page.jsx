import Layout from "../../layouts/Layout";
import F from "../../components/Team/F";
import BeforeAfterGallery from "../../components/BeforeAfterGallery";

export async function generateMetadata() {
  return {
    title: "Гоов Мурат Артурович | Стоматология «Улыбка» в Балашихе |",
    description:
      "Гоов Мурат Артурович – стоматолог-ортопед клиники «Улыбка» с многолетним опытом. Протезирование зубов, виниры, коронки. Запишитесь на приём к специалисту!",
    keywords:
      "стоматолог, Гоов Мурат Артурович, стоматолог-ортопед, стоматология Улыбка, протезирование зубов, виниры, коронки, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Goov",
    openGraph: {
      title: "Гоов Мурат Артурович | Стоматология «Улыбка» |",
      description:
        "Опытный стоматолог-ортопед. Профессиональное протезирование зубов, установка виниров и коронок в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Goov",
      type: "profile",
      site_name: "Стоматология «Улыбка»",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Стоматология «Улыбка»",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Гоов Мурат Артурович | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к стоматологу-ортопеду Гоову Мурату Артуровичу в стоматологии «Улыбка». Протезирование, виниры, коронки.",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/un.png"
        Text1="Гоов Мурат Артурович" 
        Text2="Cтоматолог - ортопед"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span className=" text-[clamp(1rem,0.7143rem+1.4286vw,2rem)]">Образование и квалификация</span>
           <span>
               2019 г. Кабардино-Балкарский государственный университет им. Х.М. Бербекова" г.Нальчик
                Специальность: Стоматология
           </span>
            <span>
                2021 г. Ординатура по специальности:  стоматология ортопедическая
                «Ставропольский государственный медицинский университет» Министерства здравоохранения Российской Федерации города Ставрополь
            </span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span className=" text-[clamp(1rem,0.7143rem+1.4286vw,2rem)]">Сертификаты</span>
                <span>2024 г. Участник курса «AURUM BRAIN DENTAL SESSION 41»</span>
                <span>2024 г. Участник курса «Краткий курс по применению миографа, энцефалографа и депрограмматора U-dent»</span>
                <span>2024 г. Участник семинара «Протокол фиксации керамических и циркониевых реставраций. Композитные цементы.»</span>
                <span>2024 г. Участник курса «Протезирование на имплантатах. Продвинутый уровень.</span>
                <span>2024 г. Участник курса «Продвинутая гнатология»</span>
                <span>
                    2024 г. Введение в гнатологию. Анатомо-функциональный
                    анализ придіявлении симптоматики
                    или торальном протезировании
                </span>
                <span>
                    2025 г. Реставрация боковой афупы зубов
                    Ehamel Bio function. Работа с красками
                </span>
                <span>
                    2025 г. ВНЧС. От А до Я.
                    PRODOCTOROV.
                    КЛКТ и МРТ: все, что необходимо знать
                </span>
                <span>2025 г. Участник курса «Малоинвназивная эстетическая реабилитация зубов. Восстановление фронтальных зубов.» Enamel Plus.</span>
                <span>2025 г. Участник курса «AURUM BRAIN DENTAL SESSION 42»</span>
        </p>

        <BeforeAfterGallery
          title="Работы по установке виниров"
          items={[
            {
              id: "1",
              before: { src: "/images/before111.png", alt: "Зубы до установки виниров" },
              after: { src: "/images/after111.png", alt: "Зубы после установки виниров" },
              caption: "",
              initial: 50
            },
            {
              id: "2",
              before: { src: "/images/before222.png", alt: "Зубы до реставрации" },
              after: { src: "/images/after222.png", alt: "Зубы после реставрации" },
              caption: "",
              initial: 50
            },
            {
              id: "3",
              before: { src: "/images/before333.png", alt: "Улыбка до коррекции" },
              after: { src: "/images/after333.png", alt: "Улыбка после коррекции" },
              caption: "",
              initial: 50
            },
            {
              id: "4",
              single: { src: "/images/after444.png", alt: "Результат работы ортопеда" },
              caption: ""
            }
          ]}
          columns={{ base: 1, md: 2 }}
          aspectRatio="4/3"
          rounded="2xl"
          gap="6"
          showCaption={true}
        />




        </div>
      
        
      </section>
    </Layout>
  )
}

export default page