import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function FeatureCard() {
  return (
    <div
      className="grid grid-cols-[30%_minmax(30%,_1fr)_1fr]  grid-rows-4 gap-4 
    xs:grid-cols-1
    xs:grid-rows-1
    xs:gap-0
    sm:gap-3
    md:gap-3">
      <BigCard featured={"featured"} title={"The Journey, dua & Ruqyah Apps"} timeStamps={"June 14, 2022"} bgImg={"feature1.png"} />

      <SmallCard featured={"featured"} title={"The Journey, Dua & Ruqyah Apps"} timeStamps={"June 14, 2022"} bgImg={"feature2.png"} />
      <SmallCard featured={"featured"} title={"The Journey, Dua & Ruqyah Apps"} timeStamps={"June 14, 2022"} bgImg={"feature3.png"} />
    </div>
  );
}

export default FeatureCard;
