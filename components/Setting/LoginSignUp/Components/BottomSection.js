import React from "react";
import Link from "next/link";

function BottomSection({ title, link }) {
  return (
    <p className="font-inter font-normal text-[15px] text-title opacity-70 mt-6 xs:mb-6 ">
      I have already an account.
      <Link href={`${link}`}>
        <span className="font-inter font-medium  text-base cursor-pointer">{title}</span>
      </Link>
    </p>
  );
}

export default BottomSection;
