import React from "react";

function HadiyaOption() {
  return (
    <div className="mt-6 hidden" name="hadiyaOption">
      <p className="font-Inter font-medium text-base leading-5 text-title">To support our projects, please send youn hadiya to below numbers-</p>
      <div className="mt-4 w-[92%] border border-solid border-[#e2e2e2] px-6 py-3  ml-4">
        <div className="flex ">
          <img src="/assets/supportus/bKash.svg" alt="" />
          <div className="ml-4">
            <p className="font-Inter font-normal text-sm leading-4 text-title">Bkash (personal):</p>
            <p className="font-Inter font-semibold text-sm leading-4 mt-2">01302250430</p>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[92%] border border-solid border-[#e2e2e2] px-6 py-3  ml-4">
        <div className="flex ">
          <img src="/assets/supportus/nagad.svg" alt="" />
          <div className="ml-4">
            <p className="font-Inter font-normal text-sm leading-4 text-title">Nagad (personal):</p>
            <p className="font-Inter font-semibold text-sm leading-4 mt-2">01302250430</p>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[92%] border border-solid border-[#e2e2e2] px-6 py-3  ml-4">
        <div className="flex ">
          <img src="/assets/supportus/rocket.png" alt="" />
          <div className="ml-4">
            <p className="font-Inter font-normal text-sm leading-4 text-title">Rocket (personal):</p>
            <p className="font-Inter font-semibold text-sm leading-4 mt-2">01749802400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HadiyaOption;
