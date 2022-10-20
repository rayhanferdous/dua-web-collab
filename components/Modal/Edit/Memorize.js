import React from "react";
import PopupBtn from "../PopupBtn";
import EditPopup from "./EditPopup";
import FolderName from "./FolderName";

function Memorize({ onClose }) {
  return (
    <EditPopup>
          <FolderName />
          <PopupBtn onClose={onClose}/>
    </EditPopup>
  );
}

export default Memorize;
