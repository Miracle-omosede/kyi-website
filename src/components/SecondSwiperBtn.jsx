"use client";
import React from 'react'
import { useSwiper } from 'swiper/react'

const SecondSwiperBtn = () => {
  const swiper = useSwiper();
  
  return (
    <div className='flex space-x-2 mx-5 my-5'>
      <button 
        onClick={() => swiper.slidePrev()} 
        className="bg-white text-secondary p-2 rounded hover:bg-secondary hover:text-white transition-colors flex items-center justify-center border border-secondary"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15.75 19.5 8.25 12l7.5-7.5" 
          />
        </svg>
      </button>
      <button 
        onClick={() => swiper.slideNext()} 
        className="bg-white text-secondary p-2 rounded hover:bg-secondary hover:text-white transition-colors flex items-center justify-center border border-secondary"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m8.25 4.5 7.5 7.5-7.5 7.5" 
          />
        </svg>
      </button>
    </div>
  )
}

export default SecondSwiperBtn
