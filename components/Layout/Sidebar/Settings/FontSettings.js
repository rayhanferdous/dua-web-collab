import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import staticTitles from "../../../../assets/staticTitles.json";
import { ScriptDropdown } from "../../../../dataStore/feature/GlobalDataSlicer";
import DoprDown from "../../../Utils/DropDown";

const FontSettings = () => {
  const scriptDrop = useSelector((state) => state.globalData.arabicScriptDrop);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const MAX = 40;
  const [translationFont, setTranslationFont] = useState(16);
  const [selectedScript, setSelectedScript] = useState("KGFQ");
  const [selectedFont, setSelectedFont] = useState("KGFQ");
  const [fontDropdown, setFontDropdown] = useState(false);
  const [arabicFont, setArabicFont] = useState(15);
  const [titles, setTitles] = useState(JSON.parse(JSON.stringify(staticTitles["homepage"]["en"]["rightSidebar"]["font"])));

  const getBackgroundSize = (font) => {
    return {
      backgroundSize: `${(font * 100) / MAX}% 100%`,
    };
  };

  useEffect(() => {
    setTitles(JSON.parse(JSON.stringify(staticTitles["homepage"][language]["rightSidebar"]["font"])));
  }, []);

  return (
    <div className="px-4 pb-1  animate-scale-down">
      <div className="flex flex-col items-start">
        <p className="text-title mt-4 mb-3 text-sm ">{titles.options[0]}</p>

        <div className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center">
          <input
            type="range"
            min="0"
            max={MAX}
            onChange={(e) => setTranslationFont(e.target.value)}
            style={getBackgroundSize(translationFont)}
            value={translationFont}
          />
          <div>{translationFont}</div>
        </div>
      </div>

      <div className="flex items-start flex-col">
        <div className="mt-4 w-[96%]">
          <p className="text-title text-sm  mb-3 ">{titles.options[1]}</p>
          <DoprDown selected={selectedScript} dropDown={scriptDrop} setDropDown={() => dispatch(ScriptDropdown(!scriptDrop))}>
            <div className="cursor-pointer font-Inter text-[15px] flex flex-col px-2">
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => setSelectedScript(e.target.innerText, dispatch(ScriptDropdown(!scriptDrop)))}>
                KGFQ
              </div>
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => setSelectedScript(e.target.innerText, dispatch(ScriptDropdown(!scriptDrop)))}>
                Noor e Huda
              </div>
              <div
                className="hover:bg-[#F8F8F9] px-4 py-2 "
                onClick={(e) => setSelectedScript(e.target.innerText, dispatch(ScriptDropdown(!scriptDrop)))}>
                Noor E Hedayet
              </div>
            </div>
          </DoprDown>
        </div>
        <div className="mt-4 w-[96%]">
          <p className="text-title text-sm  mb-3">{titles.options[2]}</p>
          <DoprDown selected={selectedFont} dropDown={fontDropdown} setDropDown={setFontDropdown}>
            <div className="cursor-pointer font-Inter text-[15px] flex flex-col px-2">
              <div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={(e) => setSelectedFont(e.target.innerText, setFontDropdown(!fontDropdown))}>
                KGFQ
              </div>
              <div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={(e) => setSelectedFont(e.target.innerText, setFontDropdown(!fontDropdown))}>
                Noor e Huda
              </div>
              <div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={(e) => setSelectedFont(e.target.innerText, setFontDropdown(!fontDropdown))}>
                Noor E Hedayet
              </div>
            </div>
          </DoprDown>
        </div>
      </div>

      <div className="my-4 flex items-start flex-col">
        <p className="text-title text-sm  mb-3">{titles.options[3]}</p>
        <div className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center">
          <input
            className=""
            type="range"
            min="0"
            max={MAX}
            onChange={(e) => setArabicFont(e.target.value)}
            style={getBackgroundSize(arabicFont)}
            value={arabicFont}
          />
          <div>{arabicFont}</div>
        </div>
      </div>
    </div>
  );
};

export default FontSettings;
