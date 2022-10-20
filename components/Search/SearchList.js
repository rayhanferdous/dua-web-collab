import DuaCard from "./DuaCard";
import { useSelector } from "react-redux";
import DetailsCard from "../Memorize/Details/DetailsCard";

const SearchList = () => {
  const searchDua = useSelector((state) => state.duaSearch.data);
  return (
    <div className="flex flex-col h-full xs:pb-40">
      {searchDua?.result?.map((item) => (
        <DuaCard dua={item} />
      ))}
    </div>
  );
};

export default SearchList;
