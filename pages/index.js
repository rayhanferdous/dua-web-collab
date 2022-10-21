import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import staticTitles from "../assets/staticTitles.json";
import CatList from "../components/Home/CatList";
import MidCat from "../components/Home/MidCat";
import Master from "../components/Layout/Master";
import DuaCatApi from "../dataStore/api/DuaCatApi";
import DuaDailyApi from "../dataStore/api/DuaDailyApi";

const Index = () => {
  const language = useSelector((state) => state.language.language);
  const [titles, setTitles] = useState(JSON.parse(JSON.stringify(staticTitles["homepage"]["en"])));

  useEffect(() => {
    DuaCatApi.getCategory();
  }, []);

  useEffect(() => {
    DuaDailyApi.getDailyDua(language);
    setTitles(JSON.parse(JSON.stringify(staticTitles["homepage"][language])));
  }, [language]);

  return (
    <Master title={titles.header} subTitle={"welcome to our website"}>
      <div className="scrl h-[calc(100vh_-_80px)] md:pt-24 lg:pt-24">
        <MidCat />
        <CatList />
      </div>
    </Master>
  );
};

export default Index;
