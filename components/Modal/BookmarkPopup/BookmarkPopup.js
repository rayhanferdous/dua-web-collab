import React from "react";
import BookmarkPopupContent from "./BookmarkPopupContent";
import PopUpTop from "../PopUpTop";

function BookmarkPopup({ onClose }) {
  return (
    <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-red-100 bg-clip-paddingoutline-none text-current dark:bg-[#223449]">
      <PopUpTop title={"Choose Folder"} />
      <BookmarkPopupContent onClose={onClose} />
    </div>
  );
}

export default BookmarkPopup;
