import { useEffect } from "react";
import { useSelector } from "react-redux";
import DuaText from "../Ui/DuaText";

export default function DuaList(props) {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {}, [language]);

  const selectedDua = useSelector((state) => state.subCat.subCatId);
  let dua = selectedDua[`${props.subCatId}`]?.result?.filter((item) => item.dua_name_en != null);

  return (
    <div className="mt-2 cursor-pointer">
      {selectedDua &&
        dua?.map((item) => <DuaText catId={item.cat_id} subCatId={item.subcat_id} duaId={item.dua_id} name={eval(`item.dua_name_${language}`)} />)}
    </div>
  );
}
