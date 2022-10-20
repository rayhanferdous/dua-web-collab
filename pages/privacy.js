import Privacy from "../components/Setting/Privacy/Home";
import Master from "../components/Layout/Master";

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh-10px)] pb-36 md:pt-24 lg:pt-24">
        <Privacy />
      </div>
    </Master>
  );
};

export default MyApp;
