import React from "react";
import Star from "../assets/Images/star.png";

const Marquee = () => {
  return (
    <>
      <div className="bg-white text-black pb-28 lg:pb-44 overflow-hidden">
        {/* {row 1} */}
        <div
          className="whitespace-nowrap animate-marquee text-6xl lg:text-[7vw]
        font-heading font-semibold leading-[1] tracking-tight"
        >
          <span className=" flex gap-4 lg:gap-8 mx-8">
            CREATE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            DESIGN <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            INSPIRE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            CREATE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            DESIGN <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            INSPIRE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
