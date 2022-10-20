import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div
        className="xs:hidden bg-red-100  w-auto h-[85px] mb-8 flex flex-row items-center justify-start 
          sm:mt-6 dark:bg-[#223449]">
        <div className="flex justify-center items-center bg-[#ECFFF4] h-16 w-16  text-black ml-3 mr-5 font-inter font-medium text-lg dark:bg-momorize-rgba">
          <img src="/assets/bookmark.png" alt="" />
        </div>
        <p
          className="text-left font-inter font-medium text-lg text-text-title 
          sm:text-base w-[85%] ">
          These are the Duas of your favorite category, which you have chosen to bookmark.
        </p>
      </div>
      <h5 className="xs:hidden font-medium text-lg text-[#373737] flex justify-start mb-4 ">Favourite List:</h5>
      <div
        className="grid mb-6 gap-x-6 gap-y-4 xs:grid-cols-1 xs:gap-y-3 
        sm:grid-cols-2 
        sm:gap-x-4
        sm:pb-28
        md:grid-cols-2
        md:gap-x-4
        xl:grid-cols-3
        2xl:grid-cols-3
        3xl:grid-cols-3">
        <Card path={"/bookmark/list/"} totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder2.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
        <Card totalDuas="3" folder="/assets/others/folder1.svg" />
      </div>
    </>
  );
};

export default Cards;
