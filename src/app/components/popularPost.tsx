import Cartpage2 from "./Cartpage2";

const PopularPost = () => {
  return (
    <div className="w-full  relative m-auto mt-[98px] px-2">
      <div className="max-w-[1234px] mx-auto">
        {/* popular Heading */}
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] md:text-[48px] font-bold text-mywhite">
            Popular Post
          </h1>
          <button className="w-[120px] md:w-[147px] h-[40px] md:h-[53px] bg-lightblue hover:bg-mywhite text-mywhite hover:text-darkblue text-center rounded-lg">
            View All
          </button>
        </div>
        <Cartpage2/>
      </div>
    </div>
  );
};

export default PopularPost;
