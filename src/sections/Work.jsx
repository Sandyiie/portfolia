import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import Projects from "../components/ProjectsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(() => {
    const projectsWidth = projectRef.current.scrollWidth;
    const scrollDistance = projectsWidth - window.innerWidth;

    gsap.to(projectRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center",
        end: () => `+=${projectsWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });
  return (
    <>
      <div
        ref={workRef}
        className="h-screen bg-white text-black py-24 lg:py-40"
      >
        {/* {title wrapper} */}

        <div
          className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6
        justify-between items-start md:items-end "
        >
          <div className="max-w-xl">
            <h3 className="mb-3">Selected Work</h3>
            <p className="text-lg lg:text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              tenetur est.
            </p>
          </div>
          <GradientButton
            text={"Explore All"}
            link={""}
            className="btn-light"
          />
        </div>
        {/* {project wrapper} */}
        <div ref={projectRef}>
          <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
            {Projects.map(({ id, name, image, link }) => (
              <a
                key={id}
                href={link}
                className="relative rounded-2xl w-full min-w-[340px] 
                lg:min-w-xl h-64 lg:h-96 block overflow-hidden group:"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover`
              transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className="absolute top-4 right-4 bg-black text-white uppercase
              leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg"
                >
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
