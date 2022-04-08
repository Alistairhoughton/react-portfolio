import React from "react";
import HeroStyles from "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="title-holder">
        <p className="title">
            Hi, I'm Alistair Houghton
        </p>
        <p className="subtitle">
            A FullStack developer with a passion for clean UI and Good UX
        </p>
      </div>
    </section>
  );
}
