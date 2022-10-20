import { useEffect } from "react";
import DuaCatApi from "../dataStore/api/DuaCatApi";
import DuaDailyApi from "../dataStore/api/DuaDailyApi";
import Master from "../components/Layout/Master";
import MidCat from "../components/Home/MidCat";
import CatList from "../components/Home/CatList";

const Index = () => {
  useEffect(() => {
    DuaCatApi.getCategory();
  }, []);

  useEffect(() => {
    DuaDailyApi.getDailyDua("en");
  }, []);
  return (
    <Master title={"Homepage"} subTitle={"welcome to our website"}>
      <div className="scrl h-[calc(100vh_-_80px)] md:pt-24 lg:pt-24">
        
        <MidCat />
        <CatList />
        
      </div>
    </Master>
  );
};

export default Index;
