import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
      <div className=" ">
            {/* Background Image */}
            <div className="md:block hidden fixed top-0 left-0 w-full h-auto -z-10">
        <Image
          src={"/images/home-image/bg-image5.jpg"}
          alt={"bg-home"}
          layout="fill"
          objectFit="cover"
          className="fixed opacity-60"
        />
      </div>
      <section className="text-mywhite body-font relative ">
  <div className="container px-5 py-24 mx-auto bg-black/10">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-mywhite">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-mywhite/70 text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm  text-mywhite">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-mywhite  rounded border border-darkblue focus:border-lightblue focus:bg-bgsky focus:ring-2 focus:ring-lightblue text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-mywhite">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-mywhite  rounded border border-darkblue focus:border-lightblue focus:bg-bgsky focus:ring-2 focus:ring-lightblue text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-mywhite"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-mywhite  rounded border border-darkblue focus:border-lightblue focus:bg-bgsky focus:ring-2 focus:ring-lightblue h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-lightblue border-0 py-2 px-8 focus:outline-none hover:bg-opacity-70 rounded text-lg">
            Button
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-mywhite text-center">
          <a className="text-lightblue font-semibold">sanaUmer@email.com</a>
          <p className="leading-normal my-5 text-[20px] font-bold text-mywhite">
            Sana Faisal
          </p>
          <span className="inline-flex">
            <a className="text-mywhite hover:text-lightblue">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-mywhite hover:text-lightblue">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-mywhite hover:text-lightblue">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-mywhite hover:text-lightblue">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact