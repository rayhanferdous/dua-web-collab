import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

const AppearanceSettings = () => {
  return (
    <div className="px-4 pb-1  animate-scale-down">
      <div className=" flex flex-row justify-between">
        <p className="mt-7 mb-4 text-title text-sm ">Night Mode</p>
        <div className="mt-7 mb-4">
          <SwitchButton />
        </div>
      </div>
    </div>
  );
};

export function SwitchButton() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme === "dark" ? true : false);

  return (
    <Switch
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "" : "bg-gray-300"}
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer  border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform  bg-red-100 shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}

export default AppearanceSettings;
