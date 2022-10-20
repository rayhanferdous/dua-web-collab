const Comments = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-start">
        <p className="text-title text-base ">MOST RELEVANT</p>
        <img src="/assets/mediaplayer/angledown.svg" className="stroke-gray-600 ml-3" alt="" />
      </div>
      <div className="flex flex-row mt-6 gap-x-4">
        <img src="/assets/user/avater.svg" className="w-10 h-10" alt="" />
        <div className="flex flex-col items-start">
          <p className="font-medium text-mss font-inter text-title ">Nomadic Observer</p>
          <p className="text-mute-grey text-xs my-1  dark:opacity-50">7 Days ago</p>
          <p className="text-base text-title mt-3 text-justify font-inter ">
            YouTube may have introduced shorts lately, but it’s never been pitched as a social media platform, not like Facebook or Instagram anyway.
            <span className=" text-base"> See More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
