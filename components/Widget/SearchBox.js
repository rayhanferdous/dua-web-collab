import SearchIcon from "../../assets/searchIcon";

const SearchBox = ({ hint, style }) => {
  return (
    <label className="relative block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon height="22" color="stroke-mute-grey" />
      </span>
      <input
        className={`${style} h-12 font-inter placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-red-100 min-w-full   pl-12 shadow-sm focus:outline-none focus:border- focus:ring- focus:ring-1  
sm:text-sm  dark:border-none dark:placeholder:text-[#96a2b4]`}
        placeholder={hint}
        type="text"
        name="search"
      />
    </label>
  );
};

export default SearchBox;
