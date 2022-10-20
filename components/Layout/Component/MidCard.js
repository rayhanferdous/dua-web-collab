import Link from "next/link";

const MidCard = (props) => {
  return (
    <Link href={props.path} onClick={props.onClick}>
      <div className="bg-red-100 flex items-center w-full h-22  cursor-pointer hover:drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:transition duration-200 delay-200 dark:bg-[#223449]">
        <div className=" flex items-center h-16 w-16 mx-3.5  cursor-pointer "></div>
        <p className="text-title text-base lg:text-base  cursor-pointer ">{props.text}</p>
      </div>
    </Link>
  );
};

export default MidCard;
