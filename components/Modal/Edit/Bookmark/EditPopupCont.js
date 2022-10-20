import React from "react";
import PopupBtn from "../../PopupBtn";
import FolderColor from "./FolderColor";
import FolderName from "./FolderName";

function EditPopupCont({ onClose }) {
  return (
    <div className="px-8">
      <FolderName />
      <FolderColor />
      <PopupBtn onClose={onClose} />
    </div>
  );
}

export default EditPopupCont;
