import React from "react";
import Container from "../../UI/Container";
import Image from "next/image";
import phoneImg from "../../../assets/mobile-0819.jpg";
import bookImg from '../../../assets/boxshot.png'
import classes from './Download.module.css'
function Download() {
  return (
    <section id="download">
      <Container className="flex flex-col space-y-4 py-20 px-4 bg-black min-w-full mt-2 text-white text-center sm:px-16 lg:space-y-0 lg:justify-evenly lg:px-20 lg:flex-row-reverse">
        <div className="flex flex-col space-y-4 self-center z-10 lg:text-left lg:w-1/2">
          <h1 className="font-medium text-2xl md:text-5xl">
            Download your shows to watch offline.
          </h1>
          <h3 className="text-lg md:text-2xl lg:text-3xl">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
        <div className="relative flex justify-center items-end -translate-y-8 z-0 lg:translate-y-0">
          <Image src={phoneImg}  alt="" />
          <div className="absolute flex justify-between bg-black p-2 w-max h-fit border border-gray-400 rounded-xl items-center sm:mb-10">
            <Image src={bookImg} objectFit="contain" width={60} height={60} alt="" />
            <h3 className="text-white text-lg font-medium">Downloading...</h3>
            <div className={`${classes.downloadIcon}`}/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Download;
