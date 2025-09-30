import React from "react";
import Logo from "../assets/Images/SANDY.png";

const Footer = () => {
  return (
    <>
      {/* {divider} */}
      <div className=" max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <img src={Logo} alt="" />
        <div>
          <h5 className="font-medium mb-5"> Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">UI/UX</a>
            </li>
            <li>
              <a href="">Web Development</a>
            </li>
            <li>
              <a href="">Branding</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Accesibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">Mon - Fri: 9:00 - 5:00</a>
            </li>
            <li>
              <a href="">24/7 WhatsApp & Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">sandysherpa7@gmail.com</a>
            </li>
            <li>
              <a href="">+977 9800878975</a>
            </li>
          </ul>
        </div>
      </footer>

      {/* {divider} */}
      <div className=" max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      <div
        className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8
      max-md:text-center"
      >
        <div className="text-base lg:text-lg ">
          2025 SANDY | All rights reserved
        </div>
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
            >
              <title>LinkedIn icon</title>
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 
                3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 
                0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782
                 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 
                24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
