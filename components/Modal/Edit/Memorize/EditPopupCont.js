import React from "react";
import PopupBtn from "../../PopupBtn";
import FolderName from "../FolderName";

function EditPopupCont({onClose}) {
  return (
    <>
      <div className="p-8">
        <FolderName/>
        <PopupBtn onClose={onClose} />
      </div>
    </>
  );
}

export default EditPopupCont;
