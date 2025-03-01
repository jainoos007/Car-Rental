import React from "react";
import DarkMode from "./DarkMode";

const NavBar = ({ theme, setTheme }) => {
  const Navlinks = [
    {
      id: 1,
      name: "HOME",
      link: "/#",
    },
    {
      id: 2,
      name: "CARS",
      link: "/#cars",
    },
    {
      id: 1,
      name: "ABOUT",
      link: "/#about",
    },
    {
      id: 1,
      name: "BOOKING",
      link: "/#booking",
    },
  ];

  return (
    <div className="shadow-md dark:bg-gray-900 dark:text-white">
      <div className="container w-full flex justify-between items-center py-3">
        <div>
          <p className=" font-serif font-bold text-4xl">Car Rental</p>
        </div>
        <div className="sm:flex sm:gap-5">
          {Navlinks.map((item) => (
            <div key={item.id} className="hidden sm:flex sm:gap-5">
              <a
                href={item.link}
                className="font-semibold text-xl hover:text-primary hover:underline-offset-8 hover:underline transition-all duration-400"
              >
                {item.name}
              </a>
            </div>
          ))}

          <div>
            <DarkMode theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
