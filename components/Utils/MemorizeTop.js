import React from "react";

function MemorizeTop({ text = "These are the Duas of your favorite category, which you have chosen to bookmark.", img }) {
  return (
    <div
      className=" bg-red-100  w-auto h-[85px] mb-8 flex flex-row items-center justify-start 
          dark:bg-[#223449] xs:hidden">
      <div className="flex justify-center items-center bg-[#ECFFF4] h-16 w-16  text-black ml-3 mr-5 font-inter font-medium text-lg dark:bg-momorize-rgba">
        <img src="/assets/bookmark.png" alt="" />
      </div>
      <p
        className="text-left font-inter font-medium text-lg text-text-title 
          sm:text-base w-[85%] ">
        {text}
      </p>
    </div>
  );
}

export default MemorizeTop;
