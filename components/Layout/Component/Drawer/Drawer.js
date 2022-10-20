import React from "react";

export default function Drawer({ children, isOpen, setIsOpen, sidebar }) {
  return (
    <main
      className={
        "2xl:hidden 3xl:block fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500" + (sidebar ? "translate-x-0" : "-translate-x-0")
          : (sidebar ? "translate-x-full" : "-translate-x-full") + " transition-all delay-200 opacity-0")
      }>
      <section
        className={
          (sidebar
            ? "right-0 xs:w-[280px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] rounded-l-3xl"
            : "pl-6 pt-6 left-0 xs:w-[280px] sm:w-[340px] md:w-[340px] rounded-r-3xl") +
          "  absolute bg-red-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? (sidebar ? "translate-x-0" : "-translate-x-0") : sidebar ? "translate-x-full" : "-translate-x-full")
        }>
        <article className="relative w-full pb-10 flex flex-col overflow-none h-full dark:bg-[#223449]">
          {sidebar ? (
            ""
          ) : (
            <header className="flex items-center mb-6 relative">
              <img className="mr-2.5" src="/assets/dua-logo.svg" alt="" />
              <div className="">
                <p className="font-poppins font-medium text-xl leading-5">Dua & Ruqyah</p>
                <p className="font-poppins font-normal text-xs leading-5 text-mute-grey">App version: 1.02</p>
              </div>
            </header>
          )}
          {!sidebar && <hr className="mb-6" />}
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}></section>
    </main>
  );
}
