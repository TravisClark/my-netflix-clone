import React from "react";
import Container from "../../UI/Container";
import Image from "next/image";
import tvImg from "../../../assets/tv.png";
// import video from '../../assets/video-tv-0819.mp4'
function TvShow() {
  return (
    <section id="tv">
      <Container className="flex flex-col space-y-4 py-20 px-4 bg-black min-w-full mt-2 text-white text-center sm:px-16 lg:flex-row lg:space-y-0 lg:justify-evenly lg:px-20">
        <div className="flex flex-col space-y-4 self-center lg:text-left lg:w-1/2">
          <h1 className="font-medium text-2xl md:text-5xl">Enjoy on your TV</h1>
          <h3 className="text-lg md:text-2xl lg:text-3xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src={tvImg} objectFit="contain" alt="" />
          <video
            className="absolute object-contain w-2/3"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            autoPlay
            playsInline
            muted
            loop
          />
        </div>
      </Container>
    </section>
  );
}

export default TvShow;
