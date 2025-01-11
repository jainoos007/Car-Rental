import React from "react";
import yellowCar from "../../assets/banner-car.png";
import blackCar from "../../assets/car.png";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container flex min-h-[620px]">
        <div className="grid place-items-center grid-cols-2">
          {/*text area  */}
          <div className="flex flex-col gap-5 justify-center sm:pr-32 lg:pr-10">
            <p className="text-primary font-semibold font-serif text-xl">
              Effortless
            </p>
            <h1 className="font-serif font-bold text-6xl">Car Rental</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam a
              beatae nam similique nobis praesentium.
            </p>
            <div>
              <button className="bg-primary/70 px-5 py-2 rounded-md hover:bg-primary/80">
                Get Started
              </button>
            </div>
          </div>
          {/* image area */}
          <div className="relative">
            <img
              src={theme === "dark" ? blackCar : yellowCar}
              className="relative scale-120 max-h-[600px]"
              alt="BannerImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
