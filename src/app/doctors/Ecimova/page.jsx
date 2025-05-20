import Layout from "@/app/layouts/Layout";
import F from "@/app/components/Team/F";

export async function generateMetadata() {
  return {
    title: "Екимова Ольга Васильевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Екимова Ольга Васильевна – врач-стоматолог-ортопед первой категории. Член Московской областной Ассоциации стоматологов. Запишитесь на приём!",
    keywords:
      "стоматолог, Екимова Ольга Васильевна, ортопед, стоматология Улыбка, врач-ортопед, зубное протезирование, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Ecimova",
    openGraph: {
      title: "Екимова Ольга Васильевна | Стоматология «Улыбка» |",
      description:
        "Врач-стоматолог-ортопед первой категории. Член Московской областной Ассоциации стоматологов. Профессиональное протезирование зубов в клинике «Улыбка».",
      url: "https://ulybkadent.ru/doctors/Ecimova",
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
      title: "Екимова Ольга Васильевна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу-ортопеду первой категории Екимовой Ольге Васильевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}

const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/ec1.png"
        Text1="Екимова Ольга Васильевна" 
        Text2="Врач- стоматолог- ортопед"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Стоматолог-ортопед первой категории. Окончила Читинскую государственную медицинскую академию в 2004 году.</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Член РОО «Московская областная Ассоциация стоматологов и челюстно-лицевых хирургов»(СтАР)</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page