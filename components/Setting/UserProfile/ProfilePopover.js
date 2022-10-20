import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ProfileSvg from "../../../assets/profileSvg";
import { profileItems } from "./ProfileItems";
import { useTheme } from "next-themes";

export default function ProfileDropDown() {
  const { theme } = useTheme();
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center  px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
                sm:px-0
                `}>
              {theme === "dark" ? <ProfileSvg fill={"#ffffff"} /> : <ProfileSvg fill={"#868686"} />}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel
                className=" absolute left-[117%] z-10 w-80 -translate-y-5 max-w-sm -translate-x-full transform px-4 
                sm:px-0 lg:max-lg 
                sm:mt-7">
                <div className="flex flex-row justify-end mr-10 translate-y-3">
                  <img src="/assets/polygon.svg" alt="" />
                </div>
                <div className="overflow-hiddenshadow-lg ring-1 ring-black ring-opacity-5 ">
                  <div className="relative gap-8 bg-red-100 px-6 pt-8 pb-5 dark:bg-[#223449] ">
                    {profileItems.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className="-my-1 -mx-2 flex items-centertransition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-[#182C43] ">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center text-black 
                          sm:h-12 
                          sm:w-12">
                          {/* <item.icon aria-hidden="true" /> */}
                          <ProfileIcon name={item.icon} />
                        </div>
                        <div className="">
                          <p className="text-sm text-title ml-1 ">{item.name}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function ProfileIcon(props) {
  return <img src={`/assets/${props.name}.svg`} alt="" />;
}
