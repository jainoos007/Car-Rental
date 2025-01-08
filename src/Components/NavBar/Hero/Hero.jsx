import React from "react";
import BannerImg from "../../../";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-2">
        {/*text area  */}
        <div className="flex flex-col gap-5 justify-center h-[550px]">
          <p className="text-primary font-semibold font-serif text-xl">
            Effortless
          </p>
          <h1 className="font-serif font-bold text-6xl">Car Rental</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam a
            beatae nam similique nobis praesentium.
          </p>
          <div>
            <button className="bg-primary/80 px-4 py-1 rounded-md">
              Get Started
            </button>
          </div>
        </div>
        {/* image area */}
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
