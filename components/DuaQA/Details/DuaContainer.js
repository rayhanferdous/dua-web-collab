import DuaCard from "./DuaCard";
import Icons from "../../../../assets/optionIcon";

const DuaContainer = ({ ruqyah }) => {
  return (
    <>
      <div
        className={`w-full lg-max:left-0 ${
          !ruqyah ? "lg:w-full xl:w-[65%] xl:left-[33.5%] 2xl:w-[49%] 2xl:left-[30.5%] 3xl:w-[49.5%]" : "xl-min:w-[68%] "
        } mt-6 xl-min:mt-top home-details scrl xs:mb-7  
        sm:left-0 
        sm:w-full`}>
        <div
          className="pb-6
          xs:hidden
          sm:block
          lg:hidden
          xl: hidden">
          <div className="flex justify-between items-center">
            <p className="font-inter font-semibold text-lg leading-5 text-title">
              Category: <span className="font-inter font-medium text-lg leading-5 text-title">Dynamic Value</span>
            </p>
            <div className="flex items-center">
              <p className="font-inter font-medium text-sm leading-4 text-mute-grey-200 mr-2.5">All Category</p>
              <Icons height="22px" />
            </div>
          </div>
        </div>

        <>
          <DuaCard />
        </>
      </div>
    </>
  );
};

export default DuaContainer;
