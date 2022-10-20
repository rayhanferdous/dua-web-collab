import React from "react";
import SelectOption from "./SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNewFolder from "./CreateNewFolder";
import FolderColor from "./FolderColor";

function BookmarkPopupContent({onClose}) {
  return (
    <div className="modal-body relative ">
      <div className="mt-4 mb-4 flex justify-center items-start">
      <div style={{ width: "87%" }}>
        <SelectOption title={'Folder Name'}/>
        <CreateNewFolder/>
        <FolderColor />
        <PopupBtn onClose={onClose} />
      </div>
      </div>
    </div>
  );
}

export default BookmarkPopupContent;
