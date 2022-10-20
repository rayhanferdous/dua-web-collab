import React from "react";

function DropDown({ children, selected, dropDown, setDropDown }) {
  return (
    <div className="relative">
      <div onClick={() => setDropDown(!dropDown)} className="h-12 border border-solid border-[#ECEEF0]  cursor-pointer dropDownWidth ">
        {/* xs:w-[70vw] sm:w-[79vw] xl:w-[190px] 2xl:w-[190px] 3xl:w-[234px] */}
        <div className="px-4 py-3 flex items-center justify-between w-full">
          <p className="font-Inter text-sm">{selected}</p>
          <img src="/assets/others/dropdown.svg" alt="" />
        </div>
      </div>
      <div
        className={`${
          dropDown ? "block" : "hidden"
        } absolute bg-red-100  right-0 left-0 top-14 px-0 py-3 drop-shadow-[0_0px_45px_rgba(15,15,15,0.1)] z-10`}>
        {children}
      </div>
    </div>
  );
}

export default DropDown;
