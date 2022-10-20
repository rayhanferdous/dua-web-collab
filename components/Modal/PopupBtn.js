import React from "react";

function PopupBtn({ onClose }) {
  return (
    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end mt-7 mb-4">
      <button
        onClick={() => onClose()}
        type="button"
        className="w-40 h-11 inline-block bg-[#EDEDED]   transition duration-150 ease-in-out font-inter font-medium text-base leading-5 text-[#6b6b6b] mr-6"
        data-bs-dismiss="modal">
        Cancel
      </button>
      <button
        type="button"
        className="w-40 h-11 inline-block   transition duration-150 ease-in-out ml-1 font-inter font-medium text-base leading-5 text-black ">
        Save
      </button>
    </div>
  );
}

export default PopupBtn;
