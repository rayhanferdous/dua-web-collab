import React from "react";

function RightSection() {
  return (
    <div className="text-left">
      <div className="flex items-center mb-4">
        <img src="/assets/others/info-icon.svg" alt="" />
        <p className="ml-2 font-medium text-lg leading-6 text-[#404040] ">Questions?</p>
      </div>
      <hr className="opacity-60 mb-4" />
      <ul className="pl-6 xs:pl-4 pb-3">
        <li className="list-disc font-Inter font-medium  text-[15px] leading-6 mb-6">Do you accept Zakat?</li>
        <p className="flex items-center bg-[#F2F4F6] text-[#404040] px-4 py-3 opacity-90 min-h-fit  mt-2 font-Inter font-normal text-[15px] leading-6  ">
          <span>We do not accept Zakat. We only accept Sadaqah.</span>
        </p>
        <li className="list-disc mt-4 font-Inter font-medium text-[15px] leading-6 mb-6">Do you accept donations via PayPal?</li>
        <p className="flex items-center bg-[#F2F4F6] text-[#404040] px-4 py-3 opacity-90 min-h-fit  mt-2 font-Inter font-normal  text-[15px] leading-6  ">
          <span>
            Yes, we do. Please visit our <span className=" font-Inter font-medium">Paypal fundraiser page</span> to donate via PayPal.
          </span>
        </p>
      </ul>
    </div>
  );
}

export default RightSection;
