import Link from "next/link";
import React from "react";

function LeftSection() {
  return (
    <div className="flex items-start">
      <div className="text-left xs:min-h-fit=">
        <p className="font-Poppins font-semibold text-[#404040] text-3xl leading-10 xss:text-center xss:text-2xl xs:text-center xs:text-2xl xs:leading-8 ">
          Be Part of This <span className="text-[#1FA471]">Sadaqah Jariah</span>
        </p>
        <br />
        <p className="font-Inter text-base leading-6 text-[#404040] opacity-80 ">
          We have plans for many more useful Islamic apps and websites. So if you want all these projects to continue and reach millions of brothers
          and sisters with the message of Islam, then support us as much as possible every month or once.
        </p>
        <br />
        <p className="font-Inter text-base leading-6 text-[#404040] opacity-80 ">
          Even $10 dollar per month will take the project a long way, InshaAllah. If you help in this work, it will be added to your account of
          akhirah as a sadaqa zaria, In sha Allah, the stream of rewards will continue even after your death In sha Allah.
        </p>
        <br />
        <p className="font-Inter text-base leading-6 text-[#404040] opacity-80 ">
          <span className="font-Inter font-semibold text-base leading-6 text-[#1FA471]">Prophet Muhammad (ﷺ) Said:</span> He who called (people) to
          Righteousness, there would be rewards (assured) for him like the rewards of those who adhered to it, without their rewards being diminished
          in any respect. (Sahih Muslim: 2674)
        </p>
        <br />
        <p className="font-Inter text-base leading-6 text-[#404040] opacity-80 ">
          <span className="font-Inter font-semibold text-base leading-6 text-[#1FA471]">NOTE : </span>
          Please be aware that we do not accept Zakah. You can support us by giving Hadiyah (Gift).
        </p>

        <div className="flex justify-center items-center mt-10 mb-3 xss:mt-8 xs:my-6 md:mt-8 lg:mt-8">
          <Link href="/support/donation">
            <div
              className="flex flex-row min-w-[38%] py-4 h-13 bg-[#1FA471] items-center justify-center 
            text-black uppercase transition duration-150 ease-in-out 
            hover:drop-shadow-[0_10px_6px_rgba(0,0,0,0.1)]
            xss:min-w-[90%]
            xs:min-w-[70%]
            md:min-w-[46%]
            lg:min-w-[42%]
            ">
              <p className="font-Raleway font-semibold cursor-pointer text-black normal-case mr-2 leading-6 lg:mr-4 2xl:text-base">
                I want to Donate
              </p>
              <img src="/assets/others/helping-hand.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
