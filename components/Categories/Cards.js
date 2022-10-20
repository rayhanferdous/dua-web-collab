import Card from "../Utils/Card";
import { useSelector } from "react-redux";

const Cards = ({ title }) => {
  const loading = useSelector((state) => state.duaCat.loading);
  const data = useSelector((state) => state.duaCat.data);
  return (
    <div>
      <p className="font-inter font-semibold text-base leading-5 my-6 text-title">{title}</p>
      <div
        className="grid my-6 gap-x-8 gap-y-4 
          sm:grid-cols-2 sm:gap-x-6
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-3
          2xl:grid-cols-3
          3xl:grid-cols-3
          ">
        {loading ? (
          <>loading</>
        ) : (
          data && data.result.map((item) => <Card link={"/#"} title={item.cat_name_en} totalDua={item.no_of_dua} subTitle={item.no_of_subcat} />)
        )}
      </div>
    </div>
  );
};

export default Cards;
