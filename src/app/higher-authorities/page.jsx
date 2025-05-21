import Layout from "../layouts/Layout";

export async function generateMetadata() {
  return {
    title: "Контролирующие органы | Стоматология «Улыбка» в Балашихе ",
    description:
      "Информация о контролирующих органах стоматологии «Улыбка» в Балашихе. Росздравнадзор, Минздрав Московской области, Роспотребнадзор – контакты, адреса, телефоны.",
    keywords:
      "контролирующие органы, Росздравнадзор, Минздрав Московской области, Роспотребнадзор, стоматология, Улыбка, проверка лицензии, защита прав потребителей",
    robots: "index, follow",
    alternates: {
      canonical: "https://ulybkadent.ru/higher-authorities",
    },
    openGraph: {
      title: "Стоматология «Улыбка» в Балашихе | Контролирующие органы",
      description:
        "Информация о контролирующих органах стоматологии «Улыбка»: контакты, адреса и телефоны Росздравнадзора, Минздрава и Роспотребнадзора.",
      url: "https://ulybkadent.ru/higher-authorities",
      type: "website",
      site_name: "Стоматология «Улыбка» в Балашихе",
      locale: "ru_RU",
      updated_time: new Date().toISOString(),
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Стоматология «Улыбка» – контролирующие органы",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Стоматология «Улыбка» | Контролирующие органы",
      description:
        "Контролирующие органы стоматологии «Улыбка»: Росздравнадзор, Минздрав МО, Роспотребнадзор. Все контакты на одной странице!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
    themeColor: "#ffffff",
  };
}

const page = () => {
  return (
    <Layout>
       
      <div className="bg-custom-gradient py-[3%] rounded-[7px] mb-[2%]">
        <p className="font-sfRoundedBold text-42px-16px text-[#184FF8] text-center">
          Вышестоящие и контролирующие органы
        </p>
      </div>
      <div className="bg-custom-gradient py-[3%] px-[2%] rounded-[7px] mb-[2%]">
        <p className="flex flex-col font-sfMedium text-30px-12px text-[#184FF8] gap-2">
          <span>
              Территориальный орган Росздравнадзора по г. Москве и Московской
              области
          </span>
           <span>Адрес: 127206, Россия , г. Москва, ул. Вучетича, д. 12 А</span>
          <span>Телефон: +7(495) 611-47-74</span>
           <span>Сайт: 77reg.roszdravnadzor.ru</span> 
           <span>E-mail:office@reg77.roszdravnadzor.ru</span>
        </p>
      </div>
      <div className="bg-custom-gradient py-[3%] px-[2%] rounded-[7px] mb-[2%]">
        <p className="flex flex-col font-sfMedium text-30px-12px text-[#184FF8] gap-2 ">
            <span>Министерство здравоохранения Московской области</span>
            <span>Адрес: 143407, г. Красногорск, Московская область, Бульвар Строителей, д. 1</span>
            <span>Телефон: +7 (498) 602-03-01, +7 (498) 602-03-23</span>
            <span>Факс: +7 (498) 602-03-00, +7 (498) 602-03-03</span>
            <span>Сайт: <a href="https://mz.mosreg.ru" target="_blank" rel="noopener noreferrer">mz.mosreg.ru</a></span>
            <span>E-mail: <a href="mailto:minzdrav_mo@mail.ru">minzdrav_mo@mail.ru</a>, <a href="mailto:pressminzdrav@mosreg.ru">pressminzdrav@mosreg.ru</a>, <a href="mailto:minzdrav@mosreg.ru">minzdrav@mosreg.ru</a></span>
        </p>

      </div>
      <div className="bg-custom-gradient py-[3%] px-[2%] rounded-[7px] mb-[2%]">
        <p className="flex flex-col font-sfMedium text-30px-12px text-[#184FF8] gap-2 ">
        <span className="w-[90%]">Территориальный отдел Управления Роспотребнадзора по Московской области в Ногинском районе</span>
        <span>В городах Балашиха, Реутов, Черноголовка, Электросталь</span>
        <span>Адрес: 142412, г. Ногинск, ул. Климова, д.37</span>
        <span>Горячая линия Управления Роспотребнадзора по Московской области: 8 (800) 100-5014</span>
        <span className="w-[85%]">Горячая линия защиты прав потребителей: режим работы с 9.00 до 22.00, телефон: +7 (499) 704-51-93</span>
        <span>Телефон: +7 (496) 515-58-10, Факс: +7 (496) 515-12-49, +7 (495) 529-26-34</span>
        <span>Сайт: <a href="https://xn--80apbncz.xn--p1ai" target="_blank" rel="noopener noreferrer">Роспотреб-надзор.рф</a>, <a href="https://50.rospotrebnadzor.ru" target="_blank" rel="noopener noreferrer">50.rospotrebnadzor.ru</a></span>
        <span>E-mail: <a href="mailto:org@50.rospotrebnadzor.ru">org@50.rospotrebnadzor.ru</a>, <a href="mailto:9@50.rospotrebnadzor.ru">9@50.rospotrebnadzor.ru</a></span>
        </p>


      </div>
    </Layout>
  );
};

export default page;
