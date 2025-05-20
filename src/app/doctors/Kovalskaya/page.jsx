import Layout from "@/app/layouts/Layout"
import F from "@/app/components/Team/F"
import Head from "next/head"

export async function generateMetadata() {
  return {
    title: "Ковальская Валентина Станиславовна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Ковальская Валентина Станиславовна – квалифицированный врач-стоматолог-терапевт клиники «Улыбка» с 17-летним опытом. Запишитесь на приём!",
    keywords:
      "стоматолог, Ковальская Валентина Станиславовна, терапевт, стоматология Улыбка, врач-стоматолог, лечение кариеса, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Kovalskaya",
    openGraph: {
      title: "Ковальская Валентина Станиславовна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-стоматолог-терапевт. Современные методы лечения в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Kovalskaya",
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
      title: "Ковальская Валентина Станиславовна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу-терапевту Ковальской Валентине Станиславовне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  }
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/kov2.png"
        Text1="Ковальская Валентина Станиславовна" 
        Text2="Врач- стоматолог-терапевт"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
        Ковальская Валентина Станиславовна – квалифицированный врач-стоматолог 
        с 17-летним опытом работы, специализирующийся на терапевтическом лечении зубов. Окончила Национальный медицинский университет им. О.О. Богомольца (Киев) в 2006 году, после чего прошла интернатуру в Московском государственном медико-стоматологическом университете (МГМСУ), окончив ее в 2007 году.
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            В 2019 году успешно завершила переподготовку по специальности «Стоматология-терапевтическая», что позволило ей еще глубже освоить современные методики лечения и профилактики заболеваний зубов.
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
        <span>💎 Основные направления работы:</span>
            <span>✔️ Профессиональное лечение кариеса и его осложнений</span>
            <span>✔️ Эстетическая реставрация зубов</span>
            <span>✔️ Комплексная диагностика и индивидуальный подход к каждому пациенту</span>
            <span>✔️ Современные методики лечения с применением высококачественных материалов</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
        Ковальская Валентина Станиславовна не только мастер своего дела, но и внимательный, чуткий специалист, который помогает пациентам сохранить здоровье зубов и обрести уверенность в своей улыбке.
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page