import React from "react";
import HeroBackground from "../assets/icons/HeroBackground";
import Button from "./shared/Button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <HeroBackground />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 lg:pl-24 text-black">
        <p className="text-sm uppercase tracking-widest text-scondry font-light">
          Transform Your Future
        </p>
        <h3 className="text-4xl lg:text-6xl font-bold leading-snug mt-4">
          Revolutionize Your Strategy <br /> with Analytica
        </h3>
        <Button
          title="More Services"
          className="mt-6 hover:opacity-80"
        />
      </div>
    </section>
  );
};

export default HeroSection;
