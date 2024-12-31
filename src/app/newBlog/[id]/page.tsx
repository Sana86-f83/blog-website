import Link from "next/link";
import Image from "next/image";
import BlogCategory from "@/app/components/blogcategaory";
import CartPage1 from "@/app/components/Cartpage1";
import CommentSection from "@/app/components/commentsec";
import blogPosts from "@/app/newBlog/blog.json";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }


  return (
    <div className="w-full md:w-[1234px] bg-black/10 mx-auto mt-20 px-2 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide font-bold text-center text-mywhite underline underline-offset-8">
        {post.h1}
      </h1>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image Section */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-2xl">
            <Image
              src={post.image || "/default-image.jpg"}
              alt="Blog Post"
              width={712}
              height={456}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex px-4  flex-col text-mywhite mt-[0px] md:mt-[20px]">
          <div className="flex justify-between md:space-x-4 ">
            <div className="flex space-x-4 pt-2">
              <p className="font-bold text-sm">{post.p1}</p>
              <p className="font-bold text-sm text-mywhite/70">{post.p2}</p>
            </div>
            <button className="  px-4 py-2 bg-lightblue text-mywhite rounded hover:bg-mywhite hover:text-darkblue">
              <Link href="/newBlog">{post.btn1}</Link>
            </button>
          </div>
          <h2 className="mt-4 text-3xl sm:text-3xl font-bold leading-wide ">
            {post.h2}
          </h2>
          <p className="mt-4  text-base sm:text-lg text-mywhite/90">
            {post.p3}
          </p>
          <p className="mt-4  text-base sm:text-lg text-orange">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            nam expedita autem impedit cumque architecto accusantium doloribus
            deserunt assumenda aperiam aliquam ullam ipsa illum harum quae
            laboriosam praesentium minus aut!
          </p>
        </div>
      </div>
      <p className="md:flex hidden w-full mt-4  text-base sm:text-lg text-mywhite/90">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi commodi
        incidunt ad architecto dolore est mollitia, eaque fuga, quo quis
        molestiae officiis inventore alias! Quidem placeat ipsum dolorum,
        veritatis atque deserunt facere. Officiis culpa possimus consequuntur.
        Enim nemo nostrum assumenda beatae autem repudiandae. In explicabo eum
        porro vitae cumque? Similique, animi. Doloremque provident dolorem
        repudiandae quaerat ab enim quod, autem minima nisi sit iste, veniam aut
        recusandae minus eveniet ut nostrum. Dolores suscipit excepturi possimus
        laboriosam est iure, perspiciatis rem doloremque consectetur. Ut,
        cumque! Molestiae sint laudantium consequatur consectetur odio itaque
        ratione beatae iure, alias pariatur eveniet, quas veniam a!
      </p>
      <br />
      <p className="md:flex hidden w-full mt-4  text-base sm:text-lg text-mywhite/90">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi commodi
        incidunt ad architecto dolore est mollitia, eaque fuga, quo quis
        molestiae officiis inventore alias! Quidem placeat ipsum dolorum,
        veritatis atque deserunt facere. Officiis culpa possimus consequuntur.
        Enim nemo nostrum assumenda beatae autem repudiandae. In explicabo eum
        porro vitae cumque? Similique, animi. Doloremque provident dolorem
        repudiandae quaerat ab enim quod, autem minima nisi sit iste, veniam aut
        recusandae minus eveniet ut nostrum. Dolores suscipit excepturi possimus
        laboriosam est iure, perspiciatis rem doloremque consectetur. Ut,
        cumque! Molestiae sint laudantium consequatur consectetur odio itaque
        ratione beatae iure, alias pariatur eveniet, quas veniam a!
      </p>
      <button className="mt-6 w-[150px] px-4 py-2 bg-lightblue text-mywhite rounded hover:bg-mywhite hover:text-darkblue">
        <Link href={`/newBlog/${id}`}>{post.btn2}</Link>
      </button>

      {/* Other Components */}
      <div className="mt-10">
        <CommentSection />
      </div>
      <div className="mt-10">
        <CartPage1 />
      </div>
      <div className="mt-10">
        <BlogCategory />
      </div>
    </div>
  );
};

export default BlogDetails;
