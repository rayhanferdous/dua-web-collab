import React from "react";
import { useSelector } from "react-redux";
import PopUpTop from "../PopUpTop";
import PopupCont from "./PopupCont";

function PlanPopup({ onClose, dua }) {
  const language = useSelector(state => state.language.language);

  return (
    <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-red-100 bg-clip-paddingoutline-none text-current dark:bg-[#223449]">
      <PopUpTop title={language === "bn" ? "প্ল্যান সিলেক্ট করুন" : "Choose Plan"} />
      <PopupCont onClose={onClose} dua={dua} />
    </div>
  );
}

export default PlanPopup;
