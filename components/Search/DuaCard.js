import Botombar from "./Botombar";
import TopBar from "./TopBar";

const DetailsCard = ({ dua }) => {
  return (
    <div className="bg-red-100 rounded-2lg mb-5 ">
      <div className="p-6">
        <TopBar duaName={dua.id + ". " + dua.dua_name_en} />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p className="my-5 text-title text-justify font-inter font-normal ">{dua.top_en}</p>
          {/* Arabic */}
          {/* <p className="my-5 text-title text-right leading-loose font-kgfq text-3xl ">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ اَللَّهُمَّ لَا مَانِعَ لِمَا
            أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p> */}
          {dua.transliteration_en && <p className="my-5 text-title text-justify font-inter font-normal ">{dua.transliteration_en}</p>}
          {dua.translation_en && <p className="my-5 text-title text-justify font-inter font-normal ">{dua.translation_en}</p>}{" "}
          {dua.bottom_en && <p className="my-5 text-title text-justify font-inter font-normal ">{dua.bottom_en}</p>}{" "}
          <p className="mt-2 font-inter font-medium text-base ">Reference</p>
          {dua.refference_en && <p className="mt-1 font-inter font-normal text-base text-title ">{dua.refference_en}</p>}{" "}
        </div>
      </div>
      <Botombar />
    </div>
  );
};

export default DetailsCard;
