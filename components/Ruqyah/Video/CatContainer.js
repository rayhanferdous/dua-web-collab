import SearchIcon from "../../../../assets/searchIcon";
import CatList from "./CategoryList/CatList";
import { useState } from "react";
import SearchBox from "../../Widget/SearchBox";
const CatContainer = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  return (
    <div
      className="fixed left-[9%] w-[21%] h-100 bg-red-100 rounded-2lg 
sm:hidden dark:bg-[#223449]">
      <div className="rounded-t-2lg  justify-center items-center h-14 flex flex-row px-5">
        {search && <img onClick={handleSearch} src="/assets/leftarrow.svg" alt="" />}
        <p className="text-sm text-black w-50 mx-auto"> Ruqyah Videos</p>
        <button onClick={handleSearch}>
          <SearchIcon height="22" color="stroke-white" />
        </button>
      </div>
      <div className="mt-6 home-cat scrl-cat">
        {search && (
          <div className="mr-6 ml-2 mt-5">
            <SearchBox hint="Search categories" />
            <p className=" text-sm mt-4 text-start">Search Results:</p>
          </div>
        )}

        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
        <CatList catName="Dua’s Importance" subCat="7" DuaC="21" />
      </div>
    </div>
  );
};

export default CatContainer;
