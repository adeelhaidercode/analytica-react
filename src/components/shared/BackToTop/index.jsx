import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



gsap.registerPlugin(ScrollToPlugin);

const BackToTop = () => {
  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 1, 
      scrollTo: { y: 0 }, 
      ease: "power2.out", 
    });
  };

  return (
    <div
      className="fixed bottom-10 right-6 hidden md:flex flex-col items-center cursor-pointer"
      onClick={handleScrollToTop}
    >
      <p className="text-primary text-sm transform rotate-90 mb-12">
        BACK TO TOP
      </p>
      <div className="w-0.5 h-16 bg-primary"></div>
    </div>
  );
};

export default BackToTop;
