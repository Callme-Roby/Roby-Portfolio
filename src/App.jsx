import { ReactLenis, useLenis } from "lenis/react";

// Custom Import
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Quotes from "./components/Quotes/Quotes.jsx";
import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <>
      <ReactLenis root>
        <Header />
        <Hero />
        <Quotes />
        <ComingSoon />
        <Projects />
      </ReactLenis>
    </>
  );
}

export default App;
