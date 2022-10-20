import DuaTopbar from "../../Details/DuaCard/DuaTopbar";
import DuaBottomBar from "../../Details/DuaCard/DuaBottomBar";

const RuqyahDetailsCard = () => {
  return (
    <div className="bg-red-100 rounded-2lg mb-5 dark:bg-[#223449]">
      <div className="p-6">
        <DuaTopbar />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p className=" my-5 text-title text-justify font-inter font-normal">
            All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.
          </p>
          {/* Arabic */}
          <p className=" my-5 text-title text-right leading-loose font-kgfq text-3xl">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ اَللَّهُمَّ لَا مَانِعَ لِمَا
            أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p>
          <p className=" my-5 text-title text-justify font-inter font-normal">
            All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says
            (interpretation of the meaning): O mankind, you are those in need of Allah,
          </p>
          <p className="mt-2 ">Reference</p>
          <p className="mt-1 text-sm text-title ">Surah Al-Fatir 35:15</p>
        </div>
      </div>
      <DuaBottomBar />
    </div>
  );
};

export default RuqyahDetailsCard;
