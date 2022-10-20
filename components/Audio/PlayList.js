import SearchBox from "../Widget/SearchBox";
import Devider from "../Widget/Devider";
import DuaList from "./DuaList";
const PlayList = () => {
  return (
    <div className="bg-red-100  p-6 pb-5 sm:rounded-3xl xs:rounded-2xl dark:bg-[#223449]">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="font-medium ">Playlist:</p>
        <div className="w-56 xs:w-48">
          <SearchBox hint="Search by Dua Name" style="placeholder:text-xs h-9" />
        </div>
      </div>
      {/* <div className="bg-devider h-[1px] mt-4" /> */}
      <DuaList title="1. Between the Yemeni corner and black stone [of Ka’bah]" play={true} time="3:30" />
      <DuaList title="2. Blessing After burying the bead person" time="3:30" />
      <DuaList title="3. A dua whis can be recited all the time" time="3:30" />
      <DuaList title="4. A dhikir which is light on tongue, Heavy on the balance" time="3:30" />
      <DuaList title="5. Blessing to seek refuge from epidemics and diseases" time="3:30" />
      <DuaList title="6. Blessing to seek refuge from epidemics and diseases" time="3:30" />
      <DuaList title="7. Blessing to seek refuge from epidemics and diseases" time="3:30" />
    </div>
  );
};

export default PlayList;
