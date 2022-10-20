import Link from "next/link";
import React from "react";

function NumCard({ link, text, title }) {
  return (
    <Link href={link}>
      <div className="group">
        <div className="bg-red-100 flex items-center w-full h-22  pr-4 cursor-pointer  drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition duration-100 delay-100 dark:bg-[#223449]">
          <div className={` flex justify-center  items-center h-15 w-15 mx-2.5 transition duration-100 delay-100  dark:bg-[#2c425a]`}>
            
          </div>
          <p className="font-inter text-left text-title text-sm lg:text-base w-[80%] font-semibold transition duration-100 delay-100 ">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default NumCard;
