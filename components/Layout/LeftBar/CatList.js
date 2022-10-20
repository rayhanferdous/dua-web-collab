import Link from "next/link";
import CurrentRoute from "../../../functions/CurrentRoute";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function CatList({ path, text }) {
  const { theme } = useTheme();
  return (
    <Link href={path}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        className={`${text === "" ? "justify-center items-center" : " "} ${
          isActive(path) ? "dark:bg-[#314A66]" : ""
        } cursor-pointer my-2 flex flex-row w-auto  group`}>
        <div className={`${isActive(path) ? "" : ""} w-1  `}></div>
        <div className="p-2 flex flex-row items-center">
          <div className={`${text === "" ? "" : "mr-5"}   flex p-2  items-center h-10 w-10 justify-center`}></div>
          <h2 className={`${isActive(path) ? "" : "text-mute-grey-200 "} text-sm text-start    `}>{text}</h2>
        </div>
      </motion.div>
    </Link>
  );
}

export default CatList;

function imgSrc(path, theme) {
  if (theme !== "dark") {
    if (isActive("/") && path === "/") {
      return "/assets/nav/fill/home.svg";
    } else if (path === "/" && !isActive("/")) {
      return "/assets/nav/home.svg";
    } else if (isActive(path)) {
      return `/assets/nav/fill${path}.svg`;
    } else if (theme === "dark") {
      return `/assets/nav/dark${path}.svg`;
    } else {
      return `/assets/nav${path}.svg`;
    }
  } else {
    if (isActive("/") && path === "/") {
      return "/assets/nav/fill/home.svg";
    } else if (path === "/" && !isActive("/")) {
      return "/assets/nav/dark/home.svg";
    } else if (isActive(path)) {
      return `/assets/nav/fill${path}.svg`;
    } else if (theme === "dark") {
      return `/assets/nav/dark${path}.svg`;
    }
  }
}

function isActive(path) {
  if (CurrentRoute() === path || (CurrentRoute().includes(path) && path !== "/")) {
    return true;
  } else {
    return false;
  }
}
