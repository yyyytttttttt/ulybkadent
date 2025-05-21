"use client";

import React, { useRef } from 'react';
import Layout from '../../layouts/Layout';

const documentsBlock1 = [
  { url: "/docs/Federalnyj_zakon_ot_21_noyabrya_2011_g._N_323-FZ.pdf", title: "Федеральный закон №323-ФЗ" },
  { url: "/docs/programma_gos_garantij-1.pdf", title: "Государственные гарантии" },
  { url: "/docs/Federalnyj_zakon_ot_29_noyabrya_2010_g._N_326-FZ-4.pdf", title: "Федеральный закон №326-ФЗ" },
  { url: "/docs/TS-na-2019-god-1.pdf", title: "Тарифное соглашение" },
  { url: "/docs/Postanovlenie_Pravitelstva_RF_ot_28_noyabrya_2014_g._N_1273-3.pdf", title: "Постановление правительства №1273" },
  { url: "/docs/Stomatolog.pdf", title: "Приложение к тарифному соглашению" },
  { url: "/docs/Prikaz_Ministerstva_zdravoohraneniya_RF_ot_21_dekabrya_2012_g_-1342n-2.pdf", title: "Приказ министерства №1342Н" },
  { url: "/docs/Prikaz_Minzdravsotsrazvitiya_RF_ot_26_aprelya_2012_g._-_406n.pdf", title: "Приказ министерства №406Н" },
  { url: "/docs/Zakon_Moskovskoj_oblasti_ot_14_noyabrya_2013_g._N_132_2013-OZ-3.pdf", title: "Закон №132/2013-ОЗ" },
  { url: "/docs/pricazzzzzzzzzzzzzzzz.pdf", title: "Приказ МЗ РФ от 30.12.2014г. №956н" },
  { url: "/docs/fxzq166789450v9kumu2om9jkacyawk6 (1).pdf", title: "Постановление Правительства РФ от 11 мая 2023г. №736" }
];

const documentsBlock2 = [
  { url: "/docs/1_pulpa.pdf", title: "Рекомендации по лечению болезни пульпы зуба" },
  { url: "/docs/3_yazven_gingivit.pdf", title: "Острый некротический язвенный гингивит Венсана" },
  { url: "/docs/Klinicheskie_rekomendatsii_Eritroplakiya.pdf", title: "Эритроплакия рекомендации" },
  { url: "/docs/5_gingivit.pdf", title: "Рекомендации при диагнозе гингивит" },
  { url: "/docs/2_full_absent-1(1).doc", title: "Полное отсутствие зубов" },
  { url: "/docs/Klinicheskie_rekomendatsii_lejkoplakiya-1.pdf", title: "Лейкоплакия рекомендации" },
  { url: "/docs/4_karies_1.pdf", title: "Кариес зубов" },
  { url: "/docs/7_part_absent_1.pdf", title: "Частичное отсутствие зубов" },
  { url: "/docs/Klinicheskie_rekomendatsii_lejkedema.pdf", title: "Лейкедема рекомендации" }
];

const Page = () => {
  const openAllFiles = (docs) => {
    docs.forEach(doc => {
      window.open(doc.url, '_blank');
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(window.location.origin + text);
    alert('Ссылка скопирована!');
  };

  return (
    <Layout>
      <div className="bg-[#E8E2CF] flex flex-col w-full px-[2%] py-[2%]">
        
        {/* Блок 1 */}
        <div className="flex flex-col xs:flex-row justify-between mb-10">
          <div className="w-full xs:w-[48%]">
            <p className="font-sfLight text-42px-16px text-center text-[#1F3475] mb-4">Нормативные документы</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentsBlock1.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-md shadow hover:shadow-lg transition cursor-pointer flex flex-col gap-2">
                  <p className="font-sfLight text-[#1F3475]">{doc.title}</p>
                  <button 
                    onClick={() => window.open(doc.url, '_blank')}
                    className="bg-[#BDB295] text-black rounded px-4 py-2 text-sm hover:bg-[#D6CEB7]"
                  >
                    Открыть файл
                  </button>
                  <button 
                    onClick={() => copyToClipboard(doc.url)}
                    className="bg-transparent border border-[#BDB295] text-[#BDB295] rounded px-4 py-2 text-sm hover:bg-[#BDB295] hover:text-black transition"
                  >
                    Скопировать ссылку
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Блок справа */}
          <div className="w-full xs:w-[48%] mt-8 xs:mt-0">
            <p className="font-sfLight text-42px-16px text-center text-[#1F3475] mb-4">Документы по платным услугам</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentsBlock2.slice(0,2).map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-md shadow hover:shadow-lg transition cursor-pointer flex flex-col gap-2">
                  <p className="font-sfLight text-[#1F3475]">{doc.title}</p>
                  <button 
                    onClick={() => window.open(doc.url, '_blank')}
                    className="bg-[#BDB295] text-black rounded px-4 py-2 text-sm hover:bg-[#D6CEB7]"
                  >
                    Открыть файл
                  </button>
                  <button 
                    onClick={() => copyToClipboard(doc.url)}
                    className="bg-transparent border border-[#BDB295] text-[#BDB295] rounded px-4 py-2 text-sm hover:bg-[#BDB295] hover:text-black transition"
                  >
                    Скопировать ссылку
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Кнопка скачать все файлы первого блока */}
        <button
          onClick={() => openAllFiles(documentsBlock1)}
          className="bg-[#BDB295] text-black w-full rounded-b-[5px] py-3 mb-6 text-20px-11px font-sfRegular hover:text-[#1A2D61] transition"
        >
          Открыть все документы блока 1
        </button>

        {/* Блок 2 */}
        <div className="flex flex-col">
          <p className="font-sfLight text-42px-16px text-center text-[#1F3475] mb-4">
            Стандарты оказания стоматологической помощи
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
            {documentsBlock2.map((doc, idx) => (
              <div key={idx} className="bg-white p-4 rounded-md shadow hover:shadow-lg transition cursor-pointer flex flex-col gap-2">
                <p className="font-sfLight text-[#1F3475]">{doc.title}</p>
                <button 
                  onClick={() => window.open(doc.url, '_blank')}
                  className="bg-[#BDB295] text-black rounded px-4 py-2 text-sm hover:bg-[#D6CEB7]"
                >
                  Открыть файл
                </button>
                <button 
                  onClick={() => copyToClipboard(doc.url)}
                  className="bg-transparent border border-[#BDB295] text-[#BDB295] rounded px-4 py-2 text-sm hover:bg-[#BDB295] hover:text-black transition"
                >
                  Скопировать ссылку
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка скачать все файлы второго блока */}
        <button
          onClick={() => openAllFiles(documentsBlock2)}
          className="bg-[#BDB295] text-black w-full rounded-b-[5px] py-3 mt-6 text-20px-11px font-sfRegular hover:text-[#1A2D61] transition"
        >
          Открыть все документы блока 2
        </button>
      </div>
    </Layout>
  );
};

export default Page;
