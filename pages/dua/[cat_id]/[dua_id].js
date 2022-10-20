import { useEffect } from "react";
import DuaCatApi from "../../../dataStore/api/DuaCatApi";
import Master from "../../../components/Layout/Master";
import DuaContainer from "../../../components/Details/DuaContainer";
import CatContainer from "../../../components/Details/CatContainer";
import SectionCard from "../../../components/Details/DuaCard/SectionCard";
import DuaCard from "../../../components/Details/DuaCard/DuaCard";
import { useSelector } from "react-redux";

const DuaDetails = () => {
  const selectedDua = useSelector((state) => state.subCat.allDuaOfCatID);
  var flattenAllDuas = selectedDua?.flat();
  let sameIDDuasGrouped = [];

  var results = flattenAllDuas?.reduce(function (results, flattenAllDuas) {
    (results[flattenAllDuas.dua_id] = results[flattenAllDuas.dua_id] || []).push(flattenAllDuas);
    return results;
  }, {});
  if (results !== undefined) {
    Object.keys(results).forEach(function (key) {
      sameIDDuasGrouped.push(results[key]);
    });
  }
  useEffect(() => {
    DuaCatApi.getCategory();
  }, []);

  return (
    <Master ns={true}>

        <CatContainer title={"Categories"} />
        <DuaContainer ns={true}>
          <SectionCard text="The servant is dependent on his Lord" />
          {sameIDDuasGrouped && sameIDDuasGrouped?.map((item) => <DuaCard dua={item} />)}
        </DuaContainer>

    </Master>
  );
};

export default DuaDetails;
