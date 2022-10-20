import Link from "next/link";
import Bookmark from "../Modal/Edit/Bookmark/Bookmark";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Card = ({ folder, path, totalDuas }) => {
  const [modalShow, setModalShow] = useState(false);
  const { theme } = useTheme();
  return (
    <>
      <div className="bg-red-100 w-full h-[6.625rem]  p-3 border-[.5px] border-solid border-devider px-5 dark:bg-[#223449] dark:border-none animate-fade-in-up">
        <div className="flex justify-between items-center">
          <Link href={`${path}`}>
            <div className="flex justify-start items-center cursor-pointer">
              <p
                className="font-inter text-left font-semibold text-lg text-[#373737] mt-2 ml-2.5 xs:text-base 
              sm:text-base ">
                Title bar
              </p>
            </div>
          </Link>

          <div className="flex justify-start items-center">
            {theme === "dark" ? (
              <img className="mr-4" src="/assets/others/dark/maximizeLogo.svg" alt="" />
            ) : (
              <img className="mr-4" src="/assets/others/maximizeLogo.svg" alt="" />
            )}

            <button
              onClick={() => setModalShow(true)}
              type="button"
              className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out   text-lg">
              {theme === "dark" ? <img src="/assets/others/dark/threeDot.svg" alt="" /> : <img src="/assets/others/threeDot.svg" alt="" />}
            </button>
          </div>
        </div>
        <Link href={`${path}`}>
          <p
            className="flex text-title opacity-80 font-inter font-normal text-sm lg:text-base mb-5 mt-3 ml-10 cursor-pointer 
            sm:text-xs ">
            {" "}
            Total Duas: {totalDuas}
          </p>
        </Link>
      </div>
      <Rodal
        showCloseButton={false}
        width={500}
        height={500}
        customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <Bookmark onClose={() => setModalShow(false)} />
      </Rodal>
    </>
  );
};

export default Card;
