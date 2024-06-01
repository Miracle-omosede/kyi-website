import React from 'react'
import Navbar from '@/components/NavbarAlt/NavbarAlt';
import AboutHeader from '@/components/AboutHeader/AboutHeader';

const About = () => {
  return (
    <main className="">
      <div className="relative z-50 top-0 right-0">
        <div className="absolute top-0 left-0 w-full">
          <Navbar/>
        </div>
      </div>
      <div>
      <AboutHeader/>
      </div>
    </main>
  )
}

export default About;