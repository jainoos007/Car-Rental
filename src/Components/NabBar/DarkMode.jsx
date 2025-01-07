import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <MdLightMode
        className={`text-2xl cursor-pointer transition-all duration-300 absolute top-1 z-10 ${
          theme === "dark" ? "opcaity-100" : "opacity-0"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <MdDarkMode
        className={`text-2xl cursor-pointer transition-all duration-300 absolute top-1 z-10 ${
          theme === "light" ? "opcaity-100" : "opacity-0"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default DarkMode;
