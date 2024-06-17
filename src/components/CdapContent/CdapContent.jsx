import React from 'react'
import FundingForm from '../FundingForm'
import Footer from '../Footer/Footer'
import ProjectVideo from '../ProjectVideo'

const CdapContent = () => {
  return (
    <div>
    <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5 mt-[70px]">
<div>
  <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
  Community Development Acceleration Project
  </h1>
</div>

<div className='md:mt-[138px] mt-[50px] '>
  <div className='w-full md:h-[592px]'>
      <ProjectVideo embedID="ttPdqvOk54A" />
  </div>
</div>

<div>
<p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">
CDAP is our annual Community Development Acceleration Project, designed to annually evaluate our impact across host communities, literacy centers and to galvanize partnerships and collaborations towards specific developmental projects per host community each year.<br/><br/> 2022 CDAP books drive was a design that provided the structure needed for the Iddah Community of Abakaliki Local Government to access inclusive education through the KYI literacy center, by structuring an inclusive library and commissioning disability awareness and American Sign Language Education. 
<br/><br/>
PAD Drive, provides safe Menstrual Hygiene Management Education and practices to Iddah and Okpuitumo communities through Pad Dispensers commissioned at the KYI centers, Primary Health Center, and Community Centers to provide monthly access to menstrual products by donations.
<br/><br/>
Help us make a real impact by donating to our project. Your contributions will directly support our efforts. With your support, we can create positive change in the lives of the young girls (inclusive of girls with disabilities) in underserved communities. Make a difference today and donate to our project. Together, we can achieve lasting and meaningful transformation. Thank you for your generosity!
</p>
</div>

<FundingForm/>
</div>

<Footer/>
</div>
  )
}

export default CdapContent