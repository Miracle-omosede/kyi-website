"use client"
import Link from "next/link";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import SwiperNavButton from "../SwiperNavButton";

const Projects = () => {
  return (
    <div>
      <div className="md:mt-[120px] mt-[8rem]">
        <h1 className="flex items-center text-center justify-center mb-[84px] font-poppins text-[40px] font-bold">
          Our Projects
        </h1>
      </div>

      <div className="md:max-w-[1140px] mx-auto w-full font-poppins">
      <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>   
        <div className="grid grid-cols-12 md:px-0 px-5 gap-[31px]">
          <div className=" row-start-2 col-span-12 md:col-span-8 flex flex-col gap-10 md:gap-[64px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
                Community Development Acceleration Program{" "}
              </h1>
              <p className="md:text-[18px] text-[16px] tracking-wide">
                A community Development Acceleration project, designed to
                manually evaluate our impact across host communities, literacy
                centres and to galvanize community collaboration towards a
                specific developmental project, accessible education and
                healthcare.
                <br />
                <Link href="/allprojects" className="text-primary block md:hidden">
                  Learn more
                </Link>
              </p>
            </div>

            {/* progress bar */}
            <div className="flex">
              <div className="flex flex-row gap-[25px]">
                <Link
                  href="/join"
                  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1"
                >
                  <span className="flex items-center justify-center">
                    Donate
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1001_827)">
                        <path
                          d="M8.09106 6.41665C7.54088 6.36851 7.05585 6.7755 7.00771 7.32569C6.95958 7.87587 7.36657 8.3609 7.91675 8.40904L9.90914 8.58335C10.4593 8.63148 10.9444 8.22449 10.9925 7.67431C11.0406 7.12413 10.6336 6.6391 10.0835 6.59096L8.09106 6.41665Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 8.32569C19.0558 7.7755 19.5409 7.36851 20.0911 7.41665L22.0835 7.59096C22.6336 7.6391 23.0406 8.12413 22.9925 8.67431C22.9444 9.22449 22.4593 9.63148 21.9091 9.58335L19.9168 9.40904C19.3666 9.3609 18.9596 8.87587 19.0077 8.32569Z"
                          fill="white"
                        />
                        <path
                          d="M8.09106 15.0038C7.54088 14.9557 7.05585 15.3627 7.00771 15.9128C6.95958 16.463 7.36657 16.9481 7.91675 16.9962L9.90914 17.1705C10.4593 17.2186 10.9444 16.8117 10.9925 16.2615C11.0406 15.7113 10.6336 15.2263 10.0835 15.1781L8.09106 15.0038Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 17.3257C19.0558 16.7755 19.5409 16.3685 20.0911 16.4166L22.0835 16.591C22.6336 16.6391 23.0406 17.1241 22.9925 17.6743C22.9444 18.2245 22.4593 18.6315 21.9091 18.5834L19.9168 18.409C19.3666 18.3609 18.9596 17.8759 19.0077 17.3257Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.24433 3.2416C5.9311 3.04304 4 4.87589 4 7.16862V15.1596C4 17.2848 5.65497 19.0305 7.74824 19.2066C8.60626 19.2788 9.65879 19.3733 10.9024 19.4952C11.1254 19.5171 11.621 19.6182 12.3377 19.7839C12.8089 19.8929 13.3392 20.0209 13.8964 20.1554C14.1591 20.2188 14.4286 20.2839 14.6998 20.3488C15.5391 20.5499 16.3972 20.7506 17.1357 20.9018C17.8428 21.0465 18.5356 21.1667 18.9958 21.1687C20.1394 21.1735 21.2579 21.1519 22.2151 21.1227C24.3562 21.0574 26 19.2885 26 17.1812V9.19281C26 6.88039 24.0564 5.07288 21.7836 5.13431C20.931 5.15735 19.9751 5.1728 19.0042 5.16869C18.7734 5.16772 18.2712 5.09268 17.5366 4.94237C16.8335 4.79848 16.0034 4.60454 15.1657 4.40387C14.9033 4.34101 14.6395 4.27734 14.3793 4.21452L14.3782 4.21428C13.8155 4.07844 13.269 3.94651 12.7883 3.83536C12.1081 3.67807 11.4759 3.54186 11.0976 3.50477C9.99864 3.39704 9.04679 3.31047 8.24433 3.2416ZM6 7.16862C6 6.01884 6.95662 5.13842 8.07329 5.23427C8.86777 5.30246 9.81158 5.38828 10.9024 5.49523C11.1254 5.51709 11.621 5.61821 12.3377 5.78394C12.8089 5.89291 13.3394 6.02097 13.8967 6.15549C14.1596 6.21895 14.4284 6.28384 14.6998 6.34885C15.5391 6.54989 16.3972 6.75065 17.1357 6.90176C17.8428 7.04646 18.5356 7.16673 18.9958 7.16867C19.9924 7.17289 20.9697 7.15703 21.8377 7.13358C23.0241 7.10151 24 8.0447 24 9.19281V17.1812C24 18.2426 23.1803 19.0923 22.1541 19.1236C21.2131 19.1524 20.1187 19.1734 19.0042 19.1687C18.7734 19.1677 18.2712 19.0927 17.5366 18.9424C16.8335 18.7985 16.0034 18.6045 15.1657 18.4039C14.903 18.341 14.639 18.2772 14.3784 18.2143C13.8156 18.0785 13.269 17.9465 12.7883 17.8354C12.1081 17.6781 11.4759 17.5419 11.0976 17.5048C9.84472 17.3819 8.78303 17.2866 7.91593 17.2137C6.83407 17.1227 6 16.2208 6 15.1596V7.16862Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1001_827"
                          x="-1"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1001_827"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1001_827"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/allprojects"
                  className="flex flex-row flex-nowrap items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-primary font-semibold border-primary border-2 bg-white capitalize font-manrope gap-1"
                >
                  <span className="flex-none items-center justify-center w-full">
                    Our Projects
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 0.293031C6.48053 0.10556 6.73484 0.000244141 7 0.000244141C7.26516 0.000244141 7.51947 0.10556 7.707 0.293031L11.707 4.29303C11.8945 4.48056 11.9998 4.73487 11.9998 5.00003C11.9998 5.26519 11.8945 5.5195 11.707 5.70703L7.707 9.70703C7.5184 9.88919 7.2658 9.98998 7.0036 9.9877C6.7414 9.98543 6.49059 9.88026 6.30518 9.69485C6.11977 9.50944 6.0146 9.25863 6.01233 8.99643C6.01005 8.73423 6.11084 8.48163 6.293 8.29303L8.586 6.00003H1C0.734784 6.00003 0.48043 5.89467 0.292893 5.70714C0.105357 5.5196 0 5.26525 0 5.00003C0 4.73481 0.105357 4.48046 0.292893 4.29292C0.48043 4.10539 0.734784 4.00003 1 4.00003H8.586L6.293 1.70703C6.10553 1.5195 6.00021 1.26519 6.00021 1.00003C6.00021 0.734866 6.10553 0.480558 6.293 0.293031Z"
                        fill="#F65308"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:row-start-2 row-start-1 col-span-12 md:col-span-4">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/CDAP%20IMAGE%20REP.jpeg" className="w-full" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>   
        <div className="grid grid-cols-12 md:px-0 px-5 gap-[31px]">
          <div className=" row-start-2 col-span-12 md:col-span-8 flex flex-col gap-10 md:gap-[64px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
                Literacy Drive{" "}
              </h1>
              <p className="md:text-[18px] text-[16px] tracking-wide">
              At Kachem Young Initiative, we believe that every child deserves access to quality education and the opportunity to develop essential life skills. Our LITERACY DRIVE Project is at the heart of our mission to empower young people with the tools they need to thrive in today&apos;s world.
                <br />
                <Link href="/allprojects" className="text-primary block md:hidden">
                  Learn more
                </Link>
              </p>
            </div>

            {/* progress bar */}
            <div className="flex">
              <div className="flex flex-row gap-[25px]">
                <Link
                  href="/join"
                  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1"
                >
                  <span className="flex items-center justify-center">
                    Donate
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1001_827)">
                        <path
                          d="M8.09106 6.41665C7.54088 6.36851 7.05585 6.7755 7.00771 7.32569C6.95958 7.87587 7.36657 8.3609 7.91675 8.40904L9.90914 8.58335C10.4593 8.63148 10.9444 8.22449 10.9925 7.67431C11.0406 7.12413 10.6336 6.6391 10.0835 6.59096L8.09106 6.41665Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 8.32569C19.0558 7.7755 19.5409 7.36851 20.0911 7.41665L22.0835 7.59096C22.6336 7.6391 23.0406 8.12413 22.9925 8.67431C22.9444 9.22449 22.4593 9.63148 21.9091 9.58335L19.9168 9.40904C19.3666 9.3609 18.9596 8.87587 19.0077 8.32569Z"
                          fill="white"
                        />
                        <path
                          d="M8.09106 15.0038C7.54088 14.9557 7.05585 15.3627 7.00771 15.9128C6.95958 16.463 7.36657 16.9481 7.91675 16.9962L9.90914 17.1705C10.4593 17.2186 10.9444 16.8117 10.9925 16.2615C11.0406 15.7113 10.6336 15.2263 10.0835 15.1781L8.09106 15.0038Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 17.3257C19.0558 16.7755 19.5409 16.3685 20.0911 16.4166L22.0835 16.591C22.6336 16.6391 23.0406 17.1241 22.9925 17.6743C22.9444 18.2245 22.4593 18.6315 21.9091 18.5834L19.9168 18.409C19.3666 18.3609 18.9596 17.8759 19.0077 17.3257Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.24433 3.2416C5.9311 3.04304 4 4.87589 4 7.16862V15.1596C4 17.2848 5.65497 19.0305 7.74824 19.2066C8.60626 19.2788 9.65879 19.3733 10.9024 19.4952C11.1254 19.5171 11.621 19.6182 12.3377 19.7839C12.8089 19.8929 13.3392 20.0209 13.8964 20.1554C14.1591 20.2188 14.4286 20.2839 14.6998 20.3488C15.5391 20.5499 16.3972 20.7506 17.1357 20.9018C17.8428 21.0465 18.5356 21.1667 18.9958 21.1687C20.1394 21.1735 21.2579 21.1519 22.2151 21.1227C24.3562 21.0574 26 19.2885 26 17.1812V9.19281C26 6.88039 24.0564 5.07288 21.7836 5.13431C20.931 5.15735 19.9751 5.1728 19.0042 5.16869C18.7734 5.16772 18.2712 5.09268 17.5366 4.94237C16.8335 4.79848 16.0034 4.60454 15.1657 4.40387C14.9033 4.34101 14.6395 4.27734 14.3793 4.21452L14.3782 4.21428C13.8155 4.07844 13.269 3.94651 12.7883 3.83536C12.1081 3.67807 11.4759 3.54186 11.0976 3.50477C9.99864 3.39704 9.04679 3.31047 8.24433 3.2416ZM6 7.16862C6 6.01884 6.95662 5.13842 8.07329 5.23427C8.86777 5.30246 9.81158 5.38828 10.9024 5.49523C11.1254 5.51709 11.621 5.61821 12.3377 5.78394C12.8089 5.89291 13.3394 6.02097 13.8967 6.15549C14.1596 6.21895 14.4284 6.28384 14.6998 6.34885C15.5391 6.54989 16.3972 6.75065 17.1357 6.90176C17.8428 7.04646 18.5356 7.16673 18.9958 7.16867C19.9924 7.17289 20.9697 7.15703 21.8377 7.13358C23.0241 7.10151 24 8.0447 24 9.19281V17.1812C24 18.2426 23.1803 19.0923 22.1541 19.1236C21.2131 19.1524 20.1187 19.1734 19.0042 19.1687C18.7734 19.1677 18.2712 19.0927 17.5366 18.9424C16.8335 18.7985 16.0034 18.6045 15.1657 18.4039C14.903 18.341 14.639 18.2772 14.3784 18.2143C13.8156 18.0785 13.269 17.9465 12.7883 17.8354C12.1081 17.6781 11.4759 17.5419 11.0976 17.5048C9.84472 17.3819 8.78303 17.2866 7.91593 17.2137C6.83407 17.1227 6 16.2208 6 15.1596V7.16862Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1001_827"
                          x="-1"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1001_827"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1001_827"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/literacyDrive"
                  className="flex flex-row flex-nowrap items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-primary font-semibold border-primary border-2 bg-white capitalize font-manrope gap-1"
                >
                  <span className="flex-none items-center justify-center w-full">
                    View Project
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 0.293031C6.48053 0.10556 6.73484 0.000244141 7 0.000244141C7.26516 0.000244141 7.51947 0.10556 7.707 0.293031L11.707 4.29303C11.8945 4.48056 11.9998 4.73487 11.9998 5.00003C11.9998 5.26519 11.8945 5.5195 11.707 5.70703L7.707 9.70703C7.5184 9.88919 7.2658 9.98998 7.0036 9.9877C6.7414 9.98543 6.49059 9.88026 6.30518 9.69485C6.11977 9.50944 6.0146 9.25863 6.01233 8.99643C6.01005 8.73423 6.11084 8.48163 6.293 8.29303L8.586 6.00003H1C0.734784 6.00003 0.48043 5.89467 0.292893 5.70714C0.105357 5.5196 0 5.26525 0 5.00003C0 4.73481 0.105357 4.48046 0.292893 4.29292C0.48043 4.10539 0.734784 4.00003 1 4.00003H8.586L6.293 1.70703C6.10553 1.5195 6.00021 1.26519 6.00021 1.00003C6.00021 0.734866 6.10553 0.480558 6.293 0.293031Z"
                        fill="#F65308"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:row-start-2 row-start-1 col-span-12 md:col-span-4">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%202906%20(1).png" className="w-full" />
            </div>
          </div>
        </div>
     </SwiperSlide>
      <SwiperSlide>   
        <div className="grid grid-cols-12 md:px-0 px-5 gap-[31px]">
          <div className=" row-start-2 col-span-12 md:col-span-8 flex flex-col gap-10 md:gap-[64px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Health and Wellness Awareness Project
              </h1>
              <p className="md:text-[18px] text-[16px] tracking-wide">
              At Kachem Young Initiative, we are dedicated to promoting basic health education and raising awareness about prevalent diseases in our community. Our team of healthcare and medical professionals is committed to improving the well-being of individuals by providing vital knowledge and services. <br />
                <Link href="/allprojects" className="text-primary block md:hidden">
                  Learn more
                </Link>
              </p>
            </div>

            {/* progress bar */}
            <div className="flex">
              <div className="flex flex-row gap-[25px]">
                <Link
                  href="/join"
                  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1"
                >
                  <span className="flex items-center justify-center">
                    Donate
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1001_827)">
                        <path
                          d="M8.09106 6.41665C7.54088 6.36851 7.05585 6.7755 7.00771 7.32569C6.95958 7.87587 7.36657 8.3609 7.91675 8.40904L9.90914 8.58335C10.4593 8.63148 10.9444 8.22449 10.9925 7.67431C11.0406 7.12413 10.6336 6.6391 10.0835 6.59096L8.09106 6.41665Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 8.32569C19.0558 7.7755 19.5409 7.36851 20.0911 7.41665L22.0835 7.59096C22.6336 7.6391 23.0406 8.12413 22.9925 8.67431C22.9444 9.22449 22.4593 9.63148 21.9091 9.58335L19.9168 9.40904C19.3666 9.3609 18.9596 8.87587 19.0077 8.32569Z"
                          fill="white"
                        />
                        <path
                          d="M8.09106 15.0038C7.54088 14.9557 7.05585 15.3627 7.00771 15.9128C6.95958 16.463 7.36657 16.9481 7.91675 16.9962L9.90914 17.1705C10.4593 17.2186 10.9444 16.8117 10.9925 16.2615C11.0406 15.7113 10.6336 15.2263 10.0835 15.1781L8.09106 15.0038Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 17.3257C19.0558 16.7755 19.5409 16.3685 20.0911 16.4166L22.0835 16.591C22.6336 16.6391 23.0406 17.1241 22.9925 17.6743C22.9444 18.2245 22.4593 18.6315 21.9091 18.5834L19.9168 18.409C19.3666 18.3609 18.9596 17.8759 19.0077 17.3257Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.24433 3.2416C5.9311 3.04304 4 4.87589 4 7.16862V15.1596C4 17.2848 5.65497 19.0305 7.74824 19.2066C8.60626 19.2788 9.65879 19.3733 10.9024 19.4952C11.1254 19.5171 11.621 19.6182 12.3377 19.7839C12.8089 19.8929 13.3392 20.0209 13.8964 20.1554C14.1591 20.2188 14.4286 20.2839 14.6998 20.3488C15.5391 20.5499 16.3972 20.7506 17.1357 20.9018C17.8428 21.0465 18.5356 21.1667 18.9958 21.1687C20.1394 21.1735 21.2579 21.1519 22.2151 21.1227C24.3562 21.0574 26 19.2885 26 17.1812V9.19281C26 6.88039 24.0564 5.07288 21.7836 5.13431C20.931 5.15735 19.9751 5.1728 19.0042 5.16869C18.7734 5.16772 18.2712 5.09268 17.5366 4.94237C16.8335 4.79848 16.0034 4.60454 15.1657 4.40387C14.9033 4.34101 14.6395 4.27734 14.3793 4.21452L14.3782 4.21428C13.8155 4.07844 13.269 3.94651 12.7883 3.83536C12.1081 3.67807 11.4759 3.54186 11.0976 3.50477C9.99864 3.39704 9.04679 3.31047 8.24433 3.2416ZM6 7.16862C6 6.01884 6.95662 5.13842 8.07329 5.23427C8.86777 5.30246 9.81158 5.38828 10.9024 5.49523C11.1254 5.51709 11.621 5.61821 12.3377 5.78394C12.8089 5.89291 13.3394 6.02097 13.8967 6.15549C14.1596 6.21895 14.4284 6.28384 14.6998 6.34885C15.5391 6.54989 16.3972 6.75065 17.1357 6.90176C17.8428 7.04646 18.5356 7.16673 18.9958 7.16867C19.9924 7.17289 20.9697 7.15703 21.8377 7.13358C23.0241 7.10151 24 8.0447 24 9.19281V17.1812C24 18.2426 23.1803 19.0923 22.1541 19.1236C21.2131 19.1524 20.1187 19.1734 19.0042 19.1687C18.7734 19.1677 18.2712 19.0927 17.5366 18.9424C16.8335 18.7985 16.0034 18.6045 15.1657 18.4039C14.903 18.341 14.639 18.2772 14.3784 18.2143C13.8156 18.0785 13.269 17.9465 12.7883 17.8354C12.1081 17.6781 11.4759 17.5419 11.0976 17.5048C9.84472 17.3819 8.78303 17.2866 7.91593 17.2137C6.83407 17.1227 6 16.2208 6 15.1596V7.16862Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1001_827"
                          x="-1"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1001_827"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1001_827"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/healthWelness"
                  className="flex flex-row flex-nowrap items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-primary font-semibold border-primary border-2 bg-white capitalize font-manrope gap-1"
                >
                  <span className="flex-none items-center justify-center w-full">
                    View Project
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 0.293031C6.48053 0.10556 6.73484 0.000244141 7 0.000244141C7.26516 0.000244141 7.51947 0.10556 7.707 0.293031L11.707 4.29303C11.8945 4.48056 11.9998 4.73487 11.9998 5.00003C11.9998 5.26519 11.8945 5.5195 11.707 5.70703L7.707 9.70703C7.5184 9.88919 7.2658 9.98998 7.0036 9.9877C6.7414 9.98543 6.49059 9.88026 6.30518 9.69485C6.11977 9.50944 6.0146 9.25863 6.01233 8.99643C6.01005 8.73423 6.11084 8.48163 6.293 8.29303L8.586 6.00003H1C0.734784 6.00003 0.48043 5.89467 0.292893 5.70714C0.105357 5.5196 0 5.26525 0 5.00003C0 4.73481 0.105357 4.48046 0.292893 4.29292C0.48043 4.10539 0.734784 4.00003 1 4.00003H8.586L6.293 1.70703C6.10553 1.5195 6.00021 1.26519 6.00021 1.00003C6.00021 0.734866 6.10553 0.480558 6.293 0.293031Z"
                        fill="#F65308"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:row-start-2 row-start-1 col-span-12 md:col-span-4">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%202906.png" className="w-full" />
            </div>
          </div>
        </div>
     </SwiperSlide>
      <SwiperSlide>   
        <div className="grid grid-cols-12 md:px-0 px-5 gap-[31px]">
          <div className=" row-start-2 col-span-12 md:col-span-8 flex flex-col gap-10 md:gap-[64px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Brave Voices
              </h1>
              <p className="md:text-[18px] text-[16px] tracking-wide">
              Brave Voices is more than just a conference; it&apos;s a powerful platform that amplifies the voices of survivors of Gender-based Violence/Intimate Partner Violence (GBV/IPV) who happen to be persons with disabilities.
<br />
                <Link href="/allprojects" className="text-primary block md:hidden">
                  Learn more
                </Link>
              </p>
            </div>

            {/* progress bar */}
            <div className="flex">
              <div className="flex flex-row gap-[25px]">
                <Link
                  href="/join"
                  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1"
                >
                  <span className="flex items-center justify-center">
                    Donate
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1001_827)">
                        <path
                          d="M8.09106 6.41665C7.54088 6.36851 7.05585 6.7755 7.00771 7.32569C6.95958 7.87587 7.36657 8.3609 7.91675 8.40904L9.90914 8.58335C10.4593 8.63148 10.9444 8.22449 10.9925 7.67431C11.0406 7.12413 10.6336 6.6391 10.0835 6.59096L8.09106 6.41665Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 8.32569C19.0558 7.7755 19.5409 7.36851 20.0911 7.41665L22.0835 7.59096C22.6336 7.6391 23.0406 8.12413 22.9925 8.67431C22.9444 9.22449 22.4593 9.63148 21.9091 9.58335L19.9168 9.40904C19.3666 9.3609 18.9596 8.87587 19.0077 8.32569Z"
                          fill="white"
                        />
                        <path
                          d="M8.09106 15.0038C7.54088 14.9557 7.05585 15.3627 7.00771 15.9128C6.95958 16.463 7.36657 16.9481 7.91675 16.9962L9.90914 17.1705C10.4593 17.2186 10.9444 16.8117 10.9925 16.2615C11.0406 15.7113 10.6336 15.2263 10.0835 15.1781L8.09106 15.0038Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 17.3257C19.0558 16.7755 19.5409 16.3685 20.0911 16.4166L22.0835 16.591C22.6336 16.6391 23.0406 17.1241 22.9925 17.6743C22.9444 18.2245 22.4593 18.6315 21.9091 18.5834L19.9168 18.409C19.3666 18.3609 18.9596 17.8759 19.0077 17.3257Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.24433 3.2416C5.9311 3.04304 4 4.87589 4 7.16862V15.1596C4 17.2848 5.65497 19.0305 7.74824 19.2066C8.60626 19.2788 9.65879 19.3733 10.9024 19.4952C11.1254 19.5171 11.621 19.6182 12.3377 19.7839C12.8089 19.8929 13.3392 20.0209 13.8964 20.1554C14.1591 20.2188 14.4286 20.2839 14.6998 20.3488C15.5391 20.5499 16.3972 20.7506 17.1357 20.9018C17.8428 21.0465 18.5356 21.1667 18.9958 21.1687C20.1394 21.1735 21.2579 21.1519 22.2151 21.1227C24.3562 21.0574 26 19.2885 26 17.1812V9.19281C26 6.88039 24.0564 5.07288 21.7836 5.13431C20.931 5.15735 19.9751 5.1728 19.0042 5.16869C18.7734 5.16772 18.2712 5.09268 17.5366 4.94237C16.8335 4.79848 16.0034 4.60454 15.1657 4.40387C14.9033 4.34101 14.6395 4.27734 14.3793 4.21452L14.3782 4.21428C13.8155 4.07844 13.269 3.94651 12.7883 3.83536C12.1081 3.67807 11.4759 3.54186 11.0976 3.50477C9.99864 3.39704 9.04679 3.31047 8.24433 3.2416ZM6 7.16862C6 6.01884 6.95662 5.13842 8.07329 5.23427C8.86777 5.30246 9.81158 5.38828 10.9024 5.49523C11.1254 5.51709 11.621 5.61821 12.3377 5.78394C12.8089 5.89291 13.3394 6.02097 13.8967 6.15549C14.1596 6.21895 14.4284 6.28384 14.6998 6.34885C15.5391 6.54989 16.3972 6.75065 17.1357 6.90176C17.8428 7.04646 18.5356 7.16673 18.9958 7.16867C19.9924 7.17289 20.9697 7.15703 21.8377 7.13358C23.0241 7.10151 24 8.0447 24 9.19281V17.1812C24 18.2426 23.1803 19.0923 22.1541 19.1236C21.2131 19.1524 20.1187 19.1734 19.0042 19.1687C18.7734 19.1677 18.2712 19.0927 17.5366 18.9424C16.8335 18.7985 16.0034 18.6045 15.1657 18.4039C14.903 18.341 14.639 18.2772 14.3784 18.2143C13.8156 18.0785 13.269 17.9465 12.7883 17.8354C12.1081 17.6781 11.4759 17.5419 11.0976 17.5048C9.84472 17.3819 8.78303 17.2866 7.91593 17.2137C6.83407 17.1227 6 16.2208 6 15.1596V7.16862Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1001_827"
                          x="-1"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1001_827"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1001_827"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/bravevoices"
                  className="flex flex-row flex-nowrap items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-primary font-semibold border-primary border-2 bg-white capitalize font-manrope gap-1"
                >
                  <span className="flex-none items-center justify-center w-full">
                    View Project
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 0.293031C6.48053 0.10556 6.73484 0.000244141 7 0.000244141C7.26516 0.000244141 7.51947 0.10556 7.707 0.293031L11.707 4.29303C11.8945 4.48056 11.9998 4.73487 11.9998 5.00003C11.9998 5.26519 11.8945 5.5195 11.707 5.70703L7.707 9.70703C7.5184 9.88919 7.2658 9.98998 7.0036 9.9877C6.7414 9.98543 6.49059 9.88026 6.30518 9.69485C6.11977 9.50944 6.0146 9.25863 6.01233 8.99643C6.01005 8.73423 6.11084 8.48163 6.293 8.29303L8.586 6.00003H1C0.734784 6.00003 0.48043 5.89467 0.292893 5.70714C0.105357 5.5196 0 5.26525 0 5.00003C0 4.73481 0.105357 4.48046 0.292893 4.29292C0.48043 4.10539 0.734784 4.00003 1 4.00003H8.586L6.293 1.70703C6.10553 1.5195 6.00021 1.26519 6.00021 1.00003C6.00021 0.734866 6.10553 0.480558 6.293 0.293031Z"
                        fill="#F65308"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:row-start-2 row-start-1 col-span-12 md:col-span-4">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/IMG_4695%201%20(1).png" className="w-full" />
            </div>
          </div>
        </div>
     </SwiperSlide>
      <SwiperSlide>   
        <div className="grid grid-cols-12 md:px-0 px-5 gap-[31px]">
          <div className=" row-start-2 col-span-12 md:col-span-8 flex flex-col gap-10 md:gap-[64px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Rural Women Farmers Initiative(RUWOFI)
              </h1>
              <p className="md:text-[18px] text-[16px] tracking-wide">
                RUWOFI is an initiative that establishes sustainable agricultural enterprises led by rural women farmers under the organizations resgistered cooperatives to empower rural women financially, and to give them economic edge while solving the problem of food insecuruty.
              <br />
                <Link href="/allprojects" className="text-primary block md:hidden">
                  Learn more
                </Link>
              </p>
            </div>

            {/* progress bar */}
            <div className="flex">
              <div className="flex flex-row gap-[25px]">
                <Link
                  href="/join"
                  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1"
                >
                  <span className="flex items-center justify-center">
                    Donate
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1001_827)">
                        <path
                          d="M8.09106 6.41665C7.54088 6.36851 7.05585 6.7755 7.00771 7.32569C6.95958 7.87587 7.36657 8.3609 7.91675 8.40904L9.90914 8.58335C10.4593 8.63148 10.9444 8.22449 10.9925 7.67431C11.0406 7.12413 10.6336 6.6391 10.0835 6.59096L8.09106 6.41665Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 8.32569C19.0558 7.7755 19.5409 7.36851 20.0911 7.41665L22.0835 7.59096C22.6336 7.6391 23.0406 8.12413 22.9925 8.67431C22.9444 9.22449 22.4593 9.63148 21.9091 9.58335L19.9168 9.40904C19.3666 9.3609 18.9596 8.87587 19.0077 8.32569Z"
                          fill="white"
                        />
                        <path
                          d="M8.09106 15.0038C7.54088 14.9557 7.05585 15.3627 7.00771 15.9128C6.95958 16.463 7.36657 16.9481 7.91675 16.9962L9.90914 17.1705C10.4593 17.2186 10.9444 16.8117 10.9925 16.2615C11.0406 15.7113 10.6336 15.2263 10.0835 15.1781L8.09106 15.0038Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 17.3257C19.0558 16.7755 19.5409 16.3685 20.0911 16.4166L22.0835 16.591C22.6336 16.6391 23.0406 17.1241 22.9925 17.6743C22.9444 18.2245 22.4593 18.6315 21.9091 18.5834L19.9168 18.409C19.3666 18.3609 18.9596 17.8759 19.0077 17.3257Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.24433 3.2416C5.9311 3.04304 4 4.87589 4 7.16862V15.1596C4 17.2848 5.65497 19.0305 7.74824 19.2066C8.60626 19.2788 9.65879 19.3733 10.9024 19.4952C11.1254 19.5171 11.621 19.6182 12.3377 19.7839C12.8089 19.8929 13.3392 20.0209 13.8964 20.1554C14.1591 20.2188 14.4286 20.2839 14.6998 20.3488C15.5391 20.5499 16.3972 20.7506 17.1357 20.9018C17.8428 21.0465 18.5356 21.1667 18.9958 21.1687C20.1394 21.1735 21.2579 21.1519 22.2151 21.1227C24.3562 21.0574 26 19.2885 26 17.1812V9.19281C26 6.88039 24.0564 5.07288 21.7836 5.13431C20.931 5.15735 19.9751 5.1728 19.0042 5.16869C18.7734 5.16772 18.2712 5.09268 17.5366 4.94237C16.8335 4.79848 16.0034 4.60454 15.1657 4.40387C14.9033 4.34101 14.6395 4.27734 14.3793 4.21452L14.3782 4.21428C13.8155 4.07844 13.269 3.94651 12.7883 3.83536C12.1081 3.67807 11.4759 3.54186 11.0976 3.50477C9.99864 3.39704 9.04679 3.31047 8.24433 3.2416ZM6 7.16862C6 6.01884 6.95662 5.13842 8.07329 5.23427C8.86777 5.30246 9.81158 5.38828 10.9024 5.49523C11.1254 5.51709 11.621 5.61821 12.3377 5.78394C12.8089 5.89291 13.3394 6.02097 13.8967 6.15549C14.1596 6.21895 14.4284 6.28384 14.6998 6.34885C15.5391 6.54989 16.3972 6.75065 17.1357 6.90176C17.8428 7.04646 18.5356 7.16673 18.9958 7.16867C19.9924 7.17289 20.9697 7.15703 21.8377 7.13358C23.0241 7.10151 24 8.0447 24 9.19281V17.1812C24 18.2426 23.1803 19.0923 22.1541 19.1236C21.2131 19.1524 20.1187 19.1734 19.0042 19.1687C18.7734 19.1677 18.2712 19.0927 17.5366 18.9424C16.8335 18.7985 16.0034 18.6045 15.1657 18.4039C14.903 18.341 14.639 18.2772 14.3784 18.2143C13.8156 18.0785 13.269 17.9465 12.7883 17.8354C12.1081 17.6781 11.4759 17.5419 11.0976 17.5048C9.84472 17.3819 8.78303 17.2866 7.91593 17.2137C6.83407 17.1227 6 16.2208 6 15.1596V7.16862Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1001_827"
                          x="-1"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1001_827"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1001_827"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/iwd"
                  className="flex flex-row flex-nowrap items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-primary font-semibold border-primary border-2 bg-white capitalize font-manrope gap-1"
                >
                  <span className="flex-none items-center justify-center w-full">
                    View Project
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 0.293031C6.48053 0.10556 6.73484 0.000244141 7 0.000244141C7.26516 0.000244141 7.51947 0.10556 7.707 0.293031L11.707 4.29303C11.8945 4.48056 11.9998 4.73487 11.9998 5.00003C11.9998 5.26519 11.8945 5.5195 11.707 5.70703L7.707 9.70703C7.5184 9.88919 7.2658 9.98998 7.0036 9.9877C6.7414 9.98543 6.49059 9.88026 6.30518 9.69485C6.11977 9.50944 6.0146 9.25863 6.01233 8.99643C6.01005 8.73423 6.11084 8.48163 6.293 8.29303L8.586 6.00003H1C0.734784 6.00003 0.48043 5.89467 0.292893 5.70714C0.105357 5.5196 0 5.26525 0 5.00003C0 4.73481 0.105357 4.48046 0.292893 4.29292C0.48043 4.10539 0.734784 4.00003 1 4.00003H8.586L6.293 1.70703C6.10553 1.5195 6.00021 1.26519 6.00021 1.00003C6.00021 0.734866 6.10553 0.480558 6.293 0.293031Z"
                        fill="#F65308"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:row-start-2 row-start-1 col-span-12 md:col-span-4">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/IMG_3976.JPG" className="w-full" />
            </div>
          </div>
        </div>
     </SwiperSlide>
      <SwiperSlide>   
        <div className="grid grid-cols-12 md:px-0 px-5 gap-[31px]">
          <div className=" row-start-2 col-span-12 md:col-span-8 flex flex-col gap-10 md:gap-[64px]">
            <div className="flex flex-col gap-[25px]">
              <h1 className="font-semibold text-[24px]">
              Codefusion
              </h1>
              <p className="md:text-[18px] text-[16px] tracking-wide">
              This partnership program for tech enthusiasts to learn and earn professional certifications, as well as to provide technical support and expert training for our “Girls That Code” Initiative.
              <br />
                <Link href="/allprojects" className="text-primary block md:hidden">
                  Learn more
                </Link>
              </p>
            </div>

            {/* progress bar */}
            <div className="flex">
              <div className="flex flex-row gap-[25px]">
                <Link
                  href="/join"
                  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1"
                >
                  <span className="flex items-center justify-center">
                    Donate
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1001_827)">
                        <path
                          d="M8.09106 6.41665C7.54088 6.36851 7.05585 6.7755 7.00771 7.32569C6.95958 7.87587 7.36657 8.3609 7.91675 8.40904L9.90914 8.58335C10.4593 8.63148 10.9444 8.22449 10.9925 7.67431C11.0406 7.12413 10.6336 6.6391 10.0835 6.59096L8.09106 6.41665Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 8.32569C19.0558 7.7755 19.5409 7.36851 20.0911 7.41665L22.0835 7.59096C22.6336 7.6391 23.0406 8.12413 22.9925 8.67431C22.9444 9.22449 22.4593 9.63148 21.9091 9.58335L19.9168 9.40904C19.3666 9.3609 18.9596 8.87587 19.0077 8.32569Z"
                          fill="white"
                        />
                        <path
                          d="M8.09106 15.0038C7.54088 14.9557 7.05585 15.3627 7.00771 15.9128C6.95958 16.463 7.36657 16.9481 7.91675 16.9962L9.90914 17.1705C10.4593 17.2186 10.9444 16.8117 10.9925 16.2615C11.0406 15.7113 10.6336 15.2263 10.0835 15.1781L8.09106 15.0038Z"
                          fill="white"
                        />
                        <path
                          d="M19.0077 17.3257C19.0558 16.7755 19.5409 16.3685 20.0911 16.4166L22.0835 16.591C22.6336 16.6391 23.0406 17.1241 22.9925 17.6743C22.9444 18.2245 22.4593 18.6315 21.9091 18.5834L19.9168 18.409C19.3666 18.3609 18.9596 17.8759 19.0077 17.3257Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.24433 3.2416C5.9311 3.04304 4 4.87589 4 7.16862V15.1596C4 17.2848 5.65497 19.0305 7.74824 19.2066C8.60626 19.2788 9.65879 19.3733 10.9024 19.4952C11.1254 19.5171 11.621 19.6182 12.3377 19.7839C12.8089 19.8929 13.3392 20.0209 13.8964 20.1554C14.1591 20.2188 14.4286 20.2839 14.6998 20.3488C15.5391 20.5499 16.3972 20.7506 17.1357 20.9018C17.8428 21.0465 18.5356 21.1667 18.9958 21.1687C20.1394 21.1735 21.2579 21.1519 22.2151 21.1227C24.3562 21.0574 26 19.2885 26 17.1812V9.19281C26 6.88039 24.0564 5.07288 21.7836 5.13431C20.931 5.15735 19.9751 5.1728 19.0042 5.16869C18.7734 5.16772 18.2712 5.09268 17.5366 4.94237C16.8335 4.79848 16.0034 4.60454 15.1657 4.40387C14.9033 4.34101 14.6395 4.27734 14.3793 4.21452L14.3782 4.21428C13.8155 4.07844 13.269 3.94651 12.7883 3.83536C12.1081 3.67807 11.4759 3.54186 11.0976 3.50477C9.99864 3.39704 9.04679 3.31047 8.24433 3.2416ZM6 7.16862C6 6.01884 6.95662 5.13842 8.07329 5.23427C8.86777 5.30246 9.81158 5.38828 10.9024 5.49523C11.1254 5.51709 11.621 5.61821 12.3377 5.78394C12.8089 5.89291 13.3394 6.02097 13.8967 6.15549C14.1596 6.21895 14.4284 6.28384 14.6998 6.34885C15.5391 6.54989 16.3972 6.75065 17.1357 6.90176C17.8428 7.04646 18.5356 7.16673 18.9958 7.16867C19.9924 7.17289 20.9697 7.15703 21.8377 7.13358C23.0241 7.10151 24 8.0447 24 9.19281V17.1812C24 18.2426 23.1803 19.0923 22.1541 19.1236C21.2131 19.1524 20.1187 19.1734 19.0042 19.1687C18.7734 19.1677 18.2712 19.0927 17.5366 18.9424C16.8335 18.7985 16.0034 18.6045 15.1657 18.4039C14.903 18.341 14.639 18.2772 14.3784 18.2143C13.8156 18.0785 13.269 17.9465 12.7883 17.8354C12.1081 17.6781 11.4759 17.5419 11.0976 17.5048C9.84472 17.3819 8.78303 17.2866 7.91593 17.2137C6.83407 17.1227 6 16.2208 6 15.1596V7.16862Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1001_827"
                          x="-1"
                          y="0"
                          width="32"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1001_827"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1001_827"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </Link>

                <Link
                  href="https://codefussion.tech/?fbclid=IwZXh0bgNhZW0CMTEAAR2AA_rtZjgNzDpJ_lLbd-AtysqI6mhRERcRgpdFRsBnMCzLqOX-UqdCP6c_aem_NqILzfqa5pCh3RbX3O76ag"
                  className="flex flex-row flex-nowrap items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-primary font-semibold border-primary border-2 bg-white capitalize font-manrope gap-1"
                >
                  <span className="flex-none items-center justify-center w-full">
                    View Project
                  </span>
                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 0.293031C6.48053 0.10556 6.73484 0.000244141 7 0.000244141C7.26516 0.000244141 7.51947 0.10556 7.707 0.293031L11.707 4.29303C11.8945 4.48056 11.9998 4.73487 11.9998 5.00003C11.9998 5.26519 11.8945 5.5195 11.707 5.70703L7.707 9.70703C7.5184 9.88919 7.2658 9.98998 7.0036 9.9877C6.7414 9.98543 6.49059 9.88026 6.30518 9.69485C6.11977 9.50944 6.0146 9.25863 6.01233 8.99643C6.01005 8.73423 6.11084 8.48163 6.293 8.29303L8.586 6.00003H1C0.734784 6.00003 0.48043 5.89467 0.292893 5.70714C0.105357 5.5196 0 5.26525 0 5.00003C0 4.73481 0.105357 4.48046 0.292893 4.29292C0.48043 4.10539 0.734784 4.00003 1 4.00003H8.586L6.293 1.70703C6.10553 1.5195 6.00021 1.26519 6.00021 1.00003C6.00021 0.734866 6.10553 0.480558 6.293 0.293031Z"
                        fill="#F65308"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:row-start-2 row-start-1 col-span-12 md:col-span-4">
            <div className="flex items-center justify-center w-full">
            <img src="https://miracle.sirv.com/kachem-young-initiative/codefusion_image.jpg" className="w-full" />
            </div>
          </div>
        </div>
     </SwiperSlide>
      <SwiperNavButton/>
      </Swiper>
      </div>
    </div>
  );
};

export default Projects;
