import React, { useEffect, useRef } from 'react';

const YandexMap = ({ center = [55.751574, 37.573856], zoom = 10, className = '' }) => {
  const mapContainer = useRef(null); // Ссылка на контейнер карты
  const mapInstance = useRef(null); // Хранение ссылки на созданную карту

  useEffect(() => {
    const loadYmaps = () => {
      return new Promise((resolve) => {
        // Проверяем, загружен ли скрипт Яндекс.Карт
        if (window.ymaps) {
          resolve(); // Скрипт уже загружен
        } else if (!document.querySelector('script[src="https://api-maps.yandex.ru/2.1/?apikey=1c2eb2ae-c6c5-44bf-9a77-0ef737c2ed09&lang=ru_RU"]')) {
          const script = document.createElement('script');
          script.src = `https://api-maps.yandex.ru/2.1/?apikey=1c2eb2ae-c6c5-44bf-9a77-0ef737c2ed09&lang=ru_RU`;
          script.type = 'text/javascript';
          script.onload = () => resolve(); // Разрешаем промис после загрузки
          document.body.appendChild(script);
        } else {
          const existingScript = document.querySelector(
            'script[src="https://api-maps.yandex.ru/2.1/?apikey=1c2eb2ae-c6c5-44bf-9a77-0ef737c2ed09&lang=ru_RU"]'
          );
          existingScript.onload = () => resolve(); // Ждем загрузки, если скрипт уже подключен
        }
      });
    };

    loadYmaps().then(() => {
      if (!mapInstance.current && mapContainer.current) {
        window.ymaps.ready(() => {
          // Проверяем, что карта еще не создана
          if (!mapInstance.current) {
            mapInstance.current = new window.ymaps.Map(mapContainer.current, {
              center,
              zoom,
              controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
            });

            // Добавляем жестко заданные метки
            const placemarks = [
              {
                coordinates: [55.819277, 37.964388],
                iconPath: 'images/mark.png',
                iconSize: [71, 98],
                iconOffset: [-35, -49],
                balloonContent: 'ул. Заречная, д. 9',
              },
              {
                coordinates: [55.827402, 37.955596],
                iconPath: 'images/mark.png',
                iconSize: [71, 98],
                iconOffset: [-35, -49],
                balloonContent: 'ул. Звездная, д. 10',
              },
            ];

            placemarks.forEach(({ coordinates, iconPath, iconSize, iconOffset, balloonContent }) => {
              const placemark = new window.ymaps.Placemark(
                coordinates,
                { balloonContent },
                {
                  iconLayout: 'default#image',
                  iconImageHref: iconPath,
                  iconImageSize: iconSize,
                  iconImageOffset: iconOffset,
                }
              );
              mapInstance.current.geoObjects.add(placemark);
            });
          }
        });
      }
    });

    // Очистка карты при размонтировании
    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapContainer}
      className={`w-full h-96 focus:outline-none ${className}`} // Tailwind стили
    ></div>
  );
};

export default YandexMap;
