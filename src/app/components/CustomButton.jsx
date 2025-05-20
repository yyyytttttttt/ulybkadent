import React from 'react'
import Link from 'next/link'

const CustomButton = ({text ,href='https://yandex.ru/maps/org/ulybka/87295358996/reviews/?indoorLevel=1&ll=37.964313%2C55.819181&z=17'}) => {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#E8E2CF] w-full rounded-tl-[0] rounded-tr-[0] rounded-br-[10px] rounded-bl-[10px] pt-[1%] pb-[1%] mb-[2%] block text-center transition-colors duration-300 hover:text-[#1F3475]"
    >
      <p>{text}</p>
</Link>

  )
}

export default CustomButton