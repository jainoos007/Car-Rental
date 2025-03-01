import React from "react";
import bannerCar from "../../assets/car1.png";

const About = () => {
  return (
    <div className="min-h-[620px] bg-gray-300 dark:bg-gray-900 dark:text-white">
      <div className="container grid sm:grid-cols-2 py-32">
        {/* image section */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="relative ml-20 "
        >
          <img src={bannerCar} alt="car" className="scale-75 max-h-[400px]" />
        </div>
        {/* text section */}
        <div className="flex flex-col gap-6 sm:ml-16 sm:mr-16 justify-center ">
          <h1
            data-aos="fade-up"
            data-aos-direction="2000"
            data-aos-delay="100"
            className="font-bold text-4xl sm:text-5xl font-serif"
          >
            About us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-direction="2000"
            data-aos-delay="100"
            className="text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            molestiae Lorem ipsum dolor sit amet.
          </p>
          <p
            data-aos="fade-up"
            data-aos-direction="2000"
            data-aos-delay="100"
            className="text-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            similique natus? Cum voluptatem repellendus rerum.
          </p>
          <div
            data-aos="fade-up"
            data-aos-direction="2000"
            data-aos-delay="100"
          >
            <button className="border-2 border-primary rounded-md text-primary text-lg px-6 py-2 hover:bg-primary/90 hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
