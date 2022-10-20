import React, { useState } from "react";
import DonationMethod from "./DonationMethod";

function Location() {
  const [location, setLocation] = useState(1);

  const handleLocation = (location) => {
    setLocation(location);
  };
  return (
    <div>
      <div className="text-left mt-7">
        <p className="font-Inter font-medium text-[15px] leading-4   mb-6">Where Are you from?</p>
        <div className="grid grid-cols-[39%,57%] gap-x-5 mt-2.5 xs:grid-cols-1 xs:gap-y-3">
          <div
            onClick={() => handleLocation(1)}
            className="flex items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full h-14 pl-6 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471]  dark:border-none">
            <input
              className=" min-w-fit px-10 h-12  text-black font-medium font-Inter text-[15px] accent-custom"
              type="radio"
              name="country"
              {...(location == 1 ? { checked: true } : {})}
            />
            <p className="ml-3 font-Inter text-[15px] text-[#404040] ">Bangladesh</p>
          </div>
          <div
            onClick={() => handleLocation(2)}
            className="flex items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full h-14 pl-6 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471]  dark:border-none">
            <input
              className=" min-w-fit px-10  text-black font-medium font-Inter text-[15px] accent-custom"
              type="radio"
              name="country"
              {...(location == 2 ? { checked: true } : {})}
            />
            <p className="ml-3 font-Inter text-[15px] text-[#404040] ">Outside of Bangladesh</p>
          </div>
        </div>
      </div>
      <DonationMethod location={location} />
    </div>
  );
}

export default Location;
