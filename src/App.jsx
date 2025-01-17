import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Cards from "./Components/Cards/Cards";
import Testimonial from "./Components/Testimonial/Testimonial";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

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
    <div className="dark:bg-black ">
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Cards />
      <Testimonial />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
