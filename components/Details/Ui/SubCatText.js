import { useState } from "react";
import DuaList from "../CategoryList/DuaList";

export default function SubCatText(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row my-2">
      <div className=" -translate-x-4 mt-[6px] h-[6px] w-[6px] "></div>
      <div className="flex flex-col justify-start items-start">
        <a href="/#" onClick={handleClick} className="font-inter font-semibold text-left text-sm text-title ">
          {props.text}
        </a>
        {isOpen && <DuaList catId={props.catId} subCatId={props.subCatId} />}
      </div>
    </div>
  );
}
