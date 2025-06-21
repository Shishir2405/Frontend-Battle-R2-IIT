import React from "react";
import HeroSection from "../components/landing/HeroSection";
import BlackTransitionSection from "../components/landing/BlackTransitionSection";
import ServiceSection from "../components/landing/ServiceSection";
import TestimonialSection from "../components/landing/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BlackTransitionSection />
      <ServiceSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
