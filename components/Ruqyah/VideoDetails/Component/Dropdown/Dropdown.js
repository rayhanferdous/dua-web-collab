import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const videoQuality = [{ name: "1080p" }, { name: "720p" }, { name: "360p" }, { name: "240p" }, { name: "144p" }, { name: "mp3" }];

export default function Dropdown() {
  const [selected, setSelected] = useState(videoQuality[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex items-center relative w-36 cursor-default text-left  px-4">
            <span className="flex justify-between items-center w-full truncate">
              <p className="font-inter font-medium text-base leading-4 text-[#4e4e4e] ">{selected.name} </p>
              <img className="" src="/assets/mediaplayer/angledown-.svg" alt="" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options
              className="z-10 absolute text-left max-h-60 w-full overflow-auto  bg-red-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
sm:text-sm  mt-[18%]  dark:shadow-[#a8a8a826]">
              {videoQuality.map((menu, menuIdx) => (
                <Listbox.Option
                  key={menuIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-6 pr-4 group  ${active ? "bg-[#ddffec] text-black" : "text-gray-900"}`
                  }
                  value={menu}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "font-medium dark:"
                            : "font-normal font-inter text-base leading-4 text-[#4e4e4e]  dark:text-black dark:font-medium"
                        }`}>
                        {menu.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
