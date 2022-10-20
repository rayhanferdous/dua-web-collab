import React from "react";

function CopyLink() {
  return (
    <label className="block ">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Or, Copy Link</span>
        <div className="relative">
          <input
            className=" w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-   font-inter font-normal text-sm leading-6 text-title dark:border-none  dark:text-[#fff9]"
            type="text"
            name="plan"
            value={"https://www.duarqyah.com/post/123456"}
          />
          <img className="absolute top-3 right-5" src="/assets/popup/copy.svg" alt="" />
        </div>
      </div>
    </label>
  );
}

export default CopyLink;
