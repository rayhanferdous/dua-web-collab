import Dropdown from "./Dropdown/Dropdown";

const DownloadOption = () => {
  return (
    <div>
      {/* Devider */}
      <div class="w-full h-[1px] my-6 bg-[#E2E2E2] dark:"></div>
      <div className="flex flex-row justify-between items-center xs:flex-col xs:gap-y-2">
        <p className="text-base font-medium text-title ">Download This Video:</p>
        <div className="flex flex-row">
          <div className=" rounded-tl-lg   h-12 w-28 text-black text-sm flex justify-center items-center">
            <p>Download</p>
          </div>
          <div className="rounded-br-lg rounded-tr-lg border border-1 border-devider  w-36 text-sm grid items-center justify-center text-title font-medium dark:border-">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOption;
