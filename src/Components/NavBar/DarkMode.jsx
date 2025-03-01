import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = ({ theme, setTheme }) => {
  return (
    <div className="relative">
      <MdLightMode
        className={`text-3xl cursor-pointer transition-all duration-300 -top-3 -left-5 sm:top-0 sm:left-0 absolute p-0 z-10 ${
          theme === "dark" ? "opcaity-100" : "opacity-0"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <MdDarkMode
        className={`text-3xl cursor-pointer transition-all duration-300 absolute -top-3 -left-5 sm:top-0 sm:left-0 z-10 ${
          theme === "light" ? "opcaity-100" : "opacity-0"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default DarkMode;
