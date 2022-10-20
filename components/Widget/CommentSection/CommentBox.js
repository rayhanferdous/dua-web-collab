const CommentBox = () => {
  return (
    <div className="flex flex-row gap-x-4 xs:flex-col xs:gap-y-3">
      <div className="xs:flex xs:items-center">
        <img className="xs:w-10 xs:mr-2" src="/assets/user/avater.svg" alt="" />
        <p className="hidden xs:block xs:font-medium xs:text-mss xs:font-inter xs:text-title">Logged User Name</p>
      </div>
      <div className="relative w-full">
        <textarea
          type="text"
          className="placeholder:text-hr block border border-devider w-full  py-4 pl-5 pr-3 focus:outline-none focus:border- focus:ring- focus:ring-1 sm:text-sm  dark:border-none dark:placeholder:text-black dark:placeholder:opacity-50"
          placeholder="What are you thoughts?"
          rows={4}
          prefix="sakil"></textarea>
        <div className="flex items-end justify-end content-end">
          <p className="  px-3.5 py-1.5 text-sm m-3 absolute text-black ">Comment</p>
        </div>
      </div>
      {/* Comment Box */}
    </div>
  );
};

export default CommentBox;
