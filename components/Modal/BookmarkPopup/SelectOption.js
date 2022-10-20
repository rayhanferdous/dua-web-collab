import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const subject = [
  { name: "Feature Request" },
  { name: "Bug Report" },
  { name: "Pertnership/Collaboration" },
  { name: "Volunteering" },
  { name: "Other" },
];

export default function SelectOption({ title }) {
  const [selected, setSelected] = useState(subject[0]);

  return (
    <div className="mb-3">
      <div className="block text-left font-inter font-medium text-base text-title mb-2 capitalize ">{title}</div>
      <div className="">
        <div className="w-full">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default bg-red-100 text-left focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:ring-1 focus:ring- px-6 py-[1.125rem] border border-solid   dark:border-none dark:focus:ring-1 dark:focus:ring-">
                <span className="block truncate">{selected.name}</span>
                <img className="absolute top-6 right-6" src="/assets/others/dropdown.svg" alt="" />
              </Listbox.Button>
              <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="z-10 absolute text-left mt-1 max-h-60 w-full overflow-auto  bg-red-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
      </div>
    </div>
  );
}
