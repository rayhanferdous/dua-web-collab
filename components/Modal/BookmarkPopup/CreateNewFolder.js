import React from "react";

function CreateNewFolder() {
  return (
    <label className="block">
      <p className="text-left font-inter font-medium text-base leading-5 mb-2">Or,</p>
      <div className="mb-5">
        <input
          className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-  dark:border-none dark:focus:ring-1 dark:focus:ring- dark:placeholder:text-[#dedede]"
          type="text"
          name="folder"
          placeholder="Create New Bookmark Folder"
        />
      </div>
    </label>
  );
}

export default CreateNewFolder;
