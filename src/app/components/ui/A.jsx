import React from 'react';

const A = ({ as: Component = 'button', onButtonClick, Text, ...props }) => {
  return (
    <Component 
      onClick={onButtonClick} 
      className="font-sfLight text-[#1F3475] text-16px-11px transition-colors duration-300 hover:text-[#BDB295]" 
      {...props}
    >
      {Text}
    </Component>
  );
};

export default A;
