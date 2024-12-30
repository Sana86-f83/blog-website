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
    <div className="w-full sm:w-[400px]  h-auto bg-mywhite shadow-lg  shadow-black">
      <div className="w-full sm:w-[400px] h-auto  hover:opacity-90 ">
        <Image
          src={image}
          alt={"cartimages"}
          width={400}
          height={360}
          className="w-full h-auto hover:opacity-90 "
        ></Image>
        <div className="flex mt-4 ">
          <p className="tracking-wide font-bold text-black text-[12px] pl-2">
            {h2}
          </p>
          <p className="font-bold ml-2 text-black/50 text-[12px]">{h4}</p>
        </div>
      </div>
      <h1 className="text-[20px] sm:text-[24px] pl-2 mt-6 font-bold tracking-tighter leading-6 sm:leading-8">
        {heading}
      </h1>
      <p className="text-[14px] pl-2 sm:text-[16px] tracking-tight text-black/90 mt-2">
        {para}
      </p>
      <button className="w-auto px-3 py-2 text-[14px]  font-bold hover:underline hover:underline-offset-2  rounded-lg text-lightblue hover:text-orange text-center mt-4 ">
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
