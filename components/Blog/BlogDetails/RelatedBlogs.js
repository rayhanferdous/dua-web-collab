import BlogCard from "./Component/BlogsCard";

const RelatedBlogs = () => {
  return (
    <div className="mb-7">
      <p className="text-left ">Related Blogs:</p>
      <div
        className="flex flex-row my-4 gap-x-4 
      xs:grid xs:grid-cols-1 xs:gap-y-4
      sm:grid 
      sm:grid-cols-3 
      sm:gap-y-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-end mt-7">
        <a href="/blog">
          <p className="flex justify-center items-center text-right w-29 btn  h-9 text-sm">More Blog</p>
        </a>
      </div>
    </div>
  );
};

export default RelatedBlogs;
