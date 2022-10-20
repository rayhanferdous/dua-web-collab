import React from "react";

function FolderColor() {
  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left dark:text-[#fff9]">Change Folder Color</span>
        <div>
          <div className="flex justify-between">
            <span className=" w-9 h-9  flex justify-center items-center">
              <img src="/assets/popup/tickMark.svg" alt="" />
            </span>
            <span className="bg-[#FFC107] w-9 h-9  flex justify-center items-center"></span>
            <span className="bg-[#9C27B0] w-9 h-9  flex justify-center items-center"></span>
            <span className="bg-[#2196F3] w-9 h-9  flex justify-center items-center"></span>
            <span className="bg-[#E91E63] w-9 h-9  flex justify-center items-center"></span>
            <span className="bg-[#3F51B5] w-9 h-9  flex justify-center items-center"></span>
            <span className="bg-[#00BCD4] w-9 h-9  flex justify-center items-center"></span>
            <span className="bg-[#8BC34A] w-9 h-9  flex justify-center items-center"></span>
          </div>
        </div>
      </div>
    </label>
  );
}

export default FolderColor;
