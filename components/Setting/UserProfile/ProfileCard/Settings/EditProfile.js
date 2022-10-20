import InputField from "../InputField";
import InputButton from "../InputButton";
import UploadButton from "../../../../Widget/UploadButton";

const EditProfile = () => {
  return (
    <div className="flex flex-col justify-start gap-y-4">
      <div className="mb-5 lg-max:hidden flex flex-row items-center gap-x-5">
        <img src="/assets/user/avater.svg" className="h-20" alt="" />
        <UploadButton />
      </div>

      <InputField name="Full Name" type="text" sname="name" placeholder="Name" />
      <InputField name="Location" type="text" sname="location" placeholder="adress" />
      <div className="xs-min:text-right xl-min:text-left">
        <InputButton name="Save Change" />
      </div>
    </div>
  );
};

export default EditProfile;
