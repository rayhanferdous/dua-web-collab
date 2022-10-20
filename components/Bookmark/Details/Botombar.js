import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import DeletePopup from "../../Modal/DeletePopup/DeletePopup";

const SingleBotombar = () => {
  const [modalShow, setModalShow] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="">
      <div class="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:"></div>
      <div className="flex flex-row justify-between px-6">
        <div className=" py-4">
          <img src="/assets/others/audiobtn.svg" alt="" />
        </div>
        <div className="flex flex-row py-6 gap-x-8">
          {theme === "dark" ? <img src="/assets/others/dark/copy.svg" alt="" /> : <img src="/assets/others/copy.svg" alt="" />}
          <button
            type="button"
            onClick={() => setModalShow(true)}
            className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out   text-lg">
            {theme === "dark" ? <img src="/assets/others/dark/deleteBtn.svg" alt="" /> : <img src="/assets/others/deleteBtn.svg" alt="" />}
          </button>
          {theme === "dark" ? <img src="/assets/others/dark/direct.svg" alt="" /> : <img src="/assets/others/direct.svg" alt="" />}
          {theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
        </div>
      </div>
      <Rodal
        showCloseButton={false}
        width={500}
        height={300}
        customStyles={{ backgroundColor: "transparent", borderRadious: "none", boxShadow: "none" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <DeletePopup onClose={() => setModalShow(false)} />
      </Rodal>
    </div>
  );
};

export default SingleBotombar;
