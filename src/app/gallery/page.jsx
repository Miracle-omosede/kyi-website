import Gallery from '@/components/Gallery/Gallery';
import Navbar from '@/components/NavbarAlt/NavbarAlt';
import React from 'react'

const page = () => {
    return (
        <main className="">
          <div className="relative z-50 top-0 right-0">
            <div className="absolute top-0 left-0 w-full">
              <Navbar/>
            </div>
          </div>
          <div className='md:pt-[90px] pt-[90px]'>
            <Gallery/>
          </div>
        </main>
      )
    }

export default page;