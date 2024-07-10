import React from "react";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

const AboutHeader = () => {
  return (
    <div>
      <div className="relative mx-auto max-w-[1140px] w-full px-5 poppins-regular">
        <div className="md:pt-[100px]">
          <h1 className="text-[48px] font-semibold font-poppins text-center text-black pt-[148px] md:pb-[56px] pb-10 leading-tight">
            Reconciling young minds to purpose.
          </h1>
          <p className="text-[17px] md:text-[22px] font-medium text-center font-poppins">
            Through education, mentorship, and personal development, we strive
            to instill in young minds a sense of purpose and direction,
            equipping them with the knowledge, skills, and mindset needed to
            overcome challenges and make a lasting impact on their communities
            and the world at large.
          </p>
        </div>

        {/* Hero Bento Grid */}
        <div className="md:pt-[145px] pt-10 md:pb-[80px] pb-10">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="md:col-span-8 col-span-12 ">
              {/* inner items */}
              <div className="flex flex-col gap-[19px] w-full">
                <div className="flex flex-row md:justify-between  justify-center items-center  w-full">
                  <div className="md:block hidden">
                    <img
                      src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2061.png"
                      className="h-[228px] w-[319px] rounded-[8px] object-cover"
                    />
                  </div>
                  <div className="rounded-[8px] md:w-auto w-full">
                    <div className="md:w-[385px] w-full h-[228px] bg-primary text-white flex items-center justify-center rounded-[8px]">
                      <p className="text-center font-poppins text-[35px]">
                        Who we are...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2063.png"
                    className="h-[228px] w-full rounded-[8px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="md:block hidden h-full">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2064.png"
                  className="h-full w-full rounded-[8px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-[190px]">
          <p className="md:text-[22px] text-[17px] font-medium font-poppins">
            Kachem Young Initiative is a non-profit NGO founded in 2017 to
            administer community resilience towards solving problems of poverty
            among grassroots people, devaluation of education especially girl
            child education, female discrimination, and exclusion of persons
            with disabilities in Ebonyi State.
          </p>
        </div>

        <div className="h-[400px] mb-[84px] w-full relative">
          <div className="h-[328px] w-[328px] absolute -top-[37%] right-[10%] bg-[#0979958e] flex items-center justify-center rounded-full">
            <p className="text-[40px] font-poppins font-medium text-white text-center">
              Our Story...
            </p>
          </div>
          <img
            src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2065.png"
            className="h-[400px] w-full object-cover"
          />
        </div>

        <div className="md:pt-[80px] pt-10">
          {/* <p className="md:text-[22px] text-[17px] font-medium font-poppins">
            From our research, we put together vital statistics that inspired
            the foundation of our organisations purpose -
            <ol className="list-disc pl-10 pt-5">
              <li>
                Over 85% of the population of Ebonyi State reside in the rural
                heartland where the economically active workforce is about 38%.
              </li>
              <li>Ebonyi has a widespread abject poverty level of 90%</li>
              <li>
                In a stratified random sampling, the core poverty indices that
                capure the severity of poverty include income, consumption,
                dietery quality and capacity utilization.
              </li>
              <li>
                Abject poerty lines established for single-person, four-person,
                and six-person household units were annual incomes of $863,
                $2,256, $3,429 respectively and their corresponding absolute
                poverty lines are an annual income of $2,588, $6,769 and $10,299
                respectively.{" "}
              </li>
            </ol>
          </p> */}
        </div>

        <div className="h-[400px] mb-[84px] w-full relative flex flex-row mt-[100px]">
          <div className="h-full flex items-center">
            <div className="h-[328px] w-[328px] absolute mr-auto bg-[#f653088b] flex items-center justify-center rounded-[8px]">
              <p className="text-[40px] font-poppins font-medium text-white text-center">
                Our Purpose...
              </p>
            </div>
          </div>
          <div className="flex items-right justify-end ml-auto">
            <img
              src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2065%20(1).png"
              className="h-[400px] w-5/5 object-cover"
            />
          </div>
        </div>

        <div className="md:pt-[80px] pt-10">
          <p className="md:text-[22px] text-[17px] md:font-medium font-poppins">
            <ul className="flex flex-col gap-6">
              <li>
                <p>
                  <b className="text-center">Our Vision:</b><br/>We envision an inclusive and civil society where women, youth, and persons with disabilities can equally thrive. This will be achieved through a concerted effort to promote rural literacy, education, and creativity.
                </p>
              </li>
              <li>
                {/* <p>
                  We firmly believe that education is the foundation for social
                  and economic progress, and that by empowering individuals with
                  the necessary skills and knowledge, we can drive sustainable
                  development and create a brighter future for all.
                </p> */}
              </li>
              <li>
                <p>
                  <b className="text-center">Our Mission:</b> <br/>
                  To advocate and promote entrepreneurial
                  education, advocate for equity, inclusion, and access in
                  Africa’s education, and mitigate the odds against literacy and
                  minority rights.
                </p>
              </li>
            </ul>
          </p>
        </div>

        <div className="pt-[80px]">
          <div className="grid grid-cols-12 gap-[20px]">
            <div className="col-span-4">
              <img
                src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2067.png"
                className="h-[462px] md:block hidden w-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col justify-between h-full">
                <div className="md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2070.png"
                    className="h-[216px] w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-poppins w-full ">
                    <div className="md:mx-0 mx-auto h-[216px]  bg-secondary text-white flex items-center justify-center">
                      <p className="text-center font-poppins text-[35px]">
                        Our Team...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <img
                src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2069.png"
                className="h-[462px] w-full md:block hidden object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:pt-[80px] pt-10">
          <p className="md:text-[22px] text-[17px] font-medium font-poppins">
            <ul className="flex flex-col gap-6">
              <li>
                <p>
                  At the heart of our organization lies a team of remarkable
                  individuals who are driven by a common purpose - to create a
                  world that is better, brighter and more equitable for all. We
                  are a passionate and dedicated group, united by a shared
                  commitment to driving meaningful change and making a positive
                  impact in the lives of those around us.
                </p>
              </li>
              <li>
                <p>
                  We are proud to be a part of this movement, and we hope that
                  our passion and dedication inspires you to join us on this
                  journey towards a brighter, more equitable future for all.
                </p>
              </li>
            </ul>
          </p>
        </div>

        <div className="mt-[80px]">
          <Team />
        </div>
      </div>

      <div className="my-[80px]">
        <div className="grid grid-cols-12 md:h-[446.93px] h-full gap-0">
          <div className="col-span-12 md:col-span-6 md:order-none order-2 h-full w-full ">
            <div className="bg-[#A3AAB2] flex flex-col w-full h-full items-start justify-center gap-[25.33px] mx-auto md:px-0 px-5 pt-10 md:pb-0 pb-10">
              <div className="flex justify-center flex-col mx-auto gap-5">
                <h1 className="font-poppins md:text-[38.4px] text-3xl text-black font-bold w-full md:w-[564.27px]">
                  Join a global team of change-makers.
                </h1>
                <p className="font-poppins font-normal md:text-[21.33px] text-[17px] w-full md:w-[520.53px] flex items-start">
                  Your time, compassion, and skills can create a world of
                  difference. Together, let&apos;s spread smiles, touch lives,
                  and make memories. Join us in making every moment count.
                </p>
                <div className="flex mt-0 md:mt-[20px]">
                  <div className="lg:flex flex Justify-center max-lg:flex-col lg:px-0  mb-3 lg:mb-0 text-left lg:space-x-4 uppercase">
                    <a
                      href=""
                      className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4  text-[#fff] bg-primary capitalize font-manrope gap-1"
                    >
                      <span className="flex items-center justify-center">
                        Volunteer with Us
                      </span>
                      <span className="flex items-center justify-center">
                        <svg
                          width="27"
                          height="26"
                          viewBox="0 0 27 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.20202 4.00359C7.3036 3.50135 8.54562 3.39804 9.71504 3.71139C10.2841 3.86386 10.6218 4.44875 10.4693 5.01778C10.3168 5.58681 9.73192 5.9245 9.16289 5.77203C8.47187 5.58687 7.73795 5.64791 7.08702 5.94469C6.43608 6.24147 5.90868 6.75549 5.59529 7.39859C5.28189 8.04169 5.20201 8.77379 5.36936 9.46934C5.53671 10.1649 5.94085 10.7805 6.51248 11.2107C6.8226 11.4441 6.98148 11.8275 6.92734 12.2118C6.8732 12.5961 6.61458 12.9207 6.25207 13.0593C5.52743 13.3364 4.86175 13.7644 4.30263 14.3235C4.11427 14.5118 3.94083 14.7123 3.78304 14.9229C3.45426 15.3619 3.4757 15.7296 3.64872 16.0588C3.85304 16.4476 4.3225 16.8507 4.98656 17.0596C5.54852 17.2364 5.86077 17.8353 5.68399 18.3972C5.50722 18.9592 4.90836 19.2714 4.3464 19.0946C3.25648 18.7518 2.27648 18.0336 1.76026 17.0512C1.21276 16.0093 1.2426 14.7561 2.07558 13.644C2.29385 13.3526 2.53373 13.0754 2.79414 12.815C3.19564 12.4135 3.63691 12.0609 4.10868 11.761C3.72895 11.2244 3.45126 10.6169 3.29522 9.96838C3.01201 8.79129 3.14718 7.55235 3.67755 6.46402C4.20792 5.3757 5.10043 4.50582 6.20202 4.00359ZM19.8461 5.94469C19.1951 5.64791 18.4612 5.58687 17.7702 5.77203C17.2012 5.9245 16.6163 5.58681 16.4638 5.01778C16.3113 4.44875 16.649 3.86386 17.218 3.71139C18.3875 3.39804 19.6295 3.50135 20.7311 4.00359C21.8326 4.50582 22.7252 5.3757 23.2555 6.46402C23.7859 7.55235 23.9211 8.79129 23.6379 9.96838C23.4818 10.6169 23.2041 11.2244 22.8244 11.761C23.2962 12.0609 23.7374 12.4135 24.1389 12.815C24.3993 13.0754 24.6392 13.3526 24.8575 13.644C25.6905 14.7561 25.7203 16.0093 25.1728 17.0512C24.6566 18.0336 23.6766 18.7518 22.5867 19.0946C22.0247 19.2714 21.4259 18.9592 21.2491 18.3972C21.0723 17.8353 21.3846 17.2364 21.9465 17.0596C22.6106 16.8507 23.08 16.4476 23.2844 16.0588C23.4574 15.7296 23.4788 15.3619 23.15 14.9229C22.9923 14.7123 22.8188 14.5118 22.6304 14.3235C22.0713 13.7644 21.4056 13.3364 20.681 13.0593C20.3185 12.9207 20.0599 12.5961 20.0057 12.2118C19.9516 11.8275 20.1105 11.4441 20.4206 11.2107C20.9922 10.7805 21.3964 10.1649 21.5637 9.46934C21.7311 8.77379 21.6512 8.04169 21.3378 7.39859C21.0244 6.75549 20.497 6.24147 19.8461 5.94469ZM13.4667 7.80036C11.7648 7.80036 10.3852 9.17998 10.3852 10.8818C10.3852 12.5837 11.7649 13.9634 13.4667 13.9634C15.1685 13.9634 16.5482 12.5837 16.5482 10.8818C16.5482 9.17999 15.1685 7.80036 13.4667 7.80036ZM16.9263 14.7839C18.003 13.8286 18.6815 12.4344 18.6815 10.8818C18.6815 8.00178 16.3467 5.66703 13.4667 5.66703C10.5866 5.66703 8.25186 8.00178 8.25186 10.8818C8.25186 12.4344 8.93038 13.8286 10.0071 14.7839C9.27876 15.1499 8.60654 15.6326 8.01936 16.2197C7.75895 16.4801 7.51907 16.7573 7.3008 17.0487C6.81159 17.7018 6.58123 18.4298 6.6218 19.1644C6.66174 19.8877 6.95926 20.5353 7.3846 21.0581C8.2216 22.0869 9.62504 22.7337 11.0963 22.7337H15.8371C17.3084 22.7337 18.7118 22.0869 19.5488 21.0581C19.9741 20.5353 20.2717 19.8877 20.3116 19.1644C20.3522 18.4298 20.1218 17.7018 19.6326 17.0487C19.4143 16.7573 19.1744 16.4801 18.914 16.2197C18.3268 15.6326 17.6546 15.1499 16.9263 14.7839ZM13.4667 16.0967C11.9893 16.0967 10.5725 16.6836 9.52785 17.7282C9.33949 17.9166 9.16605 18.117 9.00826 18.3277C8.79112 18.6176 8.74149 18.8585 8.75188 19.0468C8.7629 19.2463 8.84729 19.4756 9.03943 19.7117C9.4374 20.2009 10.2112 20.6004 11.0963 20.6004H15.8371C16.7222 20.6004 17.496 20.2009 17.894 19.7117C18.0861 19.4756 18.1705 19.2463 18.1815 19.0468C18.1919 18.8585 18.1423 18.6176 17.9251 18.3277C17.7673 18.117 17.5939 17.9166 17.4055 17.7282C16.3609 16.6836 14.9441 16.0967 13.4667 16.0967Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 -ml-0 md:-ml-[20px]">
            <img
              src="https://miracle.sirv.com/kachem-young-initiative/unsplash_sbFmoKBK7jU.png"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutHeader;
