import Link from "next/link";
import { useState } from "react";
import Drawer from "../../Layout/Component/Drawer/Drawer";
import RightBar from "../../Layout/RightBar";
import ProfileDropDown from "./ProfilePopover";

const LoginButton = (props) => {
  const [isSetting, setIsSetting] = useState(false);
  return (
    <div className="flex flex-row items-center justify-end col-start-2">
      <div className=" xl:hidden">
        <Link href="/login">
          <p className="text-title text-sm mr-4 ">Log In Account</p>
        </Link>
      </div>

      <ProfileDropDown />
      <img onClick={() => setIsSetting(true)} src="assets/mobile/home/settings.svg" className="hidden xl:block xl:mr-3" alt="" />
      <Drawer sidebar={true} isOpen={isSetting} setIsOpen={setIsSetting}>
        <RightBar />
      </Drawer>
    </div>
  );
};

export default LoginButton;
