"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from './ui/Button';

const CustomSlider2 = () => {
  

  return (
    <div className="relative w-full max-w-[70%] sm:max-w-[80%] h-full   ">
      {/* Кастомные стрелки со встроенными SVG */}
      <button className="swiper-button-custom-prev-2 absolute top-[90%] left-[50%] xs:left-[50%]  transform -translate-y-1/2 p-2 z-10">
        <img src="/images/prev.png" alt="Previous Slide" />
      </button>
      <button className="swiper-button-custom-next-2 absolute top-[90%] right-[3%] transform -translate-y-1/2 p-2 z-10">
        <img src="/images/sled.png" alt="Next Slide" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={500}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-custom-next-2',
          prevEl: '.swiper-button-custom-prev-2',
        }}
        
        
      >
        <SwiperSlide >
          <picture>
            
            
            
            <img src="/images/v1.png" alt="Slide 1" className="w-full" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            
            
            
            <img src="/images/v2.png" alt="Slide 2" className="w-full" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            
            
            
            <img src="/images/v3.png" alt="Slide 3" className="w-full" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            
            
            
            <img src="/images/v4.png" alt="Slide 4" className="w-full" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            
            
            
            <img src="/images/v5.png" alt="Slide 4" className="w-full" />
          </picture>
        </SwiperSlide>
      </Swiper>

      {/* Динамическая кнопка */}
     
    </div>
  );
};

export default CustomSlider2;
