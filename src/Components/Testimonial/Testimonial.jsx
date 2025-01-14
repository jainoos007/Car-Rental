import React from "react";
import { FaStar } from "react-icons/fa";

const cartItems = [
  {
    id: 1,
    name: "Rohit",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Virat",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/201/201",
  },
  {
    id: 3,
    name: "Sam",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/301/301",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container flex flex-col items-center space-y-5 py-20">
        <h1 className="font-serif font-bold text-4xl">
          What Our Clients Say About Us
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        {/* Testimonial Cards */}
        <div className="grid grid-cols-3 gap-7">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 dark:bg-gray-900 px-5 py-10 flex flex-col gap-10 text-center rounded-md mt-7"
            >
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt="img"
                  className="rounded-full h-20 object-contain"
                />
              </div>
              <div className="flex items-center justify-center text-primary gap-1 scale-150">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>{item.text}</p>
              <h1 className="font-semibold ">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
