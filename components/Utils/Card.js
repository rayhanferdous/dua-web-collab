import Link from "next/link";
import React from "react";

function Card({ link, title, subTitle, totalDua, onClick, midCard }) {
  return (
    <Link href={link}>
      <div onClick={onClick}>
        <div className="bg-red-100 cursor-pointer flex justify-between items-center w-full h-22  hover:drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)]  dark:bg-[#223449]">
          <div className={`${midCard ? midCard : ""} flex flex-row items-center`}>
            <div className=" flex items-center   h-15 w-15 mx-3.5 "></div>
            <div className="text-left">
              <p className="text-title text-sm font-medium mb-1 xs:font-medium lg:text-base ">{title}</p>
              {subTitle && <p className="text-mute-grey text-xs ">Subcategory: {subTitle}</p>}
            </div>
          </div>
          {totalDua && (
            <div className="mr-5 flex flex-row items-center">
              <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium xs:text-sm ">{totalDua}</p>
                <p className="text-mute-grey text-xs ">Duas</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
