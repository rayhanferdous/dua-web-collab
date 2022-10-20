import React, { useState } from "react";
import AdvanceSearch from "./AdvanceSearch";

export default function Dropdown({ showTab }) {
  const [showTick, setShowTick] = useState(false);

  return (
    <div className={`${showTab === "false" ? "hidden" : "block"} bg-red-100 w-full h-fit px-4 py-6   lg:absolute lg:top-20 lg:right-0 lg:w-fit`}>
      <div className="w-56">
        <div>
          <div>
            <AdvanceSearch />
          </div>
          <div>
            <div onClick={() => setShowTick(showTick === "false" ? "true" : "false")} className="flex flex-row items-center space-x-2 my-3">
              <div
                className={`${
                  showTick === "true" ? "" : "bg-red-100"
                } w-5 h-5  border flex items-center justify-center border-solid border-scroll-bar`}>
                <img className={`${showTick ? "block" : "hidden"}`} src="/assets/color-tick.png" alt="" />
              </div>
              <p className="font-inter text-sm text-[#404040] leading-4 font-medium ">{`Search with partial match`}</p>
            </div>
            <div onClick={() => setShowTick(showTick === "false" ? "true" : "false")} className="flex flex-row items-center space-x-2 my-3">
              <div
                className={`${
                  showTick === "true" ? "" : "bg-red-100"
                } w-5 h-5  border flex items-center justify-center border-solid border-scroll-bar`}>
                <img className={`${showTick ? "block" : "hidden"}`} src="/assets/color-tick.png" alt="" />
              </div>
              <p className="font-inter text-sm text-[#404040] leading-4 font-medium ">Search with Exact match</p>
            </div>
          </div>

          <div className="flex flex-row justify-end">
            <button className="h-7 w-16   text-black font-inter text-sm leading-4 font-medium dark:text-[#dedede]" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
