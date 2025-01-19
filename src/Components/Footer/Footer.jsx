import React from "react";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 rounded-t-3xl dark:bg-gray-900 dark:text-white">
      <div className="container grid sm:grid-cols-10 gap-20 sm:gap-0 mt-20 py-16">
        <div className="col-span-4 space-y-6 mr-10">
          <h1 className="font-bold text-4xl">Car Rental</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt a
            vitae numquam aliquam provident.
          </p>
          <div className="flex gap-3">
            <div className="flex justify-center items-center">
              <FaLocationArrow />
            </div>
            <p>Mumbai, Maharashtra</p>
          </div>
          <div className="flex gap-3">
            <div className="flex justify-center items-center">
              <FaMobileAlt />
            </div>
            <p>+91 123456789</p>
          </div>
          <div className="flex text-3xl gap-3">
            <FaInstagram className="hover:text-primary duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-primary duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-primary duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Links */}
        <div className="col-span-2 flex flex-col gap-3">
          <h1 className="font-bold text-xl">Important Links</h1>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Home
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            About
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Contacts
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Blog
          </a>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <h1 className="font-bold text-xl">Important Links</h1>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Home
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            About
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Contacts
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Blog
          </a>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <h1 className="font-bold text-xl">Important Links</h1>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Home
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            About
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Contacts
          </a>
          <a
            href="/#Home"
            className="flex items-center gap-1 hover:text-primary duration-300"
          >
            <FaChevronRight />
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
