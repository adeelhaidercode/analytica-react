import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImageAbout from "../assets/images/heroBg.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center 70%", 
          end: "center 30%", 
          scrub: true, 
        },
      }
    );

  
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 1, y: 0 }, 
      {
        opacity: 0,
        y: -50, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 80%",
          end: "bottom 50%", 
          scrub: true, 
        },
      }
    );

    gsap.to(containerRef.current, {
      backgroundPosition: "50% 80%", 
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top", 
        scrub: true, 
      },
    });
  }, []);

  return (
    <section 
    id="about"
      ref={containerRef}
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backgroundImageAbout})`,
        backgroundPosition: "50% 0%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-widest">
          About Us
        </h2>

        <p
          ref={paragraphRef}
          className="text-lg lg:text-xl mt-6 max-w-3xl leading-relaxed opacity-0" 
        >
          At Kuzzee.ai, we leverage cutting-edge AI and machine learning
          technologies to transform industries. Our mission is to empower
          businesses with actionable insights, predictive analytics, and
          intelligent solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
