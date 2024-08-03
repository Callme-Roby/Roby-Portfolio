import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Quotes from "./components/Quotes/Quotes.jsx";
import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Quotes />
      <ComingSoon />
      <Projects />
    </>
  );
}

export default App;
