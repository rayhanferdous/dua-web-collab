import SubCatText from "../ui/SubCatText";
import { useSelector } from "react-redux";

const SubCatList = (props) => {
  const data = useSelector((state) => state.subCat.data);

  return (
    <div className="ml-12 border-l-2 border-dotted my-2 border-">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
        {data &&
          data?.result
            ?.filter((filterItem) => {
              return filterItem.cat_id === props.catId;
            })
            .map((item) => <SubCatText catId={item.cat_id} subCatId={item.subcat_id} text={item.subcat_name_en} />)}
      </div>
    </div>
  );
};
export default SubCatList;
