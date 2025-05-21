"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

export default function GiftCertificateModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_h1p5vhp",
        "template_5h135lr",
        {
          to_name: "Уважаемый клиент",
          from_name: data.email,
          phone: data.phone,
          email: data.email,
        },
        "xblyuAFkwpL4y__vj"
      );

      reset();
      setSuccessMessage("✅ Заявка отправлена!");

      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 2000); // Закрытие через 2 сек после отправки
    } catch (error) {
      console.error("Ошибка при отправке", error);
      setSuccessMessage("❌ Ошибка при отправке!");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-[10000000] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-[#c4ad88] p-6 rounded-[30px] w-[95%] xs:w-[85%] sm:w-[75%] md:w-[65%] xl:w-[45%] 2xl:w-[27%] py-[8%] xs:py-[5%] md:py-[2%] relative shadow-lg transition-all duration-300 transform ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Крестик закрытия */}
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:scale-110 hover:text-gray-200 transition-transform"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-20px-11px font-sfRegular text-center text-white mb-4">
          Оформление подарочного сертификата
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Поле телефона */}
          <div>
            <label className="block text-20px-11px font-sfRegular text-white">
              Введите номер телефона
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white"
              {...register("phone", { required: "Введите номер телефона" })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Поле Email */}
          <div>
            <label className="block text-20px-11px font-sfRegular text-white">
              Введите ваш Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white"
              {...register("email", {
                required: "Введите ваш Email",
                pattern: { value: /^\S+@\S+$/i, message: "Некорректный Email" },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Информационное сообщение */}
          <p className="text-white text-20px-11px font-sfRegular text-center">
            После оплаты наш представитель свяжется с вами по телефону
          </p>

          {/* Сообщение после отправки */}
          {successMessage && (
            <p className="text-center text-lg font-semibold text-white">{successMessage}</p>
          )}

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="w-full bg-white text-[#c4ad88] py-2 rounded-md font-semibold hover:bg-opacity-80 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
