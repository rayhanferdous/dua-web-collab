import React, { useState } from "react";
import BottomSection from "./Components/BottomSection";
import InputField from "./Components/InputField";
import LoginOption from "./Components/LoginOption";
import TopTitle from "./Components/TopTitle";

function SignUpForm() {
  const [viewPassword, setViewPassword] = useState("hidePassword");
  const [view, setView] = useState("password");
  const handleView = () => {
    if (viewPassword === "hidePassword") {
      setViewPassword("viewPassword");
      setView("text");
    } else {
      setViewPassword("hidePassword");
      setView("password");
    }
  };
  return (
    <div className="bg-red-100 drop-shadow-[4_4px_48px_rgba(0,0,0,0.05)]    w-1/3 h-full -ml-8 pl-[6%] py-[3%] pr-16 xs:m-0 xs: xs:w-full xs:h-full xs:px-6 xs:py-4 sm: sm:w-[80%] sm:m-0 sm:px-0 sm:py-12 md:w-[80%] md:  lg:w-[80%] lg:  dark:bg-[#223449]">
      <TopTitle subtitle={"Register Your Account"} />
      <div className="min-w-full mt-6 xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center">
        <InputField
          styles={
            "w-[80%] h-[48px] px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-   xs:w-full sm:w-96"
          }
          title={"Full Name"}
          type={"text"}
          name={"name"}
          placeholder={"Type full name here"}
        />
        <InputField
          styles={
            "w-[80%] h-[48px] px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-   xs:w-full sm:w-96"
          }
          title={"Email Address"}
          type={"email"}
          name={"email"}
          placeholder={"example@email.com"}
        />
        <InputField
          styles={
            "w-[80%] h-[48px] px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-   xs:w-full sm:w-96"
          }
          id={"showPassword"}
          title={"Password"}
          type={view}
          name={"password"}
          placeholder={"*******************"}
          relativeContent={"relative"}
          viewPassword={viewPassword}
          onClick={() => handleView()}
        />

        <InputField
          styles={"w-[169px] h-12   font-inter font-medium text-base text-black mb-6 hover:drop-shadow- cursor-pointer"}
          type={"button"}
          value={"Sign Up"}
          submit={true}
        />

        <p className="font-inter font-normal text-[15px] text-title opacity-70">Or</p>

        <LoginOption />
        <BottomSection title={" Log In"} link={"/login"} />
      </div>
    </div>
  );
}

export default SignUpForm;
