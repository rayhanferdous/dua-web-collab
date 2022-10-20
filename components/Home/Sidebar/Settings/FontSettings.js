import RangeSlider from "../../../Widget/RangeSlder";
import Dropdown from "./Dropdown/Dropdown";

const FontSettings = () => {
  return (
    <div className="px-4 pb-1  animate-scale-down">
      <div className="flex flex-col items-start">
        <p className="text-title mt-4 text-sm ">Translation Font Size</p>
        <RangeSlider child="20" />
      </div>

      <div className="flex items-start flex-col">
        <div className="mt-4 flex flex-col items-start">
          <p className="text-title text-sm ">Select Arabic Script</p>
          <Dropdown type={"script"} />
        </div>
        <div className="mt-4 flex flex-col items-start">
          <p className="text-title text-sm ">Arabic Font</p>
          <Dropdown type={"font"} />
        </div>
      </div>

      <div className="my-4 flex items-start flex-col">
        <p className="text-title text-sm ">Arabic Font Size</p>
        <RangeSlider child="20" />
      </div>
    </div>
  );
};

export default FontSettings;
