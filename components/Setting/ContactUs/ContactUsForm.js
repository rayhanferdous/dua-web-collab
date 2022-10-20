import React from "react";
import InputCard from "./InputCard";

function ContactUsForm() {
  return (
    <div className="w-full">
      <div className="text-left bg-red-100 border-[1.5px] border-solid border- p-8  xs:rounded-2xl xs:px-4 xs:py-6 dark:bg-[#122337] dark:border-none">
        <div className="flex justify-center mb-9">
          <p className="font-inter font-bold text-[27px] leading-6 text-[#404040]  xs:text-2xl ">Contact Us</p>
        </div>
        <InputCard title={"full name"} type={"text"} placeholder={"Type your full name"} input={true} />
        <InputCard title={"email"} type={"email"} placeholder={"Enter Your Valid Email"} input={true} />
        <InputCard title={"subject"} type={"text"} placeholder={"Title"} option={true} />

        <InputCard title={"message"} type={"text"} placeholder={"Message write here......"} textarea={true} />
        <InputCard title={"Type This Word For Security"} value={"Hello World"} type={"text"} placeholder={"security"} security={true} />
        <div className="flex justify-end xs:justify-center">
          <input
            className="w-full h-12 mt-6   font-inter font-medium text-base 
            text-black mb-6 hover:drop-shadow- cursor-pointer xs:mb-1"
            type="button"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
