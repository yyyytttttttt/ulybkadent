"use client";
import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import Loc from "./Loc";
import UniqueFeedbackModal from "./UniqueFeedbackModal";
import Loc1 from "./Loc1";
import Loc2 from "./Loc2";
import Loc3 from "./Loc3";
import dynamic from 'next/dynamic';
import Head from "next/head";
import CustomButton from "../CustomButton";
const YandexMap = dynamic(() => import('../YandexMap'), { ssr: false });



const Page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Head>
        <title>Наши Локации</title>
        <meta name="description" content="Локации клиники Улыбка. Найдите нас на карте и ознакомьтесь с нашими филиалами." />
      </Head>

      <section className="mb-[4%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-8 xl:gap-16 h-auto">
        <Loc />

        <div className="flex flex-col">
          <Loc1/>
          
          {/* Кнопка для открытия модального окна */}
          <button
            onClick={openModal}
            className="bg-[#E8E2CF] text-black py-[3%] transition-colors duration-300 hover:text-[#1F3475] w-[100%] rounded-b-[20px] md:rounded-b-[40px]"
          >
            Написать
          </button>
          
          {/* Компонент модального окна */}
          <UniqueFeedbackModal isVisible={isModalVisible} onClose={closeModal} />
        </div>

        <Loc2 />
        <Loc3
          Text="Whatsapp"
          Text2="Быстро отвечаем на ваши вопросы "
          imageSrc="/images/w.svg"
          Text3="Перейти"
          href="https://api.whatsapp.com/send/?phone=79030064229&text&type=phone_number&app_absent=0"
        />
        <Loc3
          Text="Telegram"
          Text2="Рассказываем обо всех акциях "
          imageSrc="/images/teleg.svg"
          Text3="Перейти"
          href="https://t.me/+xJSqiuKX2Ns1YjI6"
        />
        <Loc3
          Text="Отзывы"
          Text2="Наши посетители рекомендуют нас"
          imageSrc="/images/cart.png"
          Text3="Смотреть"
          href="https://yandex.ru/maps/org/ulybka/87295358996/reviews/?indoorLevel=1&ll=37.964313%2C55.819181&z=17"
        />
      </section>

      {/* Динамически загруженные компоненты */}
     <section>
        <YandexMap
        center={[55.827402, 37.955596]}
        zoom={14}
        className="h-[250px] xs:h-[500px]"/>
        <CustomButton
        text='Перейти'/>

     </section>
      
    </Layout>
  );
};

export default Page;
