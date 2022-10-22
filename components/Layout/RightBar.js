import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import staticTitles from "../../assets/staticTitles.json";
import { ScriptDropdown } from "../../dataStore/feature/GlobalDataSlicer";
import CatList from "./Sidebar/RightBarMenu";
import FontSettings from "./Sidebar/Settings/FontSettings";
import GeneralSettings from "./Sidebar/Settings/GeneralSettings";
import LanguageSettings from "./Sidebar/Settings/LanguageSettings";

function RightBar() {
  const scriptDropdown = useSelector((state) => state.globalData.scriptDropdown);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const [titles, setTitles] = useState(JSON.parse(JSON.stringify(staticTitles["homepage"]["en"]["rightSidebar"])));

  const globalDataHandler = () => {
    dispatch(ScriptDropdown(scriptDropdown === true ? false : ""));
  };

  const [dropdown, setDropdown] = useState(1);

  function handleDropdown(id) {
    if (dropdown === id || (dropdown && id === undefined)) {
      setDropdown(null);
    }
    if (dropdown !== id) {
      setDropdown(id);
    }
  }

  useEffect(() => {
    setTitles(JSON.parse(JSON.stringify(staticTitles["homepage"][language]["rightSidebar"])));
  }, [language]);

  return (
    <div
      className={`{w-full transition overflow-hidden
`}>
      <div
        className="b-red-100 dark:bg-[#223449] h-[84vh]  xs:h-fit xs:  
        sm:h-[90%] 
        sm:relative 
        sm:pb-3
        md:h-fit
        md:pb-4
        lg:h-fit
        lg:pb-4">
        <div
          className={`container text-center pt-9 pb-6 text-xl 
          xs:pt-6
          sm:pt-4
          
          `}>
          {titles.title}
        </div>

        <div className="xs:pb-2">
          <CatList
            active={dropdown === 1 ? true : false}
            onClick={() => handleDropdown(1)}
            text={titles.language}
            child={dropdown === 1 && <LanguageSettings />}
          />
          <CatList
            active={dropdown === 2 ? true : false}
            onClick={() => handleDropdown(2)}
            text={titles.general.title}
            child={dropdown === 2 && <GeneralSettings />}
          />
          <CatList
            active={dropdown === 3 ? true : false}
            onClick={() => handleDropdown(3)}
            text={titles.font.title}
            child={dropdown === 3 && <FontSettings scriptDropdown={scriptDropdown} />}
          />
        </div>
      </div>
    </div>
  );
}

export default RightBar;
