import React from 'react'
import Footer from '../Footer/Footer'
import Link from 'next/link'

const AllProjectsMain = () => {
  return (
    <div>
    <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5 mt-[70px]">
      <div>
        <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
        Discover Our Projects that Inspire Change
        </h1>
      </div>

      <div>
          <p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">
          Each project is a testament to our unwavering commitment to creating positive change, empowering communities, and fostering a brighter future.
          </p>
        </div>


        {/* card group */}
        <div className='flex md:items-start items-center flex-wrap md:justify-between justify-center  gap-[25px] my-[80px]'>

            {/* individual cards */}
            {/* card 1 */}
        <Link href="/healthWelness">
        <div className="flex flex-col md:px-0 px-5 gap-[31px] w-[350px] rounded-[8px] shadow-lg">
        <div className="">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%202906.png" className="w-full h-[250px] object-cover rounded-[8px]" />
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-[15px] p-7">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Health and Wellness Awareness Project
              </h1>
              <p className="md:text-[14px] text-[13px] tracking-wide">
              At Kachem Young Initiative, we are dedicated to promoting basic health education and raising awareness ...
              </p>
            </div>

       
          </div>
        </div> 
        </Link>

        {/* card 2 */}
        <Link href="/literacyDrive">
        <div className="flex flex-col md:px-0 px-5 gap-[31px] w-[350px] rounded-[8px] shadow-lg">
        <div className="">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%202906%20(1).png" className="w-full h-[250px] object-cover rounded-[8px]" />
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-[15px] p-7">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Literacy Drive
              </h1>
              <p className="md:text-[14px] text-[13px] tracking-wide">
              At Kachem Young Initiative, we believe that every child deserves access to quality education and the opportunity to develop ...
              </p>
            </div>

          
          </div>
        </div> 
        </Link>
        {/* card 3 */}
        <Link href="/cdap">
        <div className="flex flex-col md:px-0 px-5 gap-[31px] w-[350px] rounded-[8px] shadow-lg">
        <div className="">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%202906%20(2).png" className="w-full h-[250px] object-cover rounded-[8px]" />
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-[15px] p-7">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              CDAP: Community Development Awareness Program
              </h1>
              <p className="md:text-[14px] text-[13px] tracking-wide">
              CDAP is our annual community Development Acceleration project, designed to anually evaluate our ...
              </p>
            </div>

          </div>
        </div> 
        </Link>

        {/* card 4 */}

        <Link href="/bravevoices">
        <div className="flex flex-col md:px-0 px-5 gap-[31px] w-[350px] rounded-[8px] shadow-lg">
        <div className="">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/IMG_4695%201%20(1).png" className="w-full h-[250px] object-cover rounded-[8px]" />
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-[15px] p-7">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Brave Voices
              </h1>
              <p className="md:text-[14px] text-[13px] tracking-wide">
              Brave Voices is more than just a conference; it&apos;s a powerful platform that amplifies the voices of survivors of Gender-based ...
              </p>
            </div>

            {/* progress bar */}
          
          </div>
        </div> 
        </Link>

        {/* card 5 */}

        <Link href="/iwd">
        <div className="flex flex-col md:px-0 px-5 gap-[31px] w-[350px] rounded-[8px] shadow-lg">
        <div className="">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/IMG_3976.JPG" className="w-full h-[250px] object-cover rounded-[8px]" />
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-[15px] p-7">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Rural Women Farmers Initiative(RUWOFI)
              </h1>
              <p className="md:text-[14px] text-[13px] tracking-wide">
              RUWOFI is an initiative that establishes sustainable agricultural enterprises led by rural women farmers...
              </p>
            </div>

         
          </div>
        </div> 
        </Link>

        {/* card 6 */}

        <div className="flex flex-col md:px-0 px-5 gap-[31px] w-[350px] rounded-[8px] shadow-lg">
        <div className="">
            <div className="flex items-center justify-center w-full">
            <div className="w-full h-[250px] bg-gray-300 object-cover rounded-[8px] flex items-center justify-center"> 
                <button className='rounded-lg bg-primary text-white p-5'>
                    Codefusion
                </button>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-[15px] p-7">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Codefusion
              </h1>
              <p className="md:text-[14px] text-[13px] tracking-wide">
              Coming soon
              </p>
            </div>

          </div>
        </div> 

        </div>
    </div>

    <Footer/>
    </div>
  )
}

export default AllProjectsMain