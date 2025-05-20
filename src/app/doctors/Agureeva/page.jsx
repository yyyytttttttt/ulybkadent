import Layout from "@/app/layouts/Layout";
import F from "@/app/components/Team/F";

export async function generateMetadata() {
  return {
    title: " Агуреева Лариса Николаевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Агуреева Лариса Николаевна – врач-стоматолог-ортопед клиники «Улыбка» с многолетним опытом. Запишитесь на приём к специалисту!",
    keywords:
      "стоматолог, Агуреева Лариса Николаевна, ортопед, стоматология Улыбка, врач-ортопед, зубное протезирование, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Agureeva",
    openGraph: {
      title: "Стоматология «Улыбка» | Агуреева Лариса Николаевна",
      description:
        "Опытный врач-стоматолог-ортопед. Профессиональное протезирование зубов в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Agureeva",
      type: "profile",
      site_name: "Стоматология Улыбка",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Агуреева Лариса Николаевна – стоматолог-ортопед",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Стоматология «Улыбка» | Агуреева Лариса Николаевна",
      description:
        "Запишитесь на приём к врачу-стоматологу-ортопеду Агуреевой Ларисе Николаевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      
      <section className="">
        <F
        imageSrc="/images/ag.png"
        Text1="Агуреева Лариса
        Николаевна" 
        Text2="Врач - стоматолог - ортопед"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          <span>Врач-стоматолог-ортопед.</span>
          <span>1980-1985 гг. Московский медицинский стоматологический институт им. Н. А. Семашко. </span>
          <span> Стоматологический факультет. Специальность: Врач стоматолог.</span>
          <span>1985-1986 гг. Врач-стоматолог-ортопед, интернатура в Реутовской стоматологической поликлинике.</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          <span>2002 г. Профессиональная переподготовка: “стоматология терапевтическая”.</span>
          <span>2020 г. Повышение квалификации по программе стоматология ортопедическая.</span>
          <span>2023 г. Повышение квалификации по программе стоматология ортопедическая.</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          <span>Опыт работы:</span>
          <span>1987-2021 гг. - Врач-стоматолог-ортопед в МУ БСП №1</span>
          <span>2022 г. - по настоящее время - Врач-стоматолог-ортопед в ООО «Улыбка»</span>
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page