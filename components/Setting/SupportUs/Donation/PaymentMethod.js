import React, { useState } from "react";

function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaypal = (value) => {
    setPaymentMethod(value);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 h-fit mt-2.5 w-2/3 mx-auto xs:grid-cols-1">
        <div
          onClick={() => handlePaypal("paypal")}
          className={`${
            paymentMethod === "paypal" ? "outline-none ring-[1.2px] ring-[#1FA471]" : ""
          } flex flex-col justify-center items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full min-h-fit py-6 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471]  dark:border-none`}>
          <img className="dark:hidden" src="/assets/supportus/paypal.png" alt="" />
          <img className="hidden dark:block" src="/assets/supportus/paypal-light.svg" alt="" />
          <p className="font-Inter font-medium text-[15px] leading-[18px] mt-6 xs:hidden ">Paypal</p>
        </div>
        <div
          onClick={() => handlePaypal("visa")}
          className={`${
            paymentMethod === "visa" ? "outline-none ring-[1.2px] ring-[#1FA471]" : ""
          } flex flex-col justify-center items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full min-h-fit py-6 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471]  dark:border-none`}>
          <img src="/assets/supportus/visa.png" alt="" />
          <p className="font-Inter font-medium text-[15px] leading-[18px] mt-6 xs:hidden">Visa</p>
        </div>
      </div>
      <div
        className={`${
          paymentMethod === "paypal" ? "" : "hidden"
        } bg-red-100 shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)]w-full h-fit pb-6 flex flex-col items-center mt-6 px-6 `}>
        <div className="flex flex-col items-center w-full">
          <p className="font-Inter font-medium text-[15px] leading-5 mt-6  mb-5">Our Paypal Address</p>

          <button className="bg-[#1FA471] flex items-center h-12 px-4 py-3 ">
            <img src="/assets/others/donation/paypal-icon.svg" alt="" />
            <p className="font-Inter font-medium text-black ml-2 xs:text-xs">Paypal Fundriser Page Link</p>
          </button>
        </div>
      </div>
      <div className={`${paymentMethod === "visa" ? "" : "hidden"}`}>
        <div>
          <div className="flex justify-center mt-10">
            <p className="relative font-medium text-base leading-6 text-[#404040] ">Choose Payment Method</p>
          </div>
          <hr className="opacity-80 my-5" />
          <p>DonorBox form will be placed here</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
