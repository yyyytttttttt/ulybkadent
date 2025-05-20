"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./ui/Button";
import Modal1 from "./ui/modals/Modal1";
import Image from "next/image";

const CustomSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const buttonTexts = [
    "Записаться",
    "Записаться",
    "Записаться",
    "Перейти",
    "Перейти",
    "Перейти",
  ];

  const links = [
    null,
    null,
    null,
    "/News/Ilainer",
    "/News",
    "https://m.vk.com/ulybkadent",
  ];

  return (
    <div className="relative w-full max-w-[1400px] mx-auto">
      <Swiper
        className="rounded-t-[20px] relative [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={700}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-custom-next",
          prevEl: ".swiper-button-custom-prev",
        }}
        onSlideChange={handleSlideChange}
      >
        {/* Видео слайд */}
        <SwiperSlide className="aspect-[5/5] xs:aspect-[12/5] overflow-hidden rounded-t-[20px]">
          <div className="w-full h-full rounded-t-[20px] overflow-hidden relative">
            <video
              className="w-full h-full object-cover rounded-t-[20px]"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/video-poster.jpg"
            >
              <source src="/video/slivid.mp4" type="video/mp4" />
            </video>

            {/* Лого и текст поверх видео */}
            <div className="absolute z-10 top-[10%] left-[40%] xs:left-[4%] w-[20%] xs:w-[10%]">
              <Image
                className="h-auto w-full"
                src="/images/fn.svg"
                alt="us"
                width={290}
                height={268}
                quality={100}
              />
            </div>
            <div className="absolute z-10 top-[80%] xs:top-[70%] left-[2%] -translate-y-1/2">
            <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/20 rounded-2xl p-4 shadow-xl  ">
              <p className="font-semibold text-[#1F3475] text-30px-12px drop-shadow-sm">
              «Лечение зубов под микроскопом»
              </p>
              <p className="font-sfRegular text-[#1F3475] text-30px-12px flex flex-col drop-shadow-sm">
                <span>Идеальная точность и комфорт благодаря</span>
                <span>новому дентальному микроскопу в стоматологии "Улыбка"</span>
              </p>
            </div>
</div>
          </div>
        </SwiperSlide>

        {/* Картинки-слайды */}
        {[
          { img: "/images/sl4.png", mobile: "/images/sl4480.png", alt: "Slide 1" },
          { img: "/images/sl5.png", mobile: "/images/sl5480.png", alt: "Slide 2" },
          { img: "/images/sl7.png", mobile: "/images/sl7480.png", alt: "Slide 3" },
          { img: "/images/sl8.png", mobile: "/images/sl8480.png", alt: "Slide 4" },
          { img: "/images/sl9.png", mobile: "/images/sl9480.png", alt: "Slide 5" },
        ].map(({ img, mobile, alt }, index) => (
          <SwiperSlide
            key={index}
            className="aspect-[5/5] xs:aspect-[12/5] overflow-hidden rounded-t-[20px]"
          >
            <div className="w-full h-full rounded-t-[20px] overflow-hidden">
              <picture>
                <source media="(max-width: 480px)" srcSet={mobile} />
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover rounded-t-[20px]"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные стрелки снизу по центру */}
      <button className="swiper-button-custom-prev absolute top-[50%] xs:top-[70%] md:top-[80%] left-[3%] xs:left-[60%] transform -translate-y-1/2 p-2 z-10">
        <img src="/images/prev.png" alt="Previous Slide" />
      </button>
      <button className="swiper-button-custom-next absolute top-[50%] xs:top-[70%] md:top-[80%] right-[3%] transform -translate-y-1/2 p-2 z-10">
        <img src="/images/sled.png" alt="Next Slide" />
      </button>

      {/* Кнопка */}
      <div className="text-center">
        <Button
          currentIndex={currentIndex}
          buttonTexts={buttonTexts}
          links={links}
          onClick={() =>
            console.log(`Клик по кнопке для Slide ${currentIndex + 1}`)
          }
          openModal={openModal}
        />
      </div>

      {/* Модалка */}
      {isModalOpen && modalType && (
        <Modal1 onClose={closeModal} imageSrc="/images/forModal8.png" />
      )}
    </div>
  );
};

export default CustomSlider;
