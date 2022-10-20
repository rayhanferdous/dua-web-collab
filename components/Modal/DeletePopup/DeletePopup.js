import React from "react";
import DeletePopupBtn from "./DeletePopupBtn";

function DeletePopup({ onClose }) {
  return (
    <div onClick={() => onClose()} className="bg-red-100 px-8 py-6  xs:w-8/12">
      <p className="text-start font-inter font-normal text-base leading-6 text-title">Do you want to delete this dua from bookmark folder?</p>
      <DeletePopupBtn />
    </div>
  );
}

export default DeletePopup;
