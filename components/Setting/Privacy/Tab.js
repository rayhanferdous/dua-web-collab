import React from "react";

function Tab({ id, title, active, onClick, child }) {
  return (
    <div
      className={`${
        active
          ? "w-full border border-solid  xs:mb-4 sm:mb-6 md:mb-6 lg:border-none xl:border-none 2xl:border-none 3xl:border-none dark:xs:border-none "
          : "group"
      } cursor-pointer`}
      onClick={onClick}>
      <div
        className={`${
          active ? "bg-[#f1fff7] dark:bg-[#314A66]" : ""
        } relative flex items-center mb-6  w-full h-[55px] bg-icon-2bg bg-[#f1fff7]  dark:bg-[#314A66]`}>
        <div className={`${active ? " w-1 h-[55px] rounded-tl-md rounded-bl-md" : ""} absolute  w-1 h-[55px] rounded-tl-md rounded-bl-md`}></div>
        <span
          className={`${
            active ? " font-inter font-medium text-base" : "font-inter font-normal text-base text-title   font-inter font-medium text-base "
          } mx-5`}>
          {title}
        </span>
      </div>
      {active && (
        <div
          className="px-10 w-full mb-6 font-inter font-normal text-lg leading-6 
        xs:px-3  xs:text-[15px] xs:block
        sm:px-4  hidden sm:block
        md:block">
          {child}
        </div>
      )}
    </div>
  );
}

export default Tab;
