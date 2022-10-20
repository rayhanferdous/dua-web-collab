import Title from "./Component/Title";
import Date from "./Component/Date";
import Body from "./Component/Body";
import Share from "./Component/Share";

const PostCard = () => {
  return (
    <div
      className="bg-red-100  p-10 py-12  
                  xs:rounded-2xl xs:px-4 xs:py-10
                  sm:mt-6
                  dark:bg-[#223449]">
      <Title text="The Journey, Dua & Ruqyah Apps BD" />
      <Date cat="Featured" date="June 14, 2022" />
      {/* Blog Cover Photo */}
      <img src="/assets/blog/cover2.jpg" className="h-full  w-full" alt="" />
      <Body />
      <Share />
    </div>
  );
};

export default PostCard;
