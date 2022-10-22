import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DuaBottomBar from "./DuaBottomBar";
import DuaTopbar from "./DuaTopbar";

const DuaCard = ({ dua }) => {
  const [animation, setAnimation] = useState(false);
  const [isArabic, setIsArabic] = useState(JSON.parse(localStorage.getItem("showArabic")));
  const [isTranslation, setIsTranslation] = useState(JSON.parse(localStorage.getItem("showTranslation")));
  const [isTransliteration, setIsTransliteration] = useState(JSON.parse(localStorage.getItem("showTransliteration")));
  const [isRefference, setIsRefference] = useState(JSON.parse(localStorage.getItem("showRefference")));

  const language = useSelector((state) => state.language.language);
  const generalSettings = useSelector(({ generalSettings }) => generalSettings.value);

  const getNumberString = (number) => {
    if (language === "bn") {
      return number.toLocaleString("bn-BD");
    }
    return number;
  };

  useEffect(() => {
    setIsArabic(generalSettings.showArabic);
    setIsRefference(generalSettings.showReference);
    setIsTranslation(generalSettings.showTranslation);
    setIsTransliteration(generalSettings.showTransliteration);

    return () => {
      setAnimation(true);
    };
  }, [dua[0].dua_id, language, generalSettings]);

  return (
    <div id={`${dua[0].dua_id}`} className="bg-red-100 rounded-2lg my-5 dark:bg-[#223449]">
      <div className="p-6">
        <DuaTopbar duaName={eval(`dua[0].dua_name_${language}`)} duaId={getNumberString(dua[0].dua_id)} />
        <div className={`flex flex-col justify-start items-start  ${animation && "animate-fade-in-up"}`}>
          {dua.map(function (item, index) {
            return (
              <div className="w-full">
                {/* Body */}
                {eval(`dua[index].top_${language}`) !== null && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{eval(`dua[index].top_${language}`)}</p>
                )}
                {/* Arabic */}

                {dua[index].dua_arabic !== null && isArabic && (
                  <p className=" my-5 text-title text-right leading-loose font-kgfq text-3xl">{dua[index].dua_arabic}</p>
                )}
                {/* transliteration_en */}

                {eval(`dua[index].transliteration_${language}`) !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{eval(`dua[index].transliteration_${language}`)}</p>
                )}
                {/* {dua[index].transliteration_bn !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-kgfq font-normal">{dua[index].transliteration_bn}</p>
                )} */}

                {/* translation_en */}
                {eval(`dua[index].translation_${language}`) !== null && isTranslation && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{eval(`dua[index].translation_${language}`)}</p>
                )}
                {/* {dua[index].translation_bn !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].translation_bn}</p>
                )} */}
                {/* Dua Bottom Section */}
                {eval(`dua[index].bottom_${language}`) !== null && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{eval(`dua[index].bottom_${language}`)}</p>
                )}

                {dua.length > 1 && index !== dua.length - 1 && <div className="bg-devider h-[1px] dark:bg-[#2F4B5F]" />}
              </div>
            );
          })}

          {isRefference && (
            <div>
              <p className="mt-2 ">{language === "bn" ? "রেফারেন্স" : "Reference"}</p>
              <div className="mt-1 text-sm text-title  w-full text-left">{eval(`dua[dua.length - 1].refference_${language}`)}</div>
            </div>
          )}
        </div>
      </div>
      <DuaBottomBar audio={dua[0].audio} />
    </div>
  );
};

export default DuaCard;
