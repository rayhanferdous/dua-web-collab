import Link from "next/link";

const Card = (props) => {
  return (
    <Link href={`/dua/${props.catId}/1`}>
      <div className="bg-red-100 flex justify-between items-center w-full h-22  dark:bg-[#223449] cursor-pointer">
        <div className="flex flex-row items-center">
          <div className=" flex  items-center h-[61px] w-[61px] mx-2.5 "></div>
          <div className="text-left">
            <p className="text-title text-sm font-medium mb-1 xs:font-medium lg:text-base ">{props.catName}</p>
            <p className="text-mute-grey text-xs ">Subcategory: {props.subCat}</p>
          </div>
        </div>
        <div className="mr-5 flex flex-row items-center">
          <div className="bg-devider w-[1px] mr-3 h-12 dark:bg-[#455369]"></div>
          <div>
            <p className="">{props.totalDuas}</p>
            <p className="text-mute-grey text-xs ">Duas</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
