import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    SplitText.create(".about-text", {
      type: "lines chars",
      onSplit(self) {
        gsap.set(self.chars, {
          opacity: 0.25,
        });
        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });
      },
    });
  });
  return (
    <>
      <div
        ref={aboutRef}
        className="relative z-18 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]"
      >
        <div
          className="about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl leading-[1.2]
        md:text-3xl xl:text-5xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio
          fugiat, illum consectetur facere mollitia sit non, ratione accusantium
          quam nobis accusamus eveniet soluta beatae nesciunt laboriosam, enim
          a! Dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Impedit
        </div>
      </div>
    </>
  );
};

export default About;
