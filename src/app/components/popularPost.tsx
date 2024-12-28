import React from "react";
import Cartpage2 from "./Cartpage2";

const PopularPost = () => {
  return (
    <div className="w-[1440px] h-auto  bg-green-400 relative m-auto mt-[98px] ">
      <div className="w-[1234px] h-auto absolute   mx-auto ml-[102px]">
        {/* popular Heading */}
        <div className="flex justify-between">
          <h1 className="text-[48px] text-darkblue font-bold text-myblack ml-[8px]">
            Popular Post
          </h1>
          <button className="w-[147px] h-[53px] bg-lightblue hover:bg-darkblue  mt-[6px] text-mywhite text-center rounded-lg">
            View All{" "}
          </button>
        </div>
        <Cartpage2 />
      </div>
    </div>
  );
};

export default PopularPost;
