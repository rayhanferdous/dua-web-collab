import React from "react";

function TopSection() {
  return (
    <div className="mbl-grad rounded-b-4xl md:relative md:col-span-2 lg:col-span-2 lg:relative xl:col-span-2 xl:relative 2xl:relative 2xl:col-span-3  3xl:col-span-3 3xl:relative">
      <div>
        <img className="hidden lg:block xl:block 2xl:block 3xl:block" src="/assets/projects/web-bg.png" alt="" />
        <img className="hidden md:block" src="/assets/projects/tab-bg.png" alt="" />
        <img className="hidden xs:block sm:block" src="/assets/projects/mbl-bg.png" alt="" />
      </div>
      <div className="flex items-center justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start 3xl:justify-start">
        <div
          className="py-10 
          xs:w-10/12
          sm:w-8/12
          md:absolute md:top-3 md:left-8 md:py-6
          lg:absolute lg:top-0 lg:left-8
          xl:absolute xl:top-0 xl:left-8
          2xl:absolute 2xl:top-0 2xl:left-8
          3xl:absolute 3xl:top-0 3xl:left-8">
          <div className="md:w-[46%] lg:w-6/12 xl:w-6/12 2xl:w-5/12 3xl:w-6/12">
            <h1
              className="font-semibold text-5xl text-left leading-[3.5rem] text-[#353535] 
            xs:text-center xs:text-4xl
            sm:text-center
          md:text-4xl
         ">
              Download, Dua & Ruqyah App
            </h1>
            <p
              className="my-12 text-left font-Inter text-[15px] leading-6 text-[#626D7D] 
         xs:text-center xs:my-8 xs:px-4
         sm:text-[13px] sm:my-8 sm:text-center
         md:text-left md:my-6 
         3xl:text-lg ">
              Sodales aliquam lacus feugiat interdum euismod tellus mus neque. Odio id euismod nisl id. Risus, sit id aenean pellentesque tortor Lorem
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 xs:flex-col sm:flex-col md:justify-start lg:justify-start xl:justify-start 2xl:justify-start 3xl:justify-start">
            <a
              className="flex items-center gap-2 bg-[#ECEEF0] h-12  px-6 py-3 xs:px-6 xs:py-2 xs:mr-0 xs:w-fit sm:w-fit md:px-4 md:min-w-fit "
              href="https:play.google.com/store/apps/details?id=com.ihadis.dua"
              target={"_blank"}
              rel="noreferrer">
              <img src="/assets/projects/play.svg" alt="" />
              <p className="font-Inter text-base leading-6 text-[#626D7D] md:text-sm ">Download Now</p>
            </a>
            <a
              className="flex items-center gap-2 bg-[#ECEEF0] h-12  px-6 py-3 xs:px-6 xs:py-2 xs:mr-0 xs:w-fit sm:w-fit md:px-4 md:min-w-fit "
              href="https:apps.apple.com/us/app/dua-ruqyah/id1568942398"
              target={"_blank"}
              rel="noreferrer">
              <img src="/assets/projects/apple.svg" alt="" />
              <p className="font-Inter text-base leading-6 text-[#626D7D] md:text-sm ">Download Now</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
