const VideoCard = (props) => {
  return (
    <div className="grid grid-cols-[40%,1fr] bg-red-100  h-full w-full dark:bg-[#223449]">
      <div className="w-full">
        <img src="/assets/ruqyah/thumnail.png" className="w-full h-full " alt="" />
      </div>
      <div className="w-10/12 p-2 py-3">
        <p className="text-sm text-left ">{props.title} </p>
        <p className="text-xs mt-3 text-mute-grey text-left ">{props.cName}</p>
      </div>
    </div>
  );
};

export default VideoCard;
