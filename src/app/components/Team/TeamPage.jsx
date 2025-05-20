'use client'
import { useState } from "react";
import Layout from "@/app/layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const doctorsData = [
   {
     name: "Agureeva",
     image: "/images/Agureva.png",
     link: "/doctors/Agureeva",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Ортопед"
   },
   {
     name: "Alexsandrova",
     image: "/images/a1.png",
     link: "/doctors/Alexsandrova",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Стоматолог"
   },
   {
     name: "Bogatireva",
     image: "/images/b.png",
     link: "/doctors/Bogatireva",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Стоматолог"
   },
   {
     name: "Zemcova",
     image: "/images/z.png",
     link: "/doctors/Zemcova",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Терапевт"
   },
   {
     name: "dediev",
     image: "/images/d.png",
     link: "/doctors/dediev",
     location: " УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Ортопед"
   },
   {
     name: "dobrinceva",
     image: "/images/d1.png",
     link: "/doctors/dobrinceva",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Зубной врач"
   },
   {
     name: "Zabroda",
     image: "/images/z1.png",
     link: "/doctors/Zabroda",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Терапевт"
   },
   {
     name: "Kobzeva",
     image: "/images/c.png",
     link: "/doctors/Kobzeva",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Детский врач"
   },
   {
     name: "Krapivnaia",
     image: "/images/c2.png",
     link: "/doctors/Krapivnaia",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Терапевт"
   },
   {
     name: "Pehova",
     image: "/images/p.png",
     link: "/doctors/Pehova",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Ортодонт"
   },
   {
     name: "Policova",
     image: "/images/p1.png",
     link: "/doctors/Policova",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Терапевт"
   },
   {
     name: "Rassolova",
     image: "/images/r.png",
     link: "/doctors/Rassolova",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Ортодонт"
   },
   {
     name: "Savateeva",
     image: "/images/s.png",
     link: "/doctors/Savateeva",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Зубной врач"
   },
   {
     name: "Kuzin",
     image: "/images/c3.png",
     link: "/doctors/Kuzin",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Хирург"
   },
   {
     name: "Chegoleva",
     image: "/images/ch.png",
     link: "/doctors/Chegoleva",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Гигиенист стоматологический"
   },
   {
     name: "Ecimova",
     image: "/images/e1.png",
     link: "/doctors/Ecimova",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Ортопед"
   },
   {
     name: "Zherdina",
     image: "/images/zh.png",
     link: "/doctors/Zherdina",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Терапевт"
   },
   {
     name: "Kovalskaya",
     image: "/images/k1.png",
     link: "/doctors/Kovalskaya",
     location: "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
     specialization: "Терапевт"
   },
   {
     name: "Kapustina",
     image: "/images/c4.png",
     link: "/doctors/Kapustina",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Ортодонт"
   },
   {
     name: "Garipova",
     image: "/images/g.png",
     link: "/doctors/Garipova",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Терапевт"
   },
   {
     name: "Mechechcova",
     image: "/images/m.png",
     link: "/doctors/Mechechcova",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Терапевт"
   },
   {
     name: "Nosenco",
     image: "/images/n.png",
     link: "/doctors/Nosenco",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Ортопед"
   },
   {
     name: "Ulmer",
     image: "/images/y.png",
     link: "/doctors/Ulmer",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Гигиенист стоматологический"
   },
   {
     name: "Hordicova",
     image: "/images/h.png",
     link: "/doctors/Hordicova",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Зубной врач"
   },
   {
     name: "Chumacova",
     image: "/images/ch1.png",
     link: "/doctors/Chumacova",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Ортодонт"
   },
   {
     name: "Hironin",
     image: "/images/h1.png",
     link: "/doctors/Hironin",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Хирург"
   },
   {
     name: "Kuzina",
     image: "/images/c5.png",
     link: "/doctors/Kuzina",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Ортопед"
   },
   {
     name: "Pavlova",
     image: "/images/pav.png",
     link: "/doctors/Pavlova",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Пародонтолог"
   },
   {
     name: "zozyla",
     image: "/images/zoz.png",
     link: "/doctors/zozyla",
     location: "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
     specialization: "Ортопед"
   }
 ];
 const specializations = [
   "Терапевт",
   "Зубной врач",
   "Ортопед",
   "Стоматолог",
   "Детский врач",
   "Ортодонт",
   "Хирург",
   "Гигиенист стоматологический",
   "Пародонтолог"
 ];
 const adres = [
   "КЛИНИКА - УЛ. ЗАРЕЧНАЯ 9",
   "КЛИНИКА - УЛ. ЗВЁЗДНАЯ 10",
   
 ];
 

const TeamPage = () => {
   const [selectedSpecs,setSelectedSpecs]=useState([])
   const [selectedLocation,setSelectedLocation]=useState("все филиалы")
   const toggleSpecialization = (spec) =>{
      if (selectedSpecs.includes(spec)){
         setSelectedSpecs(selectedSpecs.filter((s)=> s!=spec))
      }
      else (setSelectedSpecs([...selectedSpecs,spec]))
   }
   const resetFilter =()=>{
      setSelectedLocation("все филиалы")
      setSelectedSpecs([])
   }
   const filtredspecializations =
      
      
      doctorsData.filter((fr=>{
         const matchesLocation = selectedLocation==="все филиалы" || selectedLocation===fr.location
         const matchesSpec = selectedSpecs.length===0 ||   selectedSpecs.includes(fr.specialization)
         return matchesLocation && matchesSpec;
      }
      ))

   
   
  return (
    
       <Layout>
       
       
           <div className="flex justify-end relative mb-[2%] md:h-auto">
               <div className="w-[65%] md:w-[50%]">
                 <Image className="w-[100%]"
                     src="/images/glavVrach.png" // Путь к изображению из папки public
                     alt="altText"
                     // Текст для описания изображения
                     width={701} // Ширина изображения
                     height={1056}
                     quality={100}  // Высота изображения
                 />
               </div>
               <div className="absolute left-1 top-[15%] xs:top-[20%] flex flex-col " >
                   <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[4%] w-[60%] xs:w-[40%]">Приёмные дни Вторник, среда: 10:00 - 15:00</p>
                   <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[4%]  ">Телефон: 7 (968) 905-60-88</p>
                   <button
                     className="text-[#1F3475] border border-[#1F3475] py-[4%] mb-[4%] text-30px-12px w-[30%] flex items-center justify-center rounded-[7px] transition duration-500 ease-in-out hover:bg-[#1F3475] hover:text-white"
                     >
                       Записаться
                    </button>
                   <p className="font-novoposelensky text-42px-16px text-[#184FF8] w-[80%] mb-[4%]">Анна Григорьевна
                   Сайфутдинова</p>
                   <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[1%]">Главный врач</p>
                   <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[1%]">Стоматолог-терапевт высшей категории</p>
                   <p className="font-sfLight text-30px-12px text-[#1F3475] mb-[1%]">Заслуженный врач России</p>
               </div>
           </div>
            <div className="bg-[#E8E2CF] rounded-[8px] px-[2%] py-[2%] mb-[2%] w-full">
               <div className="flex justify-between flex-col md:flex-row ">
                  <div className="flex flex-col justify-center">
                     <div className="flex  items-center">
                        <p className="text-[#0F354F] mb-[4%] font-sfRegular text-20px-11px">Подберите врача по специализации</p>
                     
                     </div>
                     <div className="grid grid-cols-2 gap-x-8  gap-y-4 mb-[5%] md:mb-0 bg-[#E8E2CF] rounded-[10px] w-fit">
                     {specializations.map((spec, index) => (
                        <label key={index} className="flex items-center text-16px-11px cursor-pointer text-[#0F354F]">
                           <input
                           type="checkbox"
                           checked={selectedSpecs.includes(spec)}
                           onChange={() => toggleSpecialization(spec)}
                           className="accent-blue-600 w-[18px] h-[18px] mr-2"
                           />
                           {spec}
                        </label>
                     ))}
                     </div>
                  </div>
                  <div className="flex flex-col">
                     <button onClick={resetFilter} className="w-auto mb-[2%] text-20px-11px rounded-[7px] text-[#0F354F] bg-[#BDB295] transition-colors duration-700 hover:bg-[#1F3475] hover:text-white">Сбросить фильтры</button>
                     
                     <div className="flex flex-col items-center xs:items-start">
                        <p className="text-[#0F354F] mb-[4%] font-sfRegular text-20px-11px">Выберите ближайший филиал</p>
                        
                        
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-8 gap-y-4 bg-[#E8E2CF] rounded-[10px]  w-fit">
                        {adres.map((addr, index) => (
                           <label key={index} className="flex flex-row items-center text-16px-11px cursor-pointer text-[#0F354F]">
                              <input
                              type="checkbox"
                              name="location"
                              checked={selectedLocation===addr}
                              onChange={() => setSelectedLocation(selectedLocation===addr ? "все филиалы" :addr)}
                              className="accent-blue-600 w-[18px] h-[18px] mr-2"
                              />
                              {addr}
                           </label>
                        ))}
                        </div>
                     </div>
                  </div>
               </div>

            </div>
            <div className="flex justify-between items-center bg-[#E8E2CF] py-[3%] xs:py-[1.5%] px-[3%] xs:px-[8%] rounded-[10px] mb-[4%] relative">
  <div className="w-[10%]">
    <Image
      src="/images/res11.svg"
      alt="altText"
      width={107}
      height={101}
      quality={100}
    />
  </div>

  {/* Центрированный текст */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <p className="font-sfLight text-20px-11px text-[#0F354F] whitespace-nowrap">
      {selectedLocation}
    </p>
  </div>

  <a
    href="https://reservi.ru/stoma1c/624c1cc5-ddfc-4ee6-b108-0ad35473f01a"
    className="font-sfLight flex items-center justify-center text-[#0F354F] bg-[#BDB295] py-[1%] text-16px-11px w-[23%] xs:w-[15%] rounded-[5px] transition duration-500 ease-in-out hover:bg-[#1F3475] hover:text-white"
  >
    записаться
  </a>
</div>
           <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-8 md:gap-16 mb-[4%] relative">
            <AnimatePresence mode="sync"> 
               {filtredspecializations.map((doctor) => (
                  <motion.div
                  key={doctor.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{
                     duration: 0.4,
                     ease: [0.22, 1, 0.36, 1], 
                  }}
                  className="will-change-transform"
                  >
                  <Link href={doctor.link}>
                     <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={670}
                        height={519}
                        quality={100}
                     />
                     <button className="text-[#293D7A] text-20px-11px py-[3%] w-full bg-[#E8E2CF] rounded-b-[70px] transition duration-500 ease-in-out hover:text-[#BDB295]">
                        {doctor.location}
                     </button>
                  </Link>
                  </motion.div>
               ))}
            </AnimatePresence>
            </div>
       </Layout>
    
  )
}

export default TeamPage