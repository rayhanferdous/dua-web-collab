import { useState } from "react";
import RangeSlider from "../Widget/RangeSlder";

const RuqyahSlider = () => {
  const [isPlay, setPlay] = useState(0);

  const handlePlay = () => {
    setPlay(!isPlay);
  };

  return (
    <div
      className="h-60 bg-blue-500  bg-repeat-x mb-5 overflow-hidden flex relative items-center xs:h-52 xs:rounded-3xl 
sm:mt-4">
      <div className="text-black absolute w-full h-60 flex flex-col justify-between items-start">
        <p className="p-6 xs:mt-4 xs:text-sm">1. Between the Yemeni corner and black stone...</p>
        <div className="w-full px-16 xs:px-8">
          <div className="w-full">
            <RangeSlider
              style="w-full h-1 accent-white bg-opacity-60 bg-devider ml-4 mr-2"
              preChild={<p className="text-black">1:25</p>}
              child={<p className="text-black">3:24</p>}
            />
          </div>
          <div className="flex flex-row gap-x-16 justify-center items-center mt-5 mb-4 xs:gap-x-7 xs:mb-8">
            <img className="xs:h-4" src="/assets/mediaplayer/suffle.svg" alt="" />
            <img className="xs:h-4" src="/assets/mediaplayer/playforward.svg" alt="" />
            <img onClick={handlePlay} src={`/assets/mediaplayer/${isPlay ? "pause" : "play"}.svg`} className="h-12 xs:h-8" alt="" />
            <img className="xs:h-4" src="/assets/mediaplayer/playnext.svg" alt="" />
            <img className="xs:h-4" src="/assets/mediaplayer/cycle.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuqyahSlider;
