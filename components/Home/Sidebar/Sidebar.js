import React, { useState } from "react";
import CatList from "./CatList";
import LanguageSettings from "./Settings/LanguageSettings";
import GeneralSettings from "./Settings/GeneralSettings";
import FontSettings from "./Settings/FontSettings";
import AppearanceSettings from "./Settings/AppearanceSettings";

function Sidebar({ ns, tab }) {
  const [dropdown, setDropdown] = useState(1);

  function handleDropdown(id) {
    if (dropdown === id || (dropdown && id === undefined)) {
      setDropdown(null);
    }
    if (dropdown !== id) {
      setDropdown(id);
    }
  }

  return (
    <div
      className={`{w-[17.2%] h-100 right-0 transition fixed xs:w-full xs:h-fit xs:mr-0 xs:mt-12  xs:p-4 xs:mb-14  
      sm:h-fit 
      sm:min-w-[17.2%] 
      sm:mt-12c
      md:min-w-full
      xl:hidden
      2xl:w-[17%]
      3xl:w-[17.5%] ${ns ? "hidden" : "block"} ${tab ? "top-6 right-10" : ""}`}>
      <div
        className="bg-red-100 dark:bg-[#223449] h-100  xs:h-fit xs:  
        sm:h-[90%] 
        sm:relative 
        sm:pb-3
        md:h-fit
        md:pb-4
        lg:h-fit
        lg:pb-4">
        <div
          className="hidden 
          sm:block 
          sm:absolute 
          sm:right-5 
          sm:-top-5">
          <img src="/assets/polygon.svg" alt="" />
        </div>
        <div
          className={`container p-4 pt-9 pb-6 text-xl 
          sm:pt-4 
          sm:text-center xs:opacity-0 xs:p-0
          
          `}>
          Settings
        </div>

        <div className="xs:pb-2">
          <CatList
            active={dropdown === 1 ? true : false}
            onClick={() => handleDropdown(1)}
            icon="language"
            text="Language Settings"
            child={dropdown === 1 && <LanguageSettings />}
          />
          <CatList
            active={dropdown === 2 ? true : false}
            onClick={() => handleDropdown(2)}
            icon="general"
            text="General Settings"
            child={dropdown === 2 && <GeneralSettings />}
          />
          <CatList
            active={dropdown === 3 ? true : false}
            onClick={() => handleDropdown(3)}
            icon="font"
            text="Font Settings"
            child={dropdown === 3 && <FontSettings />}
          />
          <CatList
            active={dropdown === 4 ? true : false}
            onClick={() => handleDropdown(4)}
            icon="font"
            text="Appearance Settings"
            child={dropdown === 4 && <AppearanceSettings />}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
