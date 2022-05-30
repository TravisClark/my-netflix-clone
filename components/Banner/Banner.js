import React from "react";
import Container from "../UI/Container";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <section id="banner">
      <Container
        className={`${classes.banner} relative flex p-6 min-w-full sm:h-1/2`}
      >
        <div
          className={`${classes.bannerContent} z-10 w-full flex flex-col text-center m-auto space-y-2 pt-10 max-w-screen-sm lg:max-w-screen-md`}
        >
          <h1 className="font-medium text-2xl text-white md:text-5xl xl:text-7xl">
            Unlimited movies, TV shows, and more.
          </h1>
          <h3 className="font-medium text-lg text-white md:text-2xl xl:text-3xl">
            Watch anywhere. Cancel anytime.
          </h3>
          <h3 className="font-medium text-lg text-white md:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-0">
            <input
              type="email"
              className="px-2 py-4 border-gray-400 border text-sm lg:w-4/5 lg:text-lg"
              placeholder="Email address"
            />
            <div className="flex pl-4 pr-2 py-2 rounded-sm mx-auto bg-mainColor text-white w-fit hover:bg-hoverColor transition duration-300 lg:text-2xl">
              <button className="whitespace-nowrap">Get Started</button>
              <svg xmlns="http://www.w3.org/2000/svg" className="self-center" width="24" height="24">
                <path
                  fill="#fff"
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`${classes.backdrop} absolute w-full h-full top-0 left-0`}
        ></div>
      </Container>
    </section>
  );
}

export default Banner;
