import { useEffect } from "react";
import { useSelector } from "react-redux";
import CatContainer from "../../../components/Details/CatContainer";
import DuaCard from "../../../components/Details/DuaCard/DuaCard";
import SectionCard from "../../../components/Details/DuaCard/SectionCard";
import DuaContainer from "../../../components/Details/DuaContainer";
import Master from "../../../components/Layout/Master";
import DuaCatApi from "../../../dataStore/api/DuaCatApi";

const DuaDetails = () => {
  const selectedDua = useSelector((state) => state.subCat.allDuaOfCatID);
  const selectedSection = useSelector((state) => state.selectedSection.value);
  const language = useSelector((state) => state.language.language);

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
  }, [selectedSection, language]);

  return (
    <Master ns={true}>
      <CatContainer title={language === "bn" ? "ক্যাটাগরি" : "Categories"} />
      <DuaContainer ns={true}>
        <SectionCard text={selectedSection} />
        {sameIDDuasGrouped && sameIDDuasGrouped?.map((item) => <DuaCard dua={item} />)}
      </DuaContainer>
    </Master>
  );
};

export default DuaDetails;
