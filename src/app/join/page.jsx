import Navbar from '@/components/Navbar/Navbar';
import JoinHero from '@/components/joinHero/joinHero';
import React from 'react'

const page = () => {
    return (
        <main className="">
          <div className="relative z-50 top-0 right-0">
            <div className="absolute top-0 left-0 w-full">
              <Navbar/>
            </div>
          </div>
          <div>
            <JoinHero/>
          </div>
        </main>
      )
    }

export default page;