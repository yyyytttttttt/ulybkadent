import Image from "next/image"

const Block = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#BDB295] items-center rounded-[15px] xs:rounded-[26px] mb-[2%] py-[4%] px-[2%]">
        <div className='w-[55%]'>
            <Image
                                src="/images/il3.png" // Путь к изображению из папки public
                                alt="us" // Текст для описания изображения
                                width={627} // Ширина изображения
                                height={627} // Высота изображения
                                quality={100}
            />
        </div>
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center sm:items-end"  >
                <p className="font-sfMedium text-20px-11px text-[#293D7A] w-[90%]">Преимущества элайнеров:</p>
                <div className="w-[90%] flex flex-col gap-4">
                    <p className="font-sfLight text-20px-11px text-[#293D7A]">
                        <span className="text-white">Эстетика:</span> Элайнеры прозрачны и практически незаметны на зубах,
                        что делает их идеальными для тех, кто заботится о своем внешнем виде
                    </p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A]"  ><span className="text-white">Комфорт:</span> Капы изготавливаются из гладкого пластика, не вызывающего раздражения десен и щек, как это бывает с металлическими брекетами</p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A]">
                        <span className="text-white">Съемность:</span> Элайнеры можно снимать во время еды и чистки зубов,
                        что упрощает поддержание гигиены полости рта
                    </p>
                    <p className="font-sfLight text-20px-11px text-[#293D7A]">
                        <span className="text-white">Меньше визитов к стоматологу:</span> Пациенту нужно реже посещать стоматолога
                        для регулировки, так как весь процесс лечения планируется заранее</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Block