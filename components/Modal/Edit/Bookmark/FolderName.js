import React from "react";

function FolderName() {
  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-3 text-left dark:text-[#fff9]">Folder Name</span>

        <input
          className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- 
          dark:bg-[#223449] dark:border-none dark:placeholder:text-[#DEDEDE]"
          type="text"
          name="folder"
          placeholder="Create New Edit Folder"
        />
      </div>
    </label>
  );
}

export default FolderName;
