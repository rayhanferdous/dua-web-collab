import React from "react";
import SignUpForm from "./SignUpForm";
import Topbar from "./Topbar";
import Slider from "../../Widget/Slider/Slider";

function SignUp() {
  return (
    <div>
      <div>
        <Topbar />

        <div className="flex mb-10 flex-row h-[46rem] relative justify-center items-center mt-8 sm:flex-col xl:mb-10">
          <Slider  />
          {/* signup={'h-[81.5vh] xl:h-[85.5vh] 2xl:h-[84.3vh]'} mt={'mt-[50%]'} */}
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
