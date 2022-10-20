import CatList from "./LeftBar/CatList.js";
import Footer from "./LeftBar/Footer";

function LeftBar({ ns = false }) {
  return (
    <div className={`${ns ? "w-[100px]" : " w-full"} overflow-hidden`}>
      <div className="bg-100  px-4 dark:bg-[#223449] lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh]">
        {/* Logo */}

        <CatList path="/" text={Title(ns, "Home")} />
        <CatList path="/alldua" text={Title(ns, "All Duas")} />
        <CatList path="/memorize" text={Title(ns, "Memorize")} />
        <CatList path="/bookmark" text={Title(ns, "Bookmark")} />
        <CatList path="/ruqyah" text={Title(ns, "Ruqyah")} />
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
