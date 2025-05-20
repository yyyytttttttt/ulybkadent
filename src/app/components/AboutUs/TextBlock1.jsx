import React from 'react'
import CustomButton from '../CustomButton'

const TextBlock = () => {
  return (
    <section>
        <p className='font-sfRoundedBold text-[#B49C80] text-42px-16px text-center mb-[2%]'>Наши принципы</p>
        <div className='flex flex-col sm:flex-row justify-between mb-[4%] gap-4 '>
            <div className='w-[100%] sm:w-[30%] bg-[#E8E2CF] h-[200px] sm:h-[267px] lg:h-[367px] flex-col  px-[2%] rounded-xl shadow-custom flex justify-center text-[#B49C80] hover:text-[#1F3475] transition-colors duration-700 cursor-pointer'>
                <p className='font-sfRoundedBold  text-30px-12px'>Инновации: </p>
                <p className='font-sfRoundedRegular  text-30px-12px'>Опыт более 32 лет
                в области стоматологии.</p>
            </div>
            <div className='w-[100%] sm:w-[30%] bg-[#E8E2CF] h-[200px] sm:h-[267px] flex-col lg:h-[367px]   px-[2%] rounded-xl shadow-custom flex  justify-center text-[#B49C80] hover:text-[#1F3475] transition-colors duration-700 cursor-pointer'>
                <p className='font-sfRoundedBold  text-30px-12px'>Забота: </p>
                <p className='font-sfRoundedRegular  text-30px-12px'>Более 50,000 улыбок сделано сияющими 
                и здоровыми.</p>
            </div>
            <div className='w-[100%] sm:w-[30%] bg-[#E8E2CF] h-[200px] sm:h-[267px] flex-col lg:h-[367px]  px-[2%] rounded-xl shadow-custom flex  justify-center text-[#B49C80] hover:text-[#1F3475] transition-colors duration-700 cursor-pointer'>
                <p className='font-sfRoundedBold  text-30px-12px'>план лечения: </p>
                <p className='font-sfRoundedRegular text-30px-12px'>Высокая степень удовлетворенности пациентов, подтвержденная отзывами.</p>
            </div>
        </div>
        <CustomButton
        text="Отзывы"/>

    </section>
  )
}

export default TextBlock