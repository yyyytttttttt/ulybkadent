import React from 'react'
import TeamPage from '../components/Team/TeamPage'
export async function generateMetadata() {
   return {
     title: "Команда  | Стоматология Улыбка в Балашихе ",
     description: "Познакомьтесь с командой профессионалов стоматологии 'Улыбка' в Балашихе. Опытные врачи, индивидуальный подход и качественное лечение.",
     keywords: "стоматология, улыбка, стоматологическая клиника, врачи, стоматологи, команда, лечение зубов",
     openGraph: {
       title: "Стоматология Улыбка в Балашихе | Команда",
       description: "Познакомьтесь с командой профессионалов стоматологии 'Улыбка' в Балашихе. Опытные врачи, индивидуальный подход и качественное лечение.",
       url: "https://ulybkadent.ru/Team",
       images: [
         {
           url: "https://ulybkadent.ru/images/ssilka.jpeg",
           width: 1200,
           height: 630,
           alt: "Команда стоматологии Улыбка",
         },
       ],
     },
     twitter: {
       card: "summary_large_image",
       title: "Стоматология Улыбка | Команда",
       description: "Профессиональная команда стоматологов, предоставляющая комплексный уход и индивидуальный подход.",
       images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
     },
     alternates: {
       canonical: "https://ulybkadent.ru/Team",
     },
   };
}
const page = () => {
  return (
    
   <TeamPage></TeamPage>
    
  )
}

export default page