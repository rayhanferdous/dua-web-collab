import Master from "../components/Layout/Master";
import RightBar from "../components/Layout/RightBar";

const MyApp = () => {
  return (
    <Master>
      <div className="hidden w-full xs:block sm:block">
        <RightBar />
      </div>
    </Master>
  );
};

export default MyApp;
