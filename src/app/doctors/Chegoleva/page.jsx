import Layout from "@/app/layouts/Layout";
import F from "@/app/components/Team/F";

export async function generateMetadata() {
  return {
    title: "Щеголева Ксения Валерьевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Щеголева Ксения Валерьевна – гигиенист стоматологический клиники «Улыбка» с многолетним опытом. Запишитесь на приём к специалисту!",
    keywords:
      "стоматолог, Щеголева Ксения Валерьевна, гигиенист стоматологический, стоматология Улыбка, профессиональная гигиена зубов, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Chegoleva",
    openGraph: {
      title: "Щеголева Ксения Валерьевна | Стоматология «Улыбка» |",
      description:
        "Опытный гигиенист стоматологический. Профессиональная гигиена полости рта в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Chegoleva",
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
      title: "Щеголева Ксения Валерьевна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к гигиенисту стоматологическому Щеголевой Ксении Валерьевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/che.png"
        Text1="Щеголева Ксения Валерьевна" 
        Text2="Гигиенист стоматологический"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2002-2006 гг. Государственное образовательное учреждение среднего профессионального образования г. Москвы медицинское училище №12 по специальности: "Сестринское дело".</span>
            <span>2013 г. НОУ – Образовательный центр "Стоматологический колледж №1" по программе профессиональной переподготовки "Стоматология профилактическая".</span>
            <span>2018 г. Повышение квалификации: ОЧУ СПО "Стоматологический колледж №1" по специальности "Стоматология профилактическая".</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>2007-2013 гг. Медицинская сестра МУ БСП №1</span>
            <span>2013-2021 гг. Гигиенист стоматологический МУ БСП №1</span>
            <span>2021 г. – по настоящее время. Гигиенист стоматологический ООО "Улыбка"</span>
            <span>2013 г. – по настоящее время. Член межрегиональной общественной организации "Профессиональное общество гигиенистов стоматологических"</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page