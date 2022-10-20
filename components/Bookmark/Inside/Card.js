import Link from "next/link";

const Card = (props) => {
  return (
    <Link href="/bookmark/list/details">
      <div className="flex items-center bg-red-100 w-full h-22  p-3 border-[.5px] border-solid border-devider px-3 xs:mt-0 dark:bg-[#223449] dark:border-none sm:mt-0 sm:mb-0 cursor-pointer">
        <div className=" min-w-[61px] min-h-[61px]  flex justify-center items-center font-inter font-medium text-2xl text-black dark:">
          <p className="dark:opacity-50">{props.duaNumber}</p>
        </div>
        <div className="flex justify-start">
          <p className="font-inter text-left font-medium text-[15px] text-[#393939] ml-[10px] ">{props.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
