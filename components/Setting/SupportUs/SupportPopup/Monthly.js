import React from "react";
import InputCard from "./InputCard";

function Monthly() {
  const handlePayment = (name) => {
    let style = ["", "text-black", "font-Inter", "font-medium", "text-base", "leading-5", "transition", "duration-500", "ease-in-out"];
    let element = document.getElementsByName(name);
    let activeStyle = element[0].classList;

    if (activeStyle.contains("")) {
      for (let i = 0; i < style.length; i++) {
        activeStyle.remove(style[i]);
      }
    } else {
      for (let i = 0; i < style.length; i++) {
        activeStyle.toggle(style[i]);
      }
    }
  };
  return (
    <div className="mt-6 hidden" name="paymentMethodMonthly">
      <div className="mt-1 text-left  p-8">
        <InputCard title={"name"} type={"text"} placeholder={"Enter Name"} input={true} />
        <InputCard title={"Phone"} type={"text"} placeholder={"Enter Phone Number"} input={true} />
        <InputCard title={"Email (Optional)"} type={"email"} placeholder={"Enter Email"} input={true} />
        <InputCard title={"Amount"} type={"text"} placeholder={"Enter Anount"} input={true} />

        <div className="flex justify-end">
          <input
            className="w-[169px] h-12   font-Inter font-medium text-base text-black mb-6 hover:drop-shadow-[0_10px_14px_rgba(31,164,91,0.15)]"
            type="button"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}

export default Monthly;
