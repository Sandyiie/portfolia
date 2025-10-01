import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in Detail</h3>
        </div>
        <div className="relative">
          <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
            <div
              className="main-container grid grid-cols-1 md:grid-cols-2
                gap-6 lg:gap-12 items-center"
            >
              {/* {leftside} */}

              <div className="flex gap-6 lg:gap-8">
                <span
                  className="text-gray-400 text-lg lg:text-2xl font-heading
                tracking-tight block mb-4"
                >
                  01
                </span>
                <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Web Design <br /> & UI/UX
                </h2>
              </div>
              {/* {rightside} */}
              <div className="flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, voluptatum explicabo. Tempora esse, quam nesciunt
                  porro molestias eum asperiores aperiam quo vitae facilis?
                  Dolores, id itaque harum dolore laudantium error.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3 ">
            <div
              className="main-container grid grid-cols-1 md:grid-cols-2
                gap-6 lg:gap-12 items-center"
            >
              {/* {leftside} */}

              <div className="flex gap-6 lg:gap-8">
                <span
                  className="text-gray-400 text-lg lg:text-2xl font-heading
                tracking-tight block mb-4"
                >
                  02
                </span>
                <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Web Design <br /> & UI/UX
                </h2>
              </div>
              {/* {rightside} */}
              <div className="flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, voluptatum explicabo. Tempora esse, quam nesciunt
                  porro molestias eum asperiores aperiam quo vitae facilis?
                  Dolores, id itaque harum dolore laudantium error.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3 ">
            <div
              className="main-container grid grid-cols-1 md:grid-cols-2
                gap-6 lg:gap-12 items-center"
            >
              {/* {leftside} */}

              <div className="flex gap-6 lg:gap-8">
                <span
                  className="text-gray-400 text-lg lg:text-2xl font-heading
                tracking-tight block mb-4"
                >
                  03
                </span>
                <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Web Design <br /> & UI/UX
                </h2>
              </div>
              {/* {rightside} */}
              <div className="flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, voluptatum explicabo. Tempora esse, quam nesciunt
                  porro molestias eum asperiores aperiam quo vitae facilis?
                  Dolores, id itaque harum dolore laudantium error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
