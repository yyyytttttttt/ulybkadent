'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const imagesHygienist = [
  '/images/before1.png', '/images/before2.png', '/images/before3.png',
  '/images/before4.png', '/images/before5.png', '/images/before6.png',
  '/images/before7.png', '/images/before8.png', '/images/before9.png',
  '/images/before10.png', '/images/before11.png', '/images/before12.png',
  '/images/before13.png', '/images/before14.png', '/images/before15.png',
  '/images/before16.png', '/images/before17.png',
]

const imagesOrtho = [
  '/images/after.png', '/images/after1.png', '/images/after2.png',
  '/images/after3.png', '/images/after4.png', '/images/after5.png',
  '/images/after6.png', '/images/after7.png', '/images/after8.png',
  '/images/after9.png',
]

const WorkBlock = ({ title, description, icon, images }) => (
  <div className="bg-[#E8E2CF] p-4 md:p-8 rounded-[20px] mb-[2%]">
    <h2 className="text-[#184FF8] text-lg md:text-xl font-sfMedium mb-2 flex items-center gap-2">
      {title}
    </h2>
    <p className="text-[#293D7A] text-20px-11px mb-6">
      {description}
    </p>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-[30%] flex justify-center">
        <Image
          src={icon}
          alt={title}
          width={364}
          height={364}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="w-full md:w-[70%]">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className="relative"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Работа ${index + 1}`}
                width={300}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-[#293D7A] !w-6 !h-6 sm:!w-8 sm:!h-8 md:!w-10 md:!h-10 after:!text-lg sm:after:!text-xl md:after:!text-3xl"></div>
          <div className="swiper-button-next !text-[#293D7A] !w-6 !h-6 sm:!w-8 sm:!h-8 md:!w-10 md:!h-10 after:!text-lg sm:after:!text-xl md:after:!text-3xl"></div>
        </Swiper>
      </div>
    </div>
  </div>
)

const HygienistWorks = () => {
  return (
    <div>
      <div className='bg-[#E8E2CF] px-[4%] py-[4%] flex flex-col md:flex-row justify-between mb-[2%] rounded-[25px]'>
          <div className='flex flex-col justify-center gap-2 xs:gap-6 w-full md:w-[65%] mb-6 md:mb-0'>
            <div className='flex flex-col gap-4 mb-6'>
              <p className='font-sfRegular text-20px-11px text-[#293D7A]'>
                ✨ Улыбка, которой можно гордиться
              </p>
              <p className='font-sfLight text-16px-11px text-[#293D7A] leading-relaxed'>
                Каждая улыбка на этой странице — это история о переменах: не только внешности,
                но и уверенности в себе. Мы рады поделиться с вами результатами нашей работы — честно,
                с заботой и гордостью за каждого пациента.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-sfRegular text-20px-11px text-[#293D7A]'>💬 Мы ценим доверие</p>
              <p className='font-sfLight text-16px-11px text-[#293D7A] leading-relaxed'>
                Все фото размещены с разрешения пациентов. Благодарим каждого, кто согласился показать
                свою улыбку миру. Если вы мечтаете о подобных результатах — мы будем рады помочь вам сделать первый шаг.
              </p>
            </div>
          </div>
          <div className='w-full md:w-[30%] flex flex-col justify-center items-center'>
            <div className='mb-[2%] w-full'>
              <Image
                className='w-full'
                src='/images/rf.png'
                alt='us'
                width={50}
                height={50}
                quality={100}
              />
            </div>
            <p className='font-sfLight text-16px-11px text-[#293D7A] text-center'>
              Работа гигиенистов стоматологии “УЛЫБКА”
            </p>
          </div>
                </div>
      <WorkBlock
        title="🪥 Работы наших гигиенистов"
        description="Профессиональная чистка, удаление налёта и камня, восстановление естественного блеска улыбки."
        icon="/images/hygienist-promo.png"
        images={imagesHygienist}
      />

      <WorkBlock
        title="😬 Работы наших ортодонтов"
        description="Исправление прикуса: брекеты и элайнеры."
        icon="/images/ort.png"
        images={imagesOrtho}
      />
    </div>
  )
}

export default HygienistWorks
