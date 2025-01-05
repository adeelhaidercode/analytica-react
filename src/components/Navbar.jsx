import React, { useState, useEffect } from "react";
import Button from "./shared/Button"; 
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { NAV_LINKS } from "../staticData/Data";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: targetElement,
            offsetY: 70,
          },
          ease: "power3.out",
          onComplete: () => {
            window.history.pushState(null, null, `#${targetId}`);
          },
        });
      }
    };
  
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });
  
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth/login");
  };
  

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center uppercase">
          <h1 className="ml-2 text-xl font-bold text-primary">
            analytica<span className="text-orange-100"> data</span>
          </h1>
        </div>

                        {/*/Desktop Navigation /*/}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            title="Get Started"
            className="ml-4"
            onClick={handleGetStarted}
          />
        </div>
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-black transition-all duration-500"></span>
            <span className="block h-0.5 w-6 bg-black transition-all duration-500"></span>
          </div>
        </button>
      </div>

                             {/* Mobile Navigation */}

        <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60" : "max-h-0"}`} >
        <nav className="bg-white shadow-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block px-4 py-2 nav-link"
            >
              {link.label}
            </a>
          ))} 
          <div className="px-4 py-2">
            <Button
              title="Get Started"
              backgroundColor="bg-orange-500"
              textColor="text-white"
              className="w-full"
              onClick={handleGetStarted}
              />
          </div>
        </nav> 
      </div>
    </header>
    
  );
};

export default Navbar;
