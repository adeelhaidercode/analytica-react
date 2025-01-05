import React from "react";
import Button from "./shared/Button";
import "../styles/feature.css";
import { FeaturesData } from "../staticData/Data";

const FlipCard = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card mx-4 my-6">
      <div className="flip-card-inner">
        <div
          className={`flip-card-front flex items-center justify-center shadow-lg`}
        >
          {frontContent}
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center shadow-lg">
          {backContent}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-black">
          Key Features
        </h2>
        <div className="flex flex-wrap justify-center">
          {FeaturesData.map((feature, index) => (
            <FlipCard
              key={index}
              frontContent={
                <>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </>
              }
              backContent={
                <>
                  <p className="text-sm text-center px-4">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Button title="Learn More" />
                  </div>
                </>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
