import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Rocket,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Zap,
  Globe,
  Code,
  Brain,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";

const MinimalAboutSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef([]);

  // Section data
  const sections = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "FUTURE FORWARD",
      description:
        "To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators.",
      number: "01",
      icon: Target,
      features: [
        { icon: Globe, text: "Global EdTech Leadership" },
        { icon: Brain, text: "Innovation-Driven Learning" },
        { icon: Rocket, text: "Future-Ready Skills" },
      ],
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "EMPOWERMENT DRIVEN",
      description:
        "To empower students through immersive, real-world learning experiences via tailored internship programs that build practical skills and industry confidence.",
      number: "02",
      icon: Rocket,
      features: [
        { icon: Users, text: "Student Empowerment" },
        { icon: Code, text: "Real-World Projects" },
        { icon: Zap, text: "Skill Development" },
      ],
    },
    {
      id: "stats",
      title: "Our Impact",
      subtitle: "PROVEN RESULTS",
      description:
        "Numbers that showcase our commitment to excellence and transformative student success stories.",
      number: "03",
      icon: TrendingUp,
      stats: [
        { value: "5000+", label: "Interns Enrolled", icon: Users },
        { value: "9000+", label: "Projects Completed", icon: Code },
        { value: "93%", label: "Satisfaction Rate", icon: Star },
        { value: "30+", label: "Expert Instructors", icon: Award },
      ],
    },
    {
      id: "benefits",
      title: "Why Choose Us",
      subtitle: "EXCELLENCE DELIVERED",
      description:
        "Discover the unique advantages that make INLIGHN Tech the perfect choice for your transformative learning journey.",
      number: "04",
      icon: Award,
      benefits: [
        {
          title: "Premium Resources",
          description:
            "Expertly curated learning materials with hands-on projects, real-world applications, and personalized mentorship.",
          icon: BookOpen,
        },
        {
          title: "Industry Experts",
          description:
            "Learn from seasoned professionals who bring cutting-edge industry insights and practical experience.",
          icon: Users,
        },
        {
          title: "Portal Access",
          description:
            "24/7 access to comprehensive learning portal with course materials, progress tracking, and community support.",
          icon: Shield,
        },
      ],
    },
  ];

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Subtle mouse parallax effect
  const mouseParallaxX = (mousePosition.x - 50) * 0.002;
  const mouseParallaxY = (mousePosition.y - 50) * 0.002;

  // Individual section component
  const SectionCard = ({ section, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
      <div
        ref={(el) => {
          sectionRefs.current[index] = el;
          ref.current = el;
        }}
        data-index={index}
        className="relative min-h-screen flex items-center justify-center px-8"
      >
        {/* Subtle background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
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

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Content */}
            <motion.div
              className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                transform: `translate(${mouseParallaxX * 5}px, ${
                  mouseParallaxY * 5
                }px)`,
              }}
            >
              {/* Header */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Subtitle */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-px bg-black/30" />
                  <span className="text-black/60 text-sm font-mono tracking-wider uppercase">
                    {section.subtitle}
                  </span>
                </div>

                {/* Number and Icon */}
                <div className="flex items-center space-x-4">
                  <span className="text-6xl font-black text-black/20 font-mono leading-none">
                    {section.number}
                  </span>
                  <motion.div
                    className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <section.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h2
                  className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  }}
                >
                  {section.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`inline-block ${
                        i === section.title.split(" ").length - 1
                          ? "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {word}{" "}
                    </span>
                  ))}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg text-black/70 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {section.description}
                </motion.p>
              </motion.div>

              {/* Features */}
              {section.features && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {section.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3 group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-black rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <span className="text-black/70 font-medium group-hover:text-black transition-colors">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Learn More Button */}
              <motion.button
                className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.5 }}
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

            {/* Visual Content */}
            <motion.div
              className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                transform: `translate(${-mouseParallaxX * 3}px, ${
                  -mouseParallaxY * 3
                }px)`,
              }}
            >
              {section.id === "stats" ? (
                <StatsGrid section={section} isInView={isInView} />
              ) : section.id === "benefits" ? (
                <BenefitsGrid section={section} isInView={isInView} />
              ) : (
                <FeatureCard section={section} isInView={isInView} />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  // Stats Grid Component
  const StatsGrid = ({ section, isInView }) => (
    <div className="grid grid-cols-2 gap-4">
      {section.stats?.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-center space-y-3">
            <motion.div
              className="w-10 h-10 mx-auto bg-black rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </motion.div>
            <div className="text-3xl font-black text-black font-mono">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-black/60 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Benefits Grid Component
  const BenefitsGrid = ({ section, isInView }) => (
    <div className="space-y-4">
      {section.benefits?.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 group relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
          whileHover={{ x: 8, scale: 1.02 }}
        >
          <div className="flex items-start space-x-4 relative z-10">
            <motion.div
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <benefit.icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-black">{benefit.title}</h3>
              <p className="text-black/70 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Feature Card Component
  const FeatureCard = ({ section, isInView }) => (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-orange-600/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 text-center space-y-6">
          {/* Central Icon */}
          <motion.div
            className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <section.icon className="w-10 h-10 text-white" />
          </motion.div>

          {/* Feature showcase */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black">{section.title}</h3>
            <div className="grid grid-cols-1 gap-3">
              {section.features?.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center space-x-2 text-black/70"
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-black/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative bg-[#f9f4eb] overflow-hidden">
      {/* Progress indicator */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`w-3 h-3 rounded-full border-2 border-black/40 cursor-pointer transition-all duration-300 ${
              activeSection === index
                ? "bg-black border-black scale-125"
                : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={section.id}>
          <SectionCard section={section} index={index} />
        </div>
      ))}
    </div>
  );
};

export default MinimalAboutSections;
