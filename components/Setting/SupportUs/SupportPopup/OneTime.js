import React from "react";

function OneTime() {
  function hideElement(name) {
    if (name === "bkash") {
      if (document.getElementsByName(name)[0].classList.contains("")) {
        document.getElementsByName("hadiyaOption")[0].classList.toggle("hidden");
      } else {
        document.getElementsByName("hadiyaOption")[0].classList.add("hidden");
      }
    } else {
      if (document.getElementsByName(name)[0].classList.contains("")) {
        document.getElementsByName("paymentMethodMonthly")[0].classList.toggle("hidden");
        document.getElementsByName("paymentMethodOnetime")[0].classList.add("hidden");
      } else {
        //document.getElementsByName("paymentMethodMonthly")[0].classList.toggle("hidden");
      }
    }
  }
  const handlePayment = (name) => {
    let style = ["", "text-black", "font-Inter", "font-medium", "text-base", "leading-5", "transition", "duration-500", "ease-in-out"];
    let element = document.getElementsByName(name)[0].classList;
    if (name === "bkash") {
      for (let i = 0; i < style.length; i++) {
        element.toggle(style[i]);
        document.getElementsByName("paypal")[0].classList.remove(style[i]);
      }
    } else {
      for (let i = 0; i < style.length; i++) {
        element.toggle(style[i]);
        document.getElementsByName("bkash")[0].classList.remove(style[i]);
      }
    }
    hideElement(name);
  };

  return (
    <div className="mt-6 hidden" name="paymentMethodOnetime">
      <p className="font-Inter font-medium text-base leading-5 text-title">Select Payment Method</p>
      <div className="flex justify-between mt-4 w-[95%]">
        <input
          onClick={(e) => handlePayment(e.target.name)}
          className="ml-4 w-52 h-14 border border- border-solid "
          type="button"
          value="Bkash/Rocket/Nagad"
          name="bkash"
        />
        <input
          onClick={(e) => handlePayment(e.target.name)}
          className="w-52 h-14 border border- border-solid "
          type="button"
          value="Paypal/Card"
          name="paypal"
        />
      </div>
    </div>
  );
}

export default OneTime;
