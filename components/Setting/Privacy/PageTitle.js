import React from "react";

function PageTitle() {
  return (
    <div className="flex mb-[4%]">
      <div className="flex items-center justify-center  bg-[#DDFFEC] h-[81px] w-[81px] xs:h-15 xs:w-15 xs: dark:bg-[#DDFFEC26]">
        {""}
        <img src="/assets/others/privacy.svg" alt="" />
      </div>
      <div className="flex items-center">
        <div className="ml-5">
          <p className="flex font-poppins font-medium text-2xl text-title xs:text-xl ">Privacy Policy</p>
          <p className="flex font-poppins font-normal text-sm text-[#484848] mt-[2px] ">We take care your’s information</p>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
