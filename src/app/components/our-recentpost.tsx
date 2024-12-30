import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPost = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto md:h-[650px] relative mx-auto  px-4 lg:px-0">
      <div className="w-full max-w-[1234px] h-auto relative mx-auto">
        {/* left-container */}
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <h1 className="text-[24px] lg:text-[48px] text-mywhite font-bold text-myblack mb-4 lg:mb-0">
            Our Recent Post
          </h1>
          <button className="w-full max-w-[147px] h-[40px] lg:h-[53px] bg-lightblue hover:bg-mywhite text-mywhite hover:text-darkblue text-center rounded-lg">
            <Link href={"/newBlog"}>View All</Link>
          </button>
        </div>
        <div className="w-full max-w-[712px] h-auto mt-[20px]  lg:mt-[40px] lg:mx-0 sm:mx-auto">
          <Image
            src={"/images/recentpost/gameimage.jpg"}
            alt={"ourRecentPost"}
            width={712}
            height={456}
            className="w-full h-auto  rounded-l-full"
          />
        </div>
      </div>
      {/* right-Container for text */}
      <div className="w-full max-w-[464px] mx-auto lg:absolute lg:right-[102px] text-mywhite lg:top-[142px] mt-8 lg:mt-0">
        <div className="flex lg:justify-normal sm:justify-between  mb-4">
          <p className="font-bold text-myblack text-[12px]">DEVELOPMENT</p>
          <p className="font-bold text-myblack/50 lg:ml-[0px] px-4 text-[12px]">16 March 2023</p>
        </div>
        <h1 className="text-[20px] lg:text-[32px] font-bold tracking-tight leading-snug lg:leading-10 mb-4">
          How to make a Game look more attractive with New VR & AI Technology
        </h1>
        <p className="text-[14px] lg:text-[16px] text-myblack/90 mb-6">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <button className="w-full max-w-[125px] h-[40px] text-[14px] font-bold hover:bg-lightblue hover:text-mywhite bg-mywhite rounded-lg text-darkblue text-center">
          Read more
        </button>
      </div>
    </div>
  );
};

export default RecentPost;
