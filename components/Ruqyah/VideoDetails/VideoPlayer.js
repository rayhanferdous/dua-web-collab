import DownloadOption from "./Component/DownloadOption";

const VideoPlayer = (props) => {
  return (
    <div className="bg-red-100  xs:w-11/12 xs:mx-auto dark:bg-[#223449]">
      <img src="/assets/ruqyah/thumnail.png" className="w-full h-full " alt="" />
      <div className="p-6 ">
        <p className="text-lg font-medium text-left ">
          Nasheeds For Studying, Sleeping and Relaxing with Rain Nasheeds For Studying, Sleeping and Relaxing with Rain
        </p>
        <p className="text-xs mt-2 text-mute-grey text-left ">Islamic Night</p>
        <DownloadOption />
      </div>
    </div>
  );
};

export default VideoPlayer;
