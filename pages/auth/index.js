import React from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import Container from "../../components/UI/Container";
import classes from "./auth.module.css";
function AuthPage() {
  return (
    <Container
      className={`${classes.container} relative flex h-screen items-center justify-center min-w-full`}
    >
      <div className="z-20 w-screen h-full relative p-14 flex flex-col md:max-w-md md:w-fit md:h-fit ">
        <div className="absolute bg-black w-full h-full top-0 left-0 z-10 rounded-xl md:opacity-75"></div>
        <div className="z-30">
          <h1 className="text-white text-3xl font-medium mt-12 md:mt-0">
            Sign In
          </h1>
          <div className="flex flex-col space-y-4 my-8">
            <input
              type="email"
              className="w-full p-4 text-md bg-tagColor text-white rounded-md"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              className="w-full p-4 text-md bg-tagColor text-white rounded-md"
              placeholder="Password"
            />
          </div>
          <button className="bg-mainColor text-center text-white font-medium py-4 w-full rounded-md text-xl">
            Sign In
          </button>
          <div className="flex justify-between w-full text-white mt-3">
            <div className="flex space-x-4">
              <input type="checkbox" className="self-center h-full mr-2" />
              Remember me
            </div>
            <span className="">Need help?</span>
          </div>
          <div className="text-gray-500 mt-20">New to Netflix? <a href="#" className="text-white">Sign up now.</a></div>
          <div className="text-gray-500 text-sm">This page is protected by Google reCAPTCHA to ensure you are not a bot.</div>
        </div>
      </div>
      <Backdrop />
    </Container>
  );
}

export default AuthPage;
