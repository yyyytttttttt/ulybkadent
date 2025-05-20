'use client'
import Header from '../components/Header';
import { useState } from 'react';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Modal1 from '../components/ui/modals/Modal1';
import SupportModal from './SupportModal';
import Head from 'next/head';
import UniqueFeedbackModal from "@/app/components/location/UniqueFeedbackModal";
const Layout = ({ children }) => {
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
    <div className='max-w-[1400px] mx-auto px-[2%] py-[1%] xl:px-[0]'>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <button
        className="fixed bottom-[50%] right-2 bg-[#d9d9d9] text-[#1F3475] font-sfMedium text-16px-11px py-[1%] xs:py-[0.4%] px-[4%] xs:px-[2.5%] rounded-l-[25px] shadow-lg transition-transform transform hover:scale-105 focus:outline-none z-50"
        onClick={() => openModal('modal1')}
      >
        Записаться
      </button>
      <button
        className="fixed bottom-[42%] right-2 bg-[#d9d9d9] text-[#1F3475] font-sfMedium text-16px-11px py-[1%] xs:py-[0.4%] px-[4%] xs:px-[2.5%] rounded-l-[25px] shadow-lg transition-transform transform hover:scale-105 focus:outline-none z-50"
        onClick={() => openModal('support')}
      >
        поддержка
      </button>
      <section className='h-[200px]'></section>

      {isModalOpen && modalType === 'modal1' && (
        <Modal1 onClose={closeModal} imageSrc="/images/forModal8.png" />
      )}

      {isModalOpen && modalType === 'support' && (
        <SupportModal onClose={closeModal} />
      )}
    </div>
  );
};

export default Layout;
