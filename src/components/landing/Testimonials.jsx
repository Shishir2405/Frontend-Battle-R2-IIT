import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const TestimonialSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const autoStart = setTimeout(() => {
      setIsPlaying(true);
    }, 800);
    return () => clearTimeout(autoStart);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timings = [3000, 2000, 3500, 2500, 4000];
      const timer = setTimeout(() => {
        if (currentStep < 5) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsPlaying(false);
          setCurrentStep(0);
          setTimeout(() => setIsPlaying(true), 1000);
        }
      }, timings[currentStep] || 2500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying]);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const testimonials = [
    {
      name: "Marcus Weber",
      role: "Geschäftsführer, TechStartup",
      company: "innovateGmbH",
      quote:
        "Eduard hat unsere Conversion Rate um 240% gesteigert. Seine Webflow-Entwicklung ist einfach brillant – jede Animation sitzt perfekt.",
      image: "👨‍💼",
      stats: { metric: "240%", label: "Conversion Rate" },
      color: "from-purple-200 to-purple-400",
    },
    {
      name: "Sarah Müller",
      role: "Marketing Direktorin",
      company: "DesignStudio Nord",
      quote:
        "Die Website, die Eduard für uns entwickelt hat, ist ein Kunstwerk. Unsere Kunden sind begeistert von der User Experience.",
      image: "👩‍💻",
      stats: { metric: "95%", label: "Kundenzufriedenheit" },
      color: "from-pink-200 to-pink-400",
    },
    {
      name: "Thomas Klein",
      role: "E-Commerce Manager",
      company: "Online Ventures",
      quote:
        "Seit dem Relaunch mit Eduard verkaufen wir 3x mehr. Seine strategische Herangehensweise ist beeindruckend.",
      image: "👨‍🚀",
      stats: { metric: "300%", label: "Umsatzsteigerung" },
      color: "from-orange-200 to-orange-400",
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "50+",
      label: "Erfolgreiche Projekte",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "100%",
      label: "Kundenzufriedenheit",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "250%",
      label: "Durchschnittliche ROI-Steigerung",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f9f4eb] relative overflow-hidden">
      {/* Control Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        onClick={resetDemo}
        className="fixed bottom-6 right-6 z-40 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 hover:bg-white transition-all duration-300 text-gray-900 text-sm font-semibold flex items-center gap-2 shadow-lg"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowRight className="w-4 h-4" />
        Story abspielen
      </motion.button>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Step 0: Initial Title */}
      <AnimatePresence>
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8"
          >
            <div className="text-center max-w-4xl">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-gray-600 mb-6 tracking-[0.3em] uppercase font-medium"
              >
                ★ Kundenstimmen
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-gray-900 mb-8"
              >
                Zufriedene
              </motion.h1>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-8"
              >
                Kunden
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 1: Words Split and Move */}
      <AnimatePresence>
        {currentStep === 1 && (
          <div className="absolute inset-0 flex items-center justify-center px-8 z-10">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: -200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-gray-900 absolute"
            >
              Zufriedene
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: 200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent absolute"
            >
              Kunden
            </motion.h1>
          </div>
        )}
      </AnimatePresence>

      {/* Step 2: First Featured Testimonial */}
      <AnimatePresence>
        {currentStep === 2 && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center px-8 z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-6xl flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Large Quote Mark */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-400 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/50">
                  <Quote className="w-16 h-16 text-purple-800" />
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <div className="relative flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50"
                >
                  <motion.p className="text-xl lg:text-2xl leading-relaxed mb-8 text-gray-800 font-medium">
                    "{testimonials[0].quote}"
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-500 rounded-2xl flex items-center justify-center text-2xl">
                        {testimonials[0].image}
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-900">
                          {testimonials[0].name}
                        </p>
                        <p className="text-gray-600">{testimonials[0].role}</p>
                        <p className="text-sm text-gray-500">
                          {testimonials[0].company}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.6 }}
                      className="text-center bg-gradient-to-br from-purple-200 to-purple-400 rounded-2xl p-4"
                    >
                      <div className="text-3xl font-black text-purple-800">
                        {testimonials[0].stats.metric}
                      </div>
                      <div className="text-sm font-semibold text-purple-700">
                        {testimonials[0].stats.label}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Three Testimonials Grid */}
      <AnimatePresence>
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center px-8 z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl w-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.3 + index * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="relative group"
                >
                  <motion.div
                    className={`bg-gradient-to-br ${testimonial.color} rounded-3xl p-8 shadow-2xl border-4 border-white/50 backdrop-blur-sm h-full relative overflow-hidden`}
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <Quote className="w-8 h-8" />
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="absolute top-4 left-4 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/50"
                    >
                      <div className="text-lg font-black text-gray-800">
                        {testimonial.stats.metric}
                      </div>
                      <div className="text-xs font-semibold text-gray-600">
                        {testimonial.stats.label}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="mt-16 mb-6">
                      <p className="text-lg leading-relaxed text-gray-800 font-medium mb-6">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl border border-white/50">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-700">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 4: Achievements Grid */}
      <AnimatePresence>
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center px-8 z-10"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                  Bewiesene Resultate
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Zahlen, die für sich sprechen – Erfolg, der messbar ist.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 h-full"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                        className={`w-16 h-16 mx-auto mb-6 ${
                          index === 0
                            ? "bg-purple-200"
                            : index === 1
                            ? "bg-pink-200"
                            : "bg-orange-200"
                        } rounded-2xl flex items-center justify-center`}
                      >
                        {achievement.icon}
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
                      >
                        {achievement.number}
                      </motion.div>

                      <p className="text-gray-600 font-semibold">
                        {achievement.label}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 5: Call to Action */}
      <AnimatePresence>
        {currentStep === 5 && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-10"
          >
            <div className="h-full flex flex-col justify-center items-center px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center max-w-4xl"
              >
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
                  Bereit für Ihren
                </h2>
                <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                  Erfolg?
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                  Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre
                  Kunden begeistert und Ihr Business transformiert.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl"
                  >
                    <span>Projekt starten</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/80 backdrop-blur-xl text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg border border-gray-200 shadow-xl"
                  >
                    Portfolio ansehen
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="mt-12 text-sm text-gray-500"
                >
                  Kostenlose Beratung • 100% Zufriedenheitsgarantie • Deutsche
                  Qualität
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="flex gap-2 p-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg">
          {[0, 1, 2, 3, 4, 5].map((step) => (
            <motion.div
              key={step}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentStep >= step ? "bg-gray-900" : "bg-gray-300"
              }`}
              animate={{
                scale: currentStep === step ? 1.5 : 1,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
