import React from "react";
export default function Card({ title, link, icon }) {
  return (
    <a href={link}>
      <div className="w-full mb-9">
        <div className="flex items-center space-x-4">
          <img src={`/assets/settings/${icon}.svg`} alt="" />
          <div className="capitalize font-inter font-medium text-base leading-5 "> {title}</div>
        </div>
      </div>
    </a>
  );
}
