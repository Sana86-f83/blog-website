"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };
  console.log(isMenuOpen);
  return (
    <div className="md:ml-[0px] ml-[10px]  ">
      <div className="md:w-[1440px] w-full relative h-auto md:h-[98px] flex justify-center bg-none md:bg-black/60 mx-auto">
        <div className="md:w-[1234px] w-full h-auto md:h-[56px] flex justify-between">
          <div className=" w-[100px] h-[100px] rounded-full  ">
            <Image
              src={"/images/navbarlogo/bloglogo.png"}
              alt={"navbarlogo"}
              width={100}
              height={100}
              className="absolute hover:opacity-70 md:w-[100px] md:h-[100px] w-[80px] h-[80px] rounded-full md:mt-[0px] px-[4px] mt-[5px]"
            ></Image>
            <h1 className="hidden md:flex mt-[30px] -rotate-12 bg-mywhite text-darkblue hover:text-mywhite hover:bg-darkblue border-2 border-lightblue pl-[6px] pt-[2px] absolute w-[210px] leading-7 font-semibold italic h-[40px] text-[32px] ml-[85px]">
              Sana Faisal
            </h1>
          </div>
          {/* desktop menu */}
          <div className="hidden  w-[420px] h-[56px] md:flex mt-[25px] ">
            <ul className="flex flex-1 gap-10 font-semibold text-white  mt-[14px]">
              <li className="text-[20px] text-lightblue hover:underline">
                <Link href={"/newBlog"}>Blog</Link>
              </li>
              <li className="text-[20px] hover:underline">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:underline">
                <Link href={"/"}>
                  <IoHome className="text-[24px] text-mywhite hover:text-lightblue" />
                </Link>{" "}
              </li>
            </ul>
            <button className="rounded-xl w-[180px] font-semibold h-[56px] bg-lightblue hover:bg-mywhite text-bgsky hover:text-darkblue text-center">
              <Link href={"/contact"}> Contact Us </Link>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center px-4">
          <button
            onClick={toggleMenu}
            className="text-[24px] text-lightblue focus:outline-none"
          >
            <GrMenu className="w-[40px] h-[40px]" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-[70px] left-[0px] w-full rounded-2xl bg-darkblue z-50  p-2">
              <ul className="flex flex-col items-center gap-4 font-semibold text-mywhite ">
                <li>
                  <Link href={"/"} onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/newBlog"} onClick={closeMenu}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={"/about"} onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} onClick={closeMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
