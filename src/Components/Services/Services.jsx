import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const cardItems = [
  {
    id: 1,
    icon: <FaCameraRetro />,
    text: "Best Price",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos. Learn More...",
  },
  {
    id: 2,
    icon: <FaShippingFast />,
    text: "Fast and Safe",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos. Learn More...",
  },
  {
    id: 3,
    icon: <GiNotebook />,
    text: "Experience Drivers",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quos. Learn More...",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container text-center py-16">
        <h1 className="font-bold font-serif text-4xl">Why Choose Us</h1>
        {/* cards */}
        <div className="grid grid-cols-3 gap-5 py-16 text-white ">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="group bg-black flex flex-col px-10 gap-5 py-12 items-center rounded-md hover:bg-primary hover:text-black duration-300"
            >
              <div className="text-primary group-hover:text-black text-6xl ">
                {item.icon}
              </div>
              <h2>{item.text}</h2>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
