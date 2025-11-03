'use client';
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

// ============================================================================
// BeforeAfterCard - карточка сравнения изображений с перетаскиваемым слайдером
// ============================================================================
const BeforeAfterCard = ({
  item,
  aspectRatio = "4/3",
  rounded = "2xl",
  showCaption = false
}) => {
  const { id, before, after, single, caption, initial = 50 } = item;

  // Если это одиночное изображение, рендерим просто картинку
  if (single) {
    const roundedClass = `rounded-${rounded}`;
    const aspectRatioClass = {
      "4/3": "aspect-[4/3]",
      "3/2": "aspect-[3/2]",
      "1/1": "aspect-square",
      "16/9": "aspect-video"
    }[aspectRatio] || "aspect-[4/3]";

    return (
      <div className="group">
        <div className={`relative ${aspectRatioClass} ${roundedClass} overflow-hidden bg-gray-100 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300`}>
          <Image
            src={single.src}
            alt={single.alt}
            fill
            className="object-cover"
            quality={90}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {showCaption && caption && (
          <p className="mt-3 text-sm text-gray-600 text-center font-medium">
            {caption}
          </p>
        )}
      </div>
    );
  }

  const [sliderPosition, setSliderPosition] = useState(initial);
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const pendingPositionRef = useRef(null);

  // Обновление позиции через RAF для производительности
  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;

    pendingPositionRef.current = percentage;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        if (pendingPositionRef.current !== null) {
          setSliderPosition(pendingPositionRef.current);
          pendingPositionRef.current = null;
        }
        rafRef.current = null;
      });
    }
  }, []);

  // Обработчики мыши
  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Обработчики touch
  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  }, [updatePosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Клик по контейнеру - перемещение в точку клика
  const handleContainerClick = useCallback((e) => {
    if (e.target === e.currentTarget || e.target.closest('[data-slider-area]')) {
      updatePosition(e.clientX);
    }
  }, [updatePosition]);

  // Клавиатурная навигация
  const handleKeyDown = useCallback((e) => {
    const step = 2;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition(prev => Math.max(0, prev - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition(prev => Math.min(100, prev + step));
    }
  }, []);

  // Очистка RAF при размонтировании
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Глобальные обработчики для drag
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Маппинг aspect ratio
  const aspectRatioClass = {
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-square",
    "16/9": "aspect-video"
  }[aspectRatio] || "aspect-[4/3]";

  const roundedClass = `rounded-${rounded}`;

  return (
    <div className="group">
      {/* Контейнер карточки */}
      <div
        ref={containerRef}
        className={`relative ${aspectRatioClass} ${roundedClass} overflow-hidden bg-gray-100 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-ew-resize select-none`}
        onClick={handleContainerClick}
        data-slider-area
      >
        {/* Изображение "После" (нижний слой) */}
        <div className="absolute inset-0">
          <Image
            src={after.src}
            alt={after.alt}
            fill
            className="object-cover"
            quality={90}
            loading="lazy"
            decoding="async"
            draggable={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Изображение "До" (верхний слой с обрезкой) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="relative w-full h-full"
            style={{
              width: sliderPosition > 0 ? `${(100 / sliderPosition) * 100}%` : '200%'
            }}
          >
            <Image
              src={before.src}
              alt={before.alt}
              fill
              className="object-cover"
              quality={90}
              loading="lazy"
              decoding="async"
              draggable={false}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Вертикальная линия разделителя */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl transition-opacity"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Кнопка-хэндл с иконкой */}
          <button
            type="button"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-12 h-12 bg-white rounded-full shadow-lg
              flex items-center justify-center
              cursor-ew-resize select-none
              transition-all duration-200
              hover:scale-110 active:scale-95
              focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-opacity-50
              ${isDragging ? 'scale-110' : ''}
              ${isFocused ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}
            `}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-label={`Сравнение изображений: ${before.alt} и ${after.alt}`}
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            role="slider"
            tabIndex={0}
          >
            {/* Иконка < > */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600 pointer-events-none"
            >
              <path
                d="M8 4L4 8L8 12M16 12L20 8L16 4M4 8H20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Подсказки "До" и "После" */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 text-white text-sm font-medium rounded-md backdrop-blur-sm">
          До
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 text-white text-sm font-medium rounded-md backdrop-blur-sm">
          После
        </div>
      </div>

      {/* Подпись (опционально) */}
      {showCaption && caption && (
        <p className="mt-3 text-sm text-gray-600 text-center font-medium">
          {caption}
        </p>
      )}
    </div>
  );
};

// ============================================================================
// VeneerBeforeAfterGallery - основной компонент галереи
// ============================================================================
const VeneerBeforeAfterGallery = ({
  items = [],
  columns = { base: 1, md: 2 },
  aspectRatio = "4/3",
  rounded = "2xl",
  gap = "6",
  showCaption = false,
  title = "Работы по установке виниров"
}) => {
  // Формируем классы для колонок
  const columnClass = `grid grid-cols-${columns.base} md:grid-cols-${columns.md}`;
  const gapClass = `gap-${gap}`;

  return (
    <section className="bg-custom-gradient rounded-[5px] py-[4%] px-[4%] mb-[2%]">
      {/* Заголовок */}
      <h2 className="font-sfMedium text-[clamp(1rem,0.7143rem+1.4286vw,2rem)] text-[#184FF8] mb-6">
        {title}
      </h2>

      {/* Сетка карточек */}
      <div className={`grid grid-cols-1 md:grid-cols-${columns.md} ${gapClass}`}>
        {items.map((item) => (
          <BeforeAfterCard
            key={item.id}
            item={item}
            aspectRatio={aspectRatio}
            rounded={rounded}
            showCaption={showCaption}
          />
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Пример данных для демонстрации
// ============================================================================
export const demoItems = [
  {
    id: "1",
    before: { src: "/images/before111.png", alt: "Зубы до установки виниров 1" },
    after: { src: "/images/after111.png", alt: "Зубы после установки виниров 1" },
    caption: "Керамические виниры E-max",
    initial: 50
  },
  {
    id: "2",
    before: { src: "/images/before2.jpg", alt: "Зубы до установки виниров 2" },
    after: { src: "/images/after2.jpg", alt: "Зубы после установки виниров 2" },
    caption: "Реставрация передних зубов",
    initial: 50
  },
  {
    id: "3",
    before: { src: "/images/before3.jpg", alt: "Зубы до установки виниров 3" },
    after: { src: "/images/after3.jpg", alt: "Зубы после установки виниров 3" },
    caption: "Комплексная реставрация улыбки",
    initial: 50
  },
  {
    id: "4",
    single: { src: "/images/after4.jpg", alt: "Результат эстетической реставрации" },
    caption: "Эстетическая реставрация"
  }
];

// ============================================================================
// Экспорт компонента
// ============================================================================
export default VeneerBeforeAfterGallery;

// ============================================================================
// ПРИМЕР ИСПОЛЬЗОВАНИЯ В NEXT.JS СТРАНИЦЕ:
// ============================================================================
// import VeneerBeforeAfterGallery, { demoItems } from '@/components/BeforeAfterGallery';
//
// export default function DoctorPage() {
//   return (
//     <main>
//       <VeneerBeforeAfterGallery
//         items={demoItems}
//         columns={{ base: 1, md: 2 }}
//         aspectRatio="4/3"
//         rounded="2xl"
//         gap="6"
//         showCaption={true}
//         title="Работы по установке виниров"
//       />
//     </main>
//   );
// }
