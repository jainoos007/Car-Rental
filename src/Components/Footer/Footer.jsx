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
    <div className="container grid grid-cols-4 mt-20">
      <div className="space-y-6">
        <h1 className="font-bold text-4xl">Car Rental</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt a
          vitae numquam aliquam provident.
        </p>
        <div className="flex">
          <FaLocationArrow />
          <p>Mumbai, Maharashtra</p>
        </div>
        <div className="flex">
          <FaMobileAlt />
          <p>+91 123456789</p>
        </div>
        <div className="flex">
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
        </div>
      </div>
      <div>
        <h1>Important Links</h1>
        <a href="/#Home">
          <FaChevronRight />
          Home
        </a>
        <a href="/#Home">
          <FaChevronRight />
          About
        </a>
        <a href="/#Home">
          <FaChevronRight />
          Contacts
        </a>
        <a href="/#Home">
          <FaChevronRight />
          Blog
        </a>
      </div>
      <div>
        <h1>Important Links</h1>
        <a href="/#Home">
          <FaChevronRight />
          Home
        </a>
        <a href="/#Home">
          <FaChevronRight />
          About
        </a>
        <a href="/#Home">
          <FaChevronRight />
          Contacts
        </a>
        <a href="/#Home">
          <FaChevronRight />
          Blog
        </a>
      </div>
      <div>
        <h1>Important Links</h1>
        <a href="/#Home">
          <FaChevronRight />
          Home
        </a>
        <a href="/#Home">
          <FaChevronRight />
          About
        </a>
        <a href="/#Home">
          <FaChevronRight />
          Contacts
        </a>
        <a href="/#Home">
          <FaChevronRight />
          Blog
        </a>
      </div>
    </div>
  );
};

export default Footer;
