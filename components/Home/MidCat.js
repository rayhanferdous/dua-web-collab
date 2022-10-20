import MidCard from "./Component/MidCard";

const MidCat = () => {
  return (
    <div
      className="xs:px-4 xs:absolute
    xs:top-60
    xs:left-0
    xs:w-full
    sm:px-4 
    sm:absolute
    sm:left-0
    sm:top-60
    sm:w-full">
      <div
        className="grid my-8 gap-x-8 gap-y-4
      xs:dark:bg-[#223449] 
      xs:py-6
      xs:bg-red-100
      xs:
      xs:grid-cols-3
      xs:place-items-center
      xs:gap-4
      sm:py-6
      sm:dark:bg-[#223449] 
      sm:bg-red-100
      sm:
      sm:grid-cols-3
      sm:place-items-center
      sm:gap-4      
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      2xl:grid-cols-3
      3xl:grid-cols-3
      ">
        <MidCard path={"/dua-audio"} text={"Last Read"} midCard={"xs:flex-col xs:gap-3 sm:flex-col sm:gap-3"} />
        <MidCard path={"/blog"} text={"Blog"} midCard={"xs:flex-col xs:gap-3 sm:flex-col sm:gap-3"} />
        <MidCard path={"/ruqyah"} text={"Ruqyah"} midCard={"xs:flex-col xs:gap-3 sm:flex-col sm:gap-3"} />
        <MidCard path={"/#"} text={""} />
        <MidCard path={"/#"} text={""}  />
        <MidCard path={"/dua-audio"} text={"Dua Audio"} midCard={"xs:flex-col xs:gap-3 sm:flex-col sm:gap-3"} />
      </div>
    </div>
  );
};

export default MidCat;
