import Image from "next/image";
import React from "react";
import Getstarted from "../components/Getstarted";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* About Us Section */}
      <div className="flex flex-col items-center text-center mx-auto max-w-[1234px]">
        <p className="text-[18px] font-bold text-mywhite/80 tracking-wide mt-[78px]">
          About US
        </p>
        <h1 className="mt-6 text-[36px] md:text-[48px] font-bold text-mywhite leading-tight">
          Creative Blog Writing and Publishing Site
        </h1>
        <p className="mt-6 text-mywhite/70 text-[16px] leading-relaxed max-w-[90%] md:max-w-[1050px]">
          Leverage agile frameworks to provide a robust synopsis for high-level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-[40px] md:mt-[123px]">
        <Image
          src={"/images/about/aboutus.png"}
          alt={"About-image"}
          width={1234}
          height={608}
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* How We Work Section */}
      <div className="mt-[60px] md:mt-[100px]">
        <div className="text-center md:text-left max-w-[1232px] mx-auto">
          <p className="text-[16px] text-mywhite">HOW WE WORK</p>
          <h1 className="mt-4 text-[36px] md:text-[48px] text-mywhite font-bold leading-tight">
            I will show you how <br className="md:flex hidden"/>our team works
          </h1>
          <p className="mt-4 text-mywhite text-[16px] md:ml-auto md:text-right max-w-[416px]">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                id: 1,
                title: "Brainstorming",
                description:
                  "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X.",
              },
              {
                id: 2,
                title: "Analysing",
                description:
                  "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
              },
              {
                id: 3,
                title: "News Publishing",
                description:
                  "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.",
              },
            ].map((card) => (
              <div
                key={card.id}
                className="flex flex-col p-6 rounded-3xl bg-bgsky hover:bg-darkblue hover:text-white transition-all"
              >
                <h1 className="text-[72px] font-bold">{`0${card.id}`}</h1>
                <h2 className="mt-4 text-[24px] font-bold">{card.title}</h2>
                <p className="mt-4 text-[16px] leading-6">{card.description}</p>
                <p className="mt-auto md:mt-[10px] underline underline-offset-4 text-[14px]">
                  Learn More
                </p>
              </div>
            ))}
          </div>
        </div>
        <Getstarted />
      </div>
    </div>
  );
};

export default About;
