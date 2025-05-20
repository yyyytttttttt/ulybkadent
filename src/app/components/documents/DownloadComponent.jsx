"use client";

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import Image from 'next/image';

const DownloadComponent = forwardRef(({ fileUrl, fileName, title }, ref) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDownload = () => {
    // Помечаем, что клик был
    setIsClicked(true);

    // Открыть файл в новой вкладке
    window.open(fileUrl, '_blank');

    // И одновременно инициировать скачивание
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useImperativeHandle(ref, () => ({
    handleDownload,
  }));

  return (
    <div
      onClick={handleDownload}
      className="flex flex-col rounded-[20px] cursor-pointer transition-all duration-700"
    >
      <div className="w-[10%] xs:w-[10%] mb-[4%]">
        <Image
          src={isClicked ? '/images/green1.svg' : '/images/gray1.svg'}
          alt="Check Icon"
          width={24}
          height={24}
          className="transition-transform duration-500 transform scale-100 w-[100%]"
        />
      </div>
      <div className="bg-white rounded-2xl py-[6%] px-[4%]">
        <p className="font-sfRegular text-16px-11px text-[#2E2E2E]">
          {title}
        </p>
      </div>
    </div>
  );
});

DownloadComponent.displayName = 'DownloadComponent';
export default DownloadComponent;
