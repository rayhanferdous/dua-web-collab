import Link from "next/link";

const Card = ({ bookName, bookSource, bookId }) => {
  return (
    <Link href={`/books/chapter/${bookId}`}>
      <div className="bg-red-100 w-full max-h-fit  py-5 px-4 mb-1 dark:bg-[#223449] animate-fade-in-up">
        <div className="flex justify-center items-center">
          <div className=" flex items-center justify-center  bg-[#E3F8FF] w-full h-auto ">
            {""}
            <img className="w-[90%] h-auto" src="/assets/others/bookIcon.svg" alt="" />
          </div>
        </div>
        <p className="flex text-title font-inter font-medium text-base mt-4  text-left"> {bookName}</p>
        <p className="flex justify-start text-mute-grey text-left font-inter font-normal text-sm mt-2 ">{bookSource}</p>
      </div>
    </Link>
  );
};

export default Card;
