import Master from "../components/Layout/Master";
import ProfileCard from "../components/Setting/UserProfile/ProfileCard/ProfileCard";

const MyApp = () => {
  return (
    <Master title={"Profile"}>
      <div className="scrl h-[calc(100vh-100px)] xs:pb-6 sm:pb-6 md:pt-24 lg:pt-24">
        <ProfileCard />
      </div>
    </Master>
  );
};

export default MyApp;
