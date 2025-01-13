import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Cards from "./Components/Cards/Cards";

function App() {
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
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Cards />
    </div>
  );
}

export default App;
