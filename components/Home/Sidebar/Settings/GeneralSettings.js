import { useState } from "react";

const GeneralSettings = () => {
  return (
    <div className="flex flex-col py-2 px-4  animate-scale-down">
      <CheckboxList name="Show Arabic" />
      <CheckboxList name="Show Translation" />
      <CheckboxList name="Show Transliteration" />
      <CheckboxList name="Show Refference" />
    </div>
  );
};

export default GeneralSettings;

function CheckboxList(props) {
  const [isCheck, setCheck] = useState(true);

  const handleCheck = (e) => {
    e.preventDefault();
    setCheck(!isCheck);
  };

  return (
    <div className="flex text-sm py-1 justify-between text-title flex-row gap-x-3  ">
      <p>{props.name}</p>
      <div className="">
        <input
          onClick={handleCheck}
          checked={isCheck ? "checked" : ""}
          type="checkbox"
          className={`${isCheck ? "accent-" : "appearance-none outline outline-1  outline-gray-300"} h-5 w-5 rounded-sm cursor-pointer `}
        />
      </div>
    </div>
  );
}
