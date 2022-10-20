import Card from "./Card";
import EditProfile from "./Settings/EditProfile";
import General from "./Settings/General";
import Password from "./Settings/Password";
import EmailNoti from "./Settings/EmailNoti";
import DeleteAccount from "./Settings/DeleteAccount";
import { useState } from "react";

const Settings = () => {
  const [dropdown, setDropdown] = useState(1);

  function handler(id) {
    if (dropdown !== id) {
      setDropdown(id);
    }
  }

  return (
    <div
      className="grid my-10 mb-14
      lg:grid-cols-[250px,358px,1fr] lg:gap-x-16
      xl:grid-cols-[250px,358px,1fr] xl:gap-x-16
      2xl:grid-cols-[250px,358px,1fr] 2xl:gap-x-16
      3xl:grid-cols-[250px,358px,1fr] 3xl:gap-x-16">
      <div className="">
        <Card active={dropdown === 1 ? true : false} onClick={() => handler(1)} name="General Settings" child={<General />} />
        <Card active={dropdown === 2 ? true : false} onClick={() => handler(2)} name="Edit Profile" child={<EditProfile />} />
        <Card active={dropdown === 3 ? true : false} onClick={() => handler(3)} name="Password" child={<Password />} />
        <Card active={dropdown === 4 ? true : false} onClick={() => handler(4)} name="Email Notification" child={<EmailNoti />} />
        <Card active={dropdown === 5 ? true : false} onClick={() => handler(5)} name="Delete Account" child={<DeleteAccount />} />
      </div>

      <div className="mt-2 hidden lg:block xl:block 2xl:block 3xl:block">
        {dropdown === 1 && <General />}
        {dropdown === 2 && <EditProfile />}
        {dropdown === 3 && <Password />}
        {dropdown === 4 && <EmailNoti />}
        {dropdown === 5 && <DeleteAccount />}
      </div>
    </div>
  );
};

export default Settings;
