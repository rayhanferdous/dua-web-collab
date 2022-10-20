import React from "react";
import InputCard from "./InputCard";
import PopupBtn from "../PopupBtn";

function ReportUsForm({ onClose }) {
  return (
    <div className="px-8 ">
      <div className="text-left pb-8mt-4 ">
        <InputCard title={"name"} type={"text"} placeholder={"Type your full name"} input={true} />
        <InputCard title={"email"} type={"email"} placeholder={"Enter Your Valid Email"} input={true} />
        <InputCard title={"subject"} type={"text"} placeholder={"Title"} option={true} />

        <InputCard title={"message"} type={"text"} placeholder={"Message write here......"} textarea={true} />
        <PopupBtn onClose={onClose} />
      </div>
    </div>
  );
}

export default ReportUsForm;
