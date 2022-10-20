import PaymentMethod from "./PaymentMethod";

function DonationMethod({ location }) {
  return (
    <div className={`${location && "transition duration-1000 delay-1000"} text-left mt-7`}>
      <p className="font-Inter font-medium text-[15px] leading-4  mb-6">Select Your Payment Method</p>
      <div className={`${location === 1 ? "grid grid-cols-3 gap-x-3 mt-2.5 xs:grid-cols-1 xs:gap-y-3" : "hidden"}`}>
        <div className="flex flex-col justify-center items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full min-h-fit py-3 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471] xs:flex-row  dark:border-none">
          <img className="dark:hidden" src="/assets/supportus/bkash.png" alt="" />
          <div className="hidden xs:block xs:h-8 xs:rounded-t-full xs:rounded-b-full xs:w-1 xs:bg-[#ECEEF0] xs:mx-5"></div>
          <div className="flex flex-col justify-center items-center mt-3 ">
            <p className="font-Inter font-semibold text-[15px] leading-[18px]">bKash</p>
            <p className="font-Inter font-normal text-[14px] leading-4] mt-1 ">+8801747519969</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full min-h-fit py-3 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471] xs:flex-row  dark:border-none">
          <img src="/assets/supportus/rocket.png" alt="" />
          <div className="hidden xs:block xs:h-8 xs:rounded-t-full xs:rounded-b-full xs:w-1 xs:bg-[#ECEEF0] xs:ml-11 xs:mr-5"></div>
          <div className="flex flex-col justify-center items-center mt-3 ">
            <p className="font-Inter font-semibold text-[15px] leading-[18px]">Rocket</p>
            <p className="font-Inter font-normal text-[14px] leading-4] mt-1">+8801747519969</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer bg-red-100 border border-solid border-[#ECEEF0]  w-full min-h-fit py-3 hover:outline-none hover:ring-[1.2px] hover:ring-[#1FA471] xs:flex-row  dark:border-none">
          <img src="/assets/supportus/nagad.png" alt="" />
          <div className="hidden xs:block xs:h-8 xs:rounded-t-full xs:rounded-b-full xs:w-1 xs:bg-[#ECEEF0] xs:mx-5"></div>
          <div className="flex flex-col justify-center items-center mt-3 ">
            <p className="font-Inter font-semibold text-[15px] leading-[18px]">Nagad</p>
            <p className="font-Inter font-normal text-[14px] leading-4] mt-1">+8801747519969</p>
          </div>
        </div>
      </div>
      <div className={`${location === 1 ? "flex justify-center my-4 text-lg " : "hidden"}`}>OR</div>

      <PaymentMethod />
    </div>
  );
}

export default DonationMethod;
