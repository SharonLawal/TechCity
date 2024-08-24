// src/components/pages/HomePage/HomePage.jsx
import React from 'react';
import Hero from "../LandingPage/Hero";
import Navbar from "../LandingPage/Navbar";
import AboutUs from "../LandingPage/AboutUs";
import Services from "../LandingPage/Services";
import FAQ from "../LandingPage/FAQ";
import Testimonials from "../LandingPage/Testimonials";
import Footer from "../LandingPage/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
