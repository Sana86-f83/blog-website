import CartPage1 from "@/app/components/Cartpage1";
import Cartpage2 from "@/app/components/Cartpage2";
import Getstarted2 from "@/app/components/Getstarted2";
import React from "react";

const Bloglist = () => {
  return (
    <div className="w-[1440px] h-[3063px] m-auto  bg-mywhite">
      <div className="flex flex-col mx-auto items-center w-[1234px] h-[306px]   ">
        <p className="text-[16px] font-bold w-[105px] text-black mt-[78px] h-[24px]">
          OUR BLOGS
        </p>
        <h1 className="w-[728px] h-[64px] text-center tracking-wide leading-tight  text-[48px] font-bold text-black">
          Find our all blogs from here
        </h1>
        <p className="w-[756px] h-[76px] mt-[25px] text-[16px] text-center">
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>
      <Cartpage2 />
      <div className="mt-[780px]">
        {" "}
        <CartPage1 />
      </div>
      <Getstarted2 />
    </div>
  );
};

export default Bloglist;
