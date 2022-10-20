import Card from "../../Utils/Card";
import { useSelector } from "react-redux";

const Category = () => {
  const data = useSelector((state) => state.ruqyahCat.data);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="text-left font-medium xs-max:mt-4 ">Categories Of Ruqyah :</p>
      </div>
      <div
        className="grid grid-cols-2 xs-max:grid-cols-1 xs-max:mb-12
      sm:pb-28 sm:gap-x-6 lg-min:grid-cols-3 mt-2 gap-x-8 gap-y-3.5">
        {data && data?.result?.map((item) => <Card link={"/ruqyah/details/1"} title={item.category_name} />)}
        <Card link={"/ruqyah/video"} title={'Ruqyah related Video'} />
      </div>
    </div>
  );
};

export default Category;
