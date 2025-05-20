import React from "react";

const CopyButton = () => {
  const textToCopy = "ulybkadent@mail.ru";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Адрес скопирован!");
      
    } catch (err) {
      console.error("Ошибка при копировании: ", err);
    }
  };

  return (
    <div className="flex mr-[2 %]">
      <p className="mr-[5%] font-sfMedium text-white text-20px-11px">{textToCopy}</p>
      <button className="text-[#1f3475] underline underline-offset-4 font-sfRegular text-16px-11px flex items-center" onClick={handleCopy}>Копировать адрес</button>
    </div>
  );
};

export default CopyButton;
