import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import DuaTopBar from "../../Details/DuaCard/DuaTopbar";
import DuaBottomBar from "../../Details/DuaCard/DuaBottomBar";
import { useEffect, useState } from "react";
import localStorageFnc from "../../../dataStore/functions/localStorageFnc";

const QaDetailsCard = () => {
  const data = useSelector((state) => state.duaInfo.data);

  const [duaInfo, setDuaInfo] = useState([]);

  useEffect(() => {
    localStorageFnc(data, "duaInfo", setDuaInfo);
  }, [data]);

  return (
    <>
      {duaInfo &&
        duaInfo?.result?.map((item) => (
          <div id={`${item._id}`} className="bg-red-100 rounded-2lg mb-5 dark:bg-[#223449]">
            <div className="p-6">
              <DuaTopBar id={item._id} title={item.info_topic} />
              <div className="flex flex-col justify-start items-start">
                <p className=" my-5 text-title text-left font-inter font-normal">
                  {ReactHtmlParser(
                    item.info_details
                      .replaceAll("\n", "<br>")
                      .replaceAll("<ar>", '<p class=" my-5 text-title leading-loose font-kgfq text-3xl text-right" style="text-align: right">')
                      .replaceAll("</ar>", "</p>")
                  )}
                </p>
              </div>
            </div>
            <DuaBottomBar />
          </div>
        ))}
    </>
  );
};

export default QaDetailsCard;
