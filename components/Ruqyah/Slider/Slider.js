import RangeSlider from "../../Widget/RangeSlder";
import { useState } from "react";
import PlayList from "../UI/PlayList";

const Slider = () => {
  const [isPlay, setPlay] = useState(0);

  const [player, setPlayer] = useState(1);

  const handlePlayList = (id) => {
    if (player !== id) {
      setPlayer(id);
    }
  };
  const handlePlay = () => {
    setPlay(!isPlay);
  };

  return (
    <div
      className="h-72 bg-blue-500  bg-repeat-x mb-4 overflow-hidden flex relative items-center xs:h-52 
      sm:mt-5">
      <div
        className="text-black absolute h-full p-6 pl-8  w-full xs:pl-6 
      sm:pl-5">
        <div className="flex flex-row justify-start items-start content-start ">
          <div className="w-7/12 flex flex-col justify-between h-64 items-start xs:h-44 xs:w-full">
            <p className="font-inter font-medium xs:text-sm xs:leading-4">1. Introduction to Ruqyah</p>
            <div
              className="w-full pr-16 xs:pr-2 
                sm:pr-10">
              <div className="w-full">
                <RangeSlider
                  style="w-full h-1 accent-white bg-opacity-60 bg-devider ml-4 mr-2"
                  preChild={<p className="text-black">1:25</p>}
                  child={<p className="text-black">3:24</p>}
                />
              </div>
              <div
                className="flex flex-row justify-between items-center mx-20 mt-4 mb-2 xs:gap-x-8 xs:mx-4 xs:mt-4 
                sm:mx-5">
                <img className="xs:h-4" src="./assets/mediaplayer/suffle.svg" alt="" />
                <img className="xs:h-4" src="./assets/mediaplayer/playforward.svg" alt="" />
                <img onClick={handlePlay} src={`./assets/mediaplayer/${isPlay ? "pause" : "play"}.svg`} className="h-12 xs:h-8" alt="" />
                <img className="xs:h-4" src="./assets/mediaplayer/playnext.svg" alt="" />
                <img className="xs:h-4" src="./assets/mediaplayer/cycle.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-5/12 xs:hidden">
            <div className="flex flex-col w-full">
              <p className="flex flex-row">Playlist</p>
              <hr className="bg-hr mt-2 opacity-50" />
              <div className="flex flex-col items-start mt-5 gap-y-4">
                <PlayList play={player === 1 ? true : false} onClick={() => handlePlayList(1)} name="1. Introduction to Ruqyah" />
                <PlayList play={player === 2 ? true : false} onClick={() => handlePlayList(2)} name="2. Instant Ruqyah" />
                <PlayList play={player === 3 ? true : false} onClick={() => handlePlayList(3)} name="3. Protect Yourself From Jinn" />
                <PlayList play={player === 4 ? true : false} onClick={() => handlePlayList(4)} name="4. Black Magic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
