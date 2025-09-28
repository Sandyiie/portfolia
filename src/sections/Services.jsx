import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in Detail</h3>
        </div>
        <div className="relative">
          <div className="bg-black text-white py-16 lg:py-20">
            <div
              className="main-container grid grid-cols-1 md:grid-cols-2
                gap-6 lg:gap-12 items-center"
            >
              {/* {leftside} */}

              <div>
                <span>01</span>
                <h2>
                  Web Design <br /> & UI/UX
                </h2>
              </div>
              {/* {rightside} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
