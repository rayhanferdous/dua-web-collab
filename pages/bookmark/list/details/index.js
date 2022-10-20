import Master from "../../../../components/Layout/Master";
import Card from "../../../../components/Bookmark/Details/Card";

const MyApp = () => {
  return (
    <Master title={"Bookmark Page"}>
      <div
        className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
        <Card />
        <Card />
      </div>
    </Master>
  );
};

export default MyApp;
