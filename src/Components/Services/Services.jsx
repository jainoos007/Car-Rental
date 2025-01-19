import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const cardItems = [
  {
    id: 1,
    icon: <FaCameraRetro />,
    text: "Best Price",
    delay: "100",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos. Learn More...",
  },
  {
    id: 2,
    icon: <FaShippingFast />,
    text: "Fast and Safe",
    delay: "300",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos. Learn More...",
  },
  {
    id: 3,
    icon: <GiNotebook />,
    text: "Experience Drivers",
    delay: "500",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos. Learn More...",
  },
];

const Services = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container text-center py-14">
        <h1 className="font-bold font-serif text-4xl sm:text-5xl">
          Why Choose Us
        </h1>
        {/* cards */}
        <div className="grid sm:grid-cols-3 gap-5 py-10 text-white ">
          {cardItems.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={item.delay}
              key={item.id}
              className="dark:bg-gray-900 group bg-black flex flex-col px-5 gap-5 py-5 sm:py-12 items-center rounded-md hover:bg-primary/70 dark:hover:bg-primary  hover:text-black duration-300"
            >
              <div className="text-primary group-hover:text-black text-6xl ">
                {item.icon}
              </div>
              <h2 className="text-lg">{item.text}</h2>
              <p className="text-lg">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
