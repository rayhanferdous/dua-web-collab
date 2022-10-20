import Link from "next/link";

const MidCard = (props) => {
  return (
    <Link href={props.path} onClick={props.onClick}>
      <div className="bg-red-100 flex items-center w-full h-22  cursor-pointer hover:drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:bg-[#223449] xs:bg-transparent xs:flex-col xs:gap-2 sm:bg-transparent sm:flex-col sm:gap-2">
        <div className=" flex items-center h-16 w-16 mx-3.5  cursor-pointer "></div>
        <p className="text-title text-base xs:text-sm sm:text-base cursor-pointer ">{props.text}</p>
      </div>
    </Link>
  );
};

export default MidCard;
