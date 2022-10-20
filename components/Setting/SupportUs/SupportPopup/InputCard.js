import React from "react";

function InputCard({ title, placeholder, type }) {
  return (
    <label>
      <div className="mb-3">
        <span className="block font-Inter font-medium text-base text-title mb-2 capitalize">
          {title} <span className="font-Inter font-medium text-base text-[#FF3F3F]">*</span>
        </span>
        <input
          className="min-w-full px-6 py-4 border border-solid   placeholder:font-Inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-  "
          type={type}
          name={title}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}

export default InputCard;
