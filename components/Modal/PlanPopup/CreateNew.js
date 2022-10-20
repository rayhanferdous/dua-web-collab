import React from "react";

function CreateNew() {
  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Or, Create New Plan</span>

        <input
          className="w-full h-[48px] px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
          type="text"
          name="plan"
          placeholder="Name of new plan"
        />
      </div>
    </label>
  );
}

export default CreateNew;
