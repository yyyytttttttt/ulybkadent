"use client";
import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
  const AGE = [
    { id: "13-25", label: "🧑 13–25 лет" },
    { id: "26-39", label: "👩 26–39 лет" },
    { id: "40-59", label: "👨 40–59 лет" },
    { id: "60+", label: "👴 60+ лет" },
  ];

  const CLEAN = [
    { id: "never", label: "Никогда" },
    { id: "year", label: "Раз в год" },
    { id: "6m", label: "Раз в 6 месяцев" },
    { id: "often", label: "Чаще" },
  ];

  const SYMPTOMS = [
    { id: "bleeding", label: "Кровоточивость десен" },
    { id: "odor", label: "Неприятный запах" },
    { id: "sensitivity", label: "Чувствительность зубов" },
    { id: "loose", label: "Шатающиеся зубы" },
    { id: "none", label: "Ничего из списка" },
  ];

  const GOALS = [
    { id: "whitening", label: "Белизна улыбки" },
    { id: "brecet", label: "Планирую брекеты/элайнеры" },
    { id: "implants", label: "Уже есть импланты/протезы" },
    { id: "gums", label: "Беспокоят десны" },
    { id: "check", label: "Просто проверка" },
  ];

  const [age, setAge] = useState(null);
  const [clean, setClean] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  const [goals,setGoals] =useState(null)
  const [show,setShow]=useState(false)
  
  function buildRecomendation({ age, clean,symptoms,goals }) {
    const t = {
      byAge: ageRule(age),
      byClean: cleanRule(clean),
      bySymptoms :symtompsRule(symptoms),
      byGoals :goleRule(goals)

    };
    return t;
  }
  const rec = buildRecomendation({ age, clean,symptoms,goals })

  function toggleSymptoms(id) {
    if (id === "none") return setSymptoms(["none"]);
    setSymptoms((prev) => {
      const already = prev.includes(id);

      const next = already
        ? prev.filter((s) => s !== id)
        : [...prev.filter((f) => f !== "none"), id];

      return next;
    });
  }
  function ageRule(age) {
    switch (age) {
      case "13-25":
        return "Осмотр каждые 6–12 месяцев, профессиональная чистка 1–2 раза в год, контроль прикуса, консультация ортодонта при необходимости.";
      case "26-39":
        return "Профессиональная чистка раз в 6 месяцев, осмотр стоматолога раз в год, отбеливание или эстетические процедуры по показаниям.";
      case "40-59":
        return "Регулярная профчистка раз в 6 месяцев, диагностика десен и костной ткани раз в год, рентген-контроль скрытых процессов";
      case "60+":
        return "Регулярная диагностика для протезирования или имплантации, осмотр каждые 6 месяцев, контроль протезов и имплантов.";
      default:
        return "";
    }
  }
  function cleanRule(clean) {
    switch (clean) {
      case "never":
        return "Срочно нужна профессиональная чистка и консультация стоматолога-гигиениста";
      case "year":
        return "Лучше сократить интервал до 6 месяцев";
      case "6m":
        return "Отлично, вы поддерживаете правильный ритм";
      case "often":
        return "Очень хороший уход! Важно также не забывать о домашних средствах и проверках у врача";
      default:
        return "";
    }
  }

  function goleRule (goals) {
     switch (goals) {
      case "whitening":
        return "Для сияющей улыбки подойдут регулярные профессиональные чистки и отбеливание у врача. Это безопасный способ сделать зубы заметно светлее без вреда для эмали».";
      case "gums":
        return "Кровоточивость или дискомфорт десен требуют внимания. Мы рекомендуем консультацию пародонтолога, щадящий домашний уход и регулярный контроль состояния десен";
      case "brecet":
        return "Исправление прикуса начинается с диагностики. Вам стоит пройти консультацию ортодонта и сделать рентген, чтобы подобрать оптимальное решение: брекеты или элайнеры";
      case "implants":
        return "Импланты и протезы требуют регулярного наблюдения. Рекомендуем осмотр у стоматолога раз в 6 месяцев и рентген-контроль раз в год для сохранения стабильности";
     
      case "check":
        return "Даже при отсутствии жалоб профилактика остаётся важной. Плановые осмотры 1–2 раза в год и профчистка каждые 6 месяцев помогут сохранить улыбку здоровой";
      default:
        return "";
    }

  }
  function symtompsRule(symtomps) {
    if (symptoms.length===0) return ''
    if (symptoms.includes('none')) return 'Прекрасно! Поддерживайте профилактический режим и проверку раз в год'
    const s =[]
    if (symtomps.includes('bleeding')) s.push('Признак начинающегося пародонтита. Рекомендуем визит к пародонтологу и контроль десен')
    if (symptoms.includes('odor')) s.push('Возможны отложения или проблемы с деснами. Нужна профчистка и диагностика')
    if (symptoms.includes('sensitivity')) s.push('Подберите пасту для чувствительных зубов и сделайте процедуру реминерализации/фторирования')
    if (symptoms.includes('loose')) s.push('Срочно нужен осмотр и рентген — это может быть пародонтит')

    return s.join('\n')
    
    
   
  }
  const ready = Boolean(age && clean && goals);
  const collapse = {
  initial: { opacity: 0, y: 8, height: 0 },
  animate: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    y: 8,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};
 
  return (
    <Layout className="">
      <div>
        <p className="font-sfRoundedBold text-42px-16px text-[#1F3475] mb-2 text-center">Узнай свой персональный план профилактики за 30 секунд</p>
        <p className="flex flex-col text-24px-15px font-sfRegular text-center mb-[7%] text-[#1F3475]">
            <span>Ответьте на несколько простых вопросов — и мы подскажем, как правильно ухаживать</span>
            <span>за зубами именно в вашем возрасте</span>
        </p>
          <div className="max-w-[992px] mx-auto mb-[4%]">
            <p className="text-[clamp(1rem,0.6296rem+1.8519vw,2.25rem)] mb-[3%]  font-sfRoundedBold text-center text-[#1F3475]">Сколько вам лет?</p>
            <div className="flex flex-col md:flex-row gap-4 justify-between ">
                {AGE.map((item) => {
                    const isActive =  age===item.id
                    return(

                        <button key={item.id} className={`rounded-[12px] h-[49px] xs:h-auto  ${isActive ? 'bg-[#D3FFAD] scale-105' :'bg-[#0000000F] '} py-[1.4%] text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] text-[#1F3475] font-sfRegular w-full transition-all duration-500  flex items-center justify-center`}    onClick={() => setAge(item.id)} >
                            {item.label}
                        </button>
                    )
                })}
            </div>
          </div>
         
            <div className="max-w-[1150px] mx-auto mb-[4%]">
            <p className="text-[clamp(1rem,0.6296rem+1.8519vw,2.25rem)] mb-2  font-sfRoundedBold text-center text-[#1F3475]">Есть ли у вас такие признаки?</p>
            <p className="text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-4 text-center text-[#1F3475] font-sfRegular" >Несколько вариантов ответа*</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between ">
                {SYMPTOMS.map((item) => {
                    const isActive =  symptoms.includes(item.id)
                    return(

                        <button key={item.id} className={`rounded-[12px] h-[49px] xs:h-auto  ${isActive ? 'bg-[#D3FFAD] scale-105' :'bg-[#0000000F] '} py-[4%] text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] text-[#1F3475] font-sfRegular w-full transition-all duration-500  flex items-center justify-center`}    onClick={() => toggleSymptoms(item.id)} >
                            {item.label}
                        </button>
                    )
                })}
            </div>
          </div>
           <div className="max-w-[1150px] mx-auto mb-[4%]">
            <p className="text-[clamp(1rem,0.6296rem+1.8519vw,2.25rem)] mb-[3%]  font-sfRoundedBold text-center text-[#1F3475]">Что для вас актуально сейчас?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between ">
                {GOALS.map((item) => {
                    const isActive =  goals===item.id
                    return(

                        <button key={item.id} className={`rounded-[12px] h-[49px] xs:h-auto  ${isActive ? 'bg-[#D3FFAD] scale-105' :'bg-[#0000000F] '} py-[4%] text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] text-[#1F3475] font-sfRegular w-full transition-all duration-500  flex items-center justify-center`}    onClick={() => setGoals(item.id)} >
                            {item.label}
                        </button>
                    )
                })}
            </div>
          </div>
           <div className="max-w-[992px] mx-auto mb-[4%]">
            <p className="text-[clamp(1rem,0.6296rem+1.8519vw,2.25rem)] mb-[3%]  font-sfRoundedBold text-center text-[#1F3475]">Как часто вы делаете профессиональную чистку?</p>
            <div className="flex flex-col md:flex-row gap-4 justify-between ">
                {CLEAN.map((item) => {
                    const isActive =  clean===item.id
                    return(

                        <button key={item.id} className={`rounded-[12px] h-[49px] xs:h-auto  ${isActive ? 'bg-[#D3FFAD] scale-105' :'bg-[#0000000F] '} py-[1.4%] text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] text-[#1F3475] font-sfRegular w-full transition-all duration-500  flex items-center justify-center`}    onClick={() => setClean(item.id)} >
                            {item.label}
                        </button>
                    )
                })}
            </div>
          </div>
          <div className="flex justify-center mb-[3%] px-[2%] py-[2%]">
            <button onClick={()=>setShow(true)}  className="text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] px-[4%] py-[1%] rounded-[12px] text-white bg-[#1F3475] transition-all duration-500 hover:scale-105 font-sfRegular">Получить результат</button></div>
      </div>
     <div className="transition-all duration-500">
      <AnimatePresence initial={false} mode="wait">
        {ready && show &&(
          <motion.div
            key="result"
            variants={collapse}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-auto max-w-[800px] overflow-hidden" // overflow-hidden важно для height-анимации
          >
            {/* резервируем минимум высоты, чтобы страница не «дёргалась» */}
            <div className="min-h-[240px] rounded-2xl">
              <p className="font-sfRoundedBold text-[clamp(1rem,0.7037rem+1.4815vw,2rem)] mb-2 text-[#1F3475] text-center">
                Ваш персональный результат!
              </p>

              <p className="font-sfRoundedBold text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-1 text-[#1F3475] text-center">
                Рекомендации по возрасту
              </p>
              <p className="text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-2 text-center text-[#1F3475] font-sfRegular">
                {rec.byAge}
              </p>

              <p className="font-sfRoundedBold text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-1 text-[#1F3475] text-center">
                По гигиене
              </p>
              <p className="text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-2 text-center text-[#1F3475] font-sfRegular">
                {rec.byClean}
              </p>

              <p className="font-sfRoundedBold text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-1 text-[#1F3475] text-center">
                По симптомам
              </p>
              <p className="text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-2 text-center text-[#1F3475] font-sfRegular whitespace-pre-line">
                {rec.bySymptoms}
              </p>

              <p className="font-sfRoundedBold text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-1 text-[#1F3475] text-center">
                По целям
              </p>
              <p className="text-[clamp(0.875rem,0.6898rem+0.9259vw,1.5rem)] mb-[8%] text-center text-[#1F3475] font-sfRegular whitespace-pre-line">
                {rec.byGoals}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  
    </Layout>
  );
};

export default page;
