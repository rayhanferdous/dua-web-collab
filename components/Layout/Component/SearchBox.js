import SearchIcon from "../../../assets/searchIcon";
import React, { useState } from "react";
import InfoIcon from "../../../assets/infoIcon";
import Dropdown from "./AdvanceSearch/Dropdown";
import { useTheme } from "next-themes";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import InfoPopup from "./InfoPopup/InfoPopup";
import OptionIcon from "../../../assets/optionIcon";
import SearchApi from "../../../dataStore/api/SearchApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SearchBox = ({ hint }) => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [showDropdown, setShowDroshown] = useState(false);
  const { theme } = useTheme();
  const [searchText, setSearchText] = useState({ text: "" });
  const data = useSelector((state) => state.duaSearch.data);

  // useState
  const [isEnter, setEnter] = useState("");

  useEffect(() => {
    SearchApi.duaSearch(searchText, "en");
  }, [searchText, isEnter, data]);

  return (
    <>
      <div className="flex flex-row items-center relative">
        <form onSubmit={(e) => e.preventDefault()} action="">
          <div className="w-82 mr-8 relative">
            <div className="flex justify-between relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                {theme === "dark" ? <SearchIcon height="22" color="stroke-[#96a2b4]" /> : <SearchIcon height="22" color="stroke-mute-grey" />}
              </span>
              <input
                onKeyDown={(e) => setEnter(e.key === "Enter" ? setSearchText({ text: e.target.value }, router.push("/search")) : "")}
                className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder:font-inter placeholder:text-sm bg-red-100 w-full  py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border- focus:ring- focus:ring-1 sm:text-sm dark:bg-[#223449] dark:placeholder:opacity-[.6]"
                placeholder={hint ?? "Search by Dua Name"}
                type="text"
                name="search"
              />
              {/* <div
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
              </span>  */}
              <input
                className="bg-gray-100  dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-2  absolute right-1 top-1"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
      <Rodal
        showCloseButton={false}
        width={700}
        height={600}
        customStyles={{ backgroundColor: "transparent", boxShadow: "none", "z-index": "999999999999" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <InfoPopup onClick={() => setModalShow(false)} />
      </Rodal>
    </>
  );
};

export default SearchBox;
