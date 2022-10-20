const CatList = (props) => {
  return (
    <div className="group">
      <a href="/#">
        <div className="bg-red-100 flex justify-between items-center mx-3 dark:bg-transparent">
          <div className="flex flex-row justify-between items-center w-full h-18 px-3  bg-icon-2bg ">
            <div className="flex flex-row items-center">
              <div className=" flex  items-center h-14 w-14  dark:bg-[#223449]"></div>
              <div className="text-left ml-4">
                <p className="text-title text-sm  dark:">{props.catName}</p>
                <p className="text-mute-grey text-xs mt-1 ">Total Videos: {props.subCat}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CatList;
