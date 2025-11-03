import Layout from "../../layouts/Layout"
import Image from "next/image"
import F from "../../components/Team/F"
export async function generateMetadata() {
  return {
    title: "Жердина Инна Вадимовна | Врач-стоматолог-терапевт | Стоматология «Улыбка»  в Балашихе",
    description:
      "Жердина Инна Вадимовна – врач-стоматолог-терапевт клиники «Улыбка» с богатым опытом работы. Специализируется на лечении стоматологических заболеваний, профилактике и восстановлении зубов. Запишитесь на приём онлайн!",
    keywords:
      "Жердина Инна Вадимовна, стоматолог терапевт, стоматология Улыбка, лечение зубов, Балашиха, стоматологическая клиника",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Zherdina",
    openGraph: {
      title: "Жердина Инна Вадимовна | Врач-стоматолог-терапевт | Стоматология «Улыбка»",
      description:
        "Опытный стоматолог-терапевт Жердина Инна Вадимовна ведёт приём в клинике «Улыбка». Запишитесь онлайн для получения качественного лечения!",
      url: "https://ulybkadent.ru/doctors/Zherdina",
      type: "profile",
      site_name: "Стоматология «Улыбка»",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/zh1.png",
          width: 1200,
          height: 630,
          alt: "Стоматология «Улыбка»",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Жердина Инна Вадимовна | Врач-стоматолог-терапевт | Стоматология «Улыбка»",
      description:
        "Квалифицированный стоматолог-терапевт с многолетним стажем. Запишитесь на приём в клинике «Улыбка»!",
      images: ["https://ulybkadent.ru/images/zh1.png"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/zh1.png"
        Text1="Жердина Инна Вадимовна" 
        Text2="Врач - стоматолог- терапевт"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span className="text-[clamp(1rem,0.7143rem+1.4286vw,2rem)]">Образование и квалификация</span>
            <span>1987-1992 гг. - Хабаровский государственный медицинский институт</span>
            <span>1995 г. - цикл специализации по хирургической стоматологии в ХГМИ, факультет усовершенствования</span>
            <span>1999 г. - Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова - повышение квалификации, сертификационный курс</span>
            <span>2011 г. - РУДН - сертификационный курс</span>
            <span>2017 г. - Академия инновационной стоматологии г. Москвы - сертификационный курс</span>
            <span>2022 г. - Академия инновационной стоматологии г. Москвы - сертификационный курс</span>

            <span>2023 г. Участник Конгресс - Мастер-класс «Сложные случаи в эндодонтии»</span>
            <span>2023 г. Подводные камни реставрации</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span className="text-[clamp(1rem,0.7143rem+1.4286vw,2rem)]">Опыт работы:</span>
            <span>1980-1988 гг. Балашихинская центральная больница</span>
            <span>1988-2016 гг. МУ БСП №1</span>
            <span>1997- по настоящее время. ООО "Улыбка"</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page