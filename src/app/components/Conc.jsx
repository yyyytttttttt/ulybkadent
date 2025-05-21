'use client';
import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import GiftCertificateModal from '../components/GiftCertificateForm';
const Conc = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <section>
        <div className="flex justify-between mb-[2%]">
          <div className="flex flex-col font-sfRoundedBold text-40px-11px gap-16 text-[#B49C80] w-[75%]">
            <div className="w-full xs:w-[90%] mb-[2%]">
              <p className="text-end mb-[4%]">Подарочные сертификаты «Улыбка»</p>
              <p className="text-start-start font-sfRegular">
                дарите здоровье и уверенность в улыбке! 🎁
              </p>
            </div>
            <div className="flex flex-col justify-between tracking-[-0.02em] gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-sfRegular text-20px-11px py-[1%] w-[35%] md:w-[25%] rounded-[28px] bg-[#e8e2cf] transition-colors duration-700 hover:bg-[#BDB295] hover:text-white"
              >
                купить онлайн
              </button>
              <div>
                <p className="font-sfRegular text-20px-11px">
                  💙 Идеальный подарок для родных, друзей и коллег – профессиональный уход за зубами,
                  красивая улыбка и забота о здоровье. Оформите сертификат онлайн за 2 минуты и
                  порадуйте близких!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-[40%]">
            <img className='w-full h-auto' src="/images/pod2.png" alt="" />
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center gap-4 md:justify-between items-center bg-[#E8E2CF] py-[3%] px-[2%] md:px-[0.5%] rounded-[34px] md:rounded-[54px] mb-[2%]">
  <div className="w-full md:w-[34%] relative flex justify-center ">
    
      
      <img className='' src="/images/w1.png" alt="" />
    
    <button
      onClick={() => setIsModalOpen(true)}
      className="absolute left-1/2 top-[90%] py-[2%] transform -translate-x-1/2 w-[40%] text-center flex justify-center bg-black bg-opacity-30 text-white font-sfRegular text-20px-11px rounded-full hover:bg-opacity-50 transition duration-700"
    >
      купить онлайн
    </button>
  </div>

  <div className="w-full md:w-[34%] relative flex justify-center">
    <picture>
      <source srcSet="/images/w2.png" type="image/webp" />
      <img src="/images/w2.png" alt="" />
    </picture>
    <button
      onClick={() => setIsModalOpen(true)}
      className="absolute left-1/2 top-[90%] py-[2%] transform -translate-x-1/2 w-[40%] text-center flex justify-center bg-black bg-opacity-30 text-white font-sfRegular text-20px-11px rounded-full hover:bg-opacity-50 transition duration-700"
    >
      купить онлайн
    </button>
  </div>

  <div className="w-full md:w-[34%] relative flex justify-center">
    <picture>
      <source srcSet="/images/w3.png" type="image/webp" />
      <img src="/images/w3.png" alt="" />
    </picture>
    <button
      onClick={() => setIsModalOpen(true)}
      className="absolute left-1/2 top-[90%] py-[2%] transform -translate-x-1/2 w-[40%] text-center flex justify-center bg-black bg-opacity-30 text-white font-sfRegular text-20px-11px rounded-full hover:bg-opacity-50 transition duration-700"
    >
      купить онлайн
    </button>
  </div>
</div>


        <div>
          <p className="font-sfRoundedBold text-center text-42px-16px text-[#B49C80] mb-[4%]">
            Как это работает?
          </p>
          <section>
            <div className="flex flex-col sm:flex-row justify-between mb-[4%] gap-4">
              {[
                {
                  title: 'Выберите номинал',
                  text: [
                    '🎟 3 000 ₽ – забота о здоровье зубов.',
                    '🎟 5 000 ₽ – профессиональный уход',
                    '🎟 10 000 ₽ – уверенность в улыбке.',
                  ],
                },
                {
                  title: 'Заполните данные получателя',
                  text: ['Добавьте имя, email и телефон.'],
                },
                {
                  title: 'Получите сертификат',
                  text: [
                    'Мы отправим его вам или получателю на электронную почту.',
                    'Также вы можете забрать физический сертификат в стоматологии УЛЫБКА.',
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[100%] sm:w-[30%] bg-[#E8E2CF] h-[200px] sm:h-[267px] lg:h-[367px] flex-col px-[2%] rounded-xl shadow-custom flex justify-center text-[#B49C80] hover:text-[#1F3475] transition-colors duration-700 cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    <p className="font-sfRoundedBold text-30px-12px">{item.title}</p>
                    {item.text.map((line, idx) => (
                      <p key={idx} className="font-sfRoundedRegular text-20px-11px">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mb-[2%]">
          <p className="text-center font-sfRoundedBold text-30px-12px text-[#B49C80]">
            Готовы порадовать близких?
          </p>
          <p className="text-center font-sfRegular text-30px-12px text-[#B49C80]">
            Выберите сертификат и оформите за пару минут!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-sfRegular text-20px-11px w-[30%] md:w-[20%] py-[1%] rounded-[28px] bg-[#e8e2cf] transition-colors duration-700 hover:bg-[#BDB295] hover:text-white"
          >
            купить онлайн
          </button>
        </div>
      </section>

      {/* Модальное окно */}
      <GiftCertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};

export default Conc;
