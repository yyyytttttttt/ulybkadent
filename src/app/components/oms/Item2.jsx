"use client"
import Layout from "@/app/layouts/Layout";
import Item from "@/app/components/oms/Item";
import DownloadComponent from "@/app/components/documents/DownloadComponent";
import { useRef } from "react";
import Head from "next/head";

const page = () => {
    const downloadRefsBlock1 = useRef([]);
  const downloadRefsBlock2 = useRef([]);

  

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
      
      <div className="bg-custom-gradient py-[3%] rounded-[7px] mb-[2%]">
        <p className="font-sfRoundedBold text-42px-16px text-[#184FF8] text-center">
          Обязательное медицинское страхование (ОМС)
        </p>
      </div>
      <div className="bg-custom-gradient rounded-lg py-[4%] px-[4%] mb-[2%]">
        <p className="font-sfRoundedBold text-30px-12px text-[#184FF8] mb-[5%]">
          Права в системе ОМС
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Федеральный закон Российской Федерации от 29 ноября 2010 г. N 326-ФЗ
          «Об обязательном медицинском страховании в Российской Федерации»
        </p>
      </div>
      <div className="bg-custom-gradient rounded-lg py-[4%] px-[4%] mb-[2%] flex flex-col gap-8">
        <p className="font-sfRoundedBold text-30px-12px text-[#184FF8] mb-[5%] w-[70%]">
          Статья 16. Права и обязанности застрахованных лиц Застрахованные лица
          имеют право на:
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Бесплатное оказание им медицинской помощи медицинскими организациями
          при наступлении страхового случая: на всей территории Российской
          Федерации в объеме, установленном базовой программой обязательного
          медицинского страхования; на территории субъекта Российской Федерации,
          в котором выдан полис обязательного медицинского страхования, в
          объеме, установленном территориальной программой обязательного
          медицинского страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Выбор страховой медицинской организации путем подачи заявления в
          порядке, установленном правилами обязательного медицинского
          страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Замену страховой медицинской организации, в которой ранее был
          застрахован гражданин, один раз в течение календарного года не позднее
          1 ноября либо чаще в случае изменения места жительства или прекращения
          действия договора о финансовом обеспечении обязательного медицинского
          страхования в порядке, установленном правилами обязательного
          медицинского страхования, путем подачи заявления во вновь выбранную
          страховую медицинскую организацию;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Выбор медицинской организации из медицинских организаций, участвующих
          в реализации территориальной программы обязательного медицинского
          страхования в соответствии с законодательством Российской Федерации;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Выбор врача путем подачи заявления лично или через своего
          представителя на имя руководителя медицинской организации в
          соответствии с законодательством Российской Федерации;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Получение от территориального фонда, страховой медицинской организации
          и медицинских организаций достоверной информации о видах, качестве и
          об условиях предоставления медицинской помощи;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Защиту персональных данных, необходимых для ведения
          персонифицированного учета в сфере обязательного медицинского
          страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Возмещение страховой медицинской организацией ущерба, причиненного в
          связи с неисполнением или ненадлежащим исполнением ею обязанностей по
          организации предоставления медицинской помощи, в соответствии с
          законодательством Российской Федерации;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Защиту прав и законных интересов в сфере обязательного медицинского
          страхования. Обязанности в системе ОМС
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
          Федеральный закон Российской Федерации от 29 ноября 2010 г. N 326-ФЗ
          «Об обязательном медицинском страховании в Российской Федерации»
        </p>
      </div>
      <div className="bg-custom-gradient rounded-lg py-[4%] px-[4%] mb-[2%] flex flex-col gap-8">
        <p className="font-sfRoundedBold text-30px-12px text-[#184FF8] mb-[5%] w-[70%]">
            Статья 16. Права и обязанности застрахованных лиц Застрахованные лица обязаны:
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Бесплатное оказание им медицинской помощи медицинскими организациями при наступлении страхового случая: на всей территории Российской Федерации в объеме, установленном базовой программой обязательного медицинского страхования; на территории субъекта Российской Федерации, в котором выдан полис обязательного медицинского страхования, в объеме, установленном территориальной программой обязательного медицинского страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
        Выбор страховой медицинской организации путем подачи заявления в порядке, установленном правилами обязательного медицинского страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Замену страховой медицинской организации, в которой ранее был застрахован гражданин, один раз в течение календарного года не позднее 1 ноября либо чаще в случае изменения места жительства или прекращения действия договора о финансовом обеспечении обязательного медицинского страхования в порядке, установленном правилами обязательного медицинского страхования, путем подачи заявления во вновь выбранную страховую медицинскую организацию;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Выбор медицинской организации из медицинских организаций, участвующих в реализации территориальной программы обязательного медицинского страхования в соответствии с законодательством Российской Федерации;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Выбор врача путем подачи заявления лично или через своего представителя на имя руководителя медицинской организации в соответствии с законодательством Российской Федерации;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Получение от территориального фонда, страховой медицинской организации и медицинских организаций достоверной информации о видах, качестве и об условиях предоставления медицинской помощи;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Защиту персональных данных, необходимых для ведения персонифицированного учета в сфере обязательного медицинского страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Возмещение страховой медицинской организацией ущерба, причиненного в связи с неисполнением или ненадлежащим исполнением ею обязанностей по организации предоставления медицинской помощи, в соответствии с законодательством Российской Федерации;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Защиту прав и законных интересов в сфере обязательного медицинского страхования. Обязанности в системе ОМС
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Федеральный закон Российской Федерации от 29 ноября 2010 г. N 326-ФЗ «Об обязательном медицинском страховании в Российской Федерации»
        </p>
      </div>
      <div className="bg-custom-gradient rounded-lg py-[4%] px-[4%] mb-[2%] flex flex-col gap-8">
        <p className="font-sfRoundedBold text-30px-12px text-[#184FF8] mb-[5%] w-[70%]">
            Статья 16. Права и обязанности застрахованных лиц Застрахованные лица обязаны:
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Предъявить полис обязательного медицинского страхования при обращении за медицинской помощью, за исключением случаев оказания экстренной медицинской помощи;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Подать в страховую медицинскую организацию лично или через своего представителя заявление о выборе страховой медицинской организации в соответствии с правилами обязательного медицинского страхования;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Уведомить страховую медицинскую организацию об изменении фамилии, имени, отчества, места жительства в течение одного месяца со дня, когда эти изменения произошли;
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Осуществить выбор страховой медицинской организации по новому месту жительства в течение одного месяца в случае изменения места жительства и отсутствия страховой медицинской организации, в которой ранее был застрахован гражданин.
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Обязательное медицинское страхование детей со дня рождения до дня государственной регистрации рождения осуществляется страховой медицинской организацией, в которой застрахованы их матери или другие законные представители. После дня государственной регистрации рождения ребенка и до достижения им совершеннолетия либо после приобретения им дееспособности в полном объеме и до достижения им совершеннолетия обязательное медицинское страхование осуществляется страховой медицинской организацией, выбранной одним из его родителей или другим законным представителем.
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Выбор или замена страховой медицинской организации осуществляется застрахованным лицом, достигшим совершеннолетия либо приобретшим дееспособность в полном объеме до достижения совершеннолетия (для ребенка до достижения им совершеннолетия либо после приобретения им дееспособности в полном объеме до достижения совершеннолетия — его родителями или другими законными представителями), путем обращения в страховую медицинскую организацию из числа включенных в реестр страховых медицинских организаций, который размещается в обязательном порядке территориальным фондом на его официальном сайте в сети Интернет и может дополнительно опубликовываться иными способами.
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Для выбора или замены страховой медицинской организации застрахованное лицо лично или через своего представителя обращается в выбранную им страховую медицинскую организацию с заявлением о выборе (замене) этой страховой медицинской организации. На основании указанного заявления застрахованному лицу или его представителю страховой медицинской организацией выдается полис обязательного медицинского страхования в порядке, установленном правилами обязательного медицинского страхования. Если застрахованным лицом не было подано заявление о выборе (замене) страховой медицинской организации, такое лицо считается застрахованным той страховой медицинской организацией, которой он был застрахован ранее, за исключением случаев, предусмотренных пунктом 4 части 2 настоящей статьи.
        </p>
        <p className="font-sfMedium text-30px-12px text-[#184FF8] w-[90%]">
            Сведения о гражданах, не обратившихся в страховую медицинскую организацию за выдачей им полисов обязательного медицинского страхования, ежемесячно до 10-го числа направляются территориальным фондом в страховые медицинские организации, осуществляющие деятельность в сфере обязательного медицинского страхования в субъекте Российской Федерации, пропорционально числу застрахованных лиц в каждой из них для заключения договоров о финансовом обеспечении обязательного медицинского страхования. Соотношение работающих граждан и неработающих граждан, не обратившихся в страховую медицинскую организацию, которое отражается в сведениях, направляемых в страховые медицинские организации, должно быть равным.
        </p>
       
      </div>
      <div className="bg-custom-gradient py-[3%] px-[2%] rounded-[7px] mb-[2%]">
        <p className="flex flex-col font-sfMedium text-30px-12px text-[#184FF8] gap-2 ">
        <span className="w-[90%]">Территориальный отдел Управления Роспотребнадзора по Московской области в Ногинском районе</span>
        <span>В городах Балашиха, Реутов, Черноголовка, Электросталь</span>
        <span>Адрес: 142412, г. Ногинск, ул. Климова, д.37</span>
        <span>Горячая линия Управления Роспотребнадзора по Московской области: 8 (800) 100-5014</span>
        <span className="w-[85%]">Горячая линия защиты прав потребителей: режим работы с 9.00 до 22.00, телефон: +7 (499) 704-51-93</span>
        <span>Телефон: +7 (496) 515-58-10, Факс: +7 (496) 515-12-49, +7 (495) 529-26-34</span>
        <span>Сайт: <a href="https://xn--80apbncz.xn--p1ai" target="_blank" rel="noopener noreferrer">Роспотреб-надзор.рф</a>, <a href="https://50.rospotrebnadzor.ru" target="_blank" rel="noopener noreferrer">50.rospotrebnadzor.ru</a></span>
        <span>E-mail: <a href="mailto:org@50.rospotrebnadzor.ru">org@50.rospotrebnadzor.ru</a>, <a href="mailto:9@50.rospotrebnadzor.ru">9@50.rospotrebnadzor.ru</a></span>
        </p>


      </div>
        
        
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-8 md:gap-16 mb-[2%]">
        <Item
        Text="Общество с ограниченной"
        Text1="ответственностью «Страховая медицинская компания РЕСО-МЕД» (ООО «РЕСО-МЕД»)"
        Text2="Телефон горячей линии:"
        Text3="8 (800) 200 92 04"
        Text4="Телефон отдела по защите прав застрахованных:"
        Text5="8 (499) 372 79 15"
        
        href="https://mo.reso-med.com/?region"
        />
        <Item
        Text="Акционерное общество «Медицинская акционерная страховая компания»"
        Text1="(АО «МАКС-М»)"
        Text2="Телефон горячей линии:"
        Text3="8 (800) 555 50 03"
        Text4="Телефон отдела по защите прав застрахованных:"
        Text5="8 (499) 323 97 24"
        
        href="https://makcm.ru/?ysclid=lzwu3j0s2455488299"
        />
        <Item
        Text="Общество с ограниченной "
        Text1="ответственностью «Капитал Медицинское страхование»"
        Text2="Телефон горячей линии:"
        Text3="8 (800) 100 81 02"
        Text4="Телефон отдела по защите прав застрахованных:"
        Text5="8 (499)142 72 26"
        
        href="https://kapmed.ru/about/"
        />
        <Item
        Text="Акционерное общество"
        Text1="«Страховая компания «СОГАЗ-Мед» (АО «СОГАЗ-Мед»)"
        Text2="Телефон горячей линии:"
        Text3="8 (800) 100 07 02"
        Text4="Телефон отдела по защите прав застрахованных:"
        Text5="8 (495) 280 08 34"
        
        href="https://www.sogaz-med.ru/?ysclid=lzwu039i0243111112"
        />
       


      </div>
      <div className="bg-custom-gradient flex flex-col w-[100%] px-[2%] py-[2%] "> 
        <div className="flex justify-between w-[100%] flex-col">
        <p className="font-sfLight text-42px-16px text-[#1F3475] w-[100%] text-center">Стандарты (протоколы, рекомендации), регламентирующие 
        оказание медицинской стоматологической помощи</p>
          <div className="w-[100%] xs:w-[100%] flex flex-col justify-between">
           
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-8">
              {[
                { url: "/docs/pamyatka-ob-usloviyah-okazaniya-mediczinskoj-pomoshhi-o-srokah-ozhidaniya-mediczinskoj-pomoshhi.pdf", name: "pamyatka-ob-usloviyah-okazaniya-mediczinskoj-pomoshhi-o-srokah-ozhidaniya-mediczinskoj-pomoshhi", title: "Перечень жизненно необходимых лекарственных средств" },
                { url: "/docs/perechen-lekarstvennyh-preparatov-otpuskaemyh-naseleniyu.pdf", name: "perechen-lekarstvennyh-preparatov-otpuskaemyh-naseleniyu", title: "Перечень лекарственных препаратов, отпускаемых населению" },
                { url: "/docs/pamyatka-ob-usloviyah-okazaniya-mediczinskoj-pomoshhi-o-srokah-ozhidaniya-mediczinskoj-pomoshhi.pdf", name: "pamyatka-ob-usloviyah-okazaniya-mediczinskoj-pomoshhi-o-srokah-ozhidaniya-mediczinskoj-pomoshhi", title: "Памятка об условиях оказания медицинской помощи, о сроках ожидания медицинской помощи" },
                { url: "/docs/Federalnyj_zakon_ot_29_noyabrya_2010_g._N_326-FZ-5.pdf", name: "Federalnyj_zakon_ot_29_noyabrya_2010_g._N_326-FZ-5", title: "Федеральный закон  об ОМС" },
                { url: "/docs/kriterii-dostupnosti-i-kachestva-mediczinskoj-pomoshhi-1.pdf", name: "kriterii-dostupnosti-i-kachestva-mediczinskoj-pomoshhi-1", title: "Критерии доступности качества медицинской помощи" },
               
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
            className="bg-[#293D7A] text-white font-sfRegular mb-[2%] text-20px-11px w-[100%] rounded-b-[5px] py-[0.5%] transition-colors duration-300 hover:text-[#1A2D61]"
          >
            Скачать все
          </button>
    </Layout>
  );
};

export default page;
