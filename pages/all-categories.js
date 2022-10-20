import { useEffect } from "react";
import DuaCatApi from "../dataStore/api/DuaCatApi";
import Master from "../components/Layout/Master";
import Cards from "../components/Categories/Cards";
const MyApp = () => {
  useEffect(() => {
    DuaCatApi.getCategory();
  }, []);
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] pb-12">
        <Cards />
      </div>
    </Master>
  );
};

export default MyApp;
