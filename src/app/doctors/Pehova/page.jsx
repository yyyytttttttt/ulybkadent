import Layout from "../../layouts/Layout"
import Image from "next/image"
import F from "../../components/Team/F"
export async function generateMetadata() {
  return {
    title: "Пехова Надежда Николаевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Пехова Надежда Николаевна – врач-ортодонт клиники «Улыбка». Специализируется на исправлении прикуса и ортодонтическом лечении. Запишитесь на приём!",
    keywords:
      "стоматолог, Пехова Надежда Николаевна, ортодонт, исправление прикуса, брекеты, элайнеры, стоматология Улыбка, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Pehova",
    openGraph: {
      title: "Пехова Надежда Николаевна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-ортодонт. Исправление прикуса, брекет-системы и элайнеры в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Pehova",
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
      title: "Пехова Надежда Николаевна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-ортодонту Пеховой Надежде Николаевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/pe.png"
        Text1="Пехова Надежда
        Николаевна" 
        Text2="Врач - ортодонт"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Московский медицинский стоматологический институт в 1978 г.</span>
        </p>
        


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page