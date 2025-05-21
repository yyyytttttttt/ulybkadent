import React from 'react'

const Item = ({Text,Text1,Text2,Text3,Text4,Text5,Text6,href}) => {
  return (
    <div className='bg-custom-gradient rounded-[40px] md:rounded-[70px] py-[8%] px-[2%] flex flex-col  gap-16'>
        <div>
            <p className='flex flex-col font-sfRegular text-30px-12px text-[#184FF8] text-center'>
                <span>{Text}</span>
                <span>{Text1}</span>
            </p>
        </div>
        <div className='flex'>
            <p className=' flex flex-col text-center font-sfRegular text-20px-11px text-[#184FF8] w-[50%]'>
                <span>{Text2}</span>
                <span>{Text3}</span>
            </p>
            <p className=' flex flex-col text-center font-sfRegular text-20px-11px text-[#184FF8]  w-[50%]' >
                <span>{Text4} </span>
                <span> {Text5} </span>
                <span>{Text6}</span>
            </p>

        </div>
        <a className='flex justify-center text-30px-12px font-sfRegular text-[#184FF8]   transition-colors duration-500 ease-in-out hover:text-[white] ' href={href}>перейти на сайт</a>
    </div>
  )
}

export default Item