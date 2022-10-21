import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import staticTitles from "../../assets/staticTitles.json";
import CatList from "./LeftBar/CatList.js";

function LeftBar({ ns = false }) {
  const language = useSelector((state) => state.language.language);
  const [titles, setTitles] = useState(JSON.parse(JSON.stringify(staticTitles["homepage"]["en"])));

  useEffect(() => {
    setTitles(JSON.parse(JSON.stringify(staticTitles["homepage"][language]["leftSidebar"])));
  }, [language]);

  return (
    <div className={`${ns ? "w-[100px]" : " w-full"} overflow-hidden`}>
      <div className="bg-100  px-4 dark:bg-[#223449] lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh]">
        {/* Logo */}

        <CatList path="/" text={Title(ns, titles[0])} />
        <CatList path="/alldua" text={Title(ns, titles[1])} />
        <CatList path="/memorize" text={Title(ns, titles[2])} />
        <CatList path="/bookmark" text={Title(ns, titles[3])} />
        <CatList path="/ruqyah" text={Title(ns, titles[4])} />
      </div>
    </div>
  );
}

export default LeftBar;

function Title(ns, title) {
  if (ns === false) {
    return title;
  } else {
    return "";
  }
}
