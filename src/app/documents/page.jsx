"use client";

import React, { useRef } from 'react';
import DownloadComponent from '../components/documents/DownloadComponent';
import Layout from '../layouts/Layout';


const Page = () => {
  const downloadRefsBlock1 = useRef([]);
  const downloadRefsBlock2 = useRef([]);

  const handleDownloadAllBlock1 = () => {
    // Инициируем скачивание всех документов из блока 1
    downloadRefsBlock1.current.forEach((downloadComponentRef) => {
      if (downloadComponentRef) {
        downloadComponentRef.handleDownload();
      }
    });
  };

  const handleDownloadAllBlock2 = () => {
    // Инициируем скачивание всех документов из блока 2
    downloadRefsBlock2.current.forEach((downloadComponentRef) => {
      if (downloadComponentRef) {
        downloadComponentRef.handleDownload();
      }
    });
  };

  return (
    
    <Layout>
     
      <div className="bg-[#E8E2CF] flex flex-col w-[100%] px-[2%] py-[2%]">
        {/* Блок 1 */}
        <div className="flex justify-between flex-col xs:flex-row w-[100%] mb-10">
          <div className="w-[100%] xs:w-[48%] flex flex-col justify-between">
            <p className="font-sfLight text-42px-16px text-center text-[#1F3475]">Нормативные документы</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[4%]">
              {[
                { url: "/docs/Federalnyj_zakon_ot_21_noyabrya_2011_g._N_323-FZ.pdf", name: "Federalnyj", title: "Федеральный закон №323-ФЗ" },
                { url: "/docs/programma_gos_garantij-1.pdf", name: "programma_gos_garantij", title: "Государственные гарантии" },
                { url: "/docs/Federalnyj_zakon_ot_29_noyabrya_2010_g._N_326-FZ-4.pdf", name: "Federalnyjakon", title: "Федеральный закон  №326-ФЗ " },
                { url: "/docs/TS-na-2019-god-1.pdf", name: "TS", title: "Тарифное соглашение" },
                { url: "/docs/Postanovlenie_Pravitelstva_RF_ot_28_noyabrya_2014_g._N_1273-3.pdf", name: "PostanovleniePravitelstva", title: "Постановление  правительства №1273" },
                { url: "/docs/Stomatolog.pdf", name: "St", title: "Приложение к тарифному соглашению" },
                { url: "/docs/Prikaz_Ministerstva_zdravoohraneniya_RF_ot_21_dekabrya_2012_g_-1342n-2.pdf", name: "PrikazMinisterstvazdravoohraneniya", title: "Приказ министерства №1342Н" },
                { url: "/docs/Prikaz_Minzdravsotsrazvitiya_RF_ot_26_aprelya_2012_g._-_406n.pdf", name: "PrikazMinzdravsotsrazvitiyaRFot26aprelya012g406n", title: "Приказ министерства №406Н" },
                { url: "/docs/Zakon_Moskovskoj_oblasti_ot_14_noyabrya_2013_g._N_132_2013-OZ-3.pdf", name: "ZakonMoskovskojoblastiot", title: "Закон  №132/2013-ОЗ  " },
                { url: "/docs/pricazzzzzzzzzzzzzzzz.pdf", name: "Prikaz", title: "Приказ МЗ РФ от 30.12.2014г.N 956н" },
                { url: "/docs/fxzq166789450v9kumu2om9jkacyawk6 (1).pdf", name: "fxzq ", title: "Постановление Правительства РФ от 11 мая 2023г.N736" },
                
              ].map((doc, index) => (
                <DownloadComponent
                  key={index}
                  ref={(el) => (downloadRefsBlock1.current[index] = el)}
                  fileUrl={doc.url}
                  fileName={doc.name}
                  title={doc.title}
                />
              ))}
            </div>
            
          </div>
          <div className="w-[100%] xs:w-[48%]">
            <p className="font-sfLight text-42px-16px text-[#1F3475] text-center">
              Документы, регламентирующие оказание платных услуг
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { url: "/docs/Zakon_RF_ot_7_fevralya_1992_g._N_2300-I.pdf", name: "Zakon", title: "Закон №2300-1" },
                { url: "/docs/dogovor2.docx", name: "dogovor2", title: "Образец договора оказания услуг" },
                { url: "/docs/garant.pdf", name: "garant", title: "положение о гарантиях" },
                { url: "/docs/dogovor.docx", name: "dogovor ", title: "Договор продажи сертификатов" }
              ].map((doc, index) => (
                <DownloadComponent
                  key={index + 3}
                  ref={(el) => (downloadRefsBlock1.current[index + 3] = el)}
                  fileUrl={doc.url}
                  fileName={doc.name}
                  title={doc.title}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
        <button
              onClick={handleDownloadAllBlock1}
              className="bg-[#BDB295] text-black font-sfRegular text-20px-11px w-[100%] rounded-b-[5px] py-[0.5%] mb-[2%] transition-colors duration-300 hover:text-[#1A2D61]"
            >
              Скачать все
          </button>
        

        {/* Блок 2 */}
        <div className="bg-[#E8E2CF] flex flex-col w-[100%] px-[2%] py-[2%] "> 
        <div className="flex justify-between w-[100%] flex-col">
        <p className="font-sfLight text-42px-16px text-[#1F3475] w-[100%] text-center">Стандарты (протоколы, рекомендации), регламентирующие 
        оказание медицинской стоматологической помощи</p>
          <div className="w-[100%] xs:w-[80%] flex flex-col justify-between">
           
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { url: "/docs/1_pulpa.pdf", name: "1_pulpa.pdf", title: "Рекомендации (протоколы, лечение) болезни пульпы зуба.Утверждены постановлением № 15" },
                { url: "/docs/3_yazven_gingivit.pdf", name: "3_yazven_gingivit", title: "Рекомендации (протоколы, лечение) при диагнозе острый некратический язвенный гингивит венсана.  Утверждены постановлением №15" },
                { url: "/docs/Klinicheskie_rekomendatsii_Eritroplakiya.pdf", name: "Klinicheskie_rekomendatsii_Eritroplakiya", title: "Рекомендации ( протокол, лечения)при диагнозе эритроплакия" },
                { url: "/docs/5_gingivit.pdf", name: "5_gingivit.pdf", title: "Рекомендации (протоколы, лечение) при диагнозе гингивит Утверждены постановлением № 15" },
                { url: "/docs/2_full_absent-1(1).doc", name: "2_full_absent-1(1).doc", title: "Рекомендации (протоколы, лечение) диагнозе полное отсутствие зубов. Утверждены постановлением № 15" },
                { url: "/docs/Klinicheskie_rekomendatsii_lejkoplakiya-1.pdf", name: "Klinicheskie_rekomendatsii_lejkoplakiya-1.pdf", title: "Рекомендации ( протокол, лечения) при диагнозе лейкоплакия" },
                { url: "/docs/4_karies_1.pdf", name: "4_karies_1.pdf", title: "Рекомендации (протоколы, лечение )диагнозе кариес зубов.Утверждены постановлением № 15" },
                { url: "/docs/7_part_absent_1.pdf", name: "7_part_absent_1.pdf", title: "Рекомендации (протоколы, лечение диагнозе частичное отсутствие зубов Утверждены постановлением № 15" },
                { url: "/docs/Klinicheskie_rekomendatsii_lejkedema.pdf", name: "Klinicheskie_rekomendatsii_lejkedema.pdf", title: "Рекомендации ( протокол, лечения)при диагнозе лейкедема" }
              ].map((doc, index) => (
                <DownloadComponent
                  key={index}
                  ref={(el) => (downloadRefsBlock2.current[index] = el)}
                  fileUrl={doc.url}
                  fileName={doc.name}
                  title={doc.title}
                />
              ))}
            </div>
            
         
         
          </div>
        </div>
      </div>
        {/* Кнопка для скачивания всех документов из второго блока */}
        
        
      
      <button
            onClick={handleDownloadAllBlock2}
            className="bg-[#BDB295] text-black font-sfRegular mb-[2%] text-20px-11px w-[100%] rounded-b-[5px] py-[0.5%] transition-colors duration-300 hover:text-[#1A2D61]"
          >
            Скачать все
          </button>
    </Layout>
  );
};

export default Page;