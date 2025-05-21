'use client';
import React, { useState } from "react";
import dynamic from 'next/dynamic'; // Используем для динамического импорта компонентов
import Layout from "../../layouts/Layout";
import CustomSlider from "../CustomSlider";
import Image from "next/image";
import Galery from "../Galery";
import CustomSlider2 from "../CustomSlider2";
import Block from "../ui/Block";
import Usluga from "../ui/Usluga";
import Link from "next/link";
import CustomButton from "../CustomButton";
import Head from "next/head";
import Modal1 from "../ui/modals/Modal1";








const YandexMap = dynamic(() => import('../YandexMap'), { ssr: false });

const Galv = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  

 

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  


 

  return (
    
    
     
        

        
      
      
      
        <Layout>
        
        
        
        
        
          <CustomSlider />
          <div>
            <div className="mb-[2%]">
              <p className="font-sfMedium text-[#293D7A] text-30px-12px text-center mb-[2%]">
                Полный спектр Стоматологических Услуг
              </p>
              <p className="font-sfRegular text-[#293D7A] text-20px-11px text-center mb-[2%]">
                От профилактики до сложных операций — забота о вашей улыбке на высшем уровне.
              </p>
            </div>
            <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[4%]">
              <Usluga
                Text="Профилактическая стоматология"
                Ptext="Регулярные осмотры, профессиональная чистка зубов, фторирование."
                imageSrc="/images/cy.png"
              />
              <Usluga
                Text="Эстетическая стоматология"
                Ptext="Отбеливание зубов, виниры, бондинг."
                imageSrc="/images/chist2.png"
              />
              <Usluga
                Text="Ортодонтия"
                Ptext="Брекеты, прозрачные каппы"
                imageSrc="/images/chist3.png"
              />
              <Usluga
                Text="Имплантация зубов"
                Ptext="Установка дентальных имплантов для замены отсутствующих зубов."
                imageSrc="/images/chist4.png"
              />
              <Usluga
                Text="Детская стоматология"
                Ptext="Уход и лечение зубов у детей, профилактика кариеса, коррекция прикуса."
                imageSrc="/images/chist5.png"
              />
              <Usluga
                Text="Терапевтическая стоматология"
                Ptext="Лечение кариеса, пульпита, периодонтита."
                imageSrc="/images/chist6.png"
              />
              <Usluga
                Text="Хирургическая стоматология"
                Ptext="Удаление зубов, включая удаление зубов мудрости, хирургическое лечение периодонтита."
                imageSrc="/images/chist7.png"
              />
              <Usluga
                Text="Протезирование"
                Ptext="Изготовление и установка коронок, мостов, съемных протезов."
                imageSrc="/images/chist8.png"
              />
            </section>
          </div>
         
          <section className="flex justify-between bg-[#E8E2CF] rounded-[12px] px-[4.5%] py-[5%] xs:py-[8%] items-center mb-[2%]">
            <div>
              <p className="font-sfRoundedBold text-30px-12px mb-[6%]">
                Подарите здоровье и красоту
              </p>
              <p className="font-sfRegular text-20px-11px flex flex-col">
                <span>В стоматологии "Улыбка" вы можете приобрести</span> 
                <span>подарочный сертификат на любую сумму</span>
              </p>
            </div>
            <div className="w-[35%] xs:w-[33%]">
              <Image
              className="w-full h-auto"
                src="/images/pod.svg"
                alt="us"
                width={172}
                height={133}
              />
            </div>
          </section>
          <section>
            <Block
             text="Рассрочка"
             blockText="Можно оформить онлайн сейчас, и выбрать день посещения клиники"
             imageSrc="/images/null.svg"
             href="https://ecom.otpbank.ru/smart-form?tradeID=770105862000003&creditType=2&firstPayment=1"
        
        
            />
        
          </section>
          <section>
            <YandexMap
              center={[55.827402, 37.955596]}
              zoom={14}
              className="h-[500px] "
            />
        
        
            <CustomButton text="Как нас найти ?" />
          </section>
          <Galery />
        
          <Block
            text="О нас"
            blockText="Добро пожаловать в компанию — где забота о здоровье начинается с улыбки. Мы предлагаем высококачественные стоматологические услуги в дружелюбной и комфортной обстановке. Наша миссия - это не просто улучшить вашу улыбку, но и повысить качество вашей жизни через заботу о здоровье полости рта."
            imageSrc="/images/block1.png"
            href="/AboutUs"
          />
          <Block
            text="Акции и спецпредложения"
            blockText="Следите за нашими выгодными предложениями и акциями на стоматологические услуги. Сэкономьте на лечении, чистке и других процедурах, заботясь о здоровье зубов по доступным ценам."
            imageSrc="/images/block2.png"
            href="/price-list"
          />
          <Block
            text="Присоединяйтесь к нам во ВКонтакте!"
            blockText="Следите за последними новостями, акциями и полезными советами по уходу за зубами в нашем официальном аккаунте. Подписывайтесь, чтобы не пропустить обновления и получать полезную информацию прямо в своей ленте!"
            imageSrc="/images/block3.png"
            href="https://m.vk.com/ulybkadent"
          />
          <Block
            text="Присоединяйтесь к нам в Дзене"
            blockText="Читайте самые интересные статьи о здоровье зубов, узнайте о новейших методах лечения и профилактики, а также получайте советы по уходу за вашей улыбкой. Подписывайтесь, чтобы оставаться в курсе и заботиться о здоровье вместе с нами!"
            imageSrc="/images/block4.png"
            href="https://dzen.ru/id/67160b4d551d051402496432"
          />
          <div className="flex flex-col xs:flex-row justify-between bg-[#BDB295] mb-[2%] items-center px-[3%] py-[2%] rounded-[14px]">
            <div className="w-[20%] xs:w-[10%]">
              <img src="/images/gerb.png" alt="" />
            </div>
            <p className="w-[70%] xs:w-[50%] text-center text-[#E8E2CF] font-sfMedium text-30px-12px mb-[2%]">НЕЗАВИСИМАЯ ОЦЕНКА КАЧЕСТВА
              УСЛОВИЙ ОКАЗАНИЯ УСЛУГ
              МЕДИЦИНСКИМИ ОРГАНИЗАЦИЯМИ</p>
            <a className="py-[1%] px-[3%] bg-[#E8E2CF] transition-colors duration-500 hover:bg-[#BCC7D3] rounded-[5px] text-[#293D7A]" href="https://anketa.minzdrav.gov.ru/ambulator/1038b985-5708-41ef-95cb-85ba7586702c/3337">Оценить</a>
          </div>
          <div className="flex justify-between mb-[2%]">
            <CustomSlider2/>
            <Link href='/Team' className="flex flex-col transition-colors duration-500  bg-[#BDB295] hover:bg-[#BCC7D3] w-[26%] sm:w-[19%] items-center justify-center rounded-[5px] xs:rounded-[14px] ">
                <div className="w-[40%]">
                  <svg className="text-[#E8E2CF] w-full h-auto mb-[2%]" width="111" height="116" viewBox="0 0 111 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110.734 15.8431C111.021 10.3278 106.783 5.62368 101.268 5.33626L11.39 0.652433C5.87462 0.36501 1.17053 4.60309 0.883109 10.1185C0.595687 15.6338 4.83377 20.3379 10.3491 20.6253L90.2407 24.7887L86.0773 104.68C85.7899 110.196 90.028 114.9 95.5434 115.187C101.059 115.475 105.763 111.237 106.05 105.721L110.734 15.8431ZM32.5997 90.1795L107.441 22.7522L94.0541 7.89323L19.2128 75.3205L32.5997 90.1795Z" fill="#E8E2CF" />
                            </svg>
                </div>
              <p className="text-[#E8E2CF] font-sfMedium text-20px-11px w-full xs:w-[80%] text-center">Познакомиться
              с командой</p>
            </Link>
          </div>
          
          <section className="bg-[#E8E2CF] rounded-2xl px-[2%] py-[2%] mb-[2%] ">
            <div className="flex mb-[2%] ">
              <div className="w-[4%] mr-[2%]">
                <Image
                  src="/images/us.png"
                  alt="us"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
              <div className="flex items-center mr-[5%]">
                <p className="flex gap-[10px] w-full">
                  <span className="font-sfRegular text-20px-11px">Улыбка</span>
                  <span className="font-MichromaReg text-20px-11px">NEWS</span>
                </p>
              </div>
              <p className="font-sfRegular text-20px-11px flex items-center">
                Самые стоматологические новости
              </p>
            </div>
            
            <div>
              <p className="font-sfMedium text-[#1F3475] text-sm mb-[1%]">
                Комплексный уход для здоровой улыбки, как мы заботимся о вашем
                здоровье
              </p>
              <div className="flex bg-[#BCC7D3] rounded-[5px] w-[100%] md:w-[80%] justify-center py-[2%] px-[1%] mb-[1%]">
                <div className="mr-[2%] w-[10%] xs:w-[5%] flex-shrink-0">
                  <Image
                    className="w-[100%]"
                    src="/images/news1.png"
                    alt="us"
                    width={50}
                    height={50}
                    quality={100}
                  />
                </div>
                <div>
                  <p className="w-[100%] font-sfLight text-[14px]">
                    Здоровая и красивая улыбка — это не только эстетика, но и
                    показатель вашего общего здоровья. В стоматологической клинике
                    "Улыбка" мы предлагаем комплексный уход, включающий все
                    необходимые услуги для поддержания здоровья полости рта.
                  </p>
                </div>
              </div>
              <Link
                href="/News/smile-care"
                className="bg-[#BCC7D3] w-[25%] mb-[1%] rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:bg-[#A6B1BF]"
              >
                Узнать
              </Link>
            </div>
            <p className="font-sfMedium text-[#1F3475] text-sm mb-[1%]">
                  Пять советов по уходу за зубами
                </p>
                <div className="flex bg-[#BCC7D3] rounded-[5px] w-[100%] md:w-[80%] justify-center py-[1%] px-[1%] mt-4 mb-[1%]">
                  <div className="mr-[2%] w-[10%] xs:w-[5%] flex-shrink-0">
                    <Image
                      src="/images/news3.png"
                      alt="us"
                      width={50}
                      height={50}
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="w-[100%] font-sfLight text-[14px]">
                      Улыбка — это не только символ радости и счастья, но и важный показатель здоровья.
                      Чтобы ваша улыбка всегда была яркой, а зубы крепкими, следуйте нашим простым, но эффективным советам.
                    </p>
                  </div>
                </div>
                <Link
                  href="/News/top5-tooth-tips"
                  className="bg-[#BCC7D3] w-[25%] mb-[1%] rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:bg-[#A6B1BF]"
                >
                  Узнать
                </Link>
        
        
        
            <div>
              <button
                className="text-[#1C3A82] hover:text-[#BDB295] underline mb-[1%]"
                onClick={toggleExpand}
              >
                {isExpanded ? "свернуть" : "показать еще"}
              </button>
        
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                
                <div>
                  <p className="font-sfMedium text-[#1F3475] text-sm mb-[1%]">
                    Капы для исправления прикуса (Элайнеры)
                  </p>
                  <div className="flex bg-[#BCC7D3] rounded-[5px] w-[100%] md:w-[80%] justify-center py-[1%] px-[1%] mb-[1%]">
                    <div className="mr-[2%] w-[10%] xs:w-[5%] flex-shrink-0">
                      <Image
                        src="/images/news4.png"
                        alt="us"
                        width={50}
                        height={50}
                        quality={100}
                      />
                    </div>
                    <div>
                      <p className="w-[100%] font-sfLight text-[14px]">
                        Элайнеры – это современное и удобное решение для исправления прикуса.
                        Они представляют собой прозрачные капы, которые носятся на зубах и постепенно перемещают
                        их в нужное положение. Элайнеры являются отличной альтернативой традиционным брекетам
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/News/Ilainer"
                    className="bg-[#BCC7D3] w-[25%] rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:bg-[#A6B1BF]"
                  >
                    Узнать
                  </Link>
                </div>
                <div>
              <p className="font-sfMedium text-[#1F3475] text-sm mb-[1%]">
                Поддержите вашу улыбку в идеальной форме
              </p>
              <div className="flex bg-[#BCC7D3] rounded-[5px] w-[100%] md:w-[80%] justify-center py-[1%] px-[1%] mb-[1%]">
                <div className="mr-[2%] w-[10%] xs:w-[5%] flex-shrink-0">
                  <Image
                    src="/images/news2.png"
                    alt="us"
                    width={50}
                    height={50}
                    quality={100}
                  />
                </div>
                <div>
                  <p className="w-[100%] font-sfLight text-[14px]">
                    Профессиональная чистка — важный шаг для сохранения здоровья
                    зубов и поддержания естественной красоты улыбки. Регулярное
                    удаление зубного налета и камня не только предотвращает
                    развитие кариеса
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/News/cleaning-care"
              className="bg-[#BCC7D3] w-[25%] mb-[1%] rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:bg-[#A6B1BF]"
            >
              Узнать
            </Link>
              </div>
            </div>
          </section>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </Layout>
     
  
    
  );
};


export default  Galv;
