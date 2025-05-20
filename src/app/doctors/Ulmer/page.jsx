import Layout from "@/app/layouts/Layout"
import Image from "next/image"
import F from "@/app/components/Team/F"
export async function generateMetadata() {
  return {
    title: "Ульмер Елена Алексеевна | Гигиенист стоматологический в стоматологии «Улыбка»  в Балашихе |",
    description:
      "Ульмер Елена Алексеевна – профессиональный гигиенист стоматологический клиники «Улыбка». Профессиональная чистка зубов, профилактика кариеса. Запишитесь на приём!",
    keywords:
      "гигиенист стоматологический, Ульмер Елена Алексеевна, стоматология Улыбка, профессиональная гигиена зубов, профилактика кариеса, стоматология Балашиха",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Ulmer",
    openGraph: {
      title: "Ульмер Елена Алексеевна | Гигиенист стоматологический в стоматологии «Улыбка» |",
      description:
        "Профессиональная гигиена полости рта, удаление налёта и профилактика заболеваний зубов. Запишитесь на приём к Ульмер Елене Алексеевне в стоматологии «Улыбка».",
      url: "https://ulybkadent.ru/doctors/Ulmer",
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
      title: "Ульмер Елена Алексеевна | Гигиенист стоматологический в стоматологии «Улыбка» |",
      description:
        "Запишитесь на профессиональную чистку зубов к Ульмер Елене Алексеевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/ul.png"
        Text1="Ульмер Елена Алексеевна" 
        Text2="Гигиенист стоматологический"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2002-2007 гг. Московское медицинское училище №12, специальность «Сестринское дело»</span>
            <span>2012 г. Повышение квалификации «Сестринское дело в стоматологии»</span>
            <span>2011-2014 гг. «Российский Новый Университет». Психолог, преподаватель психологии</span>
            <span>2017 г. Повышение квалификации «Сестринское дело в стоматологии»</span>
            <span>2019-2020 гг. Стоматологический колледж №1, специальность «Стоматология профилактическая», квалификация «Гигиенист стоматологический»</span>
            <span>2021 г. Аккредитация специалиста. Специальность «Стоматология профилактическая»</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Опыт работы:</span>
            <span>2008-2021 гг. ГАУЗ МО БСП №1. Медицинская сестра</span>
            <span>2021 г. - настоящее время. Гигиенист стоматологический ООО «Улыбка»</span>
        </p>
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page