import React from "react";
import Footer from "../Footer/Footer";
import Link from "next/link";

const JoinHero = () => {
  return (
    <div className="flex flex-col">
      <div className="md:h-[600px] w-full flex items-center justify-center">
        <img
          src="https://miracle.sirv.com/kachem-young-initiative/Frame%201000003974%20(1).png"
          className="h-full w-full"
        />
      </div>

      <div className="max-w-[1140px] w-full mx-auto mt-16 px-5">
        <div className="flex flex-col">
          <div>
            <h1 className="md:text-[48px] text-3xl font-semibold font-poppins text-center text-black leading-tight">
              Join Our Journey of{" "}
              <span className="text-primary">Transformation</span>
            </h1>
            <p className="font-semibold font-poppins text-center md:text-[26px] text-xl my-3">
              Unleash Possibilities, Create Lasting Impact
            </p>

            <p className="text-[17px] md:text-[22px] mt-7 font-poppins">
              At Kachem Young Initiative, we strongly believe in the power of
              collective action to bring about a profound change in the lives of
              people who are in need. By partnering with us through
              volunteering, sponsoring students, giving gifts, donating funds,
              or sponsoring our programs, you can make a tangible and lasting
              difference.
              <br /><br/>
              Join us today in creating a brighter future for underserved
              people. Through a partnership, we can empower lives, and leave an
              indelible mark on future generations. Be part of a transformative
              movement that strives for a more equitable and prosperous world.
            </p>
          </div>
          <div>
          <h1 className="md:text-[48px] text-3xl md:mt-16 mt-16 font-semibold font-poppins text-center text-black leading-tight"> How You Can Join Us </h1>
          </div>


          {/* How to give*/}
          <div className="h-auto w-full flex flex-row flex-wrap font-poppins justify-center gap-20 my-[40px]">
              <div className="h-auto w-[400px] flex flex-col gap-4 border rounded-xl justify-between">
                <div className="bg-[#CEE4EA] p-5 relative rounded-t-xl">
                  <span className="font-semibold text-xl">Give a Sponsorship</span>
                </div>
                <div className="px-5">
                  <p>Sponsoring students is a transformative act that has the power to ignite dreams and create lasting change.  Your support breaks down the barriers that hold them back, empowering them to create a better future for themselves and their communities.</p>
                </div>

                <div className="p-5">
                  <Link href="/sponsorships"  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-2">
                    <span className="flex items-center justify-center">
                      Sponsor a student
                    </span>
                    <span className="flex items-center justify-center -mt-[6px]">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.2846 3.55427C19.4509 3.58748 19.5897 3.61372 19.7267 3.63061C19.8531 3.57509 19.9786 3.51008 20.1283 3.43053L20.1744 3.40599C20.3283 3.32398 20.524 3.21972 20.7273 3.13225C21.23 2.91602 21.8327 2.77644 22.5882 2.94187C24.3071 3.3183 25.2404 4.88466 25.1957 6.4251C25.1603 7.64477 24.4972 8.74863 23.8677 9.55163C23.2147 10.3846 22.4589 11.067 21.9845 11.4629C21.3759 11.9707 20.5419 12.093 19.8131 11.7813C19.245 11.5384 18.3251 11.1017 17.4604 10.4914C16.6268 9.90294 15.6747 9.03596 15.2905 7.87783C14.8053 6.41512 15.2496 4.64671 16.7881 3.79253C17.4642 3.41716 18.0816 3.37777 18.6252 3.44056C18.8451 3.46596 19.0624 3.50964 19.2334 3.544L19.2846 3.55427ZM17.8802 5.75968C18.0483 5.66637 18.1667 5.65256 18.367 5.6757C18.4895 5.68985 18.6166 5.71525 18.8104 5.754L18.8439 5.7607C19.0408 5.80001 19.2914 5.84903 19.5699 5.87695C19.8938 5.90943 20.2211 5.86143 20.522 5.73731C20.7808 5.63059 21.0067 5.51168 21.184 5.41749L21.2142 5.40145C21.3888 5.30868 21.5032 5.24786 21.6165 5.19911C21.8017 5.11943 21.9191 5.09867 22.1068 5.13978C22.5914 5.24589 22.9656 5.70786 22.9466 6.35977C22.9325 6.84685 22.6365 7.47531 22.097 8.16344C21.6094 8.78536 21.0261 9.32635 20.6134 9.67607C20.1176 9.4596 19.4036 9.10888 18.7579 8.65316C18.0436 8.14892 17.5795 7.63194 17.4261 7.16943C17.2208 6.55042 17.4466 6.00045 17.8802 5.75968Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.75 12.1252C1.75 10.8825 2.75736 9.87519 4 9.87519H6.25C7.49264 9.87519 8.5 10.8826 8.5 12.1252V12.4886C9.43778 12.0794 10.5118 11.754 11.7086 11.575C12.9104 11.3953 14.0593 11.7236 14.9625 11.9817C15.1018 12.0215 15.2352 12.0597 15.3621 12.094C16.3874 12.3715 17.2597 12.5194 18.2692 12.1828C19.1826 11.8784 20.097 11.8044 20.8533 12.2209C21.6539 12.6618 21.9343 13.4542 21.9885 14.0982C22.0121 14.3772 21.981 14.7552 21.7622 15.1191C21.5878 15.409 21.3477 15.6504 21.098 15.8503C21.949 15.5777 22.8447 15.3038 23.6315 15.1967C24.382 15.0945 25.4259 15.085 26.1705 15.8296C27.0279 16.6871 26.7743 17.8012 26.425 18.5182C26.0604 19.2668 25.4123 20.0283 24.6775 20.7257C23.1915 22.136 21.0543 23.5607 19.067 24.4097C16.6307 25.4504 13.7918 24.8125 11.6745 24.2073C11.1923 24.0695 10.7592 23.9369 10.3609 23.8149C9.80596 23.645 9.3185 23.4958 8.8603 23.382C8.72723 23.349 8.60746 23.3219 8.5 23.3005V23.3752C8.5 24.6178 7.49264 25.6252 6.25 25.6252H4C2.75736 25.6252 1.75 24.6178 1.75 23.3752V12.1252ZM8.5 15.0018C9.43318 14.4684 10.6231 14.0123 12.0414 13.8002C12.7266 13.6978 13.3585 13.8735 14.2941 14.1336C14.4457 14.1757 14.6052 14.2201 14.7743 14.2659C15.9111 14.5736 17.3221 14.8703 18.9808 14.3174C19.2545 14.2261 19.4445 14.1932 19.5698 14.1842L19.5387 14.2055C19.3202 14.3529 19.0188 14.515 18.6386 14.6841C17.8794 15.022 16.9045 15.3449 15.8784 15.6216C15.1034 15.8306 14.4417 16.4355 14.3163 17.2492C14.2508 17.6738 14.3433 18.1556 14.6775 18.5466C15.0053 18.9301 15.458 19.1025 15.8859 19.1483C16.8831 19.2552 17.9335 19.0904 18.9027 18.8557C19.7436 18.6521 20.5989 18.3757 21.3712 18.1262C21.4922 18.087 21.6112 18.0486 21.7278 18.0112C22.6259 17.723 23.3582 17.5047 23.9351 17.4261C24.1955 17.3906 24.3601 17.3929 24.4598 17.4039C24.4456 17.4396 24.4269 17.4823 24.4023 17.5329C24.2099 17.9279 23.7845 18.4712 23.1286 19.0937C21.8334 20.323 19.9205 21.5983 18.183 22.3406C16.559 23.0344 14.4478 22.6599 12.2928 22.0439C11.911 21.9348 11.5123 21.8133 11.1198 21.6936C10.5027 21.5055 9.90009 21.3218 9.40242 21.1983C9.10349 21.1241 8.79734 21.0589 8.5 21.0205V15.0018ZM6.25 12.1252V23.3752H4V12.1252H6.25ZM24.5004 17.2484C24.502 17.2474 24.5032 17.2564 24.4992 17.2785C24.4967 17.2605 24.4987 17.2494 24.5004 17.2484ZM16.4319 17.8061C16.4316 17.8059 16.4338 17.8044 16.4393 17.8021C16.4348 17.8051 16.4321 17.8062 16.4319 17.8061Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="h-auto w-[400px] flex flex-col gap-4 border rounded-xl justify-between">
                <div className="bg-[#EADAFF] p-5 relative rounded-t-xl">
                  <span className="font-semibold text-xl">Donate Funds</span>
                </div>
                <div className="px-5">
                  <p>Your donations is a powerful way to contribute to transformative education, mitigate the odds against literacy, and empower inclusive communities where persons with disabilities can thrive</p>
                </div>

                <div className="p-5">
                  <Link href="/join" className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-1">
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
                </div>
              </div>
              <div className="h-auto w-[400px] flex flex-col gap-4 border rounded-xl justify-between">
                <div className="bg-[#F3BDBB] p-5 relative rounded-t-xl">
                  <span className="font-semibold text-xl">Volunteer with Us</span>
                </div>
                <div className="px-5">
                  <p>Volunteering is a pathway to experiencing the joy of impact firsthand. Whether you choose to mentor, tutor, or organize events, your involvement will shape the future of these individuals while enriching your own life through meaningful connections and personal growth.</p>
                </div>

                <div className="p-5">
                  <Link href="/volunteering"  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-2">
                      <span className="flex items-center justify-center">
                        volunteer with Us
                      </span>
                      <span className="flex items-center justify-center">
                        <svg
                          width="24"
                          height="18"
                          viewBox="0 0 24 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.18936 0.440525C6.2221 -0.0303243 7.38648 -0.127174 8.48282 0.166588C9.01628 0.30953 9.33287 0.857867 9.18993 1.39133C9.04698 1.9248 8.49865 2.24138 7.96518 2.09844C7.31735 1.92485 6.6293 1.98208 6.01905 2.26031C5.40879 2.53854 4.91436 3.02043 4.62055 3.62334C4.32674 4.22624 4.25186 4.91259 4.40874 5.56467C4.56563 6.21675 4.94452 6.79392 5.48042 7.1972C5.77115 7.41599 5.92011 7.77542 5.86935 8.13573C5.8186 8.49603 5.57614 8.80033 5.23628 8.93028C4.55694 9.19004 3.93286 9.59126 3.40869 10.1154C3.23209 10.292 3.06949 10.4799 2.92157 10.6774C2.61334 11.0889 2.63344 11.4336 2.79565 11.7423C2.98719 12.1068 3.42732 12.4847 4.04987 12.6806C4.5767 12.8463 4.86944 13.4077 4.70371 13.9345C4.53799 14.4614 3.97656 14.7541 3.44972 14.5884C2.42792 14.267 1.50917 13.5936 1.02521 12.6727C0.511928 11.6959 0.539903 10.521 1.32082 9.4784C1.52546 9.2052 1.75034 8.94534 1.99447 8.70122C2.37088 8.32481 2.78457 7.99423 3.22685 7.7131C2.87086 7.21007 2.61052 6.64053 2.46424 6.03252C2.19873 4.929 2.32545 3.76749 2.82267 2.74719C3.31989 1.72688 4.15663 0.911375 5.18936 0.440525ZM17.9807 2.26031C17.3704 1.98208 16.6824 1.92485 16.0345 2.09844C15.5011 2.24138 14.9527 1.9248 14.8098 1.39133C14.6668 0.857867 14.9834 0.30953 15.5169 0.166588C16.6132 -0.127174 17.7776 -0.0303243 18.8103 0.440525C19.8431 0.911375 20.6798 1.72688 21.177 2.74719C21.6742 3.76749 21.801 4.929 21.5355 6.03252C21.3892 6.64053 21.1288 7.21007 20.7728 7.7131C21.2151 7.99423 21.6288 8.32481 22.0052 8.70122C22.2494 8.94534 22.4742 9.2052 22.6789 9.4784C23.4598 10.521 23.4878 11.6959 22.9745 12.6727C22.4905 13.5936 21.5718 14.267 20.55 14.5884C20.0231 14.7541 19.4617 14.4614 19.296 13.9345C19.1303 13.4077 19.423 12.8463 19.9498 12.6806C20.5724 12.4847 21.0125 12.1068 21.2041 11.7423C21.3663 11.4336 21.3864 11.0889 21.0781 10.6774C20.9302 10.4799 20.7676 10.292 20.591 10.1154C20.0668 9.59126 19.4428 9.19004 18.7634 8.93028C18.4236 8.80033 18.1811 8.49603 18.1304 8.13573C18.0796 7.77542 18.2285 7.41599 18.5193 7.1972C19.0552 6.79392 19.4341 6.21675 19.591 5.56467C19.7478 4.91259 19.673 4.22624 19.3792 3.62334C19.0853 3.02043 18.5909 2.53854 17.9807 2.26031ZM12 4C10.4045 4 9.11109 5.2934 9.11109 6.88889C9.11109 8.48439 10.4045 9.77783 12 9.77783C13.5955 9.77783 14.8889 8.4844 14.8889 6.88889C14.8889 5.2934 13.5955 4 12 4ZM15.2434 10.5471C16.2528 9.65145 16.8889 8.34444 16.8889 6.88889C16.8889 4.18883 14.7 2 12 2C9.29992 2 7.11109 4.18883 7.11109 6.88889C7.11109 8.34445 7.7472 9.65146 8.75659 10.5471C8.07381 10.8902 7.4436 11.3427 6.89312 11.8932C6.64899 12.1373 6.4241 12.3972 6.21947 12.6704C5.76084 13.2826 5.54487 13.9651 5.5829 14.6538C5.62035 15.3319 5.89927 15.939 6.29803 16.4291C7.08272 17.3936 8.39844 18.0001 9.77778 18.0001H14.2222C15.6016 18.0001 16.9173 17.3936 17.702 16.4291C18.1007 15.939 18.3797 15.3319 18.4171 14.6538C18.4551 13.9651 18.2392 13.2826 17.7805 12.6704C17.5759 12.3972 17.351 12.1373 17.1069 11.8932C16.5564 11.3427 15.9262 10.8902 15.2434 10.5471ZM12 11.7778C10.615 11.7778 9.28669 12.328 8.30733 13.3074C8.13074 13.484 7.96814 13.6719 7.82021 13.8694C7.61665 14.1411 7.57012 14.367 7.57986 14.5435C7.59019 14.7306 7.66931 14.9455 7.84944 15.1669C8.22253 15.6255 8.94797 16.0001 9.77778 16.0001H14.2222C15.052 16.0001 15.7775 15.6255 16.1506 15.1669C16.3307 14.9455 16.4098 14.7306 16.4201 14.5435C16.4299 14.367 16.3834 14.1411 16.1798 13.8694C16.0319 13.6719 15.8693 13.484 15.6927 13.3074C14.7133 12.328 13.385 11.7778 12 11.7778Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                  </Link>
                </div>
              </div>
              <div className="h-auto w-[400px] flex flex-col gap-4 border rounded-xl justify-between">
                <div className="bg-[#BAD9F4] p-5 relative rounded-t-xl">
                  <span className="font-semibold text-xl">Partner with Us</span>
                </div>
                <div className="px-5">
                  <p>Sponsoring students is a transformative act that has the power to ignite dreams and create lasting change.  Your support breaks down the barriers that hold them back, empowering them to create a better future for themselves and their communities.</p>
                </div>

                <div className="p-5">
                  <Link href="/partnerships"  className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-2">
                    <span className="flex items-center justify-center">
                      Become a Partner
                    </span>
                    <span className="flex items-center justify-center -mt-[5px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.75 0.273438L13.258 0.812688C12.1562 2.02544 11.248 2.56769 10.492 2.92244C9.736 3.27644 9.10075 3.38219 8.47675 3.85994C7.8115 4.36994 6.84475 5.34794 6.4375 7.09394C5.5645 7.28444 4.9255 7.61894 4.4215 8.05469C3.9235 8.48519 3.5485 8.97494 3.0865 9.50819C3.08275 9.51419 3.08875 9.52544 3.0865 9.53144C2.4235 10.2934 1.84375 11.1139 0.71875 11.5474L0.25 11.7349V19.7502H14.5472C15.367 19.7059 15.9355 19.1382 16.2812 18.5779C16.6262 18.0184 16.8175 17.4124 16.9142 16.9144C17.1632 15.6454 17.617 11.9922 17.617 11.9922L17.641 11.9224V11.8519C17.617 11.3449 17.4085 10.9144 17.1482 10.5154L17.992 8.00819L19.3285 5.99219L19.7035 5.45294L19.2107 5.00819L14.2892 0.742188L13.75 0.273438ZM13.7972 2.33594L17.7107 5.73494L16.6795 7.25744L16.6097 7.32869L16.5857 7.44569L15.9062 9.46094C15.5515 9.31469 15.1862 9.21194 14.7812 9.22694H14.734L10 9.25019H9.25V12.1564C9.145 12.9739 8.6905 13.2904 8.125 13.5162C7.9375 13.5919 7.91425 13.5507 7.75 13.5859V9.22769C7.627 6.44744 8.617 5.64719 9.391 5.05544C9.60475 4.89119 10.231 4.70144 11.125 4.28219C11.872 3.93044 12.8005 3.29969 13.7972 2.33594ZM6.29725 8.78144C6.29425 8.95169 6.241 9.07169 6.25 9.25019V15.2502H7C7 15.2502 7.8025 15.2412 8.66425 14.8984C9.52525 14.5557 10.5655 13.7532 10.75 12.3439V10.7502L14.7812 10.7269H14.8045C15.1337 10.7089 15.4567 10.8221 15.7027 11.0416C15.9487 11.2612 16.0977 11.5693 16.117 11.8984C16.114 11.9104 16.0795 12.1887 16.0705 12.2502H13V13.7502H15.883C15.8035 14.3299 15.7307 14.6937 15.6482 15.2502H13V16.7502H15.4142C15.3256 17.113 15.1833 17.4606 14.992 17.7814C14.7872 18.1152 14.611 18.2412 14.4535 18.2502H1.75V12.6484C2.96575 12.0034 3.72175 11.0757 4.21075 10.5162C4.71775 9.93569 5.06575 9.49619 5.40625 9.20369C5.629 9.01319 5.97775 8.90444 6.29725 8.78144Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="h-auto w-[400px] flex flex-col gap-4 border rounded-xl justify-between">
                <div className="bg-[#BDB8D3] p-5 relative rounded-t-xl">
                  <span className="font-semibold text-xl">Gift Someone</span>
                </div>
                <div className="px-5">
                  <p>Your act of kindness and generosity can provide essential resources, support, and opportunities that they may not have access to otherwise. Whether it&apos;s providing food, clothing, education, or healthcare, your gift has the power to transform their circumstances and brighten their future.</p>
                </div>

                <div className="p-5">
             <Link href="/gifting"   className="flex flex-row items-center w-full  justify-center text-[16px] py-2 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-2">
                    <span className="flex items-center justify-center">
                      Send a gift
                    </span>
                    <span className="flex items-center  justify-center -mt-[5px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.6982 2.10465L12.5 3.19394L11.3018 2.10465C9.42732 0.400596 6.80698 1.9314 6.73078 3.99995H4C2.34315 3.99995 1 5.34309 1 6.99995V8.88883C1 9.69296 1.44959 10.3921 2.11111 10.7485V18.9999C2.11111 21.2091 3.90197 22.9999 6.11111 22.9999H17.8889C20.098 22.9999 21.8889 21.2091 21.8889 18.9999V10.7485C22.5504 10.3921 23 9.69296 23 8.88883V6.99995C23 5.34309 21.6569 3.99995 20 3.99995H18.2692C18.193 1.9314 15.5727 0.400596 13.6982 2.10465ZM8.01833 5.99995C8.00673 6.00015 7.99514 6.00015 7.98356 5.99995H4C3.44772 5.99995 3 6.44766 3 6.99995V8.88883C3 8.9502 3.04975 8.99995 3.11111 8.99995H20.8889C20.9503 8.99995 21 8.9502 21 8.88883V6.99995C21 6.44766 20.5523 5.99995 20 5.99995H17.0164C17.0049 6.00015 16.9933 6.00015 16.9817 5.99995H8.01833ZM13.5 10.9999H10.5V13.6875C10.5 13.7219 10.5084 13.7381 10.5147 13.7477C10.5234 13.7609 10.5393 13.7765 10.5631 13.7879C10.587 13.7994 10.6091 13.8021 10.6248 13.8006C10.6363 13.7996 10.6542 13.796 10.681 13.7745C11.4521 13.1576 12.5479 13.1576 13.319 13.7745C13.3458 13.796 13.3637 13.7996 13.3752 13.8006C13.3909 13.8021 13.413 13.7994 13.4369 13.7879C13.4607 13.7765 13.4766 13.7609 13.4853 13.7477C13.4916 13.7381 13.5 13.7219 13.5 13.6875V10.9999ZM8.5 10.9999V13.6875C8.5 15.4579 10.5479 16.4422 11.9304 15.3362C11.9711 15.3037 12.0289 15.3037 12.0696 15.3362C13.4521 16.4422 15.5 15.4579 15.5 13.6875V10.9999H19.8889V18.9999C19.8889 20.1045 18.9935 20.9999 17.8889 20.9999H6.11111C5.00654 20.9999 4.11111 20.1045 4.11111 18.9999V10.9999H8.5ZM9.95644 3.58453L10.4134 3.99995H8.75741C8.84147 3.4984 9.48734 3.15808 9.95644 3.58453ZM16.2426 3.99995C16.1585 3.4984 15.5127 3.15808 15.0436 3.58453L14.5866 3.99995H16.2426Z"
                          fill="white"
                        />
                      </svg>
                    </span>
             </Link>
                </div>
              </div>
          </div>
          <div>
          <p className="text-[17px] md:text-[22px] mt-7  font-poppins">
         For further enquiry about any form of partnership, please send us an email at <a href="mailto:kachemyounginitiative@gmail.com" target="_blank" className="text-secondary"> kachemyounginitiative@gmail.com</a> 
            </p>
          </div>
        </div>
      </div>

      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default JoinHero;
