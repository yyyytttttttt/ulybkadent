"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ModalCart from './ui/ModalCart';
import Modal12 from './ui/modals/Modal12';
import Modal13 from './ui/modals/Modal13';
import Modal10 from './ui/modals/Modal10';



const MobileMenu = () => {
    const [isOpen,setIsOpen]=useState(false)
    const toggleMenu=()=>{
        setIsOpen(!isOpen)


    }
    const [isModalOpen, setIsModalOpen] =useState(false);
    const [modalType, setModalType] = useState(null);

    const openModal =(type)=>{
        setModalType(type)
        setIsModalOpen(true)

        
    }
    const closeModal =()=>{
        setIsModalOpen(false)
        setModalType(null)


    }
  return (
    <nav className='flex items-center'>
        <button className='flex md:hidden  ' onClick={toggleMenu}>
            <svg className='text-[#E8E2CF] h-auto' width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.65625" y="0.609375" width="24.082" height="2.35363" rx="1.17681" fill="#E8E2CF" />
            <rect x="0.65625" y="7.32812" width="24.082" height="2.35363" rx="1.17681" fill="#E8E2CF" />
            <rect x="0.65625" y="14.0469" width="24.082" height="2.35363" rx="1.17681" fill="#E8E2CF" />
            </svg>
        </button>
        <div   className={`   fixed  top-0 left-0 w-full px-[2%] py-[4%] bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
            
      >
        <div className='flex justify-end'>
            <button
                    onClick={toggleMenu}
                    className="text-black mb-4 focus:outline-none "
                >
                    <svg className='text-[#E8E2CF]' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.203125" y="17.5391" width="24.082" height="2.35363" rx="1.17681" transform="rotate(-45 0.203125 17.5391)" fill="#E8E2CF" />
                    <rect width="24.082" height="2.35363" rx="1.17681" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 18.8984 17.5391)" fill="#E8E2CF" />
                    </svg>
                </button>
        </div>
            <div className='grid grid-cols-2 gap-4'>
                <ModalCart
                    imageSrc="/images/gr1.png"
                    Text="Локация" 
                    as='link'
                    href='/location'
                    
                            
                
                />
                <ModalCart
                    imageSrc="/images/minis.png"
                    Text="Режим работы" 
                    bgColor="#F5B940"
                    as="button"
                    onButtonClick={() => openModal('modal12')} // Желтый фон           
                
                />
                <ModalCart
                    imageSrc="/images/dental.png"
                    Text="Прайс-лист"
                    as='link'
                    href='/price-list'
                    bgColor="#F5B940"            
                
                />
                <ModalCart
                    imageSrc="/images/dent.png"
                    Text="Сотрудникам" 
                    bgColor="#3072B6"
                    as="button"
                    onButtonClick={() => openModal('modal13')} // Желтый фон              
                
                />
                <ModalCart
                    imageSrc="/images/dant.png"
                    Text="Информация"
                    bgColor="#7478D6"
                    as="button"
                    onButtonClick={() => openModal('modal10')}             
                
                />
                <ModalCart
                    imageSrc="/images/about.png"
                    Text="О нас"
                    bgColor="#AC4FD0" 
                    as='link'    
                    href='/AboutUs'
                            
                
                />
                <ModalCart
                    imageSrc="/images/otzovi.png"
                    Text="Отзывы" 
                    bgColor="#C5433F"
                    as='link'
                    href='https://yandex.ru/maps/org/ulybka/87295358996/reviews/?indoorLevel=1&ll=37.964313%2C55.819181&z=17'            
                
                />
                <ModalCart
                    imageSrc="/images/newq.png"
                    Text="News"
                    bgColor="#72AF63" 
                    as='link'
                    href='/News'            
                
                />
                
                
               
                
               
            </div>
             {/* Кнопка закрытия меню */}
            
            

        </div>
        {isModalOpen && modalType === 'modal12' && (
          <Modal12 onClose={closeModal} imageSrc="/images/forModal12.png" />
        )}
        {isModalOpen && modalType === 'modal10' && (
          <Modal10 onClose={closeModal} imageSrc="/images/forModal10.png" />
        )}
         {isModalOpen && modalType === 'modal13' && (
          <Modal13 onClose={closeModal} imageSrc="/images/forModal13.png" />
        )}
         {isModalOpen && modalType === 'modal14' && (
          <Modal14 onClose={closeModal} imageSrc="/images/forModal14.png" />
        )}

    </nav>
  )
}

export default MobileMenu