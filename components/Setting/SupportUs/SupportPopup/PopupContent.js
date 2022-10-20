import React from "react";
import PopupCont from "./PopupCont";

function PopupContent() {
  return (
    <div className="modal-body relative px-8 ">
      <div className="mt-4 mb-4 flex justify-start">
        <PopupCont />
      </div>
    </div>
  );
}

export default PopupContent;
