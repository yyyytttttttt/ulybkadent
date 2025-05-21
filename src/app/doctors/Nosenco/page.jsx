import Layout from "../../layouts/Layout"
import Image from "next/image"
import F from "../../components/Team/F"
export async function generateMetadata() {
  return {
    title: "Носенко Светлана Васильевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Носенко Светлана Васильевна – врач-стоматолог-ортопед клиники «Улыбка». Специализируется на ортопедическом лечении зубов. Запишитесь на приём!",
    keywords:
      "стоматолог, Носенко Светлана Васильевна, ортопед, стоматология Улыбка, врач-ортопед, зубное протезирование, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Nosenco",
    openGraph: {
      title: "Носенко Светлана Васильевна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-стоматолог-ортопед. Профессиональное протезирование зубов в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Nosenco",
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
      title: "Носенко Светлана Васильевна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу-ортопеду Носенко Светлане Васильевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/ns.png"
        Text1="Носенко Светлана Васильевна" 
        Text2="Врач- стоматолог-ортопед"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2001-2004 гг. Ульяновский базовый медицинский колледж по специальности «зубной врач»</span>
            <span>2009 г. Повышение квалификации «Современные методы обследования стоматологического больного»</span>
            <span>2005-2011 гг. Самарский государственный медицинский университет по специальности «Стоматология»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2011-2012 гг. Интернатура по специальности «Стоматология общей практики»</span>
            <span>2012 г. Профессиональная подготовка «Стоматология ортопедическая»</span>
            <span>2017 г. Повышение квалификации по программе «Стоматология ортопедическая»</span>
            <span>2021 г. Повышение квалификации по программе «Актуальные вопросы специальности «Стоматология ортопедическая»</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Опыт работы:</span>
            <span>2005-2011 гг. Зубной врач ООО «Альфадент», г. Ульяновск</span>
            <span>2011-2012 гг. Врач-стоматолог ООО «Альфадент», г. Ульяновск</span>
            <span>2013 г. - по настоящее время - ООО «Улыбка»</span>
        </p>
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page