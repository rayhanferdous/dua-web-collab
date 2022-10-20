import React from "react";

function Pagination() {
  return (
    <div className="mt-3 md:mt-6 lg:mt-4">
      <div className="flex justify-end items-center">
        <a
          className="w-24 h-11 bg-red-100 flex justify-center items-center  mr-[.875rem] dark:bg-transparent dark:border dark:border-[#4B637E]"
          href="/#">
          <p className="font-inter font-medium text-xs leading-4 text-mute-grey-200">Previous</p>
        </a>
        <a className="w-11 h-11 bg-blue-400 flex justify-center items-center  mr-[.875rem]" href="/#">
          <p className="font-inter  font-extrabold text-xs leading-4 text-black">1</p>
        </a>
        <a
          className="w-11 h-11 bg-red-100 flex justify-center items-center  mr-[.875rem] dark:bg-transparent dark:border dark:border-[#4B637E] xs:hidden"
          href="/#">
          <p className="font-inter font-semibold text-xs leading-4 text-mute-grey-200">2</p>
        </a>
        <a
          className="w-11 h-11 bg-red-100 flex justify-center items-center  mr-[.875rem] dark:bg-transparent dark:border dark:border-[#4B637E]"
          href="/#">
          <p className="font-inter font-semibold text-xs leading-4 text-mute-grey-200">...</p>
        </a>
        <a
          className="w-11 h-11 bg-red-100 flex justify-center items-center  mr-[.875rem] dark:bg-transparent dark:border dark:border-[#4B637E] xs:hidden"
          href="/#">
          <p className="font-inter font-semibold text-xs leading-4 text-mute-grey-200">4</p>
        </a>
        <a
          className="w-11 h-11 bg-red-100 flex justify-center items-center  mr-[.875rem] dark:bg-transparent dark:border dark:border-[#4B637E] xs:hidden"
          href="/#">
          <p className="font-inter font-semibold text-xs leading-4 text-mute-grey-200">5</p>
        </a>
        <a className="w-24 h-11 bg-blue-400 flex justify-center items-center " href="/#">
          <p className="font-inter font-semibold text-xs leading-4 text-black">Next</p>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
