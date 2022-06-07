import React from "react";
import Container from "../../UI/Container";
import Image from "next/image";
import kidsImg from "../../../assets/kidsValueProp.png";
function Kids() {
  return (
    <section id="kids">
      <Container className="flex flex-col space-y-4 py-20 px-4 bg-black min-w-full mt-2 text-white text-center sm:px-16 lg:space-y-0 lg:justify-evenly lg:px-20 lg:flex-row-reverse">
        <div className="flex flex-col space-y-4 self-center z-10 lg:text-left lg:w-1/2">
          <h1 className="font-medium text-2xl md:text-5xl">
            Create profiles for kids.
          </h1>
          <h3 className="text-lg md:text-2xl lg:text-3xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.{" "}
          </h3>
        </div>
        <div className="flex justify-center items-end z-0 ">
          <Image src={kidsImg} alt="" />
        </div>
      </Container>
    </section>
  );
}

export default Kids;
