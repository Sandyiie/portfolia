import React from "react";
import GradientButton from "../components/GradientButton";

const Hero = () => {
  return (
    <>
      <div>
        <div
          className="main-container h-screen flex flex-col lg:justify-center items-start lg:py-12
        max-lg:pt-40"
        >
          <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
            Sand Yie
          </h1>
          <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">
            Web Developer <br /> &{" "}
            <span className="text-stroke"> Designer </span>
          </h2>
          <GradientButton
            text={"Let'talk"}
            link={"mailto:sandysherpa7@gmail.com"}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
