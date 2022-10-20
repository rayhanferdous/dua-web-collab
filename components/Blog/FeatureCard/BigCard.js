import React from "react";
import Link from "next/link";

function BigCard({ featured, title, timeStamps, bgImg }) {
  return (
    <div
      className="col-span-2 row-span-4  
        xs:
        xs:row-span-1">
      <Link href="/blog/details">
        <div className="relative bg-gradient-to-t from-[rgba(4,4,4,85%)] to-[rgba(4,4,4,30%)] w-full h-full  dark:bg-gradient-to-t dark:from-[rgba(160,160,160,0%)] dark:to-[rgba(160,160,160,87%)]">
          <img className="w-full h-full object-cover mix-blend-overlay" src={`/assets/blog/${bgImg}`} alt="" />
          <div
            className="absolute bottom-14 left-10 text-left w-[75%] 
          xs:bottom-7
          xs:left-6
          
sm:bottom-8
          
sm:left-7">
            <p
              className="font-poppins font-semibold text-white text-lg leading-9 tracking-[.2em] uppercase 
            xs:text-sm
            xs:leading-5
            
sm:text-base
            md:text-base
            md:leading-5">
              {featured}
            </p>
            <p
              className="font-poppins font-bold text-white  text-5xl leading-[60px] mt-2 capitalize 
            xs:text-2xl
            xs:leading-6
            xs:capitalize
            
sm:text-3xl
            
sm:mt-1
            md:text-3xl">
              {title}
            </p>
            <p
              className="font-poppins font-normal text-white  text-lg leading-7 mt-4 normal-case 
            
sm:text-base
            
sm:mt-3
            md:text-base">
              {timeStamps}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BigCard;
