import React, { useState } from "react";
import dynamic from "next/dynamic";
import Modal13 from "./ui/modals/Modal13";
import Modal12 from "./ui/modals/Modal12";
import Link from "next/link";

// Динамическая загрузка компонента карты
const YandexMap = dynamic(() => import("./YandexMap"), { ssr: false });

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [activeItem, setActiveItem] = useState("information"); // По умолчанию открывается "information"

  const menuItems = {
    information: [
      { icon: "/images/fIcon.svg", text: "Лицензия", url: "./docs/downloaded-document.pdf" },
      { icon: "/images/fIcon1.svg", text: "Реквизиты", url: "/details" },
      { icon: "/images/fIcon2.svg", text: "Нормативные документы", url: "/documents" },
      { icon: "/images/fIcon3.svg", text: "Обязательное медицинское страхование", url: "/oms" },
      { icon: "/images/fIcon5.svg", text: "Вышестоящие и контролирующие органы", url: "/higher-authorities" },
    ],
    patients: [
      { icon: "/images/fIcon6.svg", text: "Прайс-лист", url: "/price-list" },
      {
        icon: "/images/fIcon7.svg",
        text: "Отзывы и предложения",
        url: "https://yandex.ru/maps/org/ulybka/87295358996/reviews/?indoorLevel=1&ll=37.964313%2C55.819181&z=17",
      },
      { icon: "/images/fIcon8.svg", text: "Режим работы", action: () => openModal("modal12") },
      { icon: "/images/fIcon9.svg", text: "Врачи", url: "/Team" },
    ],
    staff: {
      title: "Работа у нас",
      buttonText: "Перейти к вакансиям",
    },
    contacts: {
      title: "Как нас найти",
    },
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <div className="absolute z-[10000] w-[95.7vw] xs:w-[96.5vw] md:w-[96.3vw] lg:w-[100vw] max-w-[1400px]">
      <div className="relative flex bg-[#BDB295] lg:bg-white rounded-[13px] lg:rounded-none h-[465px] xs:h-[430px] sm:h-[670px] md:h-[620px] lg:h-auto py-[5%]">
        {/* Левый блок */}
        <div className="flex flex-col gap-8 w-[25%] lg:w-[18%] px-[0.5%]">
          {["information", "patients", "staff", "contacts"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-[#1F3475] font-sfRegular text-30px-12px py-[6%] px-[8%] xs:px-[15%] transition-colors duration-500 hover:bg-[#5978d4] hover:text-[#E8E2CF] rounded-[8px] xs:rounded-[18px] ${
                activeItem === item ? "bg-[#5978d4] text-[#E8E2CF]" : ""
              }`}
              onMouseEnter={() => setActiveItem(item)}
            >
              {item === "information"
                ? "Информация"
                : item === "patients"
                ? "Пациентам"
                : item === "staff"
                ? "Сотрудникам"
                : "Контакты"}
            </a>
          ))}
        </div>

        {/* Правый блок */}
        {activeItem && (
          <div
            className={`absolute top-4 lg:top-[13%] left-[30%] xs:left-[25%] lg:left-[20%] transition-opacity duration-300 opacity-100 visible w-[65%] sm:w-[75%] custom-lg:w-[80%] ${
              activeItem === "staff" ? "rounded-t-[60px]" : "rounded-[30px] lg:rounded-[60px]"
            } bg-[#BDB295]`}
          >
            {activeItem === "information" || activeItem === "patients" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-8 py-[3.5%] px-[3%]">
                {menuItems[activeItem].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center bg-[#E8E2CF] py-[4%] xs:py-[2%] lg:py-[4%] rounded-[19px] px-[4%] gap-4 lg:gap-8 transition-colors duration-300 hover:bg-[#6b83d2] ${
                      index === 3 ? "lg:col-start-2 lg:row-start-1" : index > 3 ? "" : "lg:col-start-1"
                    }`}
                  >
                    {item.action ? (
                      <button
                        onClick={item.action}
                        className="flex items-center gap-8 w-full text-left"
                      >
                        <img src={item.icon} alt="Иконка" className="w-[15%] xs:w-[10%] lg:w-[15%]" />
                        <span className="font-sfMedium text-20px-11px text-white text-start">
                          {item.text}
                        </span>
                      </button>
                    ) : (
                      <Link href={item.url} className="flex items-center gap-8 w-full">
                        <img src={item.icon} alt="Иконка" className="w-[15%] xs:w-[10%] lg:w-[15%]" />
                        <span className="font-sfMedium text-20px-11px text-white text-start">
                          {item.text}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : activeItem === "staff" ? (
              <div className="flex flex-col gap-4 h-[100%] relative">
                <h2 className="font-sfRegular text-white text-30px-12px px-[2%] py-[2%]">
                  {menuItems.staff.title}
                </h2>
                <div className="w-full flex items-center justify-center">
                  <img
                    src="/images/menuImg.png"
                    alt="Преимущества работы"
                    className="w-[60%] xs:w-[45%] md:w-[26%] h-auto mb-[2%]"
                  />
                </div>
                <button
                  onClick={() => openModal("modal13")}
                  className="bg-[#E8E2CF] text-20px-11px font-sfRegular text-black py-[1%] hover:bg-[#455aa0] rounded-b-[60px] w-full absolute top-[100%]"
                >
                  {menuItems.staff.buttonText}
                </button>
              </div>
            ) : activeItem === "contacts" ? (
              <div className="flex flex-col items-center">
                <YandexMap center={[55.827402, 37.955596]} zoom={14} className="" />
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Модальные окна */}
      {isModalOpen && modalType === "modal13" && (
        <Modal13 onClose={closeModal} imageSrc="/images/forModal7.png" />
      )}
      {isModalOpen && modalType === "modal12" && (
        <Modal12 onClose={closeModal} imageSrc="/images/forModal12.png" />
      )}
    </div>
  );
};

export default Menu;
