import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function CreateNew({ newPlan, setNewPlan }) {
  const language = useSelector(state => state.language.language);

  const [name, setName] = useState("");
  const [targetDays, setTargetDays] = useState(30);

  useEffect(() => {

  }, [newPlan])

  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">{language === "bn" ? "অথবা, নতুন প্ল্যান তৈরি করুন" : "Or, Create New Plan"}</span>

        <input
          className="w-full h-[48px] px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
          type="text"
          name="plan"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNewPlan({ name: e.target.value, targetDays });
          }}
          placeholder={language === "bn" ? "প্ল্যানের নাম" : "Name of new plan"}
        />
        {name !== "" && (
          <input
            className="w-full h-[48px] my-2 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
            type="number"
            min={1}
            max={30}
            name="target"
            value={targetDays}
            onChange={(e) => {
              console.log(e.target.value);
              let value = e.target.value;
              setTargetDays(value);
              setNewPlan({ ...newPlan, name, targetDays: value, createdAt: new Date().toLocaleDateString() });
            }}
            placeholder={language === "bn" ? "আনুমানিক দিন" : "Target days"}
          />
        )}
      </div>
    </label>
  );
}

export default CreateNew;
