import Layout from "@/app/layouts/Layout"
import Image from "next/image"
import F from "@/app/components/Team/F"
export async function generateMetadata() {
  return {
    title: "Земцова Яна Геннадьевна | Врач-стоматолог-терапевт | Стоматология «Улыбка»  в Балашихе",
    description:
      "Земцова Яна Геннадьевна – опытный врач-стоматолог-терапевт клиники «Улыбка» с многолетним стажем. Специализируется на диагностике и лечении стоматологических заболеваний. Запишитесь на приём онлайн!",
    keywords:
      "Земцова Яна Геннадьевна, стоматолог терапевт, стоматология Улыбка, лечение зубов, Балашиха, стоматологическая клиника",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Zemcova",
    openGraph: {
      title: "Земцова Яна Геннадьевна | Врач-стоматолог-терапевт | Стоматология «Улыбка»",
      description:
        "Запишитесь на приём к врачу-стоматологу-терапевту Земцовой Яне Геннадьевне в стоматологии «Улыбка».",
      url: "https://ulybkadent.ru/doctors/Zemcova",
      type: "profile",
      site_name: "Стоматология «Улыбка»",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/zem.png",
          width: 1200,
          height: 630,
          alt: "Стоматология «Улыбка»",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Земцова Яна Геннадьевна | Врач-стоматолог-терапевт | Стоматология «Улыбка»",
      description:
        "Опытный врач-стоматолог терапевт с многолетним стажем. Запишитесь на приём в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/zem.png"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/zem.png"
        Text1="Земцова Яна Геннадьевна" 
        Text2="Врач- стоматолог- терапевт"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>1993 г. Московский медицинский стоматологический институт им. Н.А. Семашко. Специальность стоматология</span>
            <span>2001 г. Повышение квалификации «Терапевтическая стоматология» РМАПО Москва</span>
            <span>2006 г. Профессиональная переподготовка «Терапевтическая стоматология и пародонтология» МГМСУ им. А.И. Евдокимова г. Москва</span>
            <span>2012 г. Повышение квалификации «Актуальные вопросы терапевтической стоматологии» МГМСУ им. А.И. Евдокимова г. Москва</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2012 г. Присвоена Первая квалификационная категория</span>
            <span>2017 г. Профессиональная переподготовка на факультете повышения квалификации медицинских работников Медицинского института РУДН по программе дополнительного профессионального образования «Стоматология терапевтическая»</span>
            <span>2020 г. Повышение квалификации «Стоматология терапевтическая»</span>
            <span>Сибирский институт непрерывного медицинского образования</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>1993-1994 гг. - врач-интерн</span>
            <span>1994-2001 гг. - врач-стоматолог-терапевт МУ ВАО 172</span>
            <span>2001-2013 гг. - врач-стоматолог-терапевт МУ БСП</span>
            <span>2009 г. - по настоящее время - врач-стоматолог-терапевт ООО «Улыбка»</span>
                
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page