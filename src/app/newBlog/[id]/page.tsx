
import Link from "next/link";
import Image from "next/image";
import BlogCategory from "@/app/components/blogcategaory";
import CartPage1 from "@/app/components/Cartpage1";
import CommentSection from "@/app/components/commentsec";
import blogPosts from "@/app/newBlog/blog.json"; // Import your JSON file

// Generate paths for static pages based on blog post IDs
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// BlogDetails Component
const BlogDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;  // Access params directly

  // Find the blog post based on the ID from params
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    // Return a 404 page if the post is not found
    return <div>Post not found</div>;
  }

  return (
    <div className="w-[1440px] h-[2800px] bg-mywhite m-auto mt-[100px]">
      <h1 className="text-[48px] text-center text-darkblue underline underline-offset-4 font-bold text-myblack ">
        {post.h1}
      </h1>

      <div className="w-[1440px] h-[796px] relative  m-auto mt-[30px]">
        <div className="w-[1234px] h-[596px] absolute mx-auto ml-[102px]">
          <div className="text-right">
            <button className="w-[147px] h-[53px] bg-lightblue hover:bg-darkblue hover:border-2 hover:border-orange mt-[40px] text-mywhite text-center rounded-lg">
              <Link href="/newBlog">{post.btn1}</Link>
            </button>
            <div className="w-[712px] h-[456px]">
              <Image
                src={post.image || "/default-image.jpg"}
                alt="Blog Post"
                width={712}
                height={456}
              />
            </div>
          </div>
        </div>

        <div className="absolute  w-[464px] ml-[870px] mt-[142px] h-[556px]">
          <div className="flex">
            <p className="w-[88px] h-[80px] font-bold text-myblack text-[12px]">
              {post.p1}
            </p>
            <p className="font-bold ml-[5px] text-myblack/50 text-[12px]">
              {post.p2}
            </p>
          </div>
          <h2 className="w-[464px] text-[32px] font-bold tracking-tight leading-10 h-[128px]">
            {post.h2}
          </h2>
          <p className="w-[464px] h-[220px]  text-normal text-pretty text-[18px] text-myblack/90 mt-[13px]">
            {post.p3}
          </p>
          <button className="w-[125px] h-[40px] text-[14px] font-bold border-2 border-lightblue hover:border-orange bg-mywhite rounded-lg text-darkblue text-center mt-[61px]">
            <Link href={`/newBlog/${id}`}>{post.btn2}</Link>
          </button>
        </div>
      </div>

      <CommentSection />
      <BlogCategory />
      <CartPage1 />
    </div>
  );
};

export default BlogDetails;
