import React from "react";
import Container from "../../UI/Container";
import Image from "next/image";
import doublePhonesImg from "../../../assets/vn.jpg";
function AndroidDownload() {
  return (
    <section id="android">
      <Container className="flex flex-col space-y-4 py-20 px-4 bg-black min-w-full mt-2 text-white text-center sm:px-16 lg:space-y-0 lg:justify-evenly lg:px-20 lg:flex-row">
        <div className="flex flex-col space-y-4 self-center items-center z-10 lg:text-left lg:w-1/2 lg:items-start">
          <h1 className="font-medium text-2xl md:text-5xl">
            Have an Android Phone? Get our new free plan!
          </h1>
          <h3 className="text-lg md:text-2xl lg:text-3xl">
            Watch a selection of new movies and TV shows without adding any
            payment details!
          </h3>
          <a
            src="#"
            className="flex text-lg hover:text-gray-300 transition hover:cursor-pointer  md:text-2xl lg:text-3xl"
          >
            Get the app
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
              width="24"
              height="24"
            >
              <path
                fill="#fff"
                d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src={doublePhonesImg}
            width={500}
            height={400}
            objectFit="contain"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
}

export default AndroidDownload;
