import ProfileName from "./ProfileName";
import Settings from "./Settings";
const ProfileCard = () => {
  return (
    <div
      className="bg-red-100 p-10  mb-16
      xs:min-h-fit
      xs:
      xs:p-6
      xs:mb-10
      sm:p-6
      md:p-6
      dark:bg-[#223449]
      ">
      <ProfileName />
      <Settings />
    </div>
  );
};

export default ProfileCard;
