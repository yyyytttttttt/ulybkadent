import Layout from "../../layouts/Layout"
import Image from "next/image"
import F from "../../components/Team/F"
export async function generateMetadata() {
  return {
    title: "Павлова Мария Михайловна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Павлова Мария Михайловна – врач-стоматолог-пародонтолог клиники «Улыбка». Специализируется на лечении заболеваний пародонта. Запишитесь на приём!",
    keywords:
      "стоматолог, Павлова Мария Михайловна, пародонтолог, стоматология Улыбка, врач-стоматолог, лечение десен, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Pavlova",
    openGraph: {
      title: "Павлова Мария Михайловна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-стоматолог-пародонтолог. Лечение и профилактика заболеваний пародонта в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Pavlova",
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
      title: "Павлова Мария Михайловна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу-пародонтологу Павловой Марии Михайловне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/pavlova-lic.png"
        Text1="Павлова Мария Михайловна" 
        Text2="Врач-стоматолог пародонтолог"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2017–2021 гг. Московский государственный медико-стоматологический университет им. А.И. Евдокимова, стоматологический факультет. Специальность: врач-стоматолог</span>
            <span>2021–2023 гг. Ординатура по специальности: «Хирургическая стоматология»</span>
            <span>2023 г. Профессиональная переподготовка: «Хирургическая пародонтология»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Опыт работы:</span>
            <span>2020 г. - по настоящее время Врач–стоматолог хирург ООО «Филигранно»</span>
            <span>2022 г. - по настоящее время Врач–стоматолог ООО «СтомГарден»</span>
            <span>2023 г. - по настоящее время Врач–стоматолог пародонтолог ООО «Улыбка»</span>
        </p>
       
        
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page