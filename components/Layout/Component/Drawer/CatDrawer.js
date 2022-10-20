import React from "react";

function CatDrawer({ children, isOpen, setIsOpen, sidebar }) {
  return (
    <main
      className={
        "fixed overflow-hidden z-20 md:z-40 lg:z-40 md:my-auto bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500" + (sidebar ? "translate-x-0" : "-translate-x-0")
          : (sidebar ? "translate-x-full" : "-translate-x-full") + " transition-all delay-200 opacity-0")
      }>
      <section
        className={
          (sidebar
            ? "right-0 xs:bottom-0 sm:bottom-0 xs:w-full xs:h-[80%] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] rounded-l-3xl"
            : "pl-6 pt-6 left-0 right-0 xs:bottom-0 xs:w-full sm:w-[340px] md:w-[340px] rounded-r-3xl") +
          "  absolute bg-red-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen
            ? sidebar
              ? "translate-x-0 xs :translate-y-0"
              : "-translate-x-0 xs:-translate-y-0"
            : sidebar
            ? "translate-x-full xs:translate-y-full"
            : "-translate-x-full xs:-translate-y-full")
        }>
        <article className="relative w-full flex flex-col overflow-none p-8 dark:bg-[#223449]">{children}</article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}></section>
    </main>
  );
}

export default CatDrawer;
