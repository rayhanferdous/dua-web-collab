import React from "react";

function BottomSection({ title, appLogo, downloadsApp }) {
  return (
    <div className="p-4 bg-red-100 ">
      <div className="flex justify-start items-center text-left">
        <img src={appLogo} alt="" />
        <div className="ml-4">
          <p className="font-Inter font-medium text-base text-title leading-7 xs:text-base xs:font-semibold ">{title}</p>
          <p className="font-Inter font-normal text-sm text-[#59a47b] leading-5">Digital Apps BD</p>
        </div>
      </div>
      {downloadsApp && (
        <div>
          <p className="text-left font-poppins font-normal text-mute-grey text-sm leading-5 mt-8 mb-4 xs:mt-6 ">Download Apps:</p>
          <div className="flex mt-3 gap-4 xs:flex-col xs:items-center">
            <div className="flex items-center justify-center gap-2 bg-[#ECEEF0] h-12  px-4 py-3 xs:px-8 ">
              <img src="/assets/projects/apple.svg" alt="" />
              <p className="font-Inter font-medium text-xs text-[#626D7D] leading-4 ">Download</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#ECEEF0] h-12  px-4 py-3 xs:px-8 ">
              <img src="/assets/projects/play.svg" alt="" />
              <p className="font-Inter font-medium text-xs text-[#626D7D] leading-4 ">Download</p>
            </div>
          </div>
        </div>
      )}

      {!downloadsApp && (
        <div>
          <div className="flex flex-row justify-center items-end mt-8">
            <a className="flex items-center justify-center gap-2 bg-[#ECEEF0] h-12  px-4 py-3 xs:px-6 " href="/#">
              <img src="/assets/projects/globe.svg" alt="" />
              <span className="font-Inter font-medium text-xs text-[#626D7D] leading-4 ">Explore Now</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BottomSection;
