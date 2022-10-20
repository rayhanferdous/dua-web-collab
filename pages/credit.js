import Credit from "../components/Setting/Credit/Home";

import DrawerApi from "../dataStore/api/DrawerApi";
import { useEffect } from "react";
import Master from "../components/Layout/Master";

const MyApp = () => {
  useEffect(() => {
    DrawerApi.getDrawer();
  }, []);
  return (
    <Master>
      <div className="md:pt-24 lg:pt-24">
        <Credit />
      </div>
    </Master>
  );
};

export default MyApp;
