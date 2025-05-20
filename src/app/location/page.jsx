import React from 'react'
import Loc4 from '../components/location/Loc4'
export async function generateMetadata() {
  return {
    title: "Локация | Стоматология Улыбка в Балашихе",
    description: "Адреса и филиалы стоматологии «Улыбка»  в Балашихе. Найдите нас на карте и получите качественные услуги рядом с вами  в Балашихе.",
    keywords: [
      "стоматология Балашиха",
      "локации стоматологии Улыбка",
      "адрес стоматологии",
      "где находится клиника Улыбка",
      "лучшие стоматологи в Балашихе",
      "филиалы стоматологии Улыбка",
      "запись к стоматологу"
    ],
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/location",
    openGraph: {
      title: "Локация | Стоматология «Улыбка»",
      description: "Все филиалы стоматологии «Улыбка» на карте. Узнайте адреса и запишитесь на приём!",
      url: "https://ulybkadent.ru/location",
      type: "website",
      site_name: "Стоматология «Улыбка»",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Карта филиалов стоматологии «Улыбка»",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Наши Локации | Стоматология «Улыбка»",
      description: "Узнайте адреса и расположение всех филиалов стоматологии «Улыбка». Найдите нас на карте!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}
const page = () => {
  return (
    <Loc4></Loc4>
  )
}

export default page