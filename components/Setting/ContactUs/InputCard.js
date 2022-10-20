import React from "react";
import SelectOption from "./SelectOption";

function InputCard({ title, placeholder, type, value, option = false, security = false, input = false, textarea = false }) {
  return (
    <>
      {input && (
        <label>
          <div className="mb-3">
            <span className="block font-inter font-medium text-base text-title mb-4 capitalize xs:text-sm ">
              {title} <span className="font-inter font-medium text-base text-[#FF3F3F]">*</span>
            </span>
            <input
              className="bg-red-100 w-full px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- xs:py-3  dark:border-none dark:placeholder:text-[#DEDEDE]"
              type={type}
              name={title}
              placeholder={placeholder}
            />
          </div>
        </label>
      )}
      {security && (
        <label>
          <span className="block font-inter font-medium text-base text-title mb-4 capitalize xs:text-sm ">
            {title} <span className="font-inter font-medium text-base text-[#FF3F3F]">*</span>
          </span>
          <div className="mb-3 flex gap-x-3 xs:flex-col xs:gap-y-3">
            <input
              className="w-[46%] bg-red-100 px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- xs:py-3 xs:w-full  dark:border-none "
              type={type}
              name={title}
              placeholder={placeholder}
              value={value}
              disabled
            />
            <input
              className="w-[53%] bg-red-100 px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- xs:py-3 xs:w-full  dark:border-none dark:placeholder:text-[#DEDEDE]"
              type={type}
              name={title}
              placeholder="Type here"
            />
          </div>
        </label>
      )}

      {textarea && (
        <label>
          <span className="block font-inter font-medium text-base text-title mb-4 capitalize xs:text-sm ">
            {title} <span className="font-inter font-medium text-base text-[#FF3F3F]">*</span>
          </span>
          <div className="mb-3">
            <textarea
              className="bg-red-100 min-w-full px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-   dark:border-none dark:placeholder:text-[#DEDEDE]"
              type={type}
              name={title}
              placeholder={placeholder}></textarea>
          </div>
        </label>
      )}

      {option && <SelectOption type={type} title={title} placeholder={placeholder} />}
    </>
  );
}

export default InputCard;
