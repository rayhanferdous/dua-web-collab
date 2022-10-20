import React from "react";
import LoginForm from "./LoginForm";
import Topbar from "./Topbar";
import Slider from "../../Widget/Slider/Slider";

function Login() {

  return (
    <div className="">
      <Topbar />
      <div className="flex flex-row h-[46rem] relative justify-center items-center mt-8">
        <Slider/>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
