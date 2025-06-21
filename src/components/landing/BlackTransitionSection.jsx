import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  MousePointer,
  Heart,
  Zap,
  Eye,
  Brain,
  Fingerprint,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

const BlackTransitionSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollY } = useScroll();

  // Enhanced parallax effects
  const textY = useTransform(scrollY, [500, 1500], [100, -200]);
  const dotsY = useTransform(scrollY, [500, 1500], [0, -150]);
  const backgroundY = useTransform(scrollY, [500, 1500], [0, 100]);
  const orbsY = useTransform(scrollY, [500, 1500], [0, -80]);

  // Smooth spring animations
  const smoothMouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePosition({ x: e.clientX, y: e.clientY });
      smoothMouseX.set((e.clientX - centerX) * 0.02);
      smoothMouseY.set((e.clientY - centerY) * 0.02);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [smoothMouseX, smoothMouseY]);

  // Auto-cycle through highlighted words
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  const morphingShapes = [
    {
      id: 1,
      path: "M20,20 Q50,10 80,20 T140,20 Q170,30 200,20 L200,80 Q170,70 140,80 T80,80 Q50,90 20,80 Z",
    },
    {
      id: 2,
      path: "M20,30 Q60,5 100,30 Q140,55 180,30 Q200,50 180,70 Q140,45 100,70 Q60,95 20,70 Q0,50 20,30 Z",
    },
    {
      id: 3,
      path: "M30,20 Q70,0 110,20 Q150,40 190,20 Q210,60 190,80 Q150,60 110,80 Q70,100 30,80 Q10,40 30,20 Z",
    },
  ];

  const interactiveElements = [
    {
      icon: <Eye className="w-8 h-8" />,
      label: "Visual",
      color: "from-blue-400 to-cyan-500",
      description: "Schöne Ästhetik",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      label: "Mental",
      color: "from-purple-400 to-violet-500",
      description: "Intuitive Logik",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      label: "Tactile",
      color: "from-pink-400 to-rose-500",
      description: "Fühlbare Reaktion",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      label: "Emotional",
      color: "from-red-400 to-orange-500",
      description: "Echte Verbindung",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Dynamic",
      color: "from-yellow-400 to-orange-500",
      description: "Lebendige Energie",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      label: "Magic",
      color: "from-green-400 to-emerald-500",
      description: "Überraschende Momente",
    },
  ];

  const highlightWords = [
    "Bewegungen",
    "Übergänge",
    "Reaktionen",
    "Gefühl",
    "Erlebnis",
    "Magie",
  ];

  return (
    <>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f0f0f0 50%,
            #ffffff 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .morphing-blob {
          filter: blur(1px) contrast(20);
        }

        .text-reveal {
          background: linear-gradient(
            90deg,
            transparent 0%,
            #fff 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .floating-text {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="h-screen bg-black flex items-center justify-center relative overflow-hidden"
      >
        {/* Dynamic morphing background */}
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <radialGradient id="meshGrad1" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#4338ca" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="meshGrad2" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {morphingShapes.map((shape, index) => (
                <motion.path
                  key={shape.id}
                  d={shape.path}
                  fill={`url(#meshGrad${(index % 2) + 1})`}
                  className="morphing-blob"
                  animate={{
                    d: morphingShapes.map((s) => s.path),
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 2,
                  }}
                  style={{
                    transform: `translate(${
                      smoothMouseX.get() * (index + 1) * 5
                    }px, ${smoothMouseY.get() * (index + 1) * 5}px)`,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Particle system */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 2 + 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 8,
              }}
            />
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center h-screen">
            {/* Left side - Interactive elements */}
            <motion.div
              className="col-span-3 space-y-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                x: smoothMouseX,
                y: smoothMouseY,
              }}
            >
              {/* Rotating text */}
              <motion.div
                className="transform -rotate-90 origin-left mb-20"
                animate={{ rotateZ: isInView ? -90 : -45 }}
                transition={{ duration: 1 }}
              >
                <span className="text-white/60 text-sm font-mono tracking-[0.4em] uppercase floating-text">
                  Ein Klick mit Wirkung
                </span>
              </motion.div>
            </motion.div>

            {/* Center - Main content with advanced animations */}
            <motion.div className="col-span-6 text-center" style={{ y: textY }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="mb-16"
              >
                {/* Advanced animated heading */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                  <motion.span
                    className="block gradient-text"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    We Provide Best
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    internship For You
                  </motion.span>
                </h2>

                {/* Dynamic text with word highlighting */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                >
               
                  <span>
                    At INLIGHN TECH, we believe that the future of education
                    lies in bridging the gap between academic learning and
                    industry needs. Founded with a passion for providing
                    meaningful and immersive learning experiences, we offer
                    internship programs that equip students and young
                    professionals with practical skills in Full Stack
                    Development, Data Science, and Project Management.{" "}
                  </span>
                 
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ight side - More interactive elements */}
            <motion.div
              className="col-span-3 flex flex-col items-end space-y-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                x: smoothMouseX,
                y: smoothMouseY,
              }}
            >
              {/* Progress indicator with animation */}
              <div className="flex flex-col items-center space-y-4">
                <motion.span
                  className="text-white/60 text-sm font-mono tracking-wider uppercase"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Standard
                </motion.span>

                <div className="w-px h-40 bg-gradient-to-b from-transparent via-white/40 to-transparent relative">
                  <motion.div
                    className="absolute left-0 w-px bg-gradient-to-b from-yellow-400 to-orange-500"
                    initial={{ height: 0, top: "50%" }}
                    whileInView={{ height: "60%", top: "20%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-1 rounded-full"
                      initial={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      animate={{
                        backgroundColor:
                          i < 15
                            ? "rgba(255, 193, 7, 0.8)"
                            : "rgba(255, 255, 255, 0.2)",
                        scale: i < 15 ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.1,
                        delay: i * 0.05,
                        scale: {
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        },
                      }}
                    />
                  ))}
                </div>

                <div className="w-px h-40 bg-gradient-to-b from-transparent via-white/40 to-transparent" />


              </div>

   
            </motion.div>
          </div>
        </div>

        {/* Advanced floating orbs system */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: orbsY }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [0, Math.random() * 1.5 + 0.5, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            >
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-br ${interactiveElements[
                  i % interactiveElements.length
                ].color
                  .replace("from-", "from-")
                  .replace("to-", "to-")} blur-sm`}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default BlackTransitionSection;
