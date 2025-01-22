import React from "react";
import yellowCar from "../../assets/banner-car.png";
import blackCar from "../../assets/car.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container flex h-[700px] sm:min-h-[600px] ">
        <div className="grid place-items-center sm:grid-cols-2">
          {/*text area  */}
          <div className="order-2 sm:order-2 flex flex-col gap-5 justify-center sm:pr-32 lg:pr-10">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              className="text-primary font-semibold font-serif text-2xl"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="font-serif font-bold text-7xl"
            >
              Car Rental
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              className="text-lg"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam a
              beatae nam similique nobis praesentium.
            </p>
            <div>
              <BrowserRouter></BrowserRouter>
              <button
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
                className="bg-primary/70 px-5 py-2 rounded-md hover:bg-primary/80 text-lg"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* image area */}
          <div
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-once="true"
            className="relative order-1 sm:order-2"
          >
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
