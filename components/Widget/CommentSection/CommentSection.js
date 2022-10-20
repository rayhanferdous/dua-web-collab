import CommentBox from "./CommentBox";
import Comments from "./Comments";

const CommentSection = () => {
  return (
    <div className="mt-5 pb-10 xs:mx-auto xs:mt-3 xs:w-full xs:pb-4">
      <p className="my-3 text-lg text-left text-title font-semibold xs:text-base ">Comment (265)</p>
      <div className="bg-red-100  p-8 xs:rounded-2xl xs:p-4 dark:bg-[#223449]">
        <CommentBox />
        <Comments />
      </div>
    </div>
  );
};

export default CommentSection;
