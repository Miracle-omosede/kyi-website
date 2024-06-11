import Navbar from '@/components/Navbar/Navbar'
import SponsorshipHero from '@/components/SponsorshipHero/SponsorshipHero'
import React from 'react'

const page = () => {
  return (
    <main className="">
    <div className="relative z-50 top-0 right-0">
      <div className="absolute top-0 left-0 w-full">
        <Navbar/>
      </div>
    </div>
    <div className='md:pt-[230px] pt-[120px]'>
      <SponsorshipHero/>
    </div>
  </main>
  )
}

export default page