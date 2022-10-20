import { useState } from "react";
import SubCatList from "./SubcatList";
import SubCatApi from "../../../dataStore/api/SubCatApi";

const CatList = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen ?? false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!isOpen) {
      SubCatApi.getSubCategory(props.catId);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="group">
      <a href="/#" onClick={handleClick}>
        <div className="bg-red-100 flex justify-between items-center mx-3 dark:bg-transparent">
          <div className="flex flex-row justify-between items-center w-full h-18 px-3   ">
            <div className="flex flex-row items-center">
             
              <div className="text-left ml-4">
                <p className="text-title font-inter font-medium text-base ">{props.catName}</p>
                <p className="text-mute-grey text-xs mt-1 ">Subcategory: {props.subCat}</p>
              </div>
            </div>
          
          </div>
        </div>
      </a>
      {isOpen && <SubCatList catId={props.catId} />}
    </div>
  );
};

export default CatList;
