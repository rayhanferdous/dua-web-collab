import SearchIcon from "../../assets/searchIcon";
import CatList from "./CategoryList/CatList";
import { useState } from "react";
import SearchBox from "../Widget/SearchBox";

import { useSelector } from "react-redux";

const CatContainer = ({ ns, title, hidden = "xs:hidden sm:hidden md:hidden lg:hidden" }) => {
  const [search, setSearch] = useState(false);
  const data = useSelector((state) => state.duaCat.data);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  return (
    <div className={`h-[85.5vh] overflow-hidden bg-red-100 rounded-2lg  dark:bg-[#223449] ${hidden} xs:h-[100vh] sm:h-[50vh]`}>
      <div className="rounded-t-2lg  justify-center items-center h-14 flex flex-row px-5">
        {search && <img onClick={handleSearch} src="/assets/leftarrow.svg" alt="" />}
        <p className="text-sm text-black w-50 mx-auto">{title}</p>
        <button onClick={handleSearch}>
          <SearchIcon height="22" color="stroke-white" />
        </button>
      </div>
      <div className="mt-6 scrl h-[calc(100vh_-_200px)] pb-8 xs:h-[calc(100vh_-_40vh)] sm:h-[calc(100vh_-_40vh)]">
        {search && (
          <div className="mx-3 mt-5">
            <SearchBox hint={`${"Search " + title}`} />
            <p className=" text-sm mt-4 text-start">Search Results:</p>
          </div>
        )}
        {data &&
          data?.result?.map((item) => (
            <CatList
              isOpen={item.cat_id == 1 ? true : false}
              catId={item.cat_id}
              catName={item.cat_name_en}
              subCat={item.no_of_subcat}
              DuaC={item.no_of_dua}
            />
          ))}
      </div>
    </div>
  );
};

export default CatContainer;
