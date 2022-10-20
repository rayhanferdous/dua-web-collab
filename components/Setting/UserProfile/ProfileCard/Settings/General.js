import InputField from "../InputField";
import InputButton from "../InputButton";

const General = () => {
  return (
    <div className="flex flex-col justify-start gap-y-4">
      <InputField name="Username" type="text" sname="username" placeholder="Username" />
      <InputField name="Email" type="email" sname="email" placeholder="example@gmail.com" />
      <div className="xs-min:text-right xl-min:text-left">
        <InputButton name="Save Change" />
      </div>
    </div>
  );
};

export default General;
