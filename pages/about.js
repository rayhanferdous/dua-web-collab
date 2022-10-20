import DrawerApi from "../dataStore/api/DrawerApi";
import { useEffect } from "react";
import Master from "../components/Layout/Master";
import AboutUs from "../components/Setting/AboutUs/AboutUs";

const MyApp = () => {
  useEffect(() => {
    DrawerApi.getDrawer();
  }, []);
  return (
    <Master>
      <div className="md:pt-24 lg:pt-24">
        <AboutUs />
      </div>
    </Master>
  );
};

export default MyApp;
