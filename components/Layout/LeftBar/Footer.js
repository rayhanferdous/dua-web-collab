import SupportSvg from "../../../assets/supportSvg";
import AndroidSvg from "../../../assets/androidSvg";
import IOSSvg from "../../../assets/iOSSvg";
import Link from "next/link";

const Footer = ({ ns = false }) => {
  return (
    <div>
      <div className={`${ns ? "pt-6" : "pt-6"} py-4 `}>
        <Link href={"/support"}>
          <button className={`${ns ? "w-13" : "w-full "} h-13  drop-shadow-  lg:mr-4 text-black text-sm`}>
            <div className="flex justify-center items-center">
              <p className={`${ns ? "hidden" : "mr-2"}`}>I want To Support</p> <SupportSvg />
            </div>
          </button>
        </Link>
      </div>
      <div>
        <p className={`${ns ? "w-14 ml-1" : ""} text-center text-mute-grey text-xs `}>Download Apps:</p>
        <div className={`${ns ? "flex flex-col gap-y-4" : "flex flex-row gap-x-4 "} items-center justify-center mt-3 mb-7`}>
          <a href="https://play.google.com/store/apps/details?id=com.ihadis.dua" target={"_blank"} rel="noreferrer">
            <AndroidSvg />
          </a>
          <a href="https://apps.apple.com/us/app/dua-ruqyah/id1568942398" target={"_blank"} rel="noreferrer">
            <IOSSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
