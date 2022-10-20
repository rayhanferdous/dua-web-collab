import Master from "../components/Layout/Master";
import Rodal from "rodal";
import DuaPopup from "../components/Modal/DuaPopup/DuaPopup";
import "rodal/lib/rodal.css";
import React, { useState } from "react";
import NumCard from "../components/Utils/NumCard";

const AllDua = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Master title={"All Dua"}>
      <div
        className="animate-fade-in-up scrl h-[calc(100vh_-_100px)]
      xs:pb-16 sm:pb-8 md:pb-4 md:pt-20 lg:pt-20 lg:pb-6 xl:pb-16 2xl:pb-16 3xl:pb-16
      ">
        <div>
          <button
            type="button"
            onClick={() => setModalShow(true)}
            className="text-black bg-blue-400 font-medium leading-tight uppercase  transition duration-150 ease-in-out  h-11 w-11   text-lg flex justify-center items-center xs:mt-0 md:mt-5 lg:mt-5">
            A
          </button>
          <div
            className="grid grid-cols-3 my-8 gap-x-7 gap-y-4 xs:grid-cols-1 xs:gap-y-3 xs:m-0 xs:mt-4  
        sm:grid-cols-1 
        sm:gap-x-4
        md:grid-cols-2
        md:gap-x-4
        lg:grid-cols-2
        lg:gap-x-4">
            <NumCard link={"/#"} title="A dhikir which is light on tongue, a dhikir which is light on tongue," text="A" />
            <NumCard link={"/#"} title="About Lailatul Qadr" text="A" />
            <NumCard link={"/#"} title="About meeting #1" text="A" />
            <NumCard link={"/#"} title="A dua of the treasures of Paradise" text="A" />
            <NumCard link={"/#"} title="A very beautiful dua or Dhikr" text="A" />
            <NumCard link={"/#"} title="About Lailatul Qadr" text="A" />
          </div>
        </div>
        <div>
          <p className=" h-11 w-11 bg-blue-400 text-black text-lg flex justify-center items-center mt-5 ">B</p>
          <div
            className="grid grid-cols-3 my-8 gap-x-7 gap-y-4 xs:grid-cols-1 xs:gap-y-3 xs:m-0 xs:mt-4 
        sm:grid-cols-1
        sm:gap-x-4
        md:grid-cols-2
        md:gap-x-4
        lg:grid-cols-2
        lg:gap-x-4">
            <NumCard link={"/#"} title="A dhikir which is light on tongue, a dhikir which is light on tongue," text="B" />
            <NumCard link={"/#"} title="About Lailatul Qadr" text="B" />
            <NumCard link={"/#"} title="About meeting #1" text="B" />
            <NumCard link={"/#"} title="A dua of the treasures of Paradise" text="B" />
            <NumCard link={"/#"} title="A very beautiful dua or Dhikr" text="B" />
            <NumCard link={"/#"} title="About Lailatul Qadr" text="B" />
          </div>
        </div>

        <Rodal
          showCloseButton={false}
          width={700}
          height={500}
          customStyles={{ backgroundColor: "transparent", borderRadious: "none", boxShadow: "none" }}
          visible={modalShow}
          onClose={() => setModalShow(false)}>
          <DuaPopup onClose={() => setModalShow(false)} />
        </Rodal>
      </div>
    </Master>
  );
};

export default AllDua;
