const Card = (props) => {
  return (
    <div
      className={`${
        props.active ? "rounded-br-lg  border-x-devider border-x-1 xl-min:border-0 border-b-1 rounded-t-lg dark:border-none " : ""
      } my-2.5 cursor-pointer group`}
      onClick={props.onClick}>
      <div className="lg:container flex flex-row  dark:bg-transparent">
        <div className={`${props.active ? "" : " "} w-1    `}></div>
        <div
          className={`${
            props.active ? "bg-green-50 dark:bg-[#314A66]" : " "
          } p-4 lg:p-3.5 w-full xl-min:w-60 flex flex-row justify-between items-center rounded-r-lg bg-green-50 dark:bg-[#314A66]`}>
          <p className={`${props.active ? "" : "font-light"}  text-base lg:text-sm text-start font-inter font-normal xs:text-sm xs:font-medium `}>
            {props.name}
          </p>
        </div>
      </div>
      {props.active && (
        <div
          className="hidden xs:block 
sm:block md:block p-4">
          {props.child}
        </div>
      )}
    </div>
  );
};

export default Card;
