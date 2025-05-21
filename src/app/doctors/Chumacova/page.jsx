import Layout from "../../layouts/Layout";
import F from "../../components/Team/F";

export async function generateMetadata() {
  return {
    title: "Чумакова Ирина Васильевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Чумакова Ирина Васильевна – врач-ортодонт клиники «Улыбка» с многолетним опытом. Профессиональное лечение зубочелюстных аномалий. Запишитесь на консультацию!",
    keywords:
      "ортодонт, Чумакова Ирина Васильевна, стоматология Улыбка, брекеты, исправление прикуса, лечение зубов, ортодонтическое лечение Балашиха",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Chumacova",
    openGraph: {
      title: "Чумакова Ирина Васильевна | Стоматология «Улыбка» |",
      description:
        "Врач-ортодонт с многолетним стажем. Исправление прикуса, установка брекетов и кап. Консультация в стоматологии «Улыбка»!",
      url: "https://ulybkadent.ru/doctors/Chumacova",
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
      title: "Чумакова Ирина Васильевна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-ортодонт. Исправление прикуса, брекеты, капы. Запишитесь на консультацию в клинику «Улыбка»!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/cm.png"
        Text1="Чумакова Ирина Васильевна" 
        Text2="Врач-ортодонт"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>1979-1985 гг. Московский Медицинский Стоматологический институт</span>
            <span>1985-1986 гг. Интернатура по специальности терапевтическая стоматология</span>
            <span>1986-1987 гг. Стоматологическая поликлиника г. Балашихи. Стоматолог-терапевт</span>
            <span>1987 г. Специализация по ортодонтии</span>
            <span>1992 г. Специализация врач стоматолог ортодонт ФУС НПО Стоматология, г. Москва</span>
            <span>1998 г. Повышение квалификации по функциональным методам лечения зубочелюстных аномалий</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>1999 г. Моники стоматология усовершенствования</span>
            <span>2003 г. Повышение квалификации «Ортодонтия»</span>
            <span>2007 г. Повышение квалификации «Ортодонтия»</span>
            <span>2008 г. Повышение квалификации общей практики</span>
            <span>2008 г. Практический курс по самолигирующимся брекетам</span>
            <span>2011 г. Семинар «Основы лингвальной ортодонтии»</span>
            <span>2012 г. Квалификационная степень I (первая)</span>
            <span>2012 г. Повышение квалификации «Ортодонтия»</span>
            <span>2016 г. Квалификационная категория – высшая</span>
            <span>2017 г. Повышение квалификации «Ортодонтия»</span>
            <span>2020 г. Повышение квалификации «Ортодонтия»</span>
            <span>2022 г. Повышение квалификации по профилактике COVID-19</span>
            <span>2022 г. Повышение квалификации «Инфекционная безопасность и профилактика СМП в медицинской организации»</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Опыт работы:</span>
            <span>1985-2022 гг. - Врач-ортодонт ГАУЗ МО БСП №1</span>
            <span>1992 г. - по настоящее время - Врач-ортодонт ООО «Улыбка»</span>
        </p>
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page