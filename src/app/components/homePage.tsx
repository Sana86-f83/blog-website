import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-[1440px] h-[796px] bg-darkblue m-auto">
      <div className="w-[1234px] h-[576px] absolute text-mywhite  mx-auto mt-[122px] ml-[102px]">
        <div className="w-[580px] h-[474px] mt-[14px] absolute ">
          <h4 className="font-bold text-[16px] leading-6 tracking-wide ml-[3px]">
            Feature Post
          </h4>
          <h1 className="w-[580px] h-[172px] text-[64px] font-bold leading-tight  mt-[37px]">
            How AI will
            <br />
            Change the Future
          </h1>
          <p className="w-[416px] h-[96px]  mt-[28px] text-[16px] font-normal leading-6 tracking-wide">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <button className="w-[170px] h-[53px] text-[16px] font-semibold text-darkblue bg-mywhite hover:bg-lightblue hover:text-mywhite rounded-lg mt-[64px]">
            Read more
          </button>
        </div>
        {/* rightside-imagediv */}
        <div className="w-[608px] h-[576px] ml-[626px] ">
          <Image
            src={"/images/home-image/Container.png"}
            alt={"home-container"}
            width={608}
            height={576}
            className="absolute"
          ></Image>
          <Image
            src={"/images/home-image/bg-vector.png"}
            alt={"bg-vector"}
            width={508}
            height={108}
            className="text-mywhite h-[100px] ml-[200px] mt-[576px] absolute"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
