import Layout from "@/app/layouts/Layout"
import Image from "next/image"
import F from "@/app/components/Team/F"
export async function generateMetadata() {
  return {
    title: "Кузина Татьяна Дмитриевна | Стоматология «Улыбка»  в Балашихе |",
    description:
      "Кузина Татьяна Дмитриевна – врач-стоматолог-ортопед, заместитель главного врача клиники «Улыбка». Запишитесь на приём к опытному специалисту!",
    keywords:
      "стоматолог, Кузина Татьяна Дмитриевна, ортопед, стоматология Улыбка, врач-ортопед, зубное протезирование, Балашиха стоматология",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/doctors/Kuzina",
    openGraph: {
      title: "Кузина Татьяна Дмитриевна | Стоматология «Улыбка» |",
      description:
        "Опытный врач-стоматолог-ортопед. Профессиональное протезирование зубов в стоматологии «Улыбка». Запишитесь на консультацию!",
      url: "https://ulybkadent.ru/doctors/Kuzina",
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
      title: "Кузина Татьяна Дмитриевна | Стоматология «Улыбка» |",
      description:
        "Запишитесь на приём к врачу-стоматологу-ортопеду Кузиной Татьяне Дмитриевне в стоматологии «Улыбка».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}

const page = () => {
  return (
    <Layout >
      <section className="">
        <F
        imageSrc="/images/kz1.png"
        Text1="Кузина Татьяна Дмитриевна" 
        Text2="Врач - стоматолог - ортопед"
        Text3="КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10"
        href="https://reservi.ru/stoma1c/a582f8c5-26ef-456a-9ac4-3ba514b061e7"
        
        
        />
        <div>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          <span>Заместитель главного врача ООО «Улыбка».</span>
          <span>Врач-стоматолог-ортопед.</span>
          <span>1977-1982 гг. Московский медицинский стоматологический институт, стоматологический факультет. Специальность – стоматология.</span>
          <span>1983 г. Интернатура по специальности: «Стоматология ортопедическая».</span>
        </p>
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          <span>1993 г. Повышение квалификации: «Вопросы ортопедической стоматологии».</span>
          <span>1994 г. Ортопедическое лечение больных с использованием металлокерамических протезов.</span>
          <span>1996 г. Актуальные вопросы управления экономики и финансирования стоматологических учреждений в условиях экономической реформы.</span>
          <span>1999 г. Бюгельное протезирование.</span>
          <span>1999 г. Повышение квалификации: «Эндооссальная имплантация».</span>
          <span>1999 г. Повышение квалификации: «Стоматология ортопедическая».</span>
          <span>2003 г. Повышение квалификации: «Актуальные вопросы ортопедической стоматологии».</span>
          <span>2003 г. Практический курс: «Реставрация зубов керамическими вкладками и винирами».</span>
          <span>2004 г. Присвоена высшая квалификационная категория по специальности «Стоматология ортопедическая».</span>
          <span>2008 г. Повышение квалификации: «Ортопедическая стоматология».</span>
          <span>2011 г. Повышение квалификации: «Ортопедическая стоматология».</span>
          <span>2013 г. Повышение квалификации: «Стоматология ортопедическая».</span>
          <span>2017 г. Повышение квалификации: «Ортопедическая стоматология».</span>
          <span>2020 г. Повышение квалификации: «Стоматология ортопедическая».</span>
          <span>2023 г. Повышение квалификации: «Стоматология ортопедическая».</span>
        </p>
       
        <p className="flex flex-col bg-custom-gradient rounded-[5px] py-[4%] px-[4%] font-sfMedium text-20px-11px text-[#184FF8] gap-4 mb-[2%]">
          <span>Опыт работы:</span>
          <span>1983-2020 гг. - Балашихинская стоматологическая поликлиника. Врач-стоматолог ортопед высшей категории.</span>
          <span>1994-2020 гг. Заведующая ортопедическим отделением МУ БСП №1.</span>
          <span>В настоящее время - Заместитель главного врача ООО «Улыбка».</span>
        </p>
       
       

        </div>
      
        
      </section>
    </Layout>
  )
}

export default page