import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const images = [
    "./img/My self 'n' I/THE FIRST.jpg",
    "./img/My self 'n' I/cabane_à_pyla.jpg",
    "./img/My self 'n' I/partie de carte.jpg",
    "./img/My self 'n' I/Voiture vigne IA.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="margin-container container">
      <div className="h1 flex aife gc-f-1-5">
        <h1 className="title">
          Concepteur UI <br />
          Designer <br /> <br /> Roby
        </h1>
        <a href="#coming-soon">
          <img src="./img/HeroArrow.svg" alt="Arrow to scroll" />
        </a>
      </div>
      <div className="carousel img-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{
              display: currentIndex === index ? "block" : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}
