import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import staticTitles from "../../../../assets/staticTitles.json";

const GeneralSettings = () => {
  const [isArabic, setArabic] = useState(JSON.parse(localStorage.getItem("showArabic") ?? true));
  const [isTranslation, setTranslation] = useState(JSON.parse(localStorage.getItem("showTranslation")));
  const [isTransliteration, setTransliteration] = useState(JSON.parse(localStorage.getItem("showTransliteration")));
  const [isRefference, setRefference] = useState(JSON.parse(localStorage.getItem("showRefference")));

  const [titles, setTitles] = useState(JSON.parse(JSON.stringify(staticTitles["homepage"]["en"]["rightSidebar"]["general"])));

  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    localStorage.setItem("showArabic", isArabic);
    localStorage.setItem("showTranslation", isTranslation);
    localStorage.setItem("showTransliteration", isTransliteration);
    localStorage.setItem("showRefference", isRefference);

    setTitles(JSON.parse(JSON.stringify(staticTitles["homepage"][language]["rightSidebar"]["general"])));
  }, [isArabic, isTranslation, isTransliteration, isRefference]);

  return (
    <div className="flex flex-col py-2 px-4  animate-scale-down">
      <CheckboxList onClick={() => setArabic(!isArabic)} state={isArabic} name={titles.options[0]} />
      <CheckboxList onClick={() => setTranslation(!isTranslation)} state={isTranslation} name={titles.options[1]} />
      <CheckboxList onClick={() => setTransliteration(!isTransliteration)} state={isTransliteration} name={titles.options[2]} />
      <CheckboxList onClick={() => setRefference(!isRefference)} state={isRefference} name={titles.options[3]} />
    </div>
  );
};

export default GeneralSettings;

function CheckboxList(props) {
  return (
    <div onClick={() => props.onClick()} className="flex text-sm py-1 justify-between text-title flex-row gap-x-3   cursor-pointer">
      <p>{props.name}</p>
      <div
        className={`w-5 h-5 flex items-center justify-center  ${
          props.state ? "bg-blue-400 transition duration-150 delay-75" : "border-solid border-[2px] border-black  transition duration-150 delay-75"
        }`}>
        {props.state && (
          <svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L5 11L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
