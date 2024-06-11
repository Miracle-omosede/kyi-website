import React from 'react'

const FundingHero = () => {
  return (
    <div>
        <div className='max-w-[1140px] w-full mx-auto  font-poppins px-5'>
            <div>
            <h1 className='md:text-[36px] text-[20px] font-semibold text-center'>
            Be a Changemaker: Donate to Our Cause Today!
                </h1>
            </div>

            <div className="relative h-[379px] mt-[40px] rounded-[24px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://miracle.sirv.com/kachem-young-initiative/unsplash_M-4lFg1Xfag.png)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-center p-4">
          Little drops of water make the mighty ocean...
        </h1>
      </div>
    </div>

            <div>
            <p className='md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]'>
            Your donation can create a lasting impact in the lives of those in need. By contributing funds to our organization, you are directly supporting our initiatives for Transformative Education, Driving rural Literacy, Fostering Community Development, and Reducing Inequalities. Every dollar counts and brings us closer to achieving our goal. Join us in making a positive change by donating today. Together, we can create a brighter future for all.
                </p>
            </div>

            
        </div>
    </div>
  )
}

export default FundingHero