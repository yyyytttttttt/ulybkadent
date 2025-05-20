import React from 'react'

const ServiceBlock = ({ serviceName, servicePrice }) => {
  return (
    
    <div className="flex justify-between">
        <p className="font-sfRegular text-16px-11px text-[#2E2E2E]">{serviceName}</p>
        <p className="font-black text-16px-11px text-[#2E2E2E]">{servicePrice}</p>
    </div>
      
  )
}

export default ServiceBlock