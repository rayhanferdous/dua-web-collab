const ProfileName = () => {
  return (
    <div className="flex xs:mt-3 xs:flex-col flex-row items-center">
      <div className="relative xl-min:h-20 xl-min:w-20 h-28 w-28  flex flex-col justify-end overflow-hidden">
        <img src="/assets/user/avater.svg" className="h-full w-full absolute" alt="" />
        <div className="xl-min:hidden relative overflow-hidden inline-block bg-black opacity-40">
          <input className="absolute opacity-0 p-3 text-sm left-0 top-0" type="file" name="file" />
          <div className="border p-2 rounded-2lg ">
            <div className="flex flex-row justify-center items-center gap-x-2 px-2">
              <img src="/assets/mobile/home/edit-white.svg" alt="" className="h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start lg:ml-4 xl:ml-4 2xl:ml-4 xs:items-center xs:my-2">
        <p className="text-xl xs:text-lg xs:font-medium ml-4 ">MD. Mahmud Hasan</p>
        <p className="text-ms text-mute-grey mt-1 xs:hidden ml-4 ">Update your username and manage your account</p>
        <p className="text-ms text-mute-grey  lg:hidden ml-4 dark:text-[#b8b8b8]">mahmudhasan12</p>
      </div>
    </div>
  );
};

export default ProfileName;
