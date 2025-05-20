import Layout from "@/app/layouts/Layout";
import F from "@/app/components/Team/F";

export async function generateMetadata() {
  return {
    title: "Богатырева Ирина Вячеславовна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Богатырева Ирина Вячеславовна – врач-стоматолог клиники «Улыбка» с многолетним опытом. Запишитесь на приём к специалисту!",
    keywords:
      "стоматолог, Богатырева Ирина Вячеславовна, стоматология Улыбка, врач-стоматолог, лечение зубов, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Bogatireva",
    openGraph: {
      title: "Богатырева Ирина Вячеславовна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-стоматолог. Современные методы лечения в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Bogatireva",
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
      title: "Богатырева Ирина Вячеславовна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу Богатыревой Ирине Вячеславовне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}

const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/bog.png"
        Text1="Богатырева Ирина Вячеславовна" 
        Text2="Врач - стоматолог"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
        <span>2007-2013 гг. Московский государственный медико-стоматологический университет им. А.И. Евдокимова. Стоматологический факультет. Специальность: врач-стоматолог</span>
        <span>2013-2014 гг. Интернатура по специальности: «Стоматология общей практики»</span>
        <span>2014 г. Профессиональная переподготовка: «Детская стоматология»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2016 г. Повышение квалификации: «Современные методы диагностики, профилактики и лечения кариеса зубов»</span>
            <span>2019 г. Повышение квалификации: «Стоматология общей практики»</span>
            <span>2021 г. Повышение квалификации: «Актуальные вопросы специальности Стоматология общей практики»</span>
            <span>2023 г. Повышение квалификации: «Стоматология общей практики»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>2015-2021 гг. - Врач-стоматолог МУ БСП №1</span>
            <span>2015 г. - по настоящее время - Врач-стоматолог ООО «Улыбка»</span>
                
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page