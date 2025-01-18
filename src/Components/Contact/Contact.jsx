import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" grid grid-cols-10 bg-gray-900 mt-32 py-10 px-8"
        >
          <div className="col-span-6 space-y-5">
            <h1 className="text-white font-bold text-5xl">
              Let's collaborate on your upcoming car rental ventures
            </h1>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio nam nulla ipsa sequi tempora quas.
            </p>
          </div>
          <div className="col-span-4 text-center flex justify-center items-center">
            <button className="bg-primary/70 text-white px-5 py-2 rounded-md hover:bg-primary/80 font-semibold duration-300">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
