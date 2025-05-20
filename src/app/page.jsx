import React from 'react';
import Galv from './components/glav/Galv';

export const generateMetadata = () => {
  return {
    title: "Стоматология «Улыбка» в Балашихе | Главная",
    description:
      "Стоматология «Улыбка» в Балашихе предлагает профессиональный уход за зубами,  профилактику, лечение и эстетические услуги. Запишитесь на приём в Балашихе уже сегодня! Стоматология  Балашихе ,Стоматология Балашиха",
    keywords:
      "стоматология в Балашихе, уход за зубами, чистка зубов, лечение зубов, эстетическая стоматология, имплантация зубов, ортодонтия, стоматолог Балашиха, стоматология Балашиха",
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#ffffff",

    verification: {
      yandex: "c4df805827e116b0",
    },

    openGraph: {
      title: "Стоматология «Улыбка»  в Балашихе  – профессиональный уход за зубами в Балашихе",
      description:
        "Лучшие стоматологические услуги  в Балашихе для здоровья и красоты вашей улыбки. Доступные цены, профессиональный подход!  в Балашихе",
      url: "https://ulybkadent.ru/",
      type: "website",
      site_name: "Стоматология «Улыбка» в Балашихе",
      locale: "ru_RU",
      updated_time: new Date().toISOString(),
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Стоматология «Улыбка» в Балашихе – профессиональный уход за зубами",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Стоматология «Улыбка» – профессиональный уход за зубами в Балашихе",
      description:
        "Профессиональная стоматология в Балашихе. Полный спектр услуг – от профилактики до имплантации!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },

    author: "Стоматология «Улыбка»",
    publisher: "Стоматология «Улыбка»",

    other: {
      "yandex-verification": "c4df805827e116b0",
    },
  };
};






const page = () => {
  return <Galv />;
};

export default page;
