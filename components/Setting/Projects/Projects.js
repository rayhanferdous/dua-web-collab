import React from "react";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

const Projects = () => {
  return (
    <div
      className="grid  gap-4 xs:grid-cols-1
      lg:grid-cols-2
      xl:grid-cols-2
      2xl:grid-cols-3
      3xl:grid-cols-3
      ">
      <TopSection />
      <BottomSection appLogo={"/assets/dua-logo.svg"} title="Dua & Ruqyah" downloadsApp={true} />
      <BottomSection appLogo={"/assets/projects/al-hadith.png"} title={"Al Hadith"} downloadsApp={true} />
      <BottomSection appLogo={"/assets/projects/quran-mazid.png"} title={"Quran Mazid (Tafsir & By Word)"} downloadsApp={true} />
      <BottomSection appLogo={"/assets/projects/al-hadith.png"} title="Al Hadith (website)" />
      <BottomSection appLogo={"/assets/projects/quran-web.png"} title="Quran Mazid (website)" />
    </div>
  );
};

export default Projects;
