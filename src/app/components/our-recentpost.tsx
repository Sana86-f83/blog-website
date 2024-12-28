import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPost = () => {
  return (
    <div className="w-[1440px] h-[596px]  bg-mywhite relative m-auto mt-[90px] ">
      <div className="w-[1234px] h-[596px] absolute   mx-auto ml-[102px]">
        {/* left-container */}
        <div className="flex justify-between ">
          <h1 className="text-[48px] text-darkblue font-bold text-myblack ml-[8px]">
            Our Recent Post
          </h1>
          <button className="w-[147px] h-[53px] bg-lightblue mt-[8px] hover:bg-darkblue text-mywhite text-center rounded-lg">
            <Link href={"/newBlog"}>View All{" "}</Link>
          </button>
        </div>
        <div className="w-[712px] h-[456px] mt-[40px]">
          <Image
            src={"/images/recentpost/our-recentpost.png"}
            alt={"ourRecentPost"}
            width={712}
            height={456}
          ></Image>
        </div>
      </div>
      {/* right-Container for text */}
      <div className="absolute w-[464px] ml-[870px] mt-[142px] h-[456px] ">
        <div className="flex ">
          <p className="w-[88px] h-[80px] font-bold text-myblack text-[12px]">
            DEVELOPMENT
          </p>
          <p className="font-bold ml-[5px] text-myblack/50 text-[12px]">
            16 March 2023
          </p>
        </div>
        <h1 className="w-[464px] text-[32px] font-bold tracking-tight leading-10 h-[128px] ">
          How to make a Game look more attractive with New VR & AI Technology
        </h1>
        <p className="w-[464px] h-[120px] text-normal text-[16px]  text-myblack/90 mt-[13px]">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <button className="w-[125px] h-[40px] text-[14px] font-bold border-2 border-lightblue hover:border-orange bg-mywhite rounded-lg text-darkblue text-center mt-[40px] ">Read more</button>
      </div>
    </div>
  );
};

export default RecentPost;
