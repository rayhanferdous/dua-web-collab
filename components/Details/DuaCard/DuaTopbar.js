const DuaTopbar = (props) => {
  return (
    <div>
      <div className="flex flex-row  justify-start items-center ">
        {/* DuaName */}
        <p className=" font-medium">{`${props.duaId}. ${props.duaName}`}</p>
      </div>
      <div className="w-full h-[1px] mt-5 bg-[#E2E2E2] dark: dark:hidden"></div>
    </div>
  );
};

export default DuaTopbar;
