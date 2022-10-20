import Page from "../../Page";
import ProfileCard from "./ProfileCard/ProfileCard";

const UserProfile = () => {
  return <Page title="Profile" subtitle="This is your profile. You can  change anything." home={<ProfileCard />} />;
};

export default UserProfile;
