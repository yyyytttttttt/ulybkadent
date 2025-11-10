import Layout from "../../layouts/Layout";
import F from "../../components/Team/F";

export async function generateMetadata() {
  return {
    title: "Гулиев Эльшан Мамедгулович | Стоматология «Улыбка» в Балашихе |",
    description:
      "Гулиев Эльшан Мамедгулович – стоматолог-хирург клиники «Улыбка» с многолетним опытом. Запишитесь на приём к специалисту!",
    keywords:
      "стоматолог, Гулиев Эльшан Мамедгулович, стоматолог-хирург, стоматология Улыбка, хирургическая стоматология, удаление зубов, имплантация, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/guliev",
    openGraph: {
      title: "Гулиев Эльшан Мамедгулович | Стоматология «Улыбка» |",
      description:
        "Опытный стоматолог-хирург. Профессиональная хирургическая стоматология в клинике «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/guliev",
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
      title: "Гулиев Эльшан Мамедгулович | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к стоматологу-хирургу Гулиеву Эльшану Мамедгуловичу в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/un3.png"
        Text1="Гулиев Эльшан Мамедгулович" 
        Text2="Cтоматолог - хирург"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span className=" text-[clamp(1rem,0.7143rem+1.4286vw,2rem)]">Образование и квалификация</span>
            <span>
                1976 г. Московский государственный
                медико стоматологический университет имени А.И Екодокимова
                Министерства здравоохранения Российской Федерации
                Специальность: Стоматология
                Квалификация: Врач-стоматолог
            </span>
            <span>
                2014 г. Присвоена квалификация
                врач (провизор) по направлению подготовки (специальности)
                «Стоматология общей практики»
            </span>
            <span>
                2015 г. Профессиональная переподготовка
                Специальность: Стоматология хирургическая
            </span>
            <span>2020 г. Повышение квалификации: Стоматология хирургическая</span>

        </p>
       
        


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page