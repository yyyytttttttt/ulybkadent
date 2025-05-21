import Layout from "../../layouts/Layout";
import F from "../../components/Team/F";

export async function generateMetadata() {
  return {
    title: "Добрянцева Елена Игоревна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Добрянцева Елена Игоревна – зубной врач клиники «Улыбка». Квалифицированный специалист с многолетним опытом. Запишитесь на приём!",
    keywords:
      "стоматолог, Добрянцева Елена Игоревна, зубной врач, стоматология Улыбка, Балашиха стоматология, лечение зубов",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/dobrinceva",
    openGraph: {
      title: "Добрянцева Елена Игоревна | Стоматология «Улыбка» |",
      description:
        "Опытный зубной врач клиники «Улыбка». Профессиональное лечение зубов. Запишитесь на приём!",
      url: "https://ulybkadent.ru/doctors/dobrinceva",
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
      title: "Добрянцева Елена Игоревна | Стоматология «Улыбка» |",
      description:
        "Опытный зубной врач. Профессиональное лечение зубов в стоматологии «Улыбка». Запишитесь на консультацию!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/dobr.png"
        Text1="Добрянцева Елена Игоревна" 
        Text2="Зубной врач"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>1981-1984 гг. Якутское медицинское училище им. С. Орджоникидзе</span>
            <span>2006 г. Повышение квалификации «Стоматологическая помощь населению»</span>
            <span>2011 г. Повышение квалификации «Инфекционный контроль. Инфекционная безопасность»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2016 г. Повышение квалификации «Медицина катастроф. Неотложные состояния»</span>
            <span>2016 г. Сертификат № 16-701 по специальности «Стоматология»</span>
            <span>2020 г. Повышение квалификации «Стоматология. Стоматологическая помощь населению»</span>
            <span>2021 г. Повышение квалификации «Актуальные вопросы профилактики, диагностики и лечения коронавирусной инфекции (COVID-19)»</span>
            <span>2023 г. Повышение квалификации «Стоматологическая помощь населению»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>1984-1999 гг. "Детская стоматологическая поликлиника г. Якутск"</span>
            <span>1999-2006 гг. МУ БСП № 1</span>
            <span>2006 г. - по настоящее время - ООО "Улыбка"</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page