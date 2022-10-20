import { useEffect, useState } from "react";
import DuaBottomBar from "./DuaBottomBar";
import DuaTopbar from "./DuaTopbar";

const DuaCard = ({ dua }) => {
  const [animation, setAnimation] = useState(false);
  const isArabic = JSON.parse(localStorage.getItem("showArabic"));
  const isTranslation = JSON.parse(localStorage.getItem("showTranslation"));
  const isTransliteration = JSON.parse(localStorage.getItem("showTransliteration"));
  const isRefference = JSON.parse(localStorage.getItem("showRefference"));

  useEffect(
    () => {
      return () => {
        setAnimation(true);
      };
    },
    [dua[0].dua_id],
    isArabic,
    isTranslation,
    isTransliteration,
    isRefference
  );

  return (
    <div id={`${dua[0].dua_id}`} className="bg-red-100 rounded-2lg my-5 dark:bg-[#223449]">
      <div className="p-6">
        <DuaTopbar duaName={dua[0].dua_name_en} duaId={dua[0].dua_id} />
        <div className={`flex flex-col justify-start items-start  ${animation && "animate-fade-in-up"}`}>
          {dua.map(function (item, index) {
            return (
              <div className="w-full">
                {/* Body */}
                {dua[index].top_en !== null && <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].top_en}</p>}
                {/* Arabic */}

                {dua[index].dua_arabic !== null && isArabic && (
                  <p className=" my-5 text-title text-right leading-loose font-kgfq text-3xl">{dua[index].dua_arabic}</p>
                )}
                {/* transliteration_en */}

                {dua[index].transliteration_en !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].transliteration_en}</p>
                )}
                {dua[index].transliteration_bn !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-kgfq font-normal">{dua[index].transliteration_bn}</p>
                )}

                {/* translation_en */}
                {dua[index].translation_en !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].translation_en}</p>
                )}
                {dua[index].translation_bn !== null && isTransliteration && (
                  <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].translation_bn}</p>
                )}
                {/* Dua Bottom Section */}
                {dua[index].bottom_en !== null && <p className=" my-5 text-title text-justify font-inter font-normal">{dua[index].bottom_en}</p>}

                {dua.length > 1 && index !== dua.length - 1 && <div className="bg-devider h-[1px] dark:bg-[#2F4B5F]" />}
              </div>
            );
          })}

          {isRefference && (
            <div>
              <p className="mt-2 ">Reference</p>
              <div className="mt-1 text-sm text-title  w-full text-left">{dua[dua.length - 1].refference_en}</div>
            </div>
          )}
        </div>
      </div>
      <DuaBottomBar audio={dua[0].audio} />
    </div>
  );
};

export default DuaCard;
