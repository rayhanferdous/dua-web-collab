const DuaList = ({ title, time, play }) => {
  return (
    <div className=" mt-4.5 ">
      <div className="bg-devider h-[1px] dark:bg-[#294050]" />
      <div className="flex flex-row justify-between items-center mt-4.5">
        <div className=" flex flex-row mr-2">
          {play && <img src="/assets/mediaplayer/playgreen.svg" className="accent-primary mr-2" alt="" />}
          <p className={`${play ? "" : "text-title "} text-sm `}>{title}</p>
        </div>
        <div className={`${play ? "justify-between w-52 flex flex-row" : ""} items-center xs:hidden`}>
          {play && (
            <div className=" outline-primary flex items-center justify-center w-20 outline outline-1 p-1.5">
              <p className="text-ms  ">Read</p>
            </div>
          )}
          <p className="text-sm text-mute-grey ">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default DuaList;
