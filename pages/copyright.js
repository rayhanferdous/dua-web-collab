import Master from "../components/Layout/Master";
import Copyright from "../components/Setting/Copyright/Home";

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh-100px)] md:pt-24 lg:pt-24">
        <Copyright />
      </div>
    </Master>
  );
};

export default MyApp;
