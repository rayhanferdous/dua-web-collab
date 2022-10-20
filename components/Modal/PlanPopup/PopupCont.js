import React from "react";
import SelectOption from "../BookmarkPopup/SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNew from "./CreateNew";

function PopupCont({ onClose }) {
  return (
    <div className="mx-8">
      <SelectOption />
      <CreateNew />
      <PopupBtn onClose={onClose} />
    </div>
  );
}

export default PopupCont;
