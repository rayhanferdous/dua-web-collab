import { useTheme } from "next-themes";

function CatList(props) {
  const { theme } = useTheme();
  return (
    <div className="mx-6 my-4">
      <div className={`${props.active ? "border-x-devider border-x-1 border-b-1  dark:border-none" : ""}`}>
        <div onClick={props.onClick} className="cursor-pointer">
          <div
            className={`${
              props.active
                ? `dark:bg-[#314A66] transition duration-300 delay-[10ms]  flex flex-row w-full  mt xs:max-w-full`
                : ` flex flex-row w-[100%]  mt xs:max-w-full `
            } container`}>
            <div className={`${props.active ? "" : ""} w-1 `}></div>
            <div className="p-2 flex flex-row items-center">
              <div className=" flex p-2 items-center  h-10 w-10 mr-5 justify-center dark:bg-[#223449] ">
                {theme === "dark" ? (
                  <img src={`${props.active ? `/assets/sidebar/color/${props.icon}.svg` : `/assets/sidebar/dark/${props.icon}.svg`} `} alt="" />
                ) : (
                  <img src={`${props.active ? `/assets/sidebar/color/${props.icon}.svg` : `/assets/sidebar/${props.icon}.svg`} `} alt="" />
                )}
              </div>
              <p
                className={`${
                  props.active ? " font-medium" : "text-mute-grey-200 font-normal "
                } font-inter  text-base leading-5 lg:text-sm text-start  xs:text-sm `}>
                {props.text}
              </p>
            </div>
          </div>
        </div>
        {props.child && <div className="">{props.child}</div>}
      </div>
    </div>
  );
}

export default CatList;
