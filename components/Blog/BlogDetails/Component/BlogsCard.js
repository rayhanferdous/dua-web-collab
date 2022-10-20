const BlogCard = () => {
  return (
    <div className="bg-red-100 w-70  overflow-hidden xs:rounded-2xl dark:bg-[#223449]">
      <div className="w-full">
        <img src="/assets/blog/cover.jpeg" alt="" />
        <div className="w-full p-4 flex flex-col gap-y-2 text-left ">
          <p className="text-mute-grey font-medium tracking-widest text-2xs ">FEATURED</p>
          <p className="font-medium text-mss text-title ">Sadaqah Jariyah | 5 ways to earn continuous rewards in</p>
          <p className="text-mute-grey-200 text-2xs my-2  dark:opacity-50">Reference site about Lorem Ipsum, giving information on its origins.</p>
          <p className="font-medium text-title text-sm ">June 14, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
