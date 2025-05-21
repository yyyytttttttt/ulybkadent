
import Image from "next/image"
import HygienistWorks from "../components/HygienistWorks"
import Layout from "../layouts/Layout"
import Head from "next/head"
import Dropdown from "../components/ui/DropDown"
export async function generateMetadata() {
    return {
      title: " Прайс-лист | Стоматология Улыбка в Балашихе ",
      description: "Актуальный прайс-лист стоматологии 'Улыбка' в Балашихе. Узнайте цены на услуги и сделайте первый шаг к здоровой улыбке!",
      keywords: "стоматология, улыбка, цены, прайс-лист, стоматологические услуги, лечение зубов, стоимость",
      openGraph: {
        title: "Стоматология Улыбка в Балашихе | Прайс-лист",
        description: "Актуальный прайс-лист стоматологии 'Улыбка' в Балашихе. Узнайте цены на услуги и сделайте первый шаг к здоровой улыбке!",
        url: "https://ulybkadent.ru/price-list",
        images: [
          {
            url: "https://ulybkadent.ru/images/ssilka.jpeg",
            width: 1200,
            height: 630,
            alt: "Прайс-лист стоматологии Улыбка",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Стоматология Улыбка | Прайс-лист",
        description: "Цены на стоматологические услуги в клинике 'Улыбка'. Доступное качество для вашей улыбки!",
        images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
      },
      alternates: {
        canonical: "https://ulybkadent.ru/price-list",
      },
    };
  }
  
const page = () => {
  return (
    <Layout >
        <section className="bg-[#E8E2CF] px-[4%] py-[6%] md:py-[1%] mb-[2%]  ">
            <div className="flex justify-between  items-center " >
                <div>
                    <p className="font-sfRegular text-30px-12px text-[#2E2E2E] mb-[1%]">Прайс-лист с заботой</p>
                    <p className="font-sfRegular text-20px-11px text-[#2E2E2E]" >Качество доступно! Узнайте наши цены на стоматологические услуги и сделайте первый шаг к здоровой улыбке.</p>
                </div>
                <div className="w-[45%] xs:w-[25%] md:w-[15%]"><img src="/images/pra.png" alt="" /></div>
               
                
            </div>
            <a 
                href="/docs/pr10.xlsx" 
                download
                className='text-[#1f3475] underline underline-offset-4 font-sfRegular text-16px-11px flex items-center'
            >
                Скачать
            </a>

                
        </section>
       
        <section className="">
            <Dropdown/>
        </section>
       

      
        
       
    </Layout>


  )
}

export default page