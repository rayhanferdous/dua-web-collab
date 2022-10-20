import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { useRouter } from "next/router";

function Master({ children, ns, title, subTitle }) {
  
  const router = useRouter();

  return (
    <div
      className={`${router.pathname === "/" && "mbl-scrl-home"} xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 3xl:p-10 3xl:pb-0`}>
      <div
        className={`grid gap-6 overflow-hidden xs:gap-0 sm:gap-0 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr]  ${
          ns
            ? "xl:grid-cols-[105px,405px,1fr] 2xl:grid-cols-[105px,405px,1fr,270px] 3xl:grid-cols-[105px,405px,1fr,300px]"
            : `${
                router.pathname === "/ruqyah/video/details"
                  ? "xl:grid-cols-[237px,1fr] 2xl:grid-cols-[220px,1fr,1fr] 3xl:grid-cols-[280px,1fr,1fr]"
                  : "xl:grid-cols-[237px,1fr,1fr,1fr] 2xl:grid-cols-[270px,1fr,1fr,270px] 3xl:grid-cols-[280px,1fr,1fr,312px]"
              }`
        }`}>
        <div className="row-span-full hidden xl:block 2xl:block 3xl:block">
          <LeftBar ns={ns} />
        </div>
        <div className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 3xl:col-start-2 3xl:col-span-full">
          <Header title={title} subTitle={subTitle} />

        </div>
        <div
          className={`${
            ns
              ? `${
                  router.pathname === "/ruqyah/video" || router.pathname === "/ruqyah/video/details"
                    ? "xl:grid-cols-[405px,1fr] xl:gap-x-6 2xl:col-span-3 2xl:grid-cols-[405px,1fr] 2xl:gap-x-6 3xl:col-span-3 3xl:grid-cols-[405px,1fr] 3xl:gap-x-6"
                    : "xl:grid-cols-[405px,1fr] xl:col-span-2 xl:gap-x-6 2xl:col-span-2 2xl:grid-cols-[405px,1fr] 2xl:gap-x-6 3xl:col-span-2 3xl:grid-cols-[405px,1fr] 3xl:gap-x-6"
                }`
              : `${
                  router.pathname === "/ruqyah/video" || router.pathname === "/ruqyah/video/details"
                    ? "xs:w-100px sm:w-11/12 md:w-[calc(100vw_-_100px)] md:mx-auto lg:w-[calc(100vw_-_100px)] lg:mx-auto xl:col-span-1 2xl:col-span-2 3xl:col-span-2 3xl:col-start-2"
                    : "xs:w-100px sm:w-11/12 md:w-[calc(100vw_-_100px)] md:mx-auto lg:w-[calc(100vw_-_100px)] lg:mx-auto xl:col-span-3 2xl:col-span-2 3xl:col-span-2 3xl:col-start-2"
                }`
          } grid xs:w-11/12 xs:mx-auto sm:w-11/12 sm:mx-auto md:w-11/12 md:mx-auto lg:w-11/12 lg:mx-auto`}>
          {children}
        </div>

        <div
          className={`${
            router.pathname === "/ruqyah/video" || router.pathname === "/ruqyah/video/details"
              ? "hidden"
              : "hidden 2xl:block 3xl:block 3xl:col-start-4"
          }`}>
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default Master;
