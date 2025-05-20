'use client'
import React, { useState } from 'react'
import Modal1 from '../ui/modals/Modal1';

const Block2 = ({Text,Text1,Text2,Text3}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Верхняя часть */}
      <div className="bg-[#BDB295] flex-grow py-[4%] sm:py-[8%] px-[8%] flex flex-col gap-12  sm:gap-16 rounded-t-[25px]  sm:rounded-t-[33px]">
        <p className="font-sfMedium text-20px-11px text-[#293D7A] flex flex-col">
          Ортодонтическое лечение на элайнерах <span>полный курс:</span>
        </p>
        <p className="font-sfMedium text-20px-11px text-white">{Text}</p>
        <p className="font-sfMedium text-20px-11px text-white">{Text1}</p>
        <p className="font-sfMedium text-20px-11px text-white">{Text2}</p>
        <p className="font-sfMedium text-30px-12px text-[#293D7A] text-end">{Text3}</p>
      </div>
      {/* Кнопка */}
      <button
        onClick={() => openModal("modal1")}
        className="font-sfRegular text-20px-11px py-[2%] bg-[#E8E2CF] flex w-full justify-center rounded-b-[25px] sm:rounded-b-[33px] hover:text-blue-600 transition-colors duration-300"
      >
        Записаться
      </button>
      {/* Модальное окно */}
      {isModalOpen && modalType === "modal1" && (
        <Modal1 onClose={closeModal} imageSrc="/images/forModal8.png" />
      )}
    </div>
  );
};

export default Block2