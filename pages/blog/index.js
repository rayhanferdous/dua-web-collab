import Master from "../../components/Layout/Master";
import FeatureCard from "../../components/Blog/FeatureCard/Home";
import BottomCard from "../../components/Blog/FeatureCard/BottomCard";
import Pagination from "../../components/Blog/Pagination";

const MyApp = () => {
  return (
    <Master title={'Blog Page'}>
      <div className="scrl h-[calc(100vh-100px)] md:pt-24 lg:pt-24 pb-[3.5rem]">
        <FeatureCard />
        <BottomCard />
        <Pagination />
      </div>
    </Master>
  );
};

export default MyApp;
