import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Target,
  Eye,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const MinimalAboutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const slides = [
    {
      id: 0,
      icon: <FileText className="w-6 h-6" />,
      title: "About INLIGHN TECH",
      content:
        "At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences.",
      highlight: "Bridging Education & Industry",
      stats: { number: "500+", label: "Students" },
    },
    {
      id: 1,
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      content:
        "To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with practical skills and confidence.",
      highlight: "Empowering Through Experience",
      stats: { number: "95%", label: "Success Rate" },
    },
    {
      id: 2,
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision",
      content:
        "To become the leading platform for practical tech education, creating a generation of skilled professionals ready to tackle real-world challenges in the fast-evolving technology industry.",
      highlight: "Future-Ready Professionals",
      stats: { number: "50+", label: "Partners" },
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Subtle mouse parallax effect
  const mouseParallaxX =
    (mousePosition.x -
      (typeof window !== "undefined" ? window.innerWidth : 0) / 2) *
    0.002;
  const mouseParallaxY =
    (mousePosition.y -
      (typeof window !== "undefined" ? window.innerHeight : 0) / 2) *
    0.002;

  return (
    <section className="min-h-screen bg-[#f9f4eb] flex items-center relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black/10 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <div className="w-8 h-px bg-black/30" />
            <span className="text-black/60 text-sm font-mono tracking-wider uppercase">
              Know More About Us
            </span>
            <div className="w-8 h-px bg-black/30" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight"
            style={{
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              INLIGHN TECH
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our journey, mission, and vision as we transform education
            through innovative programs
          </motion.p>
        </motion.div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 30, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-6"
                  style={{
                    transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px)`,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black text-white shadow-lg"
                  >
                    {slides[currentSlide].icon}
                  </motion.div>

                  {/* Highlight */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-sm font-mono text-black/60 tracking-wider uppercase"
                  >
                    {slides[currentSlide].highlight}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-3xl md:text-4xl font-black text-black leading-tight"
                    style={{
                      fontFamily:
                        "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                    }}
                  >
                    {slides[currentSlide].title}
                  </motion.h3>

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-black/70 leading-relaxed"
                  >
                    {slides[currentSlide].content}
                  </motion.p>

                  {/* Learn More Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="group inline-flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              style={{
                transform: `translate(${-mouseParallaxX}px, ${-mouseParallaxY}px)`,
              }}
            >
              {/* Main Card */}
              <motion.div
                className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Main Stat */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-center mb-8"
                    >
                      <motion.div
                        className="text-5xl font-black text-black mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {slides[currentSlide].stats.number}
                      </motion.div>
                      <div className="text-sm text-black/60 uppercase tracking-wider">
                        {slides[currentSlide].stats.label}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress Bar */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-black/70">
                      <span>Excellence</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Mini Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-black">4+</div>
                      <div className="text-xs text-black/60">Years</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-black">100%</div>
                      <div className="text-xs text-black/60">Job Ready</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-black">24/7</div>
                      <div className="text-xs text-black/60">Support</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-white/80 rounded-full border border-white/60 flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-2 h-2 bg-black/40 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/80 rounded-full border border-white/60 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Subtle orbiting dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-black/20 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: `${60 + i * 20}px 0`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center mt-16 space-x-8"
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 text-black hover:bg-white/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="flex items-center space-x-3">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-10 h-3" : "w-3 h-3"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className={`w-full h-full transition-all duration-300 ${
                      index === currentSlide ? "bg-black" : "bg-black/30"
                    }`}
                  />
                  {index === currentSlide && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 text-black hover:bg-white/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Auto-play Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center mt-8"
          >
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-black text-white"
                  : "bg-white/70 text-black hover:bg-white/90"
              } backdrop-blur-sm border border-white/50 shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? "Auto-Playing" : "Enable Auto-Play"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinimalAboutCarousel;
