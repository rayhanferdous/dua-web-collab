const TopBar = ({ duaName }) => {
  return (
    <div>
      <div className="flex flex-row  justify-start items-center ">
        <img src="/assets/duacard.svg" alt="" className="mr-3" />
        {/* DuaName */}
        <p className=" font-inter font-medium text-lg">
          {duaName}
          {/* 1. The servant is <span className="text-red-500">dependent</span> on his Lord #1{" "} */}
        </p>
      </div>
      <hr className="bg-hr mt-5 dark:hidden" />
    </div>
  );
};

export default TopBar;
