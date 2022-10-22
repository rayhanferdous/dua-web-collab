import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetSelectedSection } from "../../../dataStore/feature/SelectedSectionSlicer";
import SubCatText from "../ui/SubCatText";

const SubCatList = (props) => {
  const data = useSelector((state) => state.subCat.data);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(SetSelectedSection(eval(`data.result[0].subcat_name_${language}`)));
    }
  }, [language]);

  return (
    <div className="ml-12 border-l-2 border-dotted my-2 border-">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
        {data &&
          data?.result
            ?.filter((filterItem) => {
              return filterItem.cat_id === props.catId;
            })
            .map((item) => <SubCatText catId={item.cat_id} subCatId={item.subcat_id} text={eval(`item.subcat_name_${language}`)} />)}
      </div>
    </div>
  );
};
export default SubCatList;
