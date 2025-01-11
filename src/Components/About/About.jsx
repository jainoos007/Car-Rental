import React from "react";
import bannerCar from "../../assets/car1.png";

const About = () => {
  return (
    <div className="max-h-[620px] bg-gray-300">
      <div className="container grid grid-cols-2 py-32">
        {/* image section */}
        <div className="relative ml-10">
          <img src={bannerCar} alt="car" className="scale-75 max-h-[400px]" />
        </div>
        {/* text section */}
        <div className="flex flex-col gap-6 ml-16 mr-16 justify-center">
          <h1 className="font-bold text-4xl font-serif">About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            molestiae Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet.
          </p>
          <div>
            <button className="border-2 border-primary rounded-md text-primary px-6 py-2 hover:bg-primary/90 hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
