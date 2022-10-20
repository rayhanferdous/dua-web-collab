import React from "react";

function PopUpTop({ title, fontSize = false }) {
  return (
    <div className="modal-header text flex justify-between items-center px-8 pt-8 mb-2">
      <h5 className={`${fontSize ? "text-2xl" : "text-lg"} font-inter font-medium  leading-5 text-gray-800" `}>{title}</h5>
    </div>
  );
}

export default PopUpTop;
