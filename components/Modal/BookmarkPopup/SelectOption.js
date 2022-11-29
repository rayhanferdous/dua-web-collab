import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function SelectOption({ selectedPlan, setSelectedPlan }) {
  const plans = useSelector(state => state.memorizePlans.plans);
  const [selected, setSelected] = useState(plans ? plans[0] : { id: 0, name: "Favorites", targetDays: 5, createdAt: new Date().toLocaleDateString(), duas: [] });

  useEffect(() => {
    if (selectedPlan)
      setSelectedPlan(selected)
  }, [selected])

  return (
    <div className="mb-3">
      <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default bg-red-100 text-left focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:ring-1 focus:ring- px-6 py-[1.125rem] border border-solid   dark:border-none dark:focus:ring-1 dark:focus:ring-">
              <span className="block truncate">{selected.name}</span>
              <img className="absolute top-6 right-6" src="/assets/others/dropdown.svg" alt="" />
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="z-10 absolute text-left mt-1 max-h-60 w-full overflow-auto  bg-red-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {plans && plans.map((plan, planIdx) => (
                  <Listbox.Option
                    key={planIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-6 pr-4 ${active ? "bg-[#ddffec] text-black" : "text-gray-900"}`
                    }
                    value={plan}>
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{plan.name}</span>
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
  );
}
