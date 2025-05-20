import React from "react";
import Layout from "../layouts/Layout";
import Rec from "../components/details/Rec";

export async function generateMetadata() {
  return {
    title: "Реквизиты | Стоматология «Улыбка» в Балашихе ",
    description:
      "Реквизиты стоматологической клиники «Улыбка» в Балашихе. Контактные данные, юридический адрес, банковские реквизиты и информация о компании.",
    keywords:
      "стоматология, Улыбка в Балашихе, реквизиты, банковские реквизиты, ООО Улыбка, юридический адрес, ИНН, ОГРН, Балашиха",
    robots: "index, follow",
    alternates: {
      canonical: "https://ulybkadent.ru/details",
    },
    openGraph: {
      title: "Стоматология «Улыбка» в Балашихе | Реквизиты",
      description:
        "Реквизиты стоматологической клиники «Улыбка» в Балашихе. Адреса, банковские данные и информация о директоре клиники.",
      url: "https://ulybkadent.ru/details",
      type: "website",
      site_name: "Стоматология «Улыбка» в Балашихе",
      locale: "ru_RU",
      updated_time: new Date().toISOString(),
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Стоматология «Улыбка» – реквизиты",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Стоматология «Улыбка» | Реквизиты",
      description:
        "Реквизиты стоматологической клиники «Улыбка»: юридический адрес, банковские данные, телефон и контакты.",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
    themeColor: "#ffffff",
  };
}

const page = () => {
  return (
    <Layout>
      
        <section className='flex flex-col items-center justify-center py-[5%] bg-custom-gradient  rounded-lg mb-[2%]'>
            <p className='font-sfRoundedBold text-30px-12px text-[#184FF8]'>Телефон: +7 800 101 31 74</p>
            <p className='font-sfRoundedBold text-30px-12px text-[#184FF8]'>Реквизиты :</p>
        </section>
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 xl:gap-16 mb-[2%]'>
            <Rec
            title="Наименование организации"
            subTitle="Общество с ограниченной ответственностью «Улыбка»"
            imageSrc="/images/icon1.svg"
            />
            <Rec
            title="Директор"
            subTitle="Смыслова Елена Юрьевна"
            imageSrc="/images/icon2.svg"
            />
            <Rec
            title="Юридический адрес"
            subTitle="143909, Московская область,Балашиха г, Звездная ул, дом 10, помещение 129"
            imageSrc="/images/icon4.svg"
            />
            <Rec
            title="Фактический адрес"
            subTitle="143910, Московская область Балашиха г, Заречная ул, дом 9, помещение 110"
            imageSrc="/images/icon4.svg"
            />
            <Rec
            title="Полное наименование учреждения банка"
            subTitle="ПАО СБЕРБАНК"
            imageSrc="/images/icon6.svg"
            />
            <Rec
            title="Расчетный счет"
            subTitle="4070 2810 9400 4010 1123"
            imageSrc="/images/icon7.svg"
            />
            <Rec
            title="Корреспондентский счет"
            subTitle="3010 1810 4000 0000 0225"
            imageSrc="/images/icon8.svg"
            />
            <Rec
            title="БИК"
            subTitle="044525225"
            imageSrc="/images/icon11.svg"
            />
            <Rec
            title="ОГРН"
            subTitle="1035000701614"
            imageSrc="/images/icon10.svg"
            />
            <Rec
            title="ИНН/КПП организации"
            subTitle="5001011269/500101001"
            imageSrc="/images/icon10.svg"
            />
            
        </section>
    </Layout>
  )
}

export default page