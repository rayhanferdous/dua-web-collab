import Master from "../../components/Layout/Master";
import Card from "../../components/Memorize/Card";

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_80px)] md:pt-24 lg:pt-24">
        <h5 className="font-medium text-lg text-[#373737] flex justify-start mb-4 ">Favourite List:</h5>
        <div
          className="grid mb-6 gap-x-6 gap-y-4 
        xs:gap-y-3 xs:pb-10
        sm:grid-cols-2 sm:gap-x-4 sm:pb-10
        md:grid-cols-2 md:gap-x-4 md:pb-8
        lg:grid-cols-3 lg:pb-10
        xl:grid-cols-3 xl:pb-16
        2xl:grid-cols-3 2xl:pb-16
        3xl:grid-cols-3 3xl:pb-16">
          <Card selected="3" remaining="5" completed="2/3" percentage={"75%"} />
          <Card selected="3" remaining="5" completed="2/3" percentage={"100%"} />
          <Card selected="3" remaining="5" completed="2/3" percentage={"75%"} />
          <Card selected="3" remaining="5" completed="2/3" percentage={"75%"} />
          <Card selected="3" remaining="5" completed="2/3" percentage={"75%"} />
          <Card selected="3" remaining="5" completed="2/3" percentage={"75%"} />
          <Card selected="3" remaining="5" completed="2/3" percentage={"75%"} />
        </div>
      </div>
    </Master>
  );
};

export default MyApp;
