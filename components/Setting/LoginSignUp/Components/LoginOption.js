import React from "react";

function LoginOption() {
  return (
    <div>
      <div
        className="flex items-center mt-4 xs:flex-col 
sm:flex-col xs:gap-y-3">
        <div className="font-inter font-normal text-[15px] text-title opacity-70 sm:block sm:mb-2 ">Login With:</div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-red-100 border-[.5px] ml-3  hover:drop-shadow- cursor-pointer">
            <img src="/assets/login/googleLogo.svg" alt="" />
          </div>
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-red-100 border-[.5px] ml-4  hover:drop-shadow- cursor-pointer">
            <img src="/assets/login/facebookLogo.svg" alt="" />
          </div>
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-red-100 border-[.5px] ml-4  hover:drop-shadow- cursor-pointer">
            <img src="/assets/login/appleLogo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginOption;
