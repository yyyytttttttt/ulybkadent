import Layout from "../../layouts/Layout"
import Image from "next/image"
import F from "../../components/Team/F"
export async function generateMetadata() {
  return {
    title: "Полякова Наталья Акимовна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Полякова Наталья Акимовна – врач-стоматолог-терапевт клиники «Улыбка». Специализируется на терапевтическом лечении зубов. Запишитесь на приём!",
    keywords:
      "стоматолог, Полякова Наталья Акимовна, терапевт, лечение кариеса, стоматология Улыбка, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Policova",
    openGraph: {
      title: "Полякова Наталья Акимовна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-стоматолог-терапевт. Лечение кариеса, пломбирование и реставрация зубов в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Policova",
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
      title: "Полякова Наталья Акимовна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу-терапевту Поляковой Наталье Акимовне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/pol.png"
        Text1="Полякова Наталья Акимовна" 
        Text2="Врач - стоматолог- терапевт"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>1970-1975 гг. Московский стоматологический институт, стоматолог-терапевт</span>
            <span>1975-1976 гг. Интернатура, г. Оренбург</span>
            <span>2019 г. Повышение квалификации Сертификат 2Ц-63-17962 «Стоматология Терапевтическая»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Дополнительное обучение:</span>
            <span>Сертификат Техника анатомической стратификации с использованием уникальной системы EnamelPlus HFO</span>
            <span>Сертификат Особенности постэндодонтической реставрации зубов NEW</span>
            <span>Сертификат Особенности эстетической реставрации с применением современных материалов компании 3M ESPE</span>
            <span>Сертификат Практические занятия по теме Определение и воссоздание цвета в эстетической стоматологии</span>
            <span>Сертификат Цикл практических занятий по теме Эстетические основы формообразования зубов</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>1976-1999 гг. Балашихинская Стоматологическая поликлиника</span>
            <span>1999-2017 гг. Врач-стоматолог-терапевт в ООО «Эликсир»</span>
            <span>2017 г. - по настоящее время - Врач-стоматолог-терапевт в ООО «Улыбка»</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page