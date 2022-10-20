import React from "react";

function PopUpTop({ title, fontSize = false }) {
  return (
    <div className="modal-header  flex justify-center items-center rounded-t-2xl px-8 py-6 mb-2">
      <h5
        className={`${
          fontSize ? "text-2xl" : "text-lg"
        } font-Inter font-medium text-black  leading-5 text-gray-800" id="exampleModalScrollableLabel`}>
        {title}
      </h5>
    </div>
  );
}

export default PopUpTop;
