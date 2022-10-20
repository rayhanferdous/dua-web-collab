import { useState } from "react";
const hadithBook = [
  { name: "Sahih Muslim" },
  { name: "Sahih Al-Bukhari" },
  { name: "Sahih an-Nasa'i" },
  { name: "Sunnan Abi Dawud" },
  { name: "Jami at-tirmidhi" },
  { name: "Jami at-tirmidhi" },
  { name: "Jami at-tirmidhi" },
  { name: "Jami at-tirmidhi" },
];

export default function AdvanceSearch() {
  const [selected, setSelected] = useState(hadithBook[0]);
  const [showTick, setShowTick] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div onChange={setSelected} className="w-full">
      <div className="w-full">
        <div
          onClick={() => {
            setShowDropdown(showDropdown === "false" ? "true" : "false");
          }}
          className="w-full relative h-11 flex items-center  justify-between border border-solid border-[#DEE1E5] px-4 text-black  dark:border-none dark:bg-[#223449]">
          {selected.name}
          <img className="" src="/assets/others/dropdown.svg" alt="" />
        </div>

        <div
          className={`transition ${
            showDropdown === "true" ? "block duration-300 delay-300 animate-scale-down" : "hidden duration-300 delay-300 animate-scale-down"
          }  px-4  absolute shadow-2xl bg-red-100  text-black text-left w-[82.5%] h-64 mt-2.5  overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 animate-scale-down dark:scrollbar-track-slate-800`}
          onChange={selected.name}>
          <p className="font-inter font-medium text-sm leading-5 mt-4 dark:text-[#dddddd]">Select Dua Category</p>
          {hadithBook.map((menu, menuIdx) => (
            <div
              onClick={() => setShowTick(showTick === "false" ? "true" : "false")}
              className="flex flex-row items-center space-x-2 my-3 overflow-y-auto">
              <div
                key={menuIdx}
                className={`${
                  showTick === "true" ? "" : "bg-red-100 dark:bg-[#96a2b4]"
                } w-5 h-5  border flex items-center justify-center border-solid border-scroll-bar`}>
                <img className={`${showTick === "false" ? "hidden" : "block"}`} src="/assets/color-tick.png" alt="" />
              </div>
              <p className="font-inter text-sm text-[#404040] leading-4 font-medium ">{menu.name} </p>
            </div>
          ))}

          <div className="sticky w-full right-0 left-0 bottom-0 bg-red-100  p-4  flex justify-between">
            <p onClick={() => setShowTick(showTick === "false" ? "true" : "false")} className="font-inter font-normal leading-4 ">{`${
              showTick === "true" ? "Deselect All" : "Select All"
            }`}</p>
            <p
              onClick={() => {
                setShowDropdown(showDropdown === "false" ? "true" : "false");
              }}
              className="font-inter font-normal leading-4 ">
              Done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
