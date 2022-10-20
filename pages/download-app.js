import Master from "../components/Layout/Master";
import TopSection from "../components/Setting/Projects/TopSection";

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh-10px)] xs:pb-36 sm:pb-36 md:pt-24 lg:pt-24">
        <TopSection />
      </div>
    </Master>
  );
};

export default MyApp;
