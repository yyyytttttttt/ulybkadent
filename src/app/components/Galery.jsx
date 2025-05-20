import React, { useState } from 'react'
import Card from './ui/Card';
import Modal1 from './ui/modals/Modal1';
import Modal2 from './ui/modals/modal2';
import Modal3 from './ui/modals/modal3';
import Modal4 from './ui/modals/modal4';
import Modal5 from './ui/modals/modal5';
import Modal6 from './ui/modals/modal6';
import Modal7 from './ui/modals/modal7';
import Modal8 from './ui/modals/modal8';



const Galery = () => {
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
    <div>
        <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[2%]">
            <Card imageSrc="/images/block1.svg" 
              altText="Card 1" 
              Text="Удобное онлайн-бронирование и консультации " 
              buttonText="Записаться"
              onButtonClick={() => openModal('modal1')}

            />
            <Card imageSrc="/images/card2.svg" 
              altText="Card 1" 
              Text="Доступность и удобство " 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal2')}
            />
            <Card imageSrc="/images/card3.svg" 
              altText="Card 1" 
              Text="Ваш ДМС полис - ключ к заботе о зубах" 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal3')}
            />
            <Card imageSrc="/images/card4.svg" 
              altText="Card 1" 
              Text="Семейная стоматология" 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal4')}
            />
            <Card imageSrc="/images/card5.svg" 
              altText="Card 1" 
              Text="Дружелюбный и внимательный персонал" 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal5')}
            />
            <Card imageSrc="/images/card6.svg" 
              altText="Card 1" 
              Text="Персональный план лечения для каждой улыбки" 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal6')}
            />
            <Card imageSrc="/images/card7.svg" 
              altText="Card 1" 
              Text="Комплексный уход за зубами и дёснами " 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal7')}
            />
            <Card imageSrc="/images/card8.svg" 
              altText="Card 1" 
              Text="Профессиональная чистка для сияющей улыбки " 
              buttonText="Узнать"
              onButtonClick={() => openModal('modal8')}
            />
            
          
          
        </section>
        {isModalOpen && modalType === 'modal1' && (
          <Modal1 onClose={closeModal} imageSrc="/images/forModal8.png" />
        )}
        {isModalOpen && modalType === 'modal2' && (
          <Modal2 onClose={closeModal} 
          imageSrc="/images/forModal1.1.png" />
        )}
        {isModalOpen && modalType === 'modal3' && (
          <Modal3 onClose={closeModal} imageSrc="/images/forModal2.png" />
        )}
        {isModalOpen && modalType === 'modal4' && (
          <Modal4 onClose={closeModal} imageSrc="/images/forModal3.png" />
        )}
        {isModalOpen && modalType === 'modal5' && (
          <Modal5 onClose={closeModal} imageSrc="/images/forModal4.png" />
        )}
        {isModalOpen && modalType === 'modal6' && (
          <Modal6 onClose={closeModal} imageSrc="/images/forModal5.png" />
        )}
        {isModalOpen && modalType === 'modal7' && (
          <Modal7 onClose={closeModal} imageSrc="/images/forModal6.png" />
        )}
        {isModalOpen && modalType === 'modal8' && (
          <Modal8 onClose={closeModal} imageSrc="/images/forModal7.png" />
        )}


        
    </div>
  )
}

export default Galery