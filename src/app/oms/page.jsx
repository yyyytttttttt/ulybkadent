import React from 'react'
import Item2 from '../components/oms/Item2'
export async function generateMetadata() {
  return {
    title: "Обязательное медицинское страхование (ОМС) | Стоматология Улыбка в Балашихе",
    description:
      "Подробная информация о системе ОМС, правах и обязанностях застрахованных лиц, контактах страховых компаний и нормативных документах.",
    keywords: [
      "обязательное медицинское страхование",
      "ОМС",
      "медицинская помощь",
      "права застрахованных",
      "страховые компании",
      "полис ОМС",
      "клиника Улыбка",
      "закон ОМС",
    ],
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/oms",
    openGraph: {
      title: "Обязательное медицинское страхование (ОМС) | Клиника Улыбка",
      description:
        "Полная информация о системе ОМС, правах застрахованных и нормативных документах в клинике Улыбка.",
      url: "https://ulybkadent.ru/oms",
      type: "website",
      site_name: "Стоматология Улыбка",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "ОМС - Клиника Улыбка",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Обязательное медицинское страхование (ОМС) | Клиника Улыбка",
      description:
        "Полная информация о системе ОМС, правах застрахованных и нормативных документах в клинике Улыбка.",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}

const page = () => {
  return (
    <Item2></Item2>
  )
}

export default page