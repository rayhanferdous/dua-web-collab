import { useSelector } from "react-redux";
import Botombar from "./Botombar";
import TopBar from "./TopBar";

const DetailsCard = ({ key, dua, plan }) => {
  const language = useSelector(state => state.language.language);

  return (
    <div className="bg-red-100 rounded -2lg mb-5 dark:bg-[#223449]">
      <div className="p-6">
        <TopBar key={key} dua={dua} plan={plan} />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p className="my-5 text-title text-justify font-inter font-normal ">
            {eval(`dua.top_${language}`)}
          </p>
          {/* Arabic */}
          <p className="my-5 text-title text-right leading-loose font-kgfq text-3xl ">
            {dua.dua_arabic}
          </p>
          <p className="my-5 text-title text-justify font-inter font-normal ">
            {eval(`dua.translation_${language}`)}
          </p>
          <p className="mt-2 font-inter font-normal text-base ">{language === "bn" ? "রেফারেন্স" : "Reference"}</p>
          <p className="mt-1 font-inter font-normal text-base text-title ">{eval(`dua.refference_${language}`)}</p>
        </div>
      </div>
      <Botombar />
    </div>
  );
};

export default DetailsCard;
