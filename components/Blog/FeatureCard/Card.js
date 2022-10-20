import React from "react";

function Card({ featured, title, shortDesc, timeStamps, bgImg, blogLink }) {
  return (
    <div
      className=" w-full text-left bg-red-100 mb-3
    md:mb-0">
      <img
        className="w-full object-cover  h-auto 
      xs:h-36
      xs:object-top"
        src={`/assets/blog/${bgImg}`}
        alt=""
      />
      <div
        className="px-6 py-3 border-[.5px] border-solid border-[#e2e2e2] rounded-b-3xl 
      sm:px-4
      md:px-4 dark:bg-[#223449] dark:border-none">
        <a href={blogLink}>
          <p
            className="font-poppins font-medium text-sm leading-5 tracking-[.24em] text-mute-grey-200 uppercase 
          sm:text-xs
          md:font-normal ">
            {featured}
          </p>
        </a>
        <a href={blogLink}>
          <p
            className="font-inter font-semibold text-lg leading-7 text-title mb-4 normal-case xs:text-base 
          sm:text-base
          md:text-base
          md:leading-6
          md:mb-2 ">
            {title}
          </p>
        </a>
        <a href={blogLink}>
          <p
            className="font-inter font-normal text-[15px] text-left leading-6 text-mute-grey-200 
          xs:text-xs
          sm:text-sm
          md:text-sm ">
            {shortDesc}
          </p>
        </a>
        <a href={blogLink}>
          <p
            className="font-inter font-semibold text-sm leading-4 text-title mt-4 mb-3 normal-case 
          sm:text-xs
          md:text-xs ">
            {timeStamps}
          </p>
        </a>
      </div>
    </div>
  );
}

export default Card;
