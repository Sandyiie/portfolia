import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import Star from "../assets/Images/star.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      SplitText.create("h1", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
          });
        },
      });
      SplitText.create("h2", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.15,
            delay: 0.3,
          });
        },
      });

      gsap.from(".gradient-btn", {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power2.out",
        delay: 1.25,
      });

      gsap.from(".star", {
        scale: 0,
        rotate: 180,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.3,
        ease: "back.Out(1.7)",
        onComplete: () => {
          gsap.to(".star", {
            rotate: "+360",
            duration: 20,
            ease: "linear",
            repeat: -1,
          });
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <>
      <div ref={heroRef} className="overflow-hidden relative">
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
            className="gradient-btn"
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
