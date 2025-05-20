import React from 'react'
import Link from 'next/link'

const NavButton = ({ Text, onButtonClick, isHidden, link }) => {
  return link ? (
    <Link href={link} className={`${isHidden ? 'hidden md:flex' : ''} font-sfLight text-[#1F3475] border border-[#d0cfca] px-[2%] py-[2%] rounded-[10px] text-16px-11px transition-colors duration-500 hover:border-[#BDB295]`}>
      {Text}
    </Link>
  ) : (
    <button onClick={onButtonClick} className={`${isHidden ? 'hidden md:flex' : ''} font-sfLight text-[#1F3475] border border-[#d0cfca] px-[2%] py-[2%] rounded-[10px] text-16px-11px transition-colors duration-500 hover:border-[#BDB295]`}>
      {Text}
    </button>
  );
}

export default NavButton;
