import React from "react";

function SmallCard({ featured, title, timeStamps, bgImg }) {
  return (
    <div
      className=" row-span-2 
    xs:hidden">
      <div className="relative bg-gradient-to-t from-[rgba(4,4,4,85%)] to-[rgba(4,4,4,30%)] w-full h-full  dark:bg-gradient-to-t dark:from-[rgba(160,160,160,0%)] dark:to-[rgba(160,160,160,87%)]">
        <img className="w-full h-full object-cover mix-blend-overlay" src={`/assets/blog/${bgImg}`} alt="" />
        <div
          className="absolute bottom-7 left-6 text-left w-[80%] 
        
sm:bottom-4
        
sm:left-4">
          <p
            className="font-poppins font-medium text-white  text-sm leading-5 tracking-[.2em] uppercase 
          
sm:text-xs
          
sm:font-normal
          md:font-normal
          md:text-xs">
            {featured}
          </p>
          <p
            className="font-poppins font-bold text-white  text-2xl leading-6 capitalize 
          
sm:text-base
          
sm:font-semibold
          md:font-semibold
          md:text-xl">
            {title}
          </p>
          <p
            className="font-poppins font-medium text-white  text-sm leading-5 mt-3 normal-case 
          
sm:text-xs
          
sm:mt-2
          
sm:font-normal
          md:mt-1">
            {timeStamps}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
