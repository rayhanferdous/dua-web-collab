import { useState, useEffect } from "react";

const LanguageSettings = () => {
  const [language, setLanguage] = useState();

  return (
    <div className={`py-6  animate-scale-down`}>
      <div className="flex flex-row gap-x-3 mx-4 justify-center animate-scale-down">
        <button
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-blue-400 btn drop-shadow-  w-29 h-10 text-ms " : "btn-outline text-title w-29 h-10 text-ms  dark:border-[#96a2b4]"}>
          English
        </button>
        <button
          onClick={() => setLanguage("bn")}
          className={language === "bn" ? "bg-blue-400 btn drop-shadow-  w-29 h-10 text-ms " : "btn-outline text-title w-29 h-10 text-ms  dark:border-[#96a2b4]"}>
          বাংলা
        </button>
      </div>
    </div>
  );
};

export default LanguageSettings;
