import Layout from "@/app/layouts/Layout";
import F from "@/app/components/Team/F";

export async function generateMetadata() {
  return {
    title: "Капустина Мария Владимировна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Капустина Мария Владимировна – врач-ортодонт клиники «Улыбка». Современные методики исправления прикуса. Запишитесь на консультацию!",
    keywords:
      "ортодонт, Капустина Мария Владимировна, стоматолог-ортодонт, исправление прикуса, брекеты, элайнеры, стоматология Улыбка, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Kapustina",
    openGraph: {
      title: "Капустина Мария Владимировна | Стоматология «Улыбка» |",
      description:
        "Современные методики исправления прикуса у детей и взрослых. Консультация врача-ортодонта в стоматологии «Улыбка». Запишитесь на приём!",
      url: "https://ulybkadent.ru/doctors/Kapustina",
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
      title: "Капустина Мария Владимировна | Стоматология «Улыбка» |",
      description:
        "Исправление прикуса и современные ортодонтические решения. Запишитесь на консультацию к Капустиной Марии Владимировне!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}

const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/cp.png"
        Text1="Капустина Мария Владимировна" 
        Text2="Врач–ортодонт"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>2016-2021 гг. Московский государственный медико-стоматологический университет, медицинский факультет, специальность Стоматология. 2021-2023 гг. МОСКОВСКИЙ ОБЛАСТНОЙ НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ КЛИНИЧЕСКЙ ИНСТИТУТ им М.Ф. ВЛАДИМИРСКОГО, специальность Ортодонтия.</span>
        </p>
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page