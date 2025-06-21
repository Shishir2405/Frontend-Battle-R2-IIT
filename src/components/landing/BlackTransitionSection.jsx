import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code,
  Database,
  User,
  Award,
} from "lucide-react";

const MinimalBlackSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Auto-cycle through skills
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, [isInView]);

  const skills = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full Stack",
      description: "Development",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Science",
      description: "Analytics",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Cyber Security",
      description: "Protection",
      color: "from-red-400 to-orange-500",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Project",
      description: "Management",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center relative overflow-hidden"
    >
      {/* Subtle floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8"
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Small header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-px bg-gradient-to-r from-yellow-400 to-orange-500" />
              <span className="text-white/60 text-sm font-mono tracking-wider uppercase">
                Best Learning Experience
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                We Provide Best{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Internship
                </span>{" "}
                For You
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              At INLIGHN TECH, we bridge the gap between academic learning and
              industry needs with immersive internship programs.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive skills showcase */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Central core */}
            <div className="relative">
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>

              {/* Orbiting skill cards */}
              {skills.map((skill, index) => {
                const angle = index * 90 + Date.now() * 0.0005 * (index + 1);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      scale: activeSkill === index ? 1.1 : 1,
                      opacity: activeSkill === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex flex-col items-center justify-center p-3 shadow-lg backdrop-blur-sm border border-white/20`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white mb-1">{skill.icon}</div>
                      <div className="text-xs text-white font-semibold text-center leading-tight">
                        <div>{skill.title}</div>
                        <div className="text-white/80">{skill.description}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {skills.map((_, index) => {
                  const angle = index * 90 + Date.now() * 0.0005 * (index + 1);
                  const radius = 120;
                  const x1 = Math.cos(angle) * 60 + 128;
                  const y1 = Math.sin(angle) * 60 + 128;
                  const x2 = Math.cos(angle) * radius + 128;
                  const y2 = Math.sin(angle) * radius + 128;

                  return (
                    <motion.line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{
                        pathLength: activeSkill === index ? 1 : 0.3,
                        stroke:
                          activeSkill === index
                            ? "rgba(255, 193, 7, 0.5)"
                            : "rgba(255, 255, 255, 0.1)",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Floating info cards */}
            <motion.div
              className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-white text-sm">
                <div className="font-semibold">500+</div>
                <div className="text-white/60">Students</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              animate={{
                y: [0, 10, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <div className="text-white text-sm">
                <div className="font-semibold">100%</div>
                <div className="text-white/60">Job Ready</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Progress indicator on the right */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-4">
          <span className="text-white/60 text-xs font-mono tracking-wider uppercase rotate-90 origin-center whitespace-nowrap">
            Standard
          </span>

          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent relative">
            <motion.div
              className="absolute left-0 w-px bg-gradient-to-b from-yellow-400 to-orange-500"
              initial={{ height: 0, top: "50%" }}
              whileInView={{ height: "60%", top: "20%" }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </div>

          <div className="flex flex-col space-y-1">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full"
                initial={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                animate={{
                  backgroundColor:
                    i < 10
                      ? "rgba(255, 193, 7, 0.8)"
                      : "rgba(255, 255, 255, 0.2)",
                  scale: i < 10 ? [1, 1.5, 1] : 1,
                }}
                transition={{
                  delay: i * 0.1,
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  },
                }}
              />
            ))}
          </div>

          <span className="text-white/60 text-xs font-mono tracking-wider uppercase rotate-90 origin-center whitespace-nowrap">
            Excellence
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default MinimalBlackSection;
