import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-[1440px]  h-[700px] m-auto ">
      <div className="md:w-[1234px] w-full h-auto md:h-[576px] absolute text-mywhite  mx-auto mt-[50px] md:mt-[122px] ml-[30px] md:ml-[102px]">
        <div className="w-full h-auto md:w-[580px] md:h-[474px] mt-[14px]  absolute ">
          <h4 className="font-bold text-[16px] leading-6 tracking-wide ml-[3px]">
            Feature Post
          </h4>
          <h1 className="md:w-[580px] w-full h-auto md:h-[172px] text-[36px] md:text-[64px] font-bold leading-tight mt-[10px] md:mt-[37px]">
            How AI will
            <br />
            Change the <br className="md:hidden flex"/>Future
          </h1>
          <p className="md:block w-[300px] md:w-[416px] h-[96px] mt-[10px] md:mt-[28px] text-[16px] font-normal leading-6 tracking-wide">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <button className=" w-[100px] md:w-[170px] h-[32px] md:h-[53px] text-[16px] font-semibold text-darkblue bg-mywhite hover:bg-lightblue hover:text-mywhite rounded-lg mt-[64px]">
            Read more
          </button>
        </div>
        {/* rightside-imagediv */}
        <div className="md:w-[608px]  md:h-[376px] w-[280px] h-[157px] md:mt-[80px] mt-[450px]  md:ml-[626px] ">
          <Image
            src={"/images/home-image/imageAIHome.png"}
            alt={"home-AI-Image"}
            width={608}
            height={376}
            className="absolute md:w-[608px] md:h-[376px] w-[280px] h-[157px] rounded-3xl"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
