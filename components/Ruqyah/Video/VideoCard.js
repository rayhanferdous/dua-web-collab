import Link from "next/link";
const VideoCard = (props) => {
  return (
    <Link href={props.path}>
      <div className="bg-red-100  h-full w-full overflow-hidden dark:bg-[#223449]">
        <div>
          <img src="/assets/ruqyah/thumnail.png" className="w-full h-full " alt="" />
        </div>
        <div className="p-2 py-3">
          <p className="text-sm text-left font-medium ">{props.title} </p>
          <p className="text-xs mt-3 text-mute-grey text-left ">{props.cName}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
