import RangeSlider from "../../Widget/RangeSlder";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import DeletePopup from "../../Modal/DeletePopup/DeletePopup";
const Botombar = () => {
  const [modalShow, setModalShow] = useState(false);
  const { theme } = useTheme();
  const [hidden, setHidden] = useState("hidden");
  const [play, setPlay] = useState("audiobtn");
  const [suffle, setSuffle] = useState("suffle");

  const handleHidden = () => {
    if (hidden === "hidden") {
      setHidden("block");
    } else {
      setHidden("hidden");
    }
    if (play === "audiobtn") {
      setPlay("pause");
    } else {
      setPlay("audiobtn");
    }
  };
  const handleSuffle = () => {
    if (suffle === "suffle") {
      setSuffle("activeSuffle");
    } else {
      setSuffle("suffle");
    }
  };
  return (
    <div className="">
      <div class="w-full h-[1px] bg-[#E2E2E2] dark:hidden"></div>
      <div className={`${play === "pause" ? " xs:flex-col xs:px-6 xs:justify-center xs:items-center" : "flex-row"} flex justify-between px-6 `}>
        <div className="py-4 flex">
          <img onClick={() => handleHidden()} src={`/assets/others/${play}.svg`} alt="" />
          <RangeSlider
            mt=""
            style={`w-72 h-1 accent-green-600 bg-opacity-60 bg-devider ml-4 mr-2 xs:w-52 sm:w-32 transition duration-1000 delay-1000 ${
              hidden === "hidden" ? "hidden" : ""
            }`}
            preChild={<p className={`font-poppins font-normal text-sm leading-6 text-title  ${hidden}`}>1:25</p>}
            child={<p className={`font-poppins font-normal text-sm leading-6 text-title mr-2  ${hidden}`}>3:24</p>}
          />
          {theme === "dark" ? (
            <img className={hidden} src="/assets/memorize/suffle-white.svg" alt="" />
          ) : (
            <img className={hidden} onClick={handleSuffle} src={`/assets/memorize/${suffle}.svg`} alt="" />
          )}
        </div>
        <div className="flex flex-row py-6 gap-x-8">
          {theme === "dark" ? <img src="/assets/others/dark/copy.svg" alt="" /> : <img src="/assets/others/copy.svg" alt="" />}
          {theme === "dark" ? (
            <img onClick={() => setModalShow(true)} src="/assets/others/dark/deleteBtn.svg" alt="" />
          ) : (
            <img onClick={() => setModalShow(true)} src="/assets/others/deleteBtn.svg" alt="" />
          )}
          {theme === "dark" ? <img src="/assets/others/dark/direct.svg" alt="" /> : <img src="/assets/others/direct.svg" alt="" />}
          {theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
        </div>
        <Rodal
          showCloseButton={false}
          width={500}
          height={300}
          customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
          visible={modalShow}
          onClose={() => setModalShow(false)}>
          <DeletePopup onClose={() => setModalShow(false)} />
        </Rodal>
      </div>
    </div>
  );
};

export default Botombar;
