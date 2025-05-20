import Image from "next/image";

const Loc2 = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-[#BDB295] py-[4%] px-[4%] rounded-t-[20px] md:rounded-t-[40px] h-full">
        <div className="flex justify-between mb-[16%]">
          <div>
            <p className="font-sfRegular text-white text-30px-12px mb-[6%]">Рассрочка</p>
            <div className="w-[80%]">
              <Image
                className="w-full"
                src="/images/proc1.png" // Путь к изображению из папки public
                alt="us" // Текст для описания изображения
                width={102} // Ширина изображения
                height={44} // Высота изображения
              />
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              className="w-full"
              src="/images/proc.svg" // Путь к изображению из папки public
              alt="us" // Текст для описания изображения
              width={172} // Ширина изображения
              height={133} // Высота изображения
            />
          </div>
        </div>

        <p className="font-sfLight text-20px-11px text-white">
          Можно оформить онлайн сейчас, и выбрать день посещения клиники
        </p>
      </div>
      <a href="https://ecom.otpbank.ru/smart-form?tradeID=770105862000003&creditType=2&firstPayment=1"
        className="bg-[#E8E2CF] text-black py-[3%] transition-colors duration-300 hover:text-[#1F3475] w-full rounded-b-[20px] md:rounded-b-[40px] flex items-center justify-center"
      >
        перейти
      </a>
    </div>
  );
};

export default Loc2;
