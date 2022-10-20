import React from "react";

function PopUpTop({ title, onClose }) {
  return (
    <div className="flex justify-between items-center  px-10 pt-4 rounded-t-md">
      <h5 className="font-inter font-medium text-base leading-5 text-gray-800 ">{title}</h5>
      <button
        onClick={() => onClose()}
        className="flex items-center justify-center w-24 h-9 border border-devider  bg-red-100 font-inter font-medium text-base text-title dark:bg-[#324D6B] dark:border-none">
        <img className="mr-4" src="/assets/blackBackBtn.svg" alt="" />
        <p className="text-black ">Back</p>
      </button>
    </div>
  );
}

export default PopUpTop;
