import React from "react";
import Navbar from "../components/Navbar";
import BackToTop from "../components/shared/BackToTop";
import HeroSection from "../components/Hero";
import AboutUs from "../components/About";
import Features from "../components/Feature";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
