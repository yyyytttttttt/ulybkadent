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
            <span>1987-1992 гг. - Хабаровский государственный медицинский институт</span>
            <span>1995 г. - цикл специализации по хирургической стоматологии в ХГМИ, факультет усовершенствования</span>
            <span>1999 г. - Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова - повышение квалификации, сертификационный курс</span>
            <span>2011 г. - РУДН - сертификационный курс</span>
            <span>2017 г. - Академия инновационной стоматологии г. Москвы - сертификационный курс</span>
            <span>2022 г. - Академия инновационной стоматологии г. Москвы - сертификационный курс</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>1992-1997 гг. - врач-стоматолог в/ч 2573</span>
            <span>1998-1999 гг. - ПКИЧП "ВЕЛЕМ"</span>
            <span>1999-2000 гг. - ООО "Стоматологическая фирма "Тип-топ"</span>
            <span>2000-2002 гг. - ООО НПЦ "Престиж"</span>
            <span>2002-2004 гг. - ООО "ЮИ-Дент"</span>
            <span>2004 г. - настоящее время - ООО "Частный Дантист и Коллеги"</span>
            <span>2021 г. - настоящее время - ООО "Улыбка"</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page