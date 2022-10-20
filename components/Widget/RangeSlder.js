const RangeSlider = ({ style, child, preChild, mt = "mt-2" }) => {
  return (
    <div className={`${mt} flex flex-row items-center w-[85%]`}>
      {preChild && <p className="ml-2 text-mute-grey-200 text-sm">{preChild}</p>}
      <input type="range" name="range" className={`${style ?? "min-w-full h-2 bg-devider accent- dark:bg-[#fff7]"}  appearance-none`} />
      <p className="ml-2 text-mute-grey-200 text-sm ">{child}</p>
    </div>
  );
};

export default RangeSlider;
