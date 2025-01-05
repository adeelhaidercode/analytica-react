import React from "react";

const HeroBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#eaeaea", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon fill="url(#grad1)" points="0,0 1920,0 960,1080" />
      <circle cx="960" cy="540" r="8" fill="#ffbf00" />
    </svg>
  );
};

export default HeroBackground;
