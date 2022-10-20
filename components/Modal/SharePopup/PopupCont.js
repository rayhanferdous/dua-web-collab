import React from "react";
import PopupBtn from "../PopupBtn";
import CopyLink from "./CopyLink";
import ShareWith from "./ShareWith";

function PopupCont({onClose}) {
  return (
    <div className="px-8">
      <ShareWith />
      <CopyLink />
      <PopupBtn onClose={onClose} />
    </div>
  );
}

export default PopupCont;
