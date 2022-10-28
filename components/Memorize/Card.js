import Link from "next/link";
import Memorize from "../Modal/Edit/Memorize";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useSelector } from "react-redux";

const Card = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { theme } = useTheme();

  const language = useSelector(state => state.language.language);

  const getNumberString = (number) => {
    if (language === "bn") {
      return number.toLocaleString("bn-BD");
    }
    return number;
  };

  return (
    <div className="bg-red-100 w-full max-h-max  p-5 border-[.5px] border-solid border-devider dark:bg-[#223449] dark:border-none animate-fade-in-up">
      <div className=" flex justify-between items-center">
        <Link href={`/memorize/details?plan=${props.id}`}>
          <p className="cursor-pointer font-inter text-left font-semibold text-md text-[#373737] sm:text-base ">{props.name}</p>
        </Link>
        <button
          onClick={() => setModalShow(true)}
          type="button"
          className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out   text-lg">
          {theme === "dark" ? <img src="/assets/others/dark/threeDot.svg" alt="" /> : <img src="/assets/others/threeDot.svg" alt="" />}
        </button>
      </div>
      <Link href={`/memorize/details?plan=${props.id}`}>
        <div className="cursor-pointer">
          <div>
            <p
              className="flex text-title opacity-80 font-inter font-normal text-sm
               xs:text-sm 
               xs:leading-6 
               sm:text-sm
               lg:text-base mt-3
               
               ">
              {" "}
              {language === "bn" ? "সর্বমোট দোয়া" : "Total Selected Duas"}: {getNumberString(props.selected)}
            </p>
            <p
              className="flex text-title opacity-80 font-inter font-normal text-sm
              xs:text-sm
              xs:leading-6 
              sm:text-sm
              lg:text-base
              
              ">
              {" "}
              {language === "bn" ? "অবশিষ্ট দিন" : "Days Remaining"}: {getNumberString(props.remaining)}
            </p>
            <p
              className="flex text-title opacity-80 font-inter font-normal text-sm
              xs:text-sm 
              xs:leading-6 
              sm:text-sm
              lg:text-base mb-4
              
              ">
              {" "}
              {language === "bn" ? "মুখস্থ হয়েছে" : "Completed Dua"}: {props.completed}
            </p>
          </div>

          <div className="w-full bg-devider  h-2.5 mb-1.5">
            <div className=" h-2.5 progress" style={{ width: `${getNumberString(props.percentage)}%` }}></div>
          </div>

          <p className="ml-2 text-title opacity-80 font-inter font-normal text-xs flex justify-end ">{getNumberString(props.percentage)}% {language === "bn" ? "মুখস্থ হয়েছে" : "Completed"}</p>
        </div>
      </Link>
      <Rodal
        showCloseButton={false}
        width={500}
        height={500}
        customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <Memorize onClose={() => setModalShow(false)} />
      </Rodal>
    </div>
  );
};

export default Card;
