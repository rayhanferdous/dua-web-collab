import Master from "../../../components/Layout/Master";
import MemorizeDetails from "../../../components/Memorize/Details/DetailsCard";

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
        <MemorizeDetails />
        <MemorizeDetails />
      </div>
    </Master>
  );
};

export default MyApp;
