import React from 'react'
import DonateButton from '../DonateButton';

const Hero = () => {
  return (
    <div className='hero-bg h-screen flex items-center justify-center'>
       <div className='w-auto md:max-w-[1180px] flex flex-col gap-5 md:gap-[30px]'>
        <h1 className='font-poppins md:text-[60px] text-[30px] px-10 font-bold text-white text-center leading-[2.3rem] md:leading-[4.8rem]'>
        Believing in a sustainable future through faith, Hardwork, and Resilience. 
        </h1>
        <div className='flex justify-center items-center'>
          <DonateButton/>
        </div>
       </div>
    </div>
  )
}

export default Hero;