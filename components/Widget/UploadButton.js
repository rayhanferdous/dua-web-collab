const UploadButton = () => {
  return (
    <div className="relative overflow-hidden inline-block">
      <input className="absolute opacity-0 p-3 text-sm left-0 top-0" type="file" name="file" />
      <div className="border p-2 rounded-2lg  dark:border-none">
        <div className="flex flex-row justify-center items-center gap-x-2 px-2 ">
          <img src="/assets/user/upload.svg" alt="" className="h-5" />
          <p className="text-xs text-mute-grey py-1.5  ">Upload Picture</p>
        </div>
      </div>
    </div>
  );
};

export default UploadButton;
