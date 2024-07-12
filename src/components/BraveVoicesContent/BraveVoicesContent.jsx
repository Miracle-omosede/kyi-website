import React from 'react'
import FundingForm from '../FundingForm'
import Footer from '../Footer/Footer'
import ProjectVideo from '../ProjectVideo'

const BraveVoicesContent = () => {
  return (
    <div>
    <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5 mt-[70px]">
<div>
  <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
  Brave Voices Project
  </h1>
</div>

<div className='md:mt-[138px] mt-[50px] '>
  <div className='w-full md:h-[592px]'>
      <ProjectVideo embedID="A7fxSbCyM64" />
  </div>
</div>

<div>
<p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">Brave Voices is more than just a conference; it&apos;s a powerful platform that amplifies the voices of survivors of Gender-based Violence/Intimate Partner Violence (GBV/IPV) who happen to be persons with disabilities. This international workshop-styled conference is our commitment to commemorate the UN&apos;s 16 Days of Activism. Through Brave Voices, we strive to bridge the inclusion gaps in advocacy, paving the way for a brighter and more inclusive future.

<br/><br/>

At Kachem Young Initiative, we recognize the pressing need to address the unique challenges faced by women and girls with disabilities, particularly in the context of gender-based violence and discrimination. Brave Voices was born out of our dedication to making a difference by:
<br/><br/>

<ol className='flex flex-col gap-4'>
<li>
1.  
Empowering Through Storytelling: We believe in the power of stories to create change. Brave Voices gives survivors of GBV/IPV who are persons with disabilities a platform to share their stories, mirroring their perspectives and experiences. These stories serve as a catalyst for change, shedding light on the issues that need urgent attention.

</li>
<li>
2.  
Engaging Existing Structures: Real change requires collaboration. We engage with existing structures and stakeholders to derive specific solutions tailored to the needs of women and girls with disabilities. By working together, we can make advocacy more effective and inclusive.
</li>
<li>
3.  
Addressing Topical Issues: Our conference delves into the most pressing topics, providing a space for strategic discussions on practical solutions that empower women and girls with disabilities. We seek to create a roadmap for change, one that leads to greater equality and empowerment.
</li>
<li>
4.  


Creating Tangible Outcomes: Brave Voices isn&apos;t just about conversations; it&apos;s about action. We produce communiques and policy briefs that serve as invaluable resources for advocates. These documents provide evidence-based insights and recommendations for advancing the rights and well-being of women and girls with disabilities.
</li>
</ol>
<br/><br/>

Since 2021, Kachem Young Initiative has forged strong partnerships with the Mandela Washington Fellowship Disability Inclusion Knowledge Network and Indiana Disability Justice and Inclusion advocates. These collaborations have enabled us to successfully execute Brave Voices. Together, we are committed to fostering inclusive advocacy and empowering females with disabilities to combat gender-based violence and discrimination.

<br/><br/>
We invite you to be part of this transformative journey. Brave Voices is not just a conference; it&apos;s a movement that empowers, educates, and advocates for change. Together, we can break down barriers, eliminate discrimination, and create a world where all women and girls, regardless of their abilities, can live free from violence and discrimination.
</p>
</div>

<FundingForm/>
</div>

<Footer/>
</div>
  )
}

export default BraveVoicesContent