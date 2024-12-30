import CartPage1 from "@/app/components/Cartpage1";
import Cartpage2 from "@/app/components/Cartpage2";
import React from "react";
import Getstarted from "../components/Getstarted";

const Bloglist = () => {
  return (
    <div className="w-full md:w-[1440px]  h-auto md:h-[2900px]  m-auto ">
      <div className="flex flex-col mx-auto  items-center w-full md:w-[1234px] h-auto">
        <p className="text-[16px] font-bold w-auto text-mywhite mt-[78px] h-auto">
          OUR BLOGS
        </p>
        <h1 className="w-full max-w-[728px] text-center tracking-wide leading-tight text-[32px] sm:text-[48px] font-bold text-mywhite">
          Find our all blogs from here
        </h1>
        <p className="w-full max-w-[756px] mt-[25px] text-mywhite text-[14px] sm:text-[16px] text-center">
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>
      <div className=" w-full mx-auto md:w-[1234px] h-auto">
      <Cartpage2 />
        <CartPage1 />
        </div>

      <Getstarted />
    </div>
  );
};

export default Bloglist;
