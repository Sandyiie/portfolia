import React, { useRef, useState } from "react";
import Logo from "../assets/Images/SANDY.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all
              duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px] " : ""
              }`}
            ></span>
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all
              duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px] " : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
      {/* {full screen menu} */}

      <div
        className={`fixed z-18 inset-0 bg-black text-white flex flex-col items-center justify-center
      gap-8 text-3xl transition-transform duration-500 ${
        menuOpen ? "translate-y-0" : " translate-y-full"
      }`}
        onClick={() => setMenuOpen(false)}
      >
        <Link to={"/"} className="menu-link">
          Home
        </Link>
        <Link to={"/projects"} className="menu-link">
          Projects
        </Link>
        <Link to={"/contacts"} className="menu-link">
          Contacts
        </Link>
      </div>
    </>
  );
};

export default Navbar;
