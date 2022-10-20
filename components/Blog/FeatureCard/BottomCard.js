import React from "react";
import Card from "./Card";

function BottomCard() {
  return (
    <div
      className="grid grid-cols-3 gap-5 mt-5
    xs:grid-cols-1
    xs:gap-0
    xs:mt-3
    xs:mb-2 
    sm:gap-3
    md:gap-3">
      <Card
        bgImg={"feature4.png"}
        blogLink={"/#"}
        featured={"featured"}
        title={`Sadaqah Jariyah | 5 ways to earn continuous rewards in Islam`.substring(0, 50) + "..."}
        shortDesc={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."}
        timeStamps={"June 14, 2022"}
      />
      <Card
        bgImg={"feature4.png"}
        blogLink={"/#"}
        featured={"featured"}
        title={`Sadaqah Jariyah | 5 ways to earn continuous rewards in Islam`.substring(0, 50) + "..."}
        shortDesc={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."}
        timeStamps={"June 14, 2022"}
      />
      <Card
        bgImg={"feature6.png"}
        blogLink={"/#"}
        featured={"featured"}
        title={`Sadaqah Jariyah | 5 ways to earn continuous rewards in Islam`.substring(0, 50) + "..."}
        shortDesc={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."}
        timeStamps={"June 14, 2022"}
      />
      <Card
        bgImg={"feature7.png"}
        blogLink={"/#"}
        featured={"featured"}
        title={`Sadaqah Jariyah | 5 ways to earn continuous rewards in Islam`.substring(0, 50) + "..."}
        shortDesc={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."}
        timeStamps={"June 14, 2022"}
      />
      <Card
        bgImg={"feature8.png"}
        blogLink={"/#"}
        featured={"featured"}
        title={`Sadaqah Jariyah | 5 ways to earn continuous rewards in Islam`.substring(0, 50) + "..."}
        shortDesc={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."}
        timeStamps={"June 14, 2022"}
      />
      <Card
        bgImg={"feature9.png"}
        blogLink={"/#"}
        featured={"featured"}
        title={`Sadaqah Jariyah | 5 ways to earn continuous rewards in Islam`.substring(0, 50) + "..."}
        shortDesc={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."}
        timeStamps={"June 14, 2022"}
      />
    </div>
  );
}

export default BottomCard;
