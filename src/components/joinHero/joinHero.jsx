import React from "react";

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
            <h1 className="text-[48px] font-semibold font-poppins text-center text-black leading-tight">
              Join Our Journey of{" "}
              <span className="text-primary">Transformation</span>
            </h1>
            <p className="font-semibold font-poppins text-center md:text-[26px] text-[20px] my-3">
              Unleash Possibilities, Create Lasting Impact
            </p>

            <p className="text-[17px] md:text-[22px] mt-7">
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
          <h1 className="text-[48px] md:mt-16 mt-16 font-semibold font-poppins text-center text-black leading-tight"> How You Can Join Us </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHero;
