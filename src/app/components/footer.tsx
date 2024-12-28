import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiGithubLogo } from "react-icons/pi";
import { TbBrandVercel } from "react-icons/tb";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[397px] bg-bgsky mt-[100px] m-auto">
      <div className="w-[1234px] h-[397px] relative  mx-auto">
        <div className="w-[80px] h-[80px] rounded-full absolute  mt-[40px] ml-[580px]">
          <Image
            src={"/images/navbarlogo/bloglogo.png"}
            alt={"blogLogo"}
            width={80}
            height={80}
            className="hover:opacity-70"
          ></Image>
        </div>
        <div className="w-[366px] h-[24px] absolute mt-[135px] ml-[433px]">
          <ul className="flex justify-between  text-black text-[16px]">
            <li className="hover:text-orange"><Link href={"/"}>Home </Link></li>
            <li className="hover:text-orange"><Link href={"/about"}>About</Link> </li>
            <li className="hover:text-orange"><Link href={"/blog/Bloglist"}>Blog</Link></li>
            <li className="hover:text-orange"><Link href={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-between absolute w-[208px] h-[40px] mt-[199px] ml-[512px]">
          <PiGithubLogo className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite border-2 hover:bg-lightblue border-orange" />
          <TiSocialFacebook className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite hover:bg-lightblue border-2 border-orange" />
          <TbBrandVercel className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite hover:bg-lightblue border-2 border-orange" />
          <TiSocialLinkedin className="w-[40px] h-[40px] rounded-full bg-darkblue text-mywhite hover:bg-lightblue border-2 border-orange" />
        </div>
        <hr className="w-[1234px] h-[10px] absolute mx-auto text-black mt-[279px]" />
        <p className="w-[378px] h-[24px] absolute mt-[319px] ml-[461px] tracking-wide bg-orange  text-black text-[16px]">
          Copyright Sana Faisal © 2024. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
