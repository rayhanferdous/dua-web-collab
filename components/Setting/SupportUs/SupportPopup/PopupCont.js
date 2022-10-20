import React from "react";
import DonationType from "./DonationType";
import HadiyaOption from "./HadiyaOption";
import PaymentMethod from "./PaymentMethod";

function PopupCont() {
  return (
    <>
      <div style={{ width: "100%" }} className="mb-3">
        <DonationType />
        <PaymentMethod/>
        <HadiyaOption/>
      </div>
    </>
  );
}

export default PopupCont;
