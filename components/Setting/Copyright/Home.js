import React from "react";

const Home = () => {
  return (
    <div className="bg-red-100  p-7 h-fit dark:bg-[#223449]">
      <div className="flex mb-8">
        <div className="flex items-center justify-center  bg-[#DDFFEC] h-[81px] w-[81px] xs:h-15 xs:w-15 xs: dark:bg-[#DDFFEC26]">
          {""}
          <img src="/assets/others/copyright.svg" alt="" />
        </div>
        <div className="flex items-center">
          <div className="ml-5">
            <p className="flex font-poppins font-medium text-2xl text-title xs:text-xl ">Copyright Warning</p>
            <p className="flex font-poppins font-normal text-sm text-[#484848] mt-[2px] ">We strictly handle copyright issues</p>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <div className="text-left">
          <p className="font-inter font-normal text-base text-title leading-6 text-justify mb-2.5 xs:text-[15px] ">
            Using the content of the Dua and Ruqyah app to create different apps/ websites by modifying them in whole or in part, attaching different
            types of hasam ADs them for earning money is strictly prohibited. We urge everyone not create and use such mobile apps or websites.
            Moreover, you will not get regular updates on thes apps, in that case the mistakes will never be update.
          </p>
          <p className="font-inter font-normal text-base text-title leading-6 text-justify mb-2.5 xs:text-[15px] ">
            However, It was allowed to share on Facebook, Youtube, Blogs, Articles, etc. for the purpose of Da’wah work. But in that case, we hope
            that you will mention the source of our app as others will also know about it and will be enthusiastic about the da’wah work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
