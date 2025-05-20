import React, { useState, useEffect } from 'react';

const UniqueFeedbackModal = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setTimeout(() => {
        setIsModalOpen(true);
      }, 10); // Небольшая задержка для плавного открытия
    } else {
      setIsModalOpen(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 500); // Задержка соответствует длительности анимации для плавного исчезновения
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      onClose();
    }, 500); // Задержка перед вызовом onClose для завершения анимации
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'uniqueFeedbackModal') {
      handleClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mqazgqvv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Сообщение отправлено');
        setFormData({ phone: '', email: '', message: '' });
        handleClose(); // Закрыть модальное окно после успешной отправки
      } else {
        alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Произошла ошибка при отправке вашего сообщения.');
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      id="uniqueFeedbackModal"
      onClick={handleOverlayClick}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 transition-opacity duration-500 ${
        isModalOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-[#d0bf9f] p-10 rounded-[40px] shadow-lg w-full max-w-2xl max-h-[90vh] h-auto relative overflow-y-auto transform transition-transform duration-500 ${
          isModalOpen ? 'scale-100' : 'scale-50'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-[#1F3475] transition-transform transform hover:scale-110"
        >
          <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2075_26535)">
              <path d="M4.08505 -0.133003C2.4238 0.272221 0.997085 1.7251 0.615976 3.38554C0.342359 4.57156 0.547572 5.96515 1.14367 6.98315C1.28047 7.21047 5.23815 11.2825 9.93849 16.0365L18.4988 24.6846L9.82123 33.4809C0.479167 42.9494 0.73324 42.6628 0.371675 44.0563C0.0882861 45.1929 0.244639 46.3691 0.830961 47.4859C1.74953 49.2353 3.90915 50.0853 6.19581 49.601C7.56389 49.3045 7.20233 49.6307 16.4955 40.2413C21.2252 35.4675 25.1438 31.5537 25.1926 31.5537C25.2415 31.5537 29.1601 35.4577 33.8897 40.2413C41.8637 48.2964 42.538 48.9487 43.1243 49.2254C45.1471 50.1743 47.5901 49.7888 48.9875 48.2964C50.3068 46.8929 50.6097 44.7383 49.7498 42.9296C49.4664 42.3267 48.7823 41.6151 40.6911 33.4612L31.9353 24.6549L40.4468 16.0167C45.753 10.6401 49.0559 7.22036 49.2123 6.94361C49.6423 6.1727 49.7986 5.44132 49.7498 4.38378C49.6911 3.24717 49.4566 2.55532 48.841 1.7251C47.639 0.114082 45.4598 -0.567883 43.5641 0.0844345C42.4794 0.450123 41.9908 0.91465 33.5086 9.50345L25.2024 17.9045L16.6519 9.28601C7.4564 0.0350113 7.68116 0.232685 6.33261 -0.123123C5.65834 -0.301025 4.76909 -0.301025 4.08505 -0.133003Z" fill="#1F3475"/>
            </g>
            <defs>
              <clipPath id="clip0_2075_26535">
                <rect width="49.112" height="49.112" fill="white" transform="translate(0.226562 0.914062)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label htmlFor="uniquePhone" className="text-[#1F3475] font-sfLight">Введите номер телефона</label>
            <input
              type="tel"
              id="uniquePhone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+79999999999"
              required
              className="px-4 py-2 rounded-lg outline-none bg-[#BDB295] w-full text-white placeholder-white"
            />

            <label htmlFor="uniqueEmail" className="text-[#1F3475] font-sfLight">Введите ваш Email</label>
            <input
              type="email"
              id="uniqueEmail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="улыбка@улыбка.ру"
              required
              className="px-4 py-2 rounded-lg outline-none bg-[#BDB295] w-full text-white placeholder-white"
            />

            <label htmlFor="uniqueMessage" className="text-[#1F3475] font-sfLight">Оставьте сообщение</label>
            <textarea
              id="uniqueMessage"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              placeholder="Здравствуйте, посещал(а) ваш филиал..."
              required
              className="px-4 py-2 rounded-lg outline-none bg-[#BDB295] w-full text-white placeholder-white"
            ></textarea>

            {/* Скрытое поле для второй почты */}
            <input type="hidden" name="_cc" value="alenasai@yandex.ru" />

            <button
              type="submit"
              className="bg-[#d0bf9f] text-[#1F3475] border border-[#1F3475] px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#1F3475] hover:text-white"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeedbackModal;
