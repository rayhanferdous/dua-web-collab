import { useState } from "react";

const InputField = (props) => {
  const [showPass, setPass] = useState(false);

  function handler(e) {
    e.preventDefault();
    setPass(!showPass);
  }

  return (
    <label className="block">
      <span className="block font-inter font-medium text-sm text-left text-title mb-2 ">{props.name}</span>

      <div className="relative">
        <input
          className="text-xs text-title w-82 xs:w-full md:w-full sm:w-full h-11 px-5 py-4 border border-solid  placeholder:font-inter placeholder:text-ms placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-  dark:xs:bg-[#223449] dark:sm:bg-[#223449] dark:md:bg-[#223449] dark:border-none dark:placeholder:text-[#DEDEDE]"
          type={showPass ? "text" : props.type}
          name={props.sname}
          placeholder={props.placeholder}
        />
        {props.type === "password" && (
          <img
            className="absolute flex justify-center items-center right-4 top-[14px]"
            src="/assets/login/viewPassword.svg"
            alt=""
            onClick={handler}
          />
        )}
      </div>
    </label>
  );
};

export default InputField;
