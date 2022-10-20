import SearchIcon from "../../../../assets/searchIcon";
import React, { useState } from "react";
import InfoIcon from "../../../../assets/infoIcon";
import Dropdown from "./AdvanceSearch/Dropdown";
import { useTheme } from "next-themes";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import InfoPopup from "./InfoPopup/InfoPopup";
import OptionIcon from "../../../../assets/optionIcon";

const SearchBox = ({ hint }) => {
  const [modalShow, setModalShow] = useState(false);
  const [showDropdown, setShowDroshown] = useState(false);
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-row items-center relative">
        <div className="w-82 mr-8 relative">
          <label className="flex justify-between">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              {theme === "dark" ? <SearchIcon height="22" color="stroke-[#96a2b4]" /> : <SearchIcon height="22" color="stroke-mute-grey" />}
            </span>
            <input
              className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder:font-inter placeholder:text-sm bg-red-100 w-full   py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border- focus:ring- focus:ring-1 sm:text-sm dark:bg-[#223449] dark:placeholder:text-black dark:placeholder:opacity-[.6]"
              placeholder={hint ?? "Search by Dua Name"}
              type="text"
              name="search"
            />
            <div
              onClick={() => {
                setShowDroshown(showDropdown === "false" ? "true" : "false");
              }}
              className="absolute top-3 right-5 mx-auto">
              <OptionIcon height="22" color="stroke-mute-grey" />
            </div>
            <span
              className={`${
                showDropdown === "true" ? "block animate-scale-down" : "hidden animate-scale-up"
              } absolute right-0 top-16 flex items-center pl-4`}>
              <Dropdown />
            </span>
          </label>
        </div>
        <div
          type="button"
          onClick={() => setModalShow(true)}
          className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out  text-lg ">
          <InfoIcon />
        </div>
      </div>
      <Rodal
        showCloseButton={false}
        width={700}
        height={500}
        customStyles={{ backgroundColor: "transparent", boxShadow: "none", "z-index": "999999999999" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <InfoPopup />
      </Rodal>
    </>
  );
};

export default SearchBox;
