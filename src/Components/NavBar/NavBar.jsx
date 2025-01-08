import React from "react";
import DarkMode from "./DarkMode";

const NavBar = ({ theme, setTheme }) => {
  return (
    <div className="shadow-md dark:bg-gray-900 dark:text-white">
      <div className="container flex justify-between items-center py-3 dark:">
        <div>
          <p className=" font-serif font-bold text-3xl">Car Rental</p>
        </div>
        <div className="flex gap-5">
          <a
            href="#/Home"
            className="font-semibold text-lg hover:text-primary hover:underline-offset-8 hover:underline transition-all duration-400"
          >
            HOME
          </a>
          <a
            href="#/Home"
            className="font-semibold text-lg hover:text-primary hover:underline-offset-8 hover:underline transition-all duration-400"
          >
            CARS
          </a>
          <a
            href="#/Home"
            className="font-semibold text-lg hover:text-primary hover:underline-offset-8 hover:underline transition-all duration-400"
          >
            ABOUT
          </a>
          <a
            href="#/Home"
            className="font-semibold text-lg hover:text-primary hover:underline-offset-8 hover:underline transition-all duration-400"
          >
            BOOKING
          </a>
          <div>
            <DarkMode theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
