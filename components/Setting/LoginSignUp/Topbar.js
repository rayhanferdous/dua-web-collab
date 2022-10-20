import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

const Topbar = () => {
  const { theme } = useTheme();
  const navigate = useRouter();
  return (
    <div className=" p-8 flex justify-between items-center">
      <div></div>
      <button
        onClick={() => navigate.back()}
        className="flex justify-center items-center w-24 h-9 border border-devider  bg-red-100 font-inter font-medium text-base text-title dark:bg-[#223449] dark:border-none ">
        {theme === "dark" ? (
          <img className="mr-4" src="/assets/login/dark/blackBackBtn.svg" alt="" />
        ) : (
          <img className="mr-4" src="/assets/login/blackBackBtn.svg" alt="" />
        )}
        Back
      </button>
    </div>
  );
};

export default Topbar;
