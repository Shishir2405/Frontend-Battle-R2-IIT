import React from "react";
import { motion } from "framer-motion";
import InteractiveRoadmapSection from "../components/about/HeroAbout";
import InnovativeAboutSections from "../components/about/InnovativeAboutSections"; // Import the new component

const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-[#f9f4eb] relative overflow-hidden"
      data-bg="light"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 opacity-5 ${
              i % 3 === 0
                ? "bg-purple-300"
                : i % 3 === 1
                ? "bg-pink-300"
                : "bg-orange-300"
            } rounded-full blur-xl`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-24 pb-20">
        <div className="text-center">
          {/* Header */}
          <InteractiveRoadmapSection />
        </div>
      </div>

      {/* New Innovative About Sections */}
      <div className="relative z-10">
        <InnovativeAboutSections />
      </div>
    </div>
  );
};

export default AboutPage;
