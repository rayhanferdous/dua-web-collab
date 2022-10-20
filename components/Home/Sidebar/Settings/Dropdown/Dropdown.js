import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const uthmaniScript = [
  { name: "Me Quran" },
  { name: "Amiri Quran" },
  { name: "Seheherazade" },
  { name: "Al Mushaf" },
  { name: "Al Quran" },
  { name: "Lateef" },
  { name: "KFGQ Harf" },
  { name: "PDMS Islam" },
  { name: "PDMS Saleem" },
];
const indopakScript = [{ name: "Nurrehuda" }, { name: "Nooredira" }, { name: "Noorehidayat" }];

export default function Dropdown({ type }) {
  const script = [{ name: "Uthmani" }, { name: "Indopak" }];
  const [selected, setSelected] = useState(script[0]);

  return (
    <div className="">
      <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button
              className="flex items-center relative w-[190%] h-10 mt-2 px-4 py-4 cursor-default bg-red-100 text-left
              focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
              focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 focus:outline-none focus:ring-1
              focus:ring-   border border-solid border-[e2e2e2] 
              xs:min-w-[115%]
              sm:text-sm
              sm:w-48
              dark:bg-[#223449]
              dark:border-none
              ">
              <span className="flex justify-between items-center w-full truncate ">
                <p>{selected.name} </p>
                <img className="" src="/assets/others/dropdown.svg" alt="" />
              </span>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options
                className="z-10 absolute text-left mt-1 max-h-60 w-full overflow-auto  bg-red-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
                sm:text-sm  "
                onChange={selectedScript(selected.name)}>
                {type === "script" &&
                  script.map((menu, menuIdx) => (
                    <Listbox.Option
                      key={menuIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-6 pr-4  ${active ? "bg-[#ddffec] text-black" : "text-gray-900 "}`
                      }
                      value={menu}>
                      {({ selected }) => (
                        <>
                          <span className={`block truncate  ${selected ? "font-medium" : "font-normal"}`}>{menu.name}</span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                {type === "font" && selectedScript(selected.name)}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}

function selectedScript(name) {
  if (name === "Uthmani") {
    return uthmaniScript.map((menu, menuIdx) => (
      <Listbox.Option
        key={menuIdx}
        className={({ active }) => `relative cursor-default select-none py-2 pl-6 pr-4 ${active ? "bg-[#ddffec] text-black" : "text-gray-900"}`}
        value={menu}>
        {({ selected }) => (
          <>
            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{menu.name}</span>
          </>
        )}
      </Listbox.Option>
    ));
  } else {
    return indopakScript.map((menu, menuIdx) => (
      <Listbox.Option
        key={menuIdx}
        className={({ active }) => `relative cursor-default select-none py-2 pl-6 pr-4 ${active ? "bg-[#ddffec] text-black" : "text-gray-900"}`}
        value={menu}>
        {({ selected }) => (
          <>
            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{menu.name}</span>
          </>
        )}
      </Listbox.Option>
    ));
  }
}
