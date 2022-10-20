import React from "react";

function DonationType() {
  function hideElement(name) {
    if (name === "onetime") {
      if (document.getElementsByName(name)[0].classList.contains("")) {
        document.getElementsByName("paymentMethodOnetime")[0].classList.toggle("hidden");
        document.getElementsByName("paymentMethodMonthly")[0].classList.add("hidden");
      } else {
        document.getElementsByName("paymentMethodOnetime")[0].classList.toggle("hidden");
      }
    } else {
      if (document.getElementsByName(name)[0].classList.contains("")) {
        document.getElementsByName("paymentMethodMonthly")[0].classList.toggle("hidden");
        document.getElementsByName("paymentMethodOnetime")[0].classList.add("hidden");
      } else {
        document.getElementsByName("paymentMethodMonthly")[0].classList.toggle("hidden");
      }
    }
  }

  const handleDonation = (name) => {
    let style = ["", "text-black", "font-Inter", "font-medium", "text-base", "leading-5", "transition", "duration-500", "ease-in-out"];
    let element = document.getElementsByName(name)[0].classList;
    if (name === "onetime") {
      for (let i = 0; i < style.length; i++) {
        element.toggle(style[i]);
        document.getElementsByName("monthly")[0].classList.remove(style[i]);
        hideElement(name);
      }
    } else {
      for (let i = 0; i < style.length; i++) {
        element.toggle(style[i]);
        document.getElementsByName("onetime")[0].classList.remove(style[i]);
      }
      hideElement(name);
    }
  };

  return (
    <div>
      <p className="font-Inter font-medium text-base leading-5 text-title">Select Type of Donation</p>
      <div className="flex justify-between mt-4 w-[95%]">
        <input
          onClick={(e) => handleDonation(e.target.name)}
          className={`ml-4 w-52 h-14  border border- border-solid`}
          type="button"
          value="One Time"
          name="onetime"
        />
        <input
          onClick={(e) => handleDonation(e.target.name)}
          className={`ml-4 w-52 h-14  border border- border-solid`}
          type="button"
          value="Monthly"
          name="monthly"
        />
      </div>
    </div>
  );
}

export default DonationType;
