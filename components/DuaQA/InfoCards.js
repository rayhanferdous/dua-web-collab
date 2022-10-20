import NumCard from "../Utils/NumCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import localStorageFnc from "../../dataStore/functions/localStorageFnc";

const DuaInfoCard = () => {
  const data = useSelector((state) => state.duaInfo.data);
  const [duaInfo, setDuaInfo] = useState([]);

  useEffect(() => {
    localStorageFnc(data, "duaInfo", setDuaInfo);
  }, [data]);
  return (
    <div className="">
      <div className="flex my-4 font-inter font-semibold text-lg text-title  ">Dua Q&A:</div>
      <div
        className="grid w-full gap-3 mt-4 mb-8
        xs:grid-cols-1
        xs:gap-y-3
        xs:mt-0
        xs:
        sm:grid-cols-2
        sm:gap-x-4
        md:grid-cols-2
        md:gap-x-4
        lg:grid-cols-3
        xl:grid-cols-3 
        2xl:grid-cols-3 
        3xl:grid-cols-3
        ">
        {duaInfo && duaInfo?.result?.map((item) => <NumCard link={"/#"} title={item.info_topic} text={item._id} />)}
      </div>
    </div>
  );
};

export default DuaInfoCard;
