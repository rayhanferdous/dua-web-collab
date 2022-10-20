import Link from "next/link";

const CatCard = (props) => {
  return (
    <Link href={`/ruqyah/details/${props.catId}`}>
      <div className="bg-red-100 flex justify-between items-center w-full h-18  cursor-pointer dark:bg-[#223449] animate-fade-in-up">
        <div className="flex flex-row items-center">
          <div className="bg-icon-2bg flex  items-center h-15 w-15 m-3 mr-4 "></div>
          <div className="text-left w-8/12">
            <p className="text-title text-sm font-medium lg:text-base ">{props.catName}</p>
            {/* <p className="text-mute-grey text-xs xs:hidden ">Subcategory: {props.subCat}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
