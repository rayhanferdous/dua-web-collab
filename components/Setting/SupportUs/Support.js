import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import DonationForm from "./DonationForm";

const Support = ({ support }) => {
  return (
    <div className="grid gap-5 donate-custom lg:grid-cols-[60%,1fr] xl:grid-cols-[60%,1fr] 2xl:grid-cols-[60%,1fr] 3xl:grid-cols-[60%,1fr]">
      <div className="bg-red-100  p-7 mb-2 xs:p-6 sm:mb-0 dark:bg-[#223449]">{support ? <DonationForm /> : <LeftSection />}</div>
      <div className="bg-red-100  p-7 mb-2 h-fit xs:mt-0 xs:p-4 md:p4 dark:bg-[#223449]">
        <RightSection />
      </div>
    </div>
  );
};

export default Support;
