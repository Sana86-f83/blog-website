import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="">
      <div className="w-[1440px] h-[98px] flex justify-center bg-bgsky mx-auto">
        <div className="w-[1234px] h-[56px] flex justify-between">
          <div className="w-[100px] h-[100px] rounded-full  ">
            <Image
              src={"/images/navbarlogo/bloglogo.png"}
              alt={"navbarlogo"}
              width={100}
              height={100}
              className="absolute hover:opacity-70"
            ></Image>
                      <h1 className="flex mt-[30px] -rotate-12 bg-red-800 hover:bg-darkblue border-2 border-mywhite pl-[6px] pt-[2px] absolute w-[210px] leading-7 font-semibold italic h-[40px] text-[32px] ml-[85px] text-mywhite">Sana Faisal</h1>

          </div>

          <div className="w-[420px] h-[56px] flex mt-[25px] ">
            <ul className="flex flex-1 gap-14 font-semibold text-darkblue text-[18px] mt-[14px]">
              <li className=" text-lightblue hover:underline">
                <Link href={"/newBlog"}>Blog</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/"}>
                  <CiSearch className="text-[24px] text-darkblue " />
                </Link>{" "}
              </li>
            </ul>
            <button className="rounded-xl w-[180px] font-semibold h-[56px] bg-lightblue hover:bg-darkblue text-bgsky text-center">
             <Link href={"/contact"}> Contact Us </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
