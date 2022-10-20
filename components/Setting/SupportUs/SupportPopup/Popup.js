import React from "react";
import PopupContent from "./PopupContent";
import PopUpTop from "./PopUpTop";
// import EditPopupCss from "./SupportPopup.css";

function Popup() {
  return (
    <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-red-100 bg-clip-paddingoutline-none text-current">
        <PopUpTop title={"Choose Payment Method"} />
        <PopupContent />
      </div>
    </div>
  );
}

export default Popup;
