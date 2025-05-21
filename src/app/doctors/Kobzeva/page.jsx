import Layout from "../../layouts/Layout";
import F from "../../components/Team/F";

export async function generateMetadata() {
  return {
    title: "Кобзева Жанна Алексеевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Кобзева Жанна Алексеевна – детский врач-стоматолог в клинике «Улыбка». Забота о здоровье зубов детей с раннего возраста. Запишитесь на консультацию!",
    keywords:
      "детский стоматолог, Кобзева Жанна Алексеевна, стоматология для детей, лечение кариеса у детей, стоматология Улыбка, Балашиха стоматология, профилактика кариеса у детей",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Kobzeva",
    openGraph: {
      title: "Кобзева Жанна Алексеевна | Стоматология «Улыбка» |",
      description:
        "Детский стоматолог Кобзева Жанна Алексеевна. Безболезненное лечение зубов у детей в стоматологии «Улыбка». Запишитесь на приём!",
      url: "https://ulybkadent.ru/doctors/Kobzeva",
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
      title: "Кобзева Жанна Алексеевна | Стоматология «Улыбка» |",
      description:
        "Профессиональный детский стоматолог. Лечение и профилактика кариеса у детей в стоматологии «Улыбка». Запишитесь на приём!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}


const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/kob.png"
        Text1="Кобзева Жанна Алексеевна" 
        Text2="Детский врач"
        Text3="КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9"
        href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Детский врач.</span>
            <span>2007-2011 гг. ГМОУ «Московский областной медицинский колледж». Специальность: «Стоматология».</span>
            <span>2015 г. Повышение квалификации. ГМОУ «Московский областной медицинский колледж №1»; «Стоматология».</span>
            <span>2020 г. Повышение квалификации. ООО «Хорс-Групп» по программе «Стоматология».</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
            <span>Дополнительное образование:</span>
            <span>2014 г. «Современные аспекты лечения кариозной болезни у детей и взрослых». ЗАО «Протеко», Москва.</span>
            <span>2017 г. «Санкт-Петербургский институт стоматологии последипломного образования»; «Школа детской стоматологии».</span>
            <span>2020 г. Вебинар: «Коронки в практике детского стоматолога». Москва, автор Кузнецова Е.В.</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          
            <span>Опыт работы:</span>
            <span>2021 г. «Эстетика в детской стоматологии», Краснодар.</span>
            <span>2021 г. «Лечение пульпитов временных зубов», Москва.</span>
            <span>2022 г. «Зимняя детская стоматологическая конференция REVYLIFE KIDS», Сочи.</span>
            <span>2023 г. «Коронки – элементарно, фронтальная группа временных зубов. Углубленный курс». «BABYDANTIST’S DENTAL SCHOOL», автор курса Крылов А.В., Москва.</span>
            <span>2023 г. «Первый конгресс академии современной детской стоматологии», Москва.</span>
                        
        </p>


        </div>
      
        
      </section>
    </Layout>
  )
}

export default page