import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carItems = [
  {
    id: 1,
    img: car1,
    name: "BMW UX",
    price: "$100/Day",
    detail: "Details",
    distance: "12Km",
  },
  {
    id: 2,
    img: car2,
    name: "KIA UX",
    price: "$140/Day",
    detail: "Details",
    distance: "12Km",
  },
  {
    id: 3,
    img: car3,
    name: "BMW UX",
    price: "$100/Day",
    detail: "Details",
    distance: "12Km",
  },
];

const Cards = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <div className="container space-y-6">
        <h1 className="text-4xl font-bold font-serif ">Lorem ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-16">
          {carItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col border-2 rounded-xl py-4 px-3 justify-between relative hover:border-primary duration-300 mt-4 mb-4"
            >
              <h1 className="font-semibold text-xl">{item.distance}</h1>
              <div className="w-full h-[120px]">
                <img
                  src={item.img}
                  alt="car"
                  className=" w-full h-[120px] object-contain group-hover:translate-x-5 duration-700"
                />
              </div>
              <h1 className="font-bold text-primary">{item.name}</h1>
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl">{item.price}</h1>
                <h1 className="font-semibold text-xl">{item.detail}</h1>
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="text-center">
          <button className="border-2 border-primary rounded-md text-primary px-6 py-2 hover:bg-primary/90 hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
