import React, { useRef } from "react";
import Logo from "../assets/Images/SANDY.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navBarRef = useRef(null);

  useGSAP(() => {
    gsap.from(navBarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });
  });
  return (
    <>
      <nav
        ref={navBarRef}
        className="fixed z-20 top-0 w-full mix-blend-difference"
      >
        <div className="main-container py-6 flex justify-between items-center">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
