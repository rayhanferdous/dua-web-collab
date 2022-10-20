import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const subject = [
  { name: "Select Type" },
  { name: "Feature Request" },
  { name: "Bug Report" },
  { name: "Pertnership/Collaboration" },
  { name: "Volunteering" },
  { name: "Other" },
];

export default function SelectOption({ title, type, placeholder }) {
  const [selected, setSelected] = useState(subject[0]);

  return (
    <div className="mb-3">
      <div className="block font-inter font-medium text-base text-title mb-4 capitalize xs:text-sm  dark:text-[#fff9]">
        {title} <span className="font-inter font-medium text-base text-[#FF3F3F]">*</span>
      </div>
      <div className="flex flex-col justify-between items-center gap-5">
        <div className="w-full xs:mb-3">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button
                className={`relative w-full cursor-default bg-red-100 text-left focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:ring-1 focus:ring-   px-6 py-[1.125rem] border border-solid  xs:py-3  dark:border-none`}>
                <span className={`${selected.name === "Select Type" ? "font-inter font-normal text-sm text-title opacity-30" : ""}  xs:text-sm`}>
                  {selected.name === "Pertnership/Collaboration" ? "Pertnership/Coll..." : selected.name}
                </span>
                <img className="absolute top-6 right-6 xs:top-5" src="/assets/others/dropdown.svg" alt="" />
              </Listbox.Button>
              <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto  bg-red-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                  {subject.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-6 pr-4 ${active ? "bg-[#ddffec] text-black" : "text-gray-900"}`
                      }
                      value={person}>
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{person.name}</span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="w-full">
          <input
            className="bg-red-100 w-full 2 px-6 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-   xs:py-3  dark:border-none dark:placeholder:text-[#DEDEDE]"
            type={type}
            name={title}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}
