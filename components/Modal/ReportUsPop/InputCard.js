import React from "react";
import SelectOption from "../../Setting/ContactUs/SelectOption";

function InputCard({ title, placeholder, type, input = false, option = false, textarea = false }) {
  return (
    <>
      {input && (
        <label>
          <div className="mb-3">
            <span className="block font-inter font-medium text-base text-title mb-2 capitalize dark:text-[#fff9]">
              {title} <span className="font-inter font-medium text-base text-[#FF3F3F]">*</span>
            </span>
            <input
              className="bg-red-100 min-w-full px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- dark:placeholder:text-[#96a2b4]  dark:border-none"
              type={type}
              name={title}
              placeholder={placeholder}
            />
          </div>
        </label>
      )}

      {textarea && (
        <label>
          <span className="block font-inter font-medium text-base text-title mb-2 capitalize dark:text-[#fff9]">
            {title} <span className="font-inter font-medium text-base text-[#FF3F3F]">*</span>
          </span>
          <div className="mb-3">
            <textarea
              className="bg-red-100 min-w-full px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] placeholder:-z-10 focus:outline-none focus:ring-1 focus:ring-  dark:border-none dark:placeholder:text-[#96a2b4] "
              type={type}
              name={title}
              placeholder={placeholder}></textarea>
          </div>
        </label>
      )}

      {option && <SelectOption title={title} type={type} placeholder={placeholder} />}
    </>
  );
}

export default InputCard;
