import Layout from "../../layouts/Layout";
import F from "../../components/Team/F";

export async function generateMetadata() {
  return {
    title: "Ляшенко Ирина Ивановна | Стоматология «Улыбка» в Балашихе |",
    description:
      "Ляшенко Ирина Ивановна – стоматолог-терапевт клиники «Улыбка» с многолетним опытом. Запишитесь на приём к специалисту!",
    keywords:
      "стоматолог, Ляшенко Ирина Ивановна, стоматолог-терапевт, стоматология Улыбка, лечение зубов, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Lychenko",
    openGraph: {
      title: "Ляшенко Ирина Ивановна | Стоматология «Улыбка» |",
      description:
        "Опытный стоматолог-терапевт. Профессиональное лечение зубов в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Lychenko",
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
      title: "Ляшенко Ирина Ивановна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к стоматологу-терапевту Ляшенко Ирине Ивановне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/un.png"
        Text1="Ляшенко Ирина Ивановна" 
        Text2="Cтоматолог - терапевт"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span className=" text-[clamp(1rem,0.7143rem+1.4286vw,2rem)]">Образование и квалификация</span>
            <span>1976 г. Иркутский государственный медицинский университет. Специальность: Стоматология. </span>
            <span>2012 г. Повышение квалификации: Стоматология терапевтическая.</span>
        </p>
       
        


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page