import { useTheme } from "next-themes";

const Botombar = () => {
  const { theme } = useTheme();
  return (
    <div className="">
      <hr className="bg-hr dark:hidden" />
      <div className="flex flex-row justify-between px-6">
        <div className=" py-4">
          <img src="/assets/audiobtn.svg" alt="" />
        </div>
        <div className="flex flex-row py-6 gap-x-8">
        {theme === "dark" ? (
          <img src="/assets/others/dark/copy.svg" alt="" />
        ) : (
          <img src="/assets/others/copy.svg" alt="" />
        )}
        {theme === "dark" ? (
          <img src="/assets/others/dark/direct.svg" alt="" />
        ) : (
          <img src="/assets/others/direct.svg" alt="" />
        )}
        {theme === "dark" ? (
          <img src="/assets/others/dark/share.svg" alt="" />
        ) : (
          <img src="/assets/others/share.svg" alt="" />
        )}
        {theme === "dark" ? (
          <img src="/assets/others/dark/report.svg" alt="" />
        ) : (
          <img src="/assets/others/report.svg" alt="" />
        )}
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Botombar;
