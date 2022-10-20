const Share = () => {
  return (
    <div className="flex flex-row gap-x-5 justify-start items-center content-start xs:flex-col">
      <p className="text-sm font-medium font-title ">Share this blog:</p>
      <div className="flex gap-x-5 xs:flex-row xs:mt-3">
        <img src="/assets/blog/facebook.svg" alt="" />
        <img src="/assets/blog/twitter.svg" alt="" />
        <img src="/assets/blog/linkedin.svg" alt="" />
        <img src="/assets/blog/pinterest.svg" alt="" />
      </div>
    </div>
  );
};

export default Share;
