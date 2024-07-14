"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay} from "swiper/modules";
import Form from "../Form";

const Partnership = () => {
  return (
    <div>
      <div className="mt-[100px] mx-auto max-w-[1140px] w-full font-poppins px-5">
        <div className="mt-[85px]">
          <h1 className="flex items-center text-center justify-center mb-[15px] font-poppins text-[40px] font-bold">
            Our Partnerships
          </h1>
          <p className="font-poppins md:text-[23px] text-[16px] tracking-wide text-center mb-[25px]">
            Over the years, we have identified and worked with several brands
            and organisations that share our mission amd passion to provide
            better opportunities for less opportune people especially women,
            girls and children. These brands and organisations are represented
            below. We are open to more of these partnerships.
          </p>
        </div>
      </div>

      <div className="mt-[84px] bg-[#f6530834]">
        <div className="py-[22px] flex items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="https://shieldedbit.com/" target="_blank" className="cursor-pointer">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/ShieldedBit%20Logo%201.png"
                  className="object-cover md:w-[254px] md:h-[254px] w-[200px] flex items-center justify-center "
                />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="https://codeflarelimited.com" target="_blank" className="cursor-pointer">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/codeflare-logo-orange%201.png"
                  className="object-cover flex items-center justify-center  md:w-[396px] md:h-[112px] w-[280px] flex items-center justify-center"
                />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="" target="_blank" className="cursor-pointer">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/IMG_4695%201.png"
                  className="object-cover md:h-[143px] md:w-[227px] w-[170px] flex items-center justify-center"
                />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="https://followthemoneyng.org/ " className="cursor-pointer" target="_blank">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Image%202023-08-06%20at%203.42%201.png"
                  className="object-cover md:w-[347px] md:h-[183px] w-[230px] flex items-center justify-center"
                />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="https://www.connecteddevelopment.org/" className="cursor-pointer" target="_blank">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Image%202023-08-06%20at%203.44%202.png"
                  className="object-cover md:w-[396px] md:h-[203px] w-[250px] flex items-center justify-center"
                />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="https://www.youtube.com/@kachemyounginitiative1224" className="cursor-pointer" target="_blank">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Image%202023-08-06%20at%203.44%201.png"
                  className="object-cover md:h-[228px] md:w-[206px] w-[170px] flex items-center justify-center"
                />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center w-full md:h-[400px] h-[200px]">
                <a href="https://moe.eb.gov.ng/" className="cursor-pointer" target="_blank">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/EBONYI%20State%20Ministry%20of%20Education%20logo.PNG"
                  className="object-cover md:h-[228px] md:w-[206px] w-[170px] flex items-center justify-center"
                />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="grid grid-cols-12 md:gap-0 py-[49px] md:px-[256px] px-5 bg-[#eff2f5]">
        <div className="col-span-12 md:col-span-6 md:pb-0 pb-[90px]">
          <Form />
        </div>
        <div className="col-span-12 md:col-span-6 h-full items-center justify-center text-[17px] ">
          <div className="font-poppins flex flex-col justify-center h-full gap-7 md:py-0">
            <div className="flex flex-col gap-[25px]">
              <div className="text-black capitalize">
                <b>Address:</b> NO. 50 CHINWEIKE ELOM ROAD, ABAKALIKI, EBONYI STATE.
                <br />
                Nigeria
              </div>
              <div className="text-black">
                <b>Phone:</b> (+234) 814-998-6675
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

            <div className="flex flex-col gap-4 md:text-[17px] text-[14px] tracking-wider">
              <div className="flex flex-row gap-5 items-center">
                <span>
                  <svg
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3333 13.9998L18.2533 9.99984L11.3333 5.99984V13.9998ZM26.7466 3.55984C26.92 4.1865 27.04 5.0265 27.12 6.09317C27.2133 7.15984 27.2533 8.07984 27.2533 8.87984L27.3333 9.99984C27.3333 12.9198 27.12 15.0665 26.7466 16.4398C26.4133 17.6398 25.64 18.4132 24.44 18.7465C23.8133 18.9198 22.6666 19.0398 20.9066 19.1198C19.1733 19.2132 17.5866 19.2532 16.12 19.2532L14 19.3332C8.41329 19.3332 4.93329 19.1198 3.55996 18.7465C2.35996 18.4132 1.58663 17.6398 1.25329 16.4398C1.07996 15.8132 0.959959 14.9732 0.879959 13.9065C0.786626 12.8398 0.746626 11.9198 0.746626 11.1198L0.666626 9.99984C0.666626 7.07984 0.879959 4.93317 1.25329 3.55984C1.58663 2.35984 2.35996 1.5865 3.55996 1.25317C4.18663 1.07984 5.33329 0.959837 7.09329 0.879837C8.82663 0.786504 10.4133 0.746504 11.88 0.746504L14 0.666504C19.5866 0.666504 23.0666 0.879837 24.44 1.25317C25.64 1.5865 26.4133 2.35984 26.7466 3.55984V3.55984Z"
                      fill="#101010"
                    />
                  </svg>
                </span>

                <span>@kachemyounginitiative1224</span>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6666 4.6665H9.33329C5.33329 4.6665 2.66663 6.6665 2.66663 11.3332V20.6665C2.66663 25.3332 5.33329 27.3332 9.33329 27.3332H22.6666C26.6666 27.3332 29.3333 25.3332 29.3333 20.6665V11.3332C29.3333 6.6665 26.6666 4.6665 22.6666 4.6665ZM23.2933 12.7865L19.12 16.1198C18.24 16.8265 17.12 17.1732 16 17.1732C14.88 17.1732 13.7466 16.8265 12.88 16.1198L8.70663 12.7865C8.27996 12.4398 8.21329 11.7998 8.54663 11.3732C8.89329 10.9465 9.51996 10.8665 9.94663 11.2132L14.12 14.5465C15.1333 15.3598 16.8533 15.3598 17.8666 14.5465L22.04 11.2132C22.4666 10.8665 23.1066 10.9332 23.44 11.3732C23.7866 11.7998 23.72 12.4398 23.2933 12.7865Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
                <span>Kachemyounginitiative@gmail.org</span>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9467 7.99967C28.92 8.46634 27.8133 8.77301 26.6667 8.91967C27.84 8.21301 28.7467 7.09301 29.1733 5.74634C28.0667 6.41301 26.84 6.87967 25.5467 7.14634C24.4933 5.99967 23.0133 5.33301 21.3333 5.33301C18.2 5.33301 15.64 7.89301 15.64 11.053C15.64 11.5063 15.6933 11.9463 15.7867 12.3597C11.04 12.1197 6.81334 9.83967 4.00001 6.38634C3.50668 7.22634 3.22668 8.21301 3.22668 9.25301C3.22668 11.2397 4.22668 12.9997 5.77334 13.9997C4.82668 13.9997 3.94668 13.733 3.17334 13.333V13.373C3.17334 16.1463 5.14668 18.4663 7.76001 18.9863C6.92098 19.216 6.04014 19.2479 5.18668 19.0797C5.54882 20.2163 6.25806 21.2109 7.2147 21.9236C8.17134 22.6363 9.32727 23.0313 10.52 23.053C8.49818 24.6536 5.99201 25.5188 3.41334 25.5063C2.96001 25.5063 2.50668 25.4797 2.05334 25.4263C4.58668 27.053 7.60001 27.9997 10.8267 27.9997C21.3333 27.9997 27.1067 19.2797 27.1067 11.7197C27.1067 11.4663 27.1067 11.2263 27.0933 10.973C28.2133 10.173 29.1733 9.15967 29.9467 7.99967Z"
                      fill="#101010"
                    />
                  </svg>
                </span>

                <span>@Kachemyoungini1</span>
              </div>

              <div className="flex flex-row gap-5 items-center">
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0071 7.7956C11.4658 7.7956 7.80274 11.4587 7.80274 16C7.80274 20.5413 11.4658 24.2044 16.0071 24.2044C20.5485 24.2044 24.2115 20.5413 24.2115 16C24.2115 11.4587 20.5485 7.7956 16.0071 7.7956ZM16.0071 21.3339C13.0724 21.3339 10.6732 18.9419 10.6732 16C10.6732 13.0581 13.0653 10.6661 16.0071 10.6661C18.949 10.6661 21.3411 13.0581 21.3411 16C21.3411 18.9419 18.9419 21.3339 16.0071 21.3339ZM26.4608 7.46C26.4608 8.52393 25.6039 9.37365 24.5471 9.37365C23.4832 9.37365 22.6335 8.51679 22.6335 7.46C22.6335 6.40321 23.4904 5.54636 24.5471 5.54636C25.6039 5.54636 26.4608 6.40321 26.4608 7.46ZM31.8947 9.40221C31.7733 6.83878 31.1878 4.56811 29.3098 2.69731C27.439 0.826509 25.1684 0.240991 22.6049 0.112462C19.963 -0.0374874 12.0442 -0.0374874 9.40221 0.112462C6.84592 0.23385 4.57525 0.819368 2.69731 2.69017C0.819369 4.56097 0.240991 6.83164 0.112462 9.39507C-0.0374874 12.037 -0.0374874 19.9558 0.112462 22.5978C0.23385 25.1612 0.819369 27.4319 2.69731 29.3027C4.57525 31.1735 6.83878 31.759 9.40221 31.8875C12.0442 32.0375 19.963 32.0375 22.6049 31.8875C25.1684 31.7661 27.439 31.1806 29.3098 29.3027C31.1806 27.4319 31.7662 25.1612 31.8947 22.5978C32.0446 19.9558 32.0446 12.0442 31.8947 9.40221ZM28.4815 25.4326C27.9246 26.8321 26.8464 27.9103 25.4397 28.4744C23.3333 29.3098 18.3349 29.117 16.0071 29.117C13.6793 29.117 8.67388 29.3027 6.57458 28.4744C5.17505 27.9174 4.09684 26.8392 3.53275 25.4326C2.69731 23.3261 2.8901 18.3278 2.8901 16C2.8901 13.6722 2.70445 8.66674 3.53275 6.56744C4.0897 5.16791 5.16791 4.0897 6.57458 3.52561C8.68102 2.69017 13.6793 2.88296 16.0071 2.88296C18.3349 2.88296 23.3404 2.69731 25.4397 3.52561C26.8392 4.08256 27.9174 5.16077 28.4815 6.56744C29.317 8.67388 29.1242 13.6722 29.1242 16C29.1242 18.3278 29.317 23.3333 28.4815 25.4326Z"
                      fill="#101010"
                    />
                  </svg>
                </span>

                <span>@KACHEM YOUNG INITIATIVE (KYI)</span>
              </div>

              <div className="flex flex-row gap-5 items-center">
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.3333 15.9998C29.3333 8.63984 23.36 2.6665 16 2.6665C8.63996 2.6665 2.66663 8.63984 2.66663 15.9998C2.66663 22.4532 7.25329 27.8265 13.3333 29.0665V19.9998H10.6666V15.9998H13.3333V12.6665C13.3333 10.0932 15.4266 7.99984 18 7.99984H21.3333V11.9998H18.6666C17.9333 11.9998 17.3333 12.5998 17.3333 13.3332V15.9998H21.3333V19.9998H17.3333V29.2665C24.0666 28.5998 29.3333 22.9198 29.3333 15.9998Z"
                      fill="#101010"
                    />
                  </svg>
                </span>

                <span>@Kachem young initiative</span>
              </div>

              <div className="flex flex-row gap-5 items-center">
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4467 24.452H20.8933V18.8827C20.8933 17.5547 20.8667 15.8453 19.04 15.8453C17.188 15.8453 16.9053 17.2907 16.9053 18.7853V24.452H13.3507V13H16.764V14.56H16.8107C17.288 13.6613 18.448 12.7107 20.1813 12.7107C23.7813 12.7107 24.448 15.0813 24.448 18.1653V24.452H24.4467ZM9.33733 11.4333C9.06607 11.4337 8.79741 11.3805 8.54675 11.2768C8.29609 11.1731 8.06836 11.021 7.87661 10.8291C7.68486 10.6372 7.53287 10.4094 7.42935 10.1587C7.32582 9.90795 7.27281 9.63926 7.27333 9.368C7.2736 8.95978 7.39491 8.5608 7.62192 8.22153C7.84894 7.88225 8.17146 7.61791 8.54871 7.46194C8.92595 7.30596 9.34098 7.26536 9.74131 7.34525C10.1416 7.42515 10.5093 7.62197 10.7977 7.91081C11.0862 8.19965 11.2826 8.56755 11.3619 8.96798C11.4413 9.3684 11.4002 9.78338 11.2437 10.1604C11.0872 10.5375 10.8225 10.8597 10.4829 11.0862C10.1434 11.3128 9.74555 11.4336 9.33733 11.4333ZM11.1187 24.452H7.55467V13H11.12V24.452H11.1187ZM26.2267 4H5.772C4.79067 4 4 4.77333 4 5.72933V26.2707C4 27.2267 4.792 28 5.77067 28H26.2213C27.2 28 28 27.2267 28 26.2707V5.72933C28 4.77333 27.2 4 26.2213 4H26.2267Z"
                      fill="#111111"
                    />
                  </svg>
                </span>

                <span>@KACHEM YOUNG INITIATIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
