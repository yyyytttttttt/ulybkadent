

import React from "react";
import Layout from "../../layouts/Layout";
import FirstBlock3 from "../../components/cleaning-care/FirstBlock3";
import SecondBlock from "../../components/cleaning-care/SecondBlock";
import SecondBlock2 from "../../components/cleaning-care/SecondBlock2";
import Head from "next/head";
// Функция для генерации мета-данных
export async function generateMetadata() {
  return {
    title: "Почему чистка у стоматолога — это не страшно, а приятно? | Стоматология Улыбка, Балашиха",
    description:
      "Профессиональная чистка зубов в 2025 году — это комфорт, свежесть и профилактика. Узнайте, почему пациенты клиники «Улыбка» выходят с процедур чистыми, счастливыми и без боли.",
    keywords: [
      "чистка зубов",
      "профессиональная гигиена",
      "air flow",
      "ультразвук зубы",
      "профгигиена",
      "стоматология Балашиха",
      "Улыбка клиника",
      "удаление налёта",
      "гигиена полости рта",
    ],
    robots: "index, follow",
    canonical: "https://ulybkadent.ru/News/professional-cleaning",
    openGraph: {
      title: "Чистка зубов — комфортно, приятно, полезно | Клиника «Улыбка»",
      description:
        "Air Flow, ультразвук, полировка — чистка в 2025 году стала почти как spa-процедура. Без боли, без страха, только польза. Запишитесь на профгигиену в «Улыбке».",
      url: "https://ulybkadent.ru/News/professional-cleaning",
      type: "article",
      site_name: "Стоматология «Улыбка»",
      locale: "ru_RU",
      images: [
        {
          url: "https://ulybkadent.ru/images/ssilka.jpeg",
          width: 1200,
          height: 630,
          alt: "Профессиональная чистка зубов в клинике Улыбка",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Почему чистка зубов у стоматолога — это приятно?",
      description:
        "Процедура без боли, с эффектом свежести на несколько месяцев. Узнайте, как проходит профессиональная чистка в «Улыбке».",
      images: ["https://ulybkadent.ru/images/ssilka.jpeg"],
    },
  };
}
const page = () => {
  return (
    <Layout>
     
      <FirstBlock3
        Text="Почему чистка у стоматолога — это не страшно, а приятно?"
        Text2="Когда вы слышите фразу “профессиональная гигиена полости рта”, что приходит в голову?Что-то холодное, шумное и «ой, больно»?
            Но в 2025 году всё по-другому. Рассказываем, почему чистка зубов у стоматолога стала
            почти как spa-процедура — только для вашей улыбки."
        
        imageSrc="/images/gr2.png"
        
      />
      <SecondBlock
      Text="Какие ощущения получают наши клинеты от процедуры?"
      Text2="Охлаждающий эффект
            Отсутствие дискомфорта, из-за использования мягких абразивов
            Ощущение свежести на весь день
            Эффект «чистоты как после хорошей бани»"
            imageSrc="/images/SecondBlockImage18.png"   
      
      />
      <SecondBlock2
      Text="Что входит в профессиональную чистку?"
      Text2="

        Снятие налёта и камня — ультразвуком, который
        не повреждает эмаль
        Air Flow — струя воздуха, воды и порошка, бережно очищающая даже между зубами
        Полировка и фторирование — для гладкости, блеска и защиты эмали
        Индивидуальные советы по уходу — чтобы зубы оставались чистыми надолго"
        imageSrc="/images/SecondBlockImage19.png"  
       
        
      
      />
      <SecondBlock
      Text="А что с болью? — Её нет"
      Text2="

        Мы используем тёплую воду, чтобы клиент
        не чувствовал дискомфорт
        Безопасные порошки, которые не царапают
        При необходимости — мягкое обезболивание"
        imageSrc="/images/SecondBlockImage20.png"  
       
        
      
      />
     
      <SecondBlock2
       Text="Что вы получаете в итоге?"
    
            imageSrc="/images/SecondBlockImage21.png"  
      >
        <p className="flex flex-col gap-4">
            <span>
                1.Удаление налёта и пигментации
            </span>
            <span>
                2.Свежий, здоровый цвет эмали 
            </span>
            <span>
                3.Защиту от кариеса и воспаления
            </span>
            <span>
                4.Освежающее ощущение во рту на 2–3 месяца
            </span>
            <span>
                5.Улыбку, которой не стыдно светить
            </span>
            
        </p>
      </SecondBlock2>
      
      <SecondBlock
      Text="Чем чаще — тем дешевле!"
      Text2="

        

        Не нужно: лечить кариес, ставить пломбы,
    удалять зубы и беспокоиться о здоровье полости рта.
    Профгигиена — не трата, а забота"
        imageSrc="/images/SecondBlockImage22.png"  
       
        
      
      />
     
      <FirstBlock3
       Text="Гигиена полости рта в «Улыбке»"
        Text2="Клиника «Улыбка» предлагает комплексную диагностику, подбор метода и поддержку на каждом этапе — от первого снимка до результата “вау”
    в зеркале. Запишитесь прямо сейчас и узнайте, какой метод подходит вам."
    
      
      
        imageSrc="/images/gr2.png"
      
      >
        
      </FirstBlock3>

    </Layout>
  );
};

export default page;
