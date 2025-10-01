import React, { useRef } from "react";
import GradientButton from "./GradientButton";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(gsap, ScrollTrigger);
const CTA = () => {
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(ctaRef.current, {
      backgroundColor: "#fff",
      color: "#000",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "center bottom",
        end: "60% bottom",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <div ref={ctaRef}>
        <div
          className="main-container py-20 lg:py-28 h-full flex flex-col gap-8
justify-center items-center"
        >
          <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-[1.25]">
            Freelance projects, collaborations and full-time opportunities.Let's
            get aquainted
          </h4>
          <GradientButton text={"Book a Call"} link={""} />
        </div>
      </div>
    </>
  );
};

export default CTA;
