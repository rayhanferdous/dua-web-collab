import InputButton from "../InputButton";
import { useState } from "react";

const EmailNoti = () => {
  const [isCheck, setCheck] = useState(false);

  const handleCheck = (e) => {
    setCheck(!isCheck);
  };

  return (
    <div className="gap-y-4 flex flex-col">
      <p className="text-title text-sm font-inter ">If you need any type of notification for your awareness.</p>
      <div className="flex flex-row gap-x-3">
        <input
          onClick={handleCheck}
          checked={isCheck ? "checked" : ""}
          type="checkbox"
          className={`${isCheck ? "accent-" : "appearance-none outline outline-1  outline-gray-300"} h-5 w-5 rounded-sm cursor-pointer `}
        />
        <p className="text-title text-sm font-inter ">Please check mark enable.</p>
      </div>
      <div className="xs-min:text-right xl-min:text-left">
        <InputButton name="Save Change" />
      </div>
    </div>
  );
};

export default EmailNoti;
