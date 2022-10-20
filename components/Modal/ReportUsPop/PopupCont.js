import React from "react";
import ReportUsForm from "./ReportUsForm";

function PopupCont({ onClose }) {
  return (
    <div>
      <ReportUsForm onClose={onClose} />
    </div>
  );
}

export default PopupCont;
