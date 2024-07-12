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
  Rural Women Farmers Initiative
  </h1>
</div>

{/* WrVi_qiiLfQ?si */}
<div className='md:mt-[138px] mt-[50px] '>
  <div className='w-full md:h-[592px]'>
      <ProjectVideo embedID="WrVi_qiiLfQ?si" />
  </div>
</div>


<div>
<p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">Kachem Young initiative and Initiative for National Growth designed a yearly conference to commemorate International Women’s Day, and often create a coalition for execution. This conference targets women with disabilities, to increase their access to all levels and forms of education in political and public life, technology, and entrepreneurship. 
<br/><br/>

The convention supports and fosters women’s economic and civic participation in their respective communities by exposing them to skills and knowledge that will cushion the effects encountered during the COVID-19 period and beyond, and address some cultural impediments to their economic growth.
<br/><br/>

The convention is designed to strengthen the capacity-building efforts that should pay particular attention to the needs of women to ensure that they are equipped for leadership and decision-making at all levels for all women respective of their disability.
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