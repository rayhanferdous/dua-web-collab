import React from "react";

function Monthly() {
  return (
    <div>
      <p className="w-11/12 my-7 mx-auto font-Inter font-normal text-[15px] text-center text-[#404040] opacity-50 ">
        To Contact Us, You can inbox Our Facebook Page or You can mail Us for any kind of query, app features request, error in content etc.
      </p>
      <div>
        <p className="mb-6 font-Inter font-medium text-[15px] leading-4 text-[#404040] text-left ">Submit Your Information</p>
        <div className="grid grid-cols-2 gap-x-2 xs:grid-cols-1 xs:gap-y-3">
          <input
            className="col-span-2 mb-4 h-14 w-full border border-solid border-[#ECEEF0]  px-4 focus:outline-none focus:ring-[1.2px] focus:ring- placeholder:text-[#404040] placeholder:font-Inter placeholder:font-normal placeholder:text-[15px] placeholder:leading-4 placeholder:opacity-50 xs:col-span-1 xs:mb-0 dark:bg-[#122337] dark:border-none dark:placeholder:text-[#DEDEDE]"
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
          />
          <input
            className="h-14 w-full border border-solid border-[#ECEEF0]  px-4 focus:outline-none focus:ring-[1.2px] focus:ring- placeholder:text-[#404040] placeholder:font-Inter placeholder:font-normal placeholder:text-[15px] placeholder:leading-4 placeholder:opacity-50 dark:bg-[#122337] dark:border-none dark:placeholder:text-[#DEDEDE]"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <input
            className="h-14 w-full border border-solid border-[#ECEEF0]  px-4 focus:outline-none focus:ring-[1.2px] focus:ring- placeholder:text-[#404040] placeholder:font-Inter placeholder:font-normal placeholder:text-[15px] placeholder:leading-4 placeholder:opacity-50 dark:bg-[#122337] dark:border-none dark:placeholder:text-[#DEDEDE] "
            type="text"
            name="number"
            id=""
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div className="text-center">
        <button className=" mt-9 w-5/12 h-14  xs:w-full sm:w-full md:w-full lg:w-full">
          <div className="flex items-center justify-center">
            <p className="font-Inter font-medium text-[15px] text-black leading-4">Subscribe</p>
            <img className="ml-3" src="/assets/supportus/right-arrow.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Monthly;
