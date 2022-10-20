import React from "react";
function InfoPopup({ onClick }) {
  return (
    <div>
      <div className="bg-red-100px-8 py-6 mb-2 mt-3  dark:bg-[#223449] z-10">
        <div className="flex mb-[4%]">
          <div className="flex items-center justify-center  bg-[#DDFFEC] min-h-[81px] min-w-[81px] xs:h-15 xs:w-15 xs:">
            {""}
            <img src="/assets/others/about-us.svg" alt="" />
          </div>
          <div className="flex items-center">
            <div className="ml-5">
              <p className="text-left font-poppins font-medium text-2xl text-title ">About Us</p>
              <p className="text-left font-poppins font-normal text-sm text-[#484848] mt-[2px] dark:text-[#fff9]">
                You can help us for islamic dawah and this website and app maintenance purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="text-left">
            <p className="font-inter font-normal text-base text-title leading-6 text-justify mb-2.5 dark:text-[#fff9]">
              We started in 2012, At first we were working to make a complete database of hadith, we sucessfully did that and published Al-Hadith
              Android and iOS Apps. We also launched an website for hadiths (http://ihadis.com/). Next we moved on to work with Quran Tafsir and
              Translation, we launched an Android Quran App And website. Now we are trying to enhance our exsisting projects and also working on
              different ideas for different projects that will by the will of Allah(Suhanahu Wa Ta'ala) benifit the Ummah. So dear brothers and
              sisters, Keep us in your duas.
            </p>
            <p className="font-inter font-semibold text-base  leading-6 text-justify mb-2.5">Our Projects:</p>
            <ul className="mb-3 list-disc ml-10">
              <li>
                <a className=" underline" rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.ihadis.ihadis">
                  Al-Hadith Android App
                </a>
              </li>
              <li>
                <a className=" underline" rel="noreferrer" target="_blank" href="https://itunes.apple.com/us/app/al-hadith/id1238182914">
                  Al-Hadith iOS App
                </a>
              </li>
              <li>
                <a className=" underline" rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.ihadis.quran">
                  Quran Mazid Android App
                </a>
              </li>
              <li>
                <a className=" underline" rel="noreferrer" target="_blank" href="https://www.ihadis.com">
                  iHadis Website
                </a>
              </li>
              <li>
                <a className=" underline" rel="noreferrer" target="_blank" href="https://www.quranmazid.com">
                  Quran Mazid Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
