import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = ({
  id,
  image,
  h2,
  h4,
  heading,
  para,
  button,
}: {
  id: string;
  image: string;
  h2: string;
  h4: string;
  heading: string;
  para: string;
  button: string;
}) => {
  return (
    <div className="w-[400px]  h-[630px] bg-mywhite">
      <div className="w-[400px] h-[360px] ">
        <Image src={image} alt={"cartimages"} width={400} height={360}></Image>
        <div className="flex mt-[40px]">
          <p className="w-20px h-[80px] tracking-wide font-bold text-black text-[12px]">
            {h2}{" "}
          </p>
          <p className="font-bold ml-[9px] text-black/50 text-[12px]">{h4} </p>
        </div>
      </div>
      <h1 className="w-[400px] text-[24px] mt-[74px] font-bold tracking-tighter leading-8 h-[71px] ">
        {heading}
      </h1>
      <p className="w-[376px] h-[72px] text-normal text-[16px] tracking-tight text-myblack/90 mt-[7px]">
        {para}
      </p>
      <button className="w-[104px] h-[27px] text-[14px] font-bold hover:underline hover:underline-offset-2 bg-mywhite rounded-lg text-lightblue hover:text-orange text-center mt-[19px] ">
        <Link
          href={{
            pathname: `/newBlog/${id}`,
            query: {
              h1: heading,
              btn1: "Go Back",
              image: image,
              p1: h2,
              p2: h4,
              h2: heading,
              p3: para,
              btn2: "Read More",
            },
          }}
        >
          {button}
        </Link>
      </button>
      
    </div>
  );
};

export default Cart;
