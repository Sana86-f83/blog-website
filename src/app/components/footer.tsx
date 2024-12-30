import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiGithubLogo } from "react-icons/pi";
import { TbBrandVercel } from "react-icons/tb";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[397px]  mt-[0px] md:mt-[50px] m-auto">
      <div className=" w-full md:w-[1234px] px-4 h-auto md:h-[397px] relative mx-auto">
        <div className="w-[80px] h-[80px] rounded-full absolute  mt-[40px] ml-[110px] md:ml-[580px]">
          <Image
            src={"/images/navbarlogo/bloglogo.png"}
            alt={"blogLogo"}
            width={80}
            height={80}
            className="hover:opacity-70"
          ></Image>
        </div>
        <div className="w-[370px] h-[24px] absolute mt-[135px] ml-[30px] md:ml-[433px]">
          <ul className="flex gap-4 md:justify-between  font-bold  text-mywhite text-[16px]">
            <li className="hover:text-lightblue"><Link href={"/"}>Home </Link></li>
            <li className="hover:text-lightblue"><Link href={"/about"}>About</Link> </li>
            <li className="hover:text-lightblue"><Link href={"/blog/Bloglist"}>Blog</Link></li>
            <li className="hover:text-lightblue"><Link href={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-between absolute w-[208px] h-[40px] mt-[199px] ml-[50px] md:ml-[512px]">
          <PiGithubLogo className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite border-2 hover:bg-lightblue border-mywhite" />
          <TiSocialFacebook className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite hover:bg-lightblue border-2 border-mywhite" />
          <TbBrandVercel className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite hover:bg-lightblue border-2 border-mywhite" />
          <TiSocialLinkedin className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite hover:bg-lightblue border-2 border-mywhite" />
        </div>
        <hr className="w-[250px] md:w-[1234px] ml-[20px] md:ml-[0px] h-[2px] absolute mx-auto bg-lightblue mt-[279px]" />
        <p className="md:w-[380px] w-[250px] h-[50px] md:h-[24px] absolute mt-[319px] ml-[30px] md:ml-[452px] text-center tracking-wide   text-mywhite text-[16px]">
          Copyright Sana Faisal © 2024.<br className="md:hidden flex  text-center"/> All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
