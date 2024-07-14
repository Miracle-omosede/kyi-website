import React from 'react'
import FundingForm from '../FundingForm'
import Footer from '../Footer/Footer'
import ProjectVideo from '../ProjectVideo'

const IwdContent = () => {
  return (
    <div>
    <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5 mt-[70px]">
<div>
  <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
  Rural Women Farmers Initiative (RUWOFI)
  </h1>
</div>

{/* WrVi_qiiLfQ?si */}
<div className='md:mt-[138px] mt-[50px] '>
  <div className='w-full md:h-[592px]'>
      <ProjectVideo embedID="WrVi_qiiLfQ?si" />
  </div>
</div>


<div>
<p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">RUWOFI is an initiative that establishes sustainable agricultural enterprises led by rural farmers under the organisations registered co-operatives to empower rural women financially and to give them economic edge while solving the problem of food insecurity.
<br/>
<br/>
</p>
</div>

<FundingForm/>
</div>

<Footer/>
</div>
  )
}

export default IwdContent