import React from "react";

const Getstarted2 = () => {
  return (
      <div className=" w-full  md:w-[1440px] m-auto  md:h-[534px] mt-[100px] ">
        <div className="w-[1234px] h-[534px] relative mx-auto  ">
          <div className=" absolute ml-[224px] mt-[123px] w-[786px] h-[96px]">
            <h1 className=" w-[786px] h-[96px] text-mywhite text-[52px]  text-center tracking-wide leading-10 font-bold ">
              Get our stories delivered From us to your inbox weekly.
            </h1>
            <div className="flex absolute  w-[494px] mt-[48px] ml-[171px] h-[56px] ">
              <input
                type="text"
                placeholder="Your Email..."
                className="w-[320px] h-[56px] pl-[14px] hover:border-2 hover:border-orange bg-mywhite rounded-lg text-black/50 "
              />
              <button className="w-[166px] h-[56px] ml-[8px] border-2 border-mywhite/50 hover:bg-lightblue text-mywhite font-bold bg-transparent rounded-lg ">
                Get Started
              </button>
            </div>
            <p className="w-[555px] h-[55px] text-[16px] font-normal mt-[128px] ml-[141px] leading-6  text-mywhite/60 text-center">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Getstarted2;
