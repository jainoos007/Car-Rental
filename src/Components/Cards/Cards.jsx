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
    <div>
      <div className="container">
        <h1 className="text-4xl font-bold font-serif ">Lorem ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-16">
          {carItems.map((item) => (
            <div key={item.id} className="flex flex-col border-2">
              <h1 className="font-semibold text-xl">{item.distance}</h1>
              <div className="bg-blue-300">
                <img src={item.img} alt="car" className="scale-50" />
              </div>
              <h1>{item.name}</h1>
              <div>
                <h1>{item.price}</h1>
                <h1>{item.detail}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
