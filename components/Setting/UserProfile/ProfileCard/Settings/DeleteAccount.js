import InputButton from "../InputButton";

const DeleteAccount = () => {
  return (
    <div className="flex flex-col text-left gap-y-4">
      <h1 className="font-medium text-title text-xl ">We’re sorry to see you go</h1>
      <p className="text-title text-sm ">
        If you’d like to reduce your email notifications, you can <span className="text-red-600">disable them here</span> or if you just want to
        change your <span className="text-red-600">username</span>, you can do that here.
      </p>
      <p className="text-title text-sm ">Be advised, account deletion is final. There will be no way to restore your account.</p>

      <div className="xs-min:text-right xl-min:text-left">
        <InputButton name="Delete my account" style="bg-red-600 " />
      </div>
    </div>
  );
};

export default DeleteAccount;
