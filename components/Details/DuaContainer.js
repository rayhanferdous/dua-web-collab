import { useState } from "react";
import Icons from "../../assets/optionIcon";
import CatDrawer from "../Layout/Component/Drawer/CatDrawer";
import CatContainer from "./CatContainer";

const DuaContainer = ({ ruqyah, ns, children }) => {
  const [isSetting, setIsSetting] = useState(false);
  return (
    <>
      <div
        className={`w-full scrl h-[calc(100vh_-_100px)]
        xs:h-[calc(100vh_-_110px)] xs:pb-5
        sm:h-[calc(100vh_-_110px)] sm:pb-6
        md:h-[calc(100vh_-_110px)] md:pb-6 md:pt-24
        lg:pt-12 lg:h-[calc(100vh_-_100px)] lg:pb-6
        xl:h-[calc(100vh_-_90px)] xl:pb-8
        2xl:h-[calc(100vh_-_90px)] 2xl:pb-8
        3xl:h-[calc(100vh_-_90px)] 3xl:pb-8
        ${!ruqyah ? "" : ""}
        ${ns ? "col-start-2" : ""}
        `}>
        <div
          className="pb-6
          xl:hidden
          2xl:hidden
          3xl:hidden">
          <div className="flex justify-between items-center">
            <p className="font-inter font-semibold text-lg leading-5 text-title">
              Category: <span className="font-inter font-medium text-lg leading-5 text-title">Dynamic Value</span>
            </p>
            <div onClick={()=> setIsSetting(!isSetting)} className="flex items-center cursor-pointer">
              <p className="font-inter font-medium text-sm leading-4 text-mute-grey-200 mr-2.5">All Category</p>
              <Icons height="22px" />
            </div>
          </div>
          <CatDrawer sidebar={true} isOpen={isSetting} setIsOpen={setIsSetting}>
            <CatContainer title={'Categories'} hidden="" />
          </CatDrawer>
        </div>

        <>{children}</>
      </div>
    </>
  );
};

export default DuaContainer;
