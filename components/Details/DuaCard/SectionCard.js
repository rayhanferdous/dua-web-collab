import { useEffect } from "react";
import { useSelector } from "react-redux";

const SectionCard = (props) => {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {}, [language]);

  return (
    <div className="flex flex-row bg-red-100 rounded-2lg justify-start items-center pl-6 p-4 dark:bg-[#223449]">
      <p className="text-title text-sm ">
        <span className="">{language === "bn" ? "সেকশন" : "Section"}: </span>
        {props.text}
      </p>
    </div>
  );
};

export default SectionCard;
