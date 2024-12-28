import Image from "next/image";
import React from "react";
import Getstarted2 from "../components/Getstarted2";

const About = () => {
  return (
    <div className="w-[1440px] h-[2580px] m-auto  ">
      <div className="flex flex-col mx-auto items-center w-[1234px] h-[306px]   ">
        <p className="text-[16px] font-bold w-[93px] text-black/80 tracking-wide mt-[78px] h-[24px]">
          About US
        </p>
        <h1 className="w-[728px] mt-[25px] h-[128px]  text-center tracking-tight leading-tight  text-[48px] font-bold text-black">
          Creative Blog Writting and publishing site{" "}
        </h1>

        <p className="w-[1010px] h-[76px] mt-[24px] text-black/70 text-[16px] text-center tracking-wide">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.{" "}
        </p>
      </div>
      <div className="w-[1232px] h-[608px] mt-[123px] m-auto">
        <Image
          src={"/images/about/aboutus.png"}
          alt={"About-image"}
          width={1232}
          height={608}
        ></Image>
      </div>
      {/* how we Work */}
      <div className="w-[1440px]  mt-[100px]">
        <div className="w-[1232px] h-auto mx-auto ">
          <h1 className="w-[129px] h-[24px] text-[16px] text-mygray">
            HOW WE WORK
          </h1>
          <h1 className="w-[500px] h-[128px] mt-[32px] text-[48px] font-bold tracking-wide leading-tight ">
            I will show you how our team works
          </h1>
          <p className="w-[416px] h-[38px] ml-[713px] mt-[2px]  text-mygray">
            Bring to the table win-win market strategies to ensure perfect
            articles.{" "}
          </p>
          {/* aboutus  div 1*/}
          <div className="grid grid-cols-3 w-[1232px] h-[408px] mt-[40px]">
            <div className="flex flex-col w-[400px] h-[408px] rounded-3xl hover:text-mywhite hover:bg-darkblue bg-bgsky text-black">
              <h1 className="w-[86px] h-[96px] mt-[24px] text-[72px] font-bold ml-[24px] tex">
                01
              </h1>
              <h1 className="w-[163px] h-[32px] mt-[8px] ml-[24px]   font-bold text-[24px]">
                Brainstorming
              </h1>
              <p className="w-[352px] h-[144px] text-[16px] text-myblack text-pretty ml-[24px] tracking-tight leading-6  mt-[16px]">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
              </p>
              <p className="w-[72px] h-[21px] text-bold text-[14px] ml-[24px] mt-[36px] underline underline-offset-4">
                Learn More
              </p>
            </div>
            {/* aboutus-div2 */}
            <div className="flex flex-col w-[400px] h-[408px] rounded-3xl text-black hover:text-mywhite hover:bg-darkblue bg-bgsky ">
              <h1 className="w-[86px] h-[96px] mt-[24px] text-[72px] font-bold ml-[24px] tex">
                02
              </h1>
              <h1 className="w-[112px] h-[32px] mt-[8px] ml-[24px]  font-bold text-[24px]">
                Analysing{" "}
              </h1>
              <p className="w-[352px] h-[168px] text-[16px]   text-pretty ml-[24px] tracking-tight leading-5  mt-[16px]">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line solely on the bottom line.{" "}
              </p>
              <p className="w-[72px] h-[21px] text-bold text-[14px] ml-[24px] mt-[24px] underline underline-offset-4">
                Learn More
              </p>
            </div>
            {/* aboutus-div3 */}
            <div className="flex flex-col w-[400px] h-[408px] rounded-3xl text-black hover:bg-darkblue bg-bgsky hover:text-white">
              <h1 className="w-[86px] h-[96px] mt-[24px] text-[72px] font-bold ml-[24px] tex">
                03
              </h1>
              <h1 className="w-[191px] h-[32px] mt-[8px] ml-[24px]  font-bold text-[24px]">
                News Publishing
              </h1>
              <p className="w-[351px] h-[168px] text-[16px]   text-pretty ml-[24px] tracking-tight leading-5  mt-[16px]">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.{" "}
              </p>
              <p className="w-[72px] h-[21px] text-bold text-[14px] ml-[24px] mt-[24px] underline underline-offset-4">
                Learn More
              </p>
            </div>
          </div>
        </div>
        <Getstarted2 />

      </div>
    </div>
  );
};

export default About;
