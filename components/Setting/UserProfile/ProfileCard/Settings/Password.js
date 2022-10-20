import InputField from "../InputField";
import InputButton from "../InputButton";

const Password = () => {
  return (
    <div className="flex flex-col justify-start gap-y-4">
      <InputField name="Old Password" type="password" sname="old passowrd" placeholder="******************" />
      <InputField name="New Password" type="password" sname="new password" placeholder="******************" />
      <p className="text-xs font-inter text-gray-300 text-left -translate-y-2">Minimum 6 character</p>
      <div className="xs-min:text-right xl-min:text-left">
        <InputButton name="Save Change" />
      </div>
    </div>
  );
};

export default Password;
