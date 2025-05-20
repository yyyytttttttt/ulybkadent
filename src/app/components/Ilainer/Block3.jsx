import Image from "next/image"

const Block3 = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#BDB295] items-center rounded-[15px] xs:rounded-[26px] mb-[2%] py-[4%] px-[2%]  ">
        <div className='w-[55%]'>
            <Image
                                src="/images/il5.png" // Путь к изображению из папки public
                                alt="us" // Текст для описания изображения
                                width={627} // Ширина изображения
                                height={627} // Высота изображения
                                quality={100}
            />
        </div>
        <div className="flex  flex-col gap-8 items-center sm:items-end ">
            <div className="flex flex-col items-center sm:items-end gap-8">
                <p className="font-sfMedium text-20px-11px w-[90%] text-[#293D7A]">Процесс лечения элайнерами:</p>
                <div className="w-[90%] flex flex-col gap-4 ">
                    <p className="font-sfLight text-20px-11px text-[#293D7A]">
                        <span className="text-white">Консультация:</span> Врач-ортодонт проведет осмотр и определит, подходят
                        ли вам элайнеры для исправления прикуса
                    </p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A]"  ><span className="text-white">3D-сканирование и моделирование:</span> Создаются цифровые отпечатки зубов
                    и план лечения, на основе которого изготавливаются
                    индивидуальные элайнеры</p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A]">
                        <span className="text-white">Ношение элайнеров:</span>  Пациент носит капы ежедневно, меняя их каждые
                        две недели. Визиты к стоматологу требуются для контроля прогресса
                    </p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A]">
                        <span className="text-white">Завершение лечения:</span> По завершении лечения пациент может
                        носить ретейнеры для закрепления результатов</p>
                
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Block3