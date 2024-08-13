"use client";
import React, { useState, useEffect } from "react";
import CountUP from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";

const Mission = () => {
  const [counterOn, setCounterOn] = useState(false);
  const images = [
    "https://miracle.sirv.com/kachem-young-initiative/Grid/001.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/002.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/003.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/004.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/005.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/006.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/007.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/008.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/009.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/010.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/011.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/Grid/012.jpg",
  ];

  useEffect(() => {
    const imageElements = document.querySelectorAll(".grid-image");
    imageElements.forEach((img, index) => {
      img.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <div className="pt-[5rem] md:px-0 px-5 md:pt-[147px] max-w-[1140px] w-full mx-auto flex flex-col gap-[104px]">
          <div>
            <p className="text-black text-[16px] md:text-[26px] text-center font-poppins md:font-medium ">
              To advocate for and exemplify equitable, skill-based education that
              addresses the diverse learning needs of all learners in rural
              communities. We aim to mitigate barriers to literacy and disability
              inclusion at grassroots, foster community resilience to eliminate
              female subjugation, exclusion, promote youth development, and ensure
              the sustainability of our solutions within each host community.{" "}
            </p>
          </div>

          <div>
            <div className="text-black font-poppins items-center justify-center text-center md:px-[61px] px-5 flex">
              <div className="col-span-12 md:col-span-7 mt-[5rem] md:mt-0">
                <div className="flex items-center justify-center">
                  {/* create grid here */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`flex-none w-[calc(24.33%-8px)] h-[70.5px] sm:h-[200px] lg:h-[133.5px] lg:w-[calc(33.33%-8px)] rounded ${
                          index === 0 || index === 2 || index === 9 || index === 11
                            ? "rounded-lg"
                            : ""
                        } ${
                          index === 0 ? "rounded-tl-[8px]" : ""
                        } ${
                          index === 2 ? "rounded-tr-[8px]" : ""
                        } ${
                          index === 9 ? "rounded-bl-[8px]" : ""
                        } ${
                          index === 11 ? "rounded-br-[8px]" : ""
                        }`}
                        style={{
                          animation: "fadeInUp 0.5s ease forwards",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Grid Image ${index + 1}`}
                          className={`grid-image w-full h-full object-cover`}
                        />
                      </div>
                    ))}
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
                Kachem Young Initiative is a non-profit NGO founded in 2017 to
                administer community resilience towards solving problems of poverty
                among grassroots people, devaluation of education especially girl
                child education, female discrimination, and exclusion of persons
                with disabilities in Ebonyi State. <br className="md:hidden block" />
                <Link href="/about" className="text-primary">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-[120px]">
            <h1 className="flex items-center text-center justify-center mb-[84px] font-poppins text-[40px] font-bold">
              Our Beliefs
            </h1>

            <div className=" w-full mx-auto max-w-[1140px] flex flex-col gap-[18px] px-5 md:px-0">
              <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#9747ff42] rounded-[8px] mx-auto ">
                  <p className="text-black font-poppins md:text-[16px] text-[16px] tracking-wide">
                    <b className="font-bolder">Hope</b> is a fundamental principle in our operations. The stories of the past, the smiles of strength and resilience wielded for a better future, told by the eyes of those we serve, are the inspiration for what we do. 
                  </p>
                </div>
                <div className="h-[210px] md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2035.png"
                    className="h-[210px] rounded-[8px] object-cover "
                  />
                </div>
                <div className="h-[210px] md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Frame%2039.png"
                    className="h-[210px] rounded-[8px] object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                <div className="h-[210px] md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2037.png"
                    className="h-[210px] rounded-[8px] object-cover"
                  />
                </div>
                <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#f7500952] rounded-[8px] mx-auto ">
                  <p className="text-black font-poppins md:text-[16px] text-[16px] tracking-wide">
                    <b className="font-bolder">Empathy </b>is a fundamental principle
                    in our operations. We recognize the importance of understanding
                    the challenges faced by grassroots people and developing
                    solutions that address their specific needs.
                  </p>
                </div>
                <div className="h-[210px] md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2036.png"
                    className="h-[210px] rounded-[8px] object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                <div className="h-[210px] md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Frame%2040.png"
                    className="h-[210px] rounded-[8px] object-cover"
                  />
                </div>

                <div className="h-[210px] md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2038.png"
                    className="h-[210px] rounded-[8px] object-cover"
                  />
                </div>

                <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#09799561] rounded-[8px] mx-auto ">
                  <p className="text-black font-poppins md:text-[16px] text-[16px] tracking-wide ">
                    Our journey is rooted in <b className="font-bolder">Sacrifice</b>. We understand that our freedom and peace are only complete when we leave no one behind, so we dedicate our time and skills to innovating community-oriented solutions.
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
