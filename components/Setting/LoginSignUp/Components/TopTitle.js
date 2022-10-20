import React from "react";

export default function TopTitle({ subtitle }) {
  return (
    <div
      className="xs:hidden
        sm:flex 
        sm:flex-col 
        sm:items-center">
      <p className="font-inter font-medium text-3xl mb-4 ">Welcome to Dua and Ruqyah</p>
      <p className="font-inter font-normal text-base text-title opacity-70 ">{subtitle}</p>
    </div>
  );
}
