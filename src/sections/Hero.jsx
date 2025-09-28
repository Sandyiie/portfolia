import React from "react";
import GradientButton from "../components/GradientButton";
import Star from "../assets/Images/star.png";

const Hero = () => {
  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="main-container h-screen relative flex flex-col lg:justify-center items-start lg:py-12
        max-lg:pt-40"
        >
          <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
            Sandy Sherpa
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
        <div className="star absolute -z-10 top-80 lg:top-32 right-[-35%] lg:right-[-12%]">
          <img className="h-[48vh] lg:h-[80vh]" src={Star} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
