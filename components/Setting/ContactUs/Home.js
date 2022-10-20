import React from "react";
import ContactUsForm from "./ContactUsForm";

const Home = () => {
  return (
    <div
      className="grid gap-6 text-left bg-red-100px-7 py-10 mb-2 xs:px-4 xs:py-4 xs:mt-0 sm:gap-y-4 dark:bg-[#223449]
    lg:grid-cols-[42%,1fr] xl:grid-cols-[50%,48%] 2xl:grid-cols-[50%,48%] 3xl:grid-cols-[50%,48%]">
      <div className="xs:flex xs:flex-col xs:items-center sm:text-center md:text-center">
        <p className="font-semibold text-4xl leading-5 text-[#404040] xs:text-2xl  xs:mb-4 xs:mt-3">Get In Touch</p>
        <p className="mt-7 font-inter text-[15px] leading-6 text-[#404040] w-[80%] xs:w-full xs:text-center xs:mt-2 sm:w-full md:mx-auto ">
          To Contact Us, You can inbox Our Facebook Page or You can mail Us for any kind of query, app features request, error in content etc.
        </p>
      </div>

      <div className="flex items-start mt-8 xs:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0 3xl:mt-0">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Home;
