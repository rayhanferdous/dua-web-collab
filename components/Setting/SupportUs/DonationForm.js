import { useRouter } from "next/router";
import React, { useState } from "react";
import Location from "./Donation/Location";
import Monthly from "./Donation/Monthly";

function DonationForm() {
  const navigate = useRouter();
  const [type, setType] = useState(1);
  const handleType = (value) => {
    setType(value);
  };
  return (
    <div className="relative ">
      <div onClick={() => navigate.back()} className="flex justify-center">
        <p className="font-medium text-xl leading-6 text-[#404040] ">Donation Form</p>
        <img className="absolute left-2" src="/assets/supportus/back.svg" alt="" />
      </div>
      <hr className="opacity-80 my-5" />
      <div className="text-left">
        <p className="font-Inter font-medium text-[15px] leading-4  mb-6">Select Type of Donation</p>
        <div className="flex justify-center gap-x-4 mt-2.5">
          <input
            onClick={() => handleType(1)}
            className={`${
              type === 1 ? " text-black font-medium" : "bg-red-100 border-[1.5px] border-solid border- "
            } min-w-fit cursor-pointer px-10 h-12    font-Inter text-[15px] xs:px-6`}
            type="button"
            value="One Time"
          />
          <input
            onClick={() => handleType(2)}
            className={`${
              type === 2 ? " text-black font-medium" : "bg-red-100 border-[1.5px] border-solid border- "
            } min-w-fit cursor-pointer px-10 h-12  font-Inter text-[15px] xs:px-8`}
            type="button"
            value="Monthly"
          />
        </div>
      </div>

      {type === 1 ? <Location /> : <Monthly />}
    </div>
  );
}

export default DonationForm;
