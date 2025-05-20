import React from 'react'
import Conc from '../components/Conc'
export const metadata = {
    title: "Подарочные сертификаты «Улыбка» – Дарите здоровье и уверенность!",
    description: "Купите подарочный сертификат стоматологии «Улыбка» онлайн. Профессиональный уход за зубами – лучший подарок для ваших близких!",
    keywords: "подарочный сертификат, стоматология Улыбка, уход за зубами, стоматология, здоровая улыбка, зубной сертификат",
    authors: [{ name: "Стоматология «Улыбка»", url: "https://ulybkadent.ru" }],
    robots: "index, follow",
  
    // Open Graph (OG) для соцсетей
    openGraph: {
      title: "Подарочные сертификаты «Улыбка» – Дарите здоровье и уверенность!",
      description: "Купите подарочный сертификат стоматологии «Улыбка» онлайн. Профессиональный уход за зубами – лучший подарок для ваших близких!",
      url: "https://ulybkadent.ru/gift",
      siteName: "Стоматология «Улыбка»",
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Подарочные сертификаты стоматологии Улыбка",
        },
      ],
      type: "website",
    },
  
    // Twitter Card (для Twitter, X)
    twitter: {
      card: "summary_large_image",
      title: "Подарочные сертификаты «Улыбка» – Дарите здоровье и уверенность!",
      description: "Купите подарочный сертификат стоматологии «Улыбка» онлайн. Профессиональный уход за зубами – лучший подарок для ваших близких!",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  
    
  };
  
const page = () => {
  return (
    <Conc></Conc>
  )
}

export default page