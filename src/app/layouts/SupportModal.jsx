'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import UniqueFeedbackModal from '../components/location/UniqueFeedbackModal';

const SupportModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showUniqueModal, setShowUniqueModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleMailClick = (e) => {
    e.preventDefault();
    setShowUniqueModal(true);
  };

  const handleCloseUnique = () => {
    setShowUniqueModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative rounded-[30px] max-w-[1100px] w-full shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-[#1F3475] text-2xl font-bold focus:outline-none"
                onClick={handleClose}
              >
                ✕
              </button>
              <div className='overflow-hidden rounded-sm'>
                <Image
                  src="/images/mod.png"
                  alt="Поддержка"
                  width={900}
                  height={900}
                  className="w-full object-contain rounded-sm"
                />
              </div>
              <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-[5%]">
                <div className="flex justify-center items-end gap-x-6 md:gap-x-8">
                  {[
                    { src: '/images/fe.svg', href: 'https://wa.me/79030064229', label: 'WhatsApp' },
                    { src: '/images/fe1.svg', href: 'tel:+78001013174', label: 'Телефон' },
                    { src: '/images/fe2.svg', href: '#', label: 'Почта', isMail: true },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.isMail ? undefined : "_blank"}
                      rel={item.isMail ? undefined : "noopener noreferrer"}
                      onClick={item.isMail ? handleMailClick : undefined}
                      className="flex flex-col items-center group transition-transform hover:scale-105"
                    >
                      <div className="w-[35px] xs:w-[55px] h-[35px] xs:h-[55px] md:w-[90px] md:h-[90px]">
                        <Image
                          src={item.src}
                          alt={item.label}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showUniqueModal && (
        <UniqueFeedbackModal isVisible={showUniqueModal} onClose={handleCloseUnique} />
      )}
    </>
  );
};

export default SupportModal;
