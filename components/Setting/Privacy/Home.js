import React, { useState } from "react";
import PageTitle from "./PageTitle";
import Tab from "./Tab";
import AppPrivacy from "./AppPrivacy";
import CollectionOfInfo from "./CollectionOfInfo";
import PersonalData from "./PersonalData";
import DeviceAccess from "./DeviceAccess";
import PushNotis from "./PushNotis";
import UseOfInfo from "./UseOfInfo";
import Disclosure from "./Disclosure";

const PrivacyTab = () => {
  const [active, setDropdown] = useState(1);

  function handleActive(id) {
    if (active !== id) {
      setDropdown(id);
    }
  }

  return (
    <div className="bg-red-100  p-5 mb-2 dark:bg-[#223449]">
      <PageTitle />

      <div className="flex sm:flex-col xs:flex-col md:flex-col flex-row mt-10 gap-x-8 xs:mb-0 ">
        <div className="flex flex-col w-[25%] xs:w-full sm:w-full md:w-full">
          <Tab id={active} active={active === 1 ? true : false} onClick={() => handleActive(1)} title={"App Privacy Policy"} child={<AppPrivacy />} />
          <Tab
            id={active}
            active={active === 2 ? true : false}
            onClick={() => handleActive(2)}
            title={"Collection of Your Info."}
            child={<CollectionOfInfo />}
          />
          <Tab id={active} active={active === 3 ? true : false} onClick={() => handleActive(3)} title={"Personal Data"} child={<PersonalData />} />
          <Tab id={active} active={active === 4 ? true : false} onClick={() => handleActive(4)} title={"Device Access"} child={<DeviceAccess />} />
          <Tab id={active} active={active === 5 ? true : false} onClick={() => handleActive(5)} title={"Push Notifications"} child={<PushNotis />} />
          <Tab id={active} active={active === 6 ? true : false} onClick={() => handleActive(6)} title={"Use of Your Info."} child={<UseOfInfo />} />
          <Tab
            id={active}
            active={active === 7 ? true : false}
            onClick={() => handleActive(7)}
            title={"Disclosure of Your Info."}
            child={<Disclosure />}
          />
        </div>
        <div className="w-[80%] px-10 text-justify font-inter font-normal text-lg leading-6 hidden lg:block xl:block 2xl:block 3xl:block">
          {active === 1 && <AppPrivacy />}
          {active === 2 && <CollectionOfInfo />}
          {active === 3 && <PersonalData />}
          {active === 4 && <DeviceAccess />}
          {active === 5 && <PushNotis />}
          {active === 6 && <UseOfInfo />}
          {active === 7 && <Disclosure />}
        </div>
      </div>
    </div>
  );
};

export default PrivacyTab;
