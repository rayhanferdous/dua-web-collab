import SearchIcon from "../../../../assets/searchIcon";
import CatList from "./CategoryList/CatList";
import { useEffect, useState } from "react";
import SearchBox from "../../Widget/SearchBox";
import { useSelector } from "react-redux";
import localStorageFnc from "../../../../dataStore/functions/localStorageFnc";

const CatContainer = () => {
  const loading = useSelector((state) => state.duaInfo.loading);
  const data = useSelector((state) => state.duaInfo.data);
  const [duaInfo, setDuaInfo] = useState([]);

  const [active, setActive] = useState(1);

  useEffect(() => {
    localStorageFnc(data, "duaInfo", setDuaInfo);
  }, [data]);

  const [search, setSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  return (
    <div
      className="ml-[8.8%] fixed w-[21%] h-100 bg-red-100 rounded-2lg 
sm:hidden dark:bg-[#223449]">
      <div className="rounded-t-2lg  justify-center items-center h-14 flex flex-row px-5">
        {search && <img onClick={handleSearch} src="/assets/leftarrow.svg" alt="" />}
        <p className="text-sm text-black w-50 mx-auto"> Dus Q&A</p>
        <button onClick={handleSearch}>
          <SearchIcon height="22" color="stroke-white" />
        </button>
      </div>
      <div className="mt-6 home-cat scrl-cat">
        {search && (
          <div className="mx-3 mt-5">
            <SearchBox hint="Search categories" />
            <p className=" text-sm my-4 text-start">Search Results:</p>
          </div>
        )}

        {duaInfo &&
          duaInfo?.result?.map((item) => <CatList active={active} onClick={() => setActive(item._id)} id={item._id} catName={item.info_topic} />)}
      </div>
    </div>
  );
};

export default CatContainer;
