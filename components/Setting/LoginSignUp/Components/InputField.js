import React from "react";
import { useTheme } from "next-themes";

function InputField({ styles, id, title, type, name, placeholder, relativeContent = null, viewPassword, onClick, value, submit }) {
  const { theme } = useTheme();
  return (
    <label className="block xs:w-full">
      <span className="block font-inter font-medium text-base text-title mb-2 ">{title}</span>

      <div className={`mb-3 ${relativeContent}`}>
        {!submit && (
          <input
            id={id}
            className={`${styles} dark:bg-[#122337] dark:border-none dark:placeholder:text-[#DEDEDE]`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
          />
        )}
        {submit && <input id={id} className={`${styles} `} type={type} name={name} placeholder={placeholder} value={value} />}
        {relativeContent && theme === "dark" ? (
          <img
            onClick={() => onClick()}
            className="absolute flex justify-center items-center right-[25%] top-4 
              sm:right-[8%]"
            src={`/assets/login/dark/${viewPassword}.svg`}
            alt=""
          />
        ) : (
          <img
            onClick={() => onClick()}
            className="absolute flex justify-center items-center right-[25%] top-4 
              sm:right-[8%]"
            src={`/assets/login/${viewPassword}.svg`}
            alt=""
          />
        )}
      </div>

      {relativeContent && (
        <a
          className="w-[80%] flex justify-end font-inter font-normal text-sm  text-title opacity-75 mb-6 cursor-pointer xs:w-full  sm:w-full "
          href="/#">
          Forgot Password?
        </a>
      )}
    </label>
  );
}

export default InputField;
