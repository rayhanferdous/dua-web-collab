import { useEffect } from "react";
import RuqyahCatApi from "../../dataStore/api/RuqyahCatApi";
import Master from "../../components/Layout/Master";
import Slider from "../../components/Ruqyah/Slider/Slider";
import Category from "../../components/Ruqyah/Category/Category";
const MyApp = () => {
  useEffect(() => {
    RuqyahCatApi.getRuqyahCategory("en");
  }, []);
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] xs:pt-12 sm:pt-8 md:pt-24 lg:pt-24">
        <Slider />
        <Category />
      </div>
    </Master>
  );
};

export default MyApp;
