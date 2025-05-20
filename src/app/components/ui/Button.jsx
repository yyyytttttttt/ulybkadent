'use client';
import Link from "next/link";

const Button = ({ currentIndex, buttonTexts, links, onClick, openModal }) => {
  if (!buttonTexts || currentIndex < 0 || currentIndex >= buttonTexts.length) {
    return null; // Если данных нет, кнопка не отображается
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (links && links[currentIndex]) {
      // Используйте метод программной навигации, если это требуется
      if (typeof window !== 'undefined') {
        window.location.href = links[currentIndex];
      }
    } else if (openModal) {
      // Открытие модального окна, если ссылки нет
      openModal(`modal${currentIndex + 1}`);
    }

    if (onClick) {
      onClick(); // Дополнительная логика
    }
  };

  return (
    <>
      {links && links[currentIndex] ? (
        <Link href={links[currentIndex]} passHref>
          <button
            className="w-full bg-[#e8e2cf] rounded-b-[40px] xs:rounded-b-[20px] h-[50px] mb-[2%] transition hover:bg-[#d8d2bf]"
          >
            {buttonTexts[currentIndex]}
          </button>
        </Link>
      ) : (
        // Если ссылки нет, просто рендерим кнопку
        <button
          onClick={handleClick}
          className="w-full bg-[#e8e2cf] rounded-b-[40px] xs:rounded-b-[20px] h-[50px] mb-[2%] transition hover:bg-[#d8d2bf]"
        >
          {buttonTexts[currentIndex]}
        </button>
      )}
    </>
  );
};

export default Button;
