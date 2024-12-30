import React from "react";

const Getstarted = () => {
  return (
    <div className="bg-transparent w-full md:w-[1440px] h-auto md:h-[534px] mt-[50px] md:mt-[100px] mx-auto">
      <div className="w-full md:w-[1234px] bg-black/20 h-[534px] md:px-0 px-4 md:py-[0px] py-[10px] mb-[0px] relative  mx-auto">
        <div className="absolute ml-[0px]  md:ml-[244px] mt-[30px] md:mt-[123px] w-[90%] md:w-[786px] h-auto text-center">
          <h1 className="w-full text-mywhite text-[28px] md:text-[52px] tracking-wide leading-tight md:leading-10 font-bold">
            Get our stories delivered from us to your inbox weekly.
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-[48px]">
            <input
              type="text"
              placeholder="Your Email..."
              className="w-full md:w-[320px] h-[48px] md:h-[56px] pl-4 hover:border-2 hover:border-orange bg-mywhite rounded-lg text-black/50 mb-4 md:mb-0"
            />
            <button className="w-full md:w-[166px] h-[48px] md:h-[56px] md:ml-[8px] border-2 border-mywhite/50 hover:bg-lightblue text-mywhite font-bold bg-transparent rounded-lg">
              Get Started
            </button>
          </div>
          <p className="w-full md:w-[555px] text-[14px] md:text-[16px] font-normal mt-6 md:mt-[30px] leading-5 md:leading-6 text-mywhite/60 mx-auto">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a response the following day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
