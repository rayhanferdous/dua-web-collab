import { useEffect } from "react";
import RuqyahSubCatApi from "../../../dataStore/api/RuqyahSubCatApi";
import RuqyahDetailsApi from "../../../dataStore/api/RuqyahDetailsApi";
import Master from "../../../components/Layout/Master";
import CatContainer from "../../../components/Details/CatContainer";
import DuaContainer from "../../../components/Details/DuaContainer";
import RuqyahDetailsCard from "../../../components/Ruqyah/Details/RuqyahDetailsCard";

const MyApp = () => {
  useEffect(() => {
    RuqyahSubCatApi.getRuqyahSubCat("en");
    RuqyahDetailsApi.getRuqyahDetails("en");
  }, []);
  return (
    <Master ns={true}>
      <CatContainer title={"Ruqyah Categories"} />
      <DuaContainer>
        <RuqyahDetailsCard/>
      </DuaContainer>
    </Master>
  );
};

export default MyApp;
