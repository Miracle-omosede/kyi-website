"use client"
import React from "react";
import { useState } from "react";
import CountUP from "react-countup"
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";

const Mission = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div>
      <div className="pt-[5rem] md:px-0 px-5 md:pt-[147px] max-w-[1140px] w-full mx-auto flex flex-col gap-[104px]">
        <div>
          <p className="text-black text-[16px] md:text-[26px] text-center font-poppins md:font-medium ">
          To advocate for and exemplify equitable, skill-based education that addresses the diverse learning needs of all learners in rural communities. We aim to mitigate barriers to literacy and disability inclusion at grassroots, foster community resilience to eliminate female subjugation, exclusion, promote youth development, and ensure the sustainability of our solutions within each host community.{" "}
          </p>
        </div>

        <div>
          <div className="text-black font-poppins items-center justify-center text-center md:px-[61px] px-5 flex ">
            {/* <div className="col-span-12 md:col-span-5 font-poppins">
              <div>
                <div className="md:h-[417px] flex flex-col md:items-start items-center justify-center">
                    <div className="flex md:flex-col flex-row items-center justify-center relative">
                    <div className="">
                    <span className="md:text-[40px] text-[60px] font-semibold">
                    {counterOn && <CountUP start={0} end={6} duration={2} delay={0}/>}
                    </span>
                    <p className="text-[12px] md:text-[16px]">years of operation</p>
                  </div>
                  <div className="h-[1px] w-[80px] bg-slate-500 my-[15px] md:block hidden"></div>
                  <div>
                    <span className="md:text-[40px] text-[60px] font-semibold">
                      <CountUP start={0} end={20} duration={2} delay={0}/>
                    </span>
                    <p className="md:text-[16px] text-[12px]">empowerment programs</p>
                  </div>
                  <div className="h-[1px] w-[80px] bg-slate-500 my-[15px] md:block hidden"></div>
                  <div>
                    <span className="md:text-[40px] text-[60px] font-semibold">
                    <CountUP start={0} end={100} duration={2} delay={0}/>
                    </span>
                    <p className="md:text-[16px] text-[12px]">empowered persons</p>
                  </div>

                    </div>
                </div>
              </div>
            </div> */}
            <div className="col-span-12 md:col-span-7 mt-[5rem] md:mt-0">
              <div className="flex items-center justify-center">
              <div className="flex flex-col flex-wrap md:gap-[28px] gap-[1rem]">
                <div className="flex flex-row md:gap-[28px] gap-[1rem]">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/0%201.png"
                    className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]"
                  />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/02.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/03.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]" />
                </div>
                <div className="flex flex-row md:gap-[28px] gap-[1rem]">
                  <img src="https://miracle.sirv.com/kachem-young-initiative/04.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/05.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/06.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]"/>
                </div>
                <div className="flex flex-row md:gap-[28px] gap-[1rem]">
                  <img src="https://miracle.sirv.com/kachem-young-initiative/07.png" className="md:w-[150px] md:h-[91px] w-[70px] h-[30px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/08.png" className="md:w-[150px] md:h-[91px] w-[70px] h-[30px]"  />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/09.png" className="md:w-[150px] md:h-[91px] w-[70px] h-[30px]" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#157d9a3f] mt-[86px]">
            <div className="max-w-[1140px] mx-auto w-full">
            <p className="md:px-[80px] px-5 py-[80px] font-poppins text-center font-[600] text-secondary text-[16px] md:text-[25px]">
            Kachem Young Initiative is a non-profit NGO founded in 2017 to administer community resilience towards solving problems of poverty among grassroots people, devaluation of education especially girl child education, female discrimination, and exclusion of persons with disabilities in Ebonyi State. <br className="md:hidden block"/><Link href="/about" className="text-primary">Learn more</Link>
            </p>
            </div>
        </div>

        <div className="mt-[120px]">
            <h1 className="flex items-center text-center justify-center mb-[84px] font-poppins text-[40px] font-bold">Our Memories</h1>

            <div className=" w-full mx-auto max-w-[1140px] flex flex-col gap-[18px] px-5 md:px-0">
                <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                    <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#9747ff42] rounded-[8px] mx-auto ">
                        <p className="text-black font-poppins md:text-[16px] text-[16px] tracking-wide">
                        <b className="font-bolder">Hope</b> is a fundamental principle in our operations. We recognize the importance of understanding the challenges faced by grassroots people and developing solutions that address their specific needs. 
                        </p>
                    </div>
                    <div className="h-[210px] md:block hidden">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2035.png"  className="h-[210px] rounded-[8px] object-cover "/>
                    </div>
                    <div className="h-[210px] md:block hidden">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Frame%2039.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>
                </div>
                <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                <div className="h-[210px] md:block hidden">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2037.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>
                    <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#f7500952] rounded-[8px] mx-auto ">
                        <p className="text-black font-poppins md:text-[16px] text-[16px]  tracking-wide">
                        <b className="font-bolder">Empathy </b>is a fundamental principle in our operations. We recognize the importance of understanding the challenges faced by grassroots people and developing solutions that address their specific needs.
                        </p>
                    </div>
                    <div className="h-[210px] md:block hidden">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2036.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>
                </div>
                <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                <div className="h-[210px] md:block hidden">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Frame%2040.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>
                    
                    <div className="h-[210px] md:block hidden">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2038.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>

                    <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#09799561] rounded-[8px] mx-auto ">
                        <p className="text-black font-poppins md:text-[16px] text-[16px] tracking-wide ">
                        <b  className="font-bolder">Sacrifice</b> is a fundamental principle in our operations. We recognize the importance of understanding the challenges faced by grassroots people and developing solutions that address their specific needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default Mission;
