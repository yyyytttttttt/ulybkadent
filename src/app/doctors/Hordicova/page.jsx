import Layout from "@/app/layouts/Layout";
import F from "@/app/components/Team/F";

export async function generateMetadata() {
  return {
    title: "Хордыкова Людмила Васильевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Хордыкова Людмила Васильевна – зубной врач в стоматологии «Улыбка». Обладает многолетним опытом в терапевтической стоматологии. Запишитесь на консультацию!",
    keywords:
      "стоматолог, Хордыкова Людмила Васильевна, зубной врач, стоматология Улыбка, терапевтическая стоматология, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Hordicova",
    openGraph: {
      title: "Хордыкова Людмила Васильевна | Стоматология «Улыбка» |",
      description:
        "Опытный зубной врач с многолетней практикой. Профессиональное лечение зубов в стоматологии «Улыбка». Запишитесь на приём!",
      url: "https://ulybkadent.ru/doctors/Hordicova",
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
      title: "Хордыкова Людмила Васильевна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к зубному врачу Хордыковой Людмиле Васильевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/hr.png"
        Text1="Хордыкова Людмила Васильевна" 
        Text2="Зубной врач"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>1986-1989 гг. Костромское медицинское училище</span>
            <span>Специальность – зубоврачебная</span>
            <span>Квалификация – зубной врач</span>
            <span>1996 г. Повышение квалификации «Терапевтическая стоматология»</span>
            <span>1999 г. Повышение квалификации «Стоматология терапевтическая»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2003 г. Повышение квалификации «Стоматология»</span>
            <span>2008 г. Повышение квалификации «Стоматология»</span>
            <span>2008 г. Цикл практических занятий по теме «Микропротезирование»</span>
            <span>2008 г. Цикл по теме «Определение и воссоздание цвета в эстетической стоматологии»</span>
            <span>2013 г. Повышение квалификации «Стоматологическая помощь населению»</span>
            <span>2018 г. Повышение квалификации «Стоматология»</span>
            <span>2020 г. Повышение квалификации «Стоматологическая помощь населению»</span>
            <span>2021 г. Повышение квалификации «Актуальные вопросы профилактики, диагностики и лечения коронавирусной инфекции (COVID-19)»</span>
            <span>2021 г. Цикл «Интенсивный обучающий практический курс по моделированию и реставрации дистальной группы зубов»</span>
            <span>2023 г. Обучающий цикл по эндодонтическому лечению «Прокачай своё эндо»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Опыт работы:</span>
            <span>1989-2009 гг. - МУ БСП №1</span>
            <span>2009 г. - по настоящее время - ООО "Улыбка"</span>
        </p>
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page