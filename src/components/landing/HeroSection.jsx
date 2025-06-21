import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

// CardRotate Component for interactive draggable cards
function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.4}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// Compact Card Stack Component
function CompactCardStack() {
  const [cards, setCards] = useState([
    {
      id: 1,
      color: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
      content: "STRATEGY",
      accent: "bg-purple-900",
      image:
        "https://www.inlighntech.com/wp-content/uploads/2025/04/mca-1.webp",
    },
    {
      id: 2,
      color: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
      content: "DESIGN",
      accent: "bg-pink-900",
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/iso-1.png",
    },
    {
      id: 3,
      color: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
      content: "BUILD",
      accent: "bg-orange-900",
      image:
        "https://www.inlighntech.com/wp-content/uploads/2025/04/startup-india-logo-gradient-circle.png",
    },
  ]);

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const firstCard = newCards.shift();
        newCards.push(firstCard);
        return newCards;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: 180,
        height: 240,
        perspective: 1000,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = Math.random() * 4 - 2;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={120}
          >
            <motion.div
              className={`rounded-2xl shadow-lg border border-white/40 overflow-hidden relative ${card.color}`}
              onClick={() => sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.02 - cards.length * 0.02,
                transformOrigin: "85% 85%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              style={{
                width: 180,
                height: 240,
              }}
              whileHover={{
                scale: 1.05 + index * 0.02 - cards.length * 0.02,
                rotateZ: 0,
                transition: { duration: 0.3 },
              }}
            >
              {/* Card Content */}
              <div className="p-6 h-full flex flex-col justify-between">
                {/* Top section with small geometric shape */}
                <div className="flex justify-between items-start">
                  <div className={`w-3 h-3 ${card.accent} rounded-sm`}></div>
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-wide">
                    {String(card.id).padStart(2, "0")}
                  </div>
                </div>

                {/* Center icon area */}
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 ${card.accent} rounded-sm transform rotate-45`}
                  ></div>
                </div>

                {/* Bottom text */}
                <div className="text-center">
                  <div className="text-xs font-mono text-gray-700 uppercase tracking-wider">
                    {card.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

const WebdesignerHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Subtle parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 30]);
  const cardsY = useTransform(scrollY, [0, 500], [0, -20]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Subtle mouse parallax effect
  const mouseParallaxX =
    (mousePosition.x -
      (typeof window !== "undefined" ? window.innerWidth : 0) / 2) *
    0.003;
  const mouseParallaxY =
    (mousePosition.y -
      (typeof window !== "undefined" ? window.innerHeight : 0) / 2) *
    0.003;

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap");

        :root {
          --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont,
            system-ui, sans-serif;
          --font-family-mono: "JetBrains Mono", "Fira Code", monospace;
        }

        .hero-title {
          font-family: var(--font-family-sans);
          font-size: clamp(1.5rem, 8vw, 4rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.02em;
          margin-top: 2.5rem;
        }

        .hero-subtitle {
          font-family: var(--font-family-sans);
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-weight: 400;
          line-height: 1.4;
        }

        .price-badge {
          font-family: var(--font-family-mono);
          font-weight: 600;
        }

        .decorative-text {
          font-family: var(--font-family-mono);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }
      `}</style>

      <div className="min-h-screen bg-[#f9f4eb] overflow-hidden relative">
        {/* Top Navigation Dots */}
        <div className="absolute top-20 left-0 right-0 flex justify-between items-center px-12 z-10 mt-10">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-black rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          <motion.div
            className="decorative-text text-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            3DT7
          </motion.div>

          <motion.div
            className="decorative-text text-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            A113
          </motion.div>

          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-black rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="min-h-screen flex items-center justify-center max-w-7xl mx-auto px-12 pt-24">
          {/* Centered Layout */}
          <div className="text-center relative">
            {/* Main Title */}
            <motion.div
              className="hero-title mb-12"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.div
                className="overflow-hidden"
                style={{
                  transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px)`,
                }}
              >
                <motion.span
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="block text-black mt-5"
                >
                  INLIGHN{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    TECH
                  </span>
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Interactive Card Stack - Positioned center */}
            <motion.div
              className="flex justify-center mb-16"
              style={{ y: cardsY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div
                style={{
                  transform: `translate(${mouseParallaxX * 2}px, ${
                    mouseParallaxY * 2
                  }px)`,
                }}
              >
                <CompactCardStack />
              </motion.div>
            </motion.div>



            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="max-w-2xl mx-auto"
            >
              <p className="hero-subtitle text-black/80 mb-4">
                Gain real-world experience with our immersive internship
                <br />
                programs in Cyber Security, Full Stack Development, Data
                <br />
                Science, Data Analyst and in various tech domains.{" "}
                <span className="text-black/50">
                  Learn today, lead tomorrow.
                </span>
              </p>
            </motion.div>

            {/* Bottom Decorative Elements */}
            <motion.div
              className="flex justify-center mt-16 space-x-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="decorative-text text-black/40"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TECH EDUCATION & INNOVATION
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Background Elements */}
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
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <motion.div
            className="w-4 h-6 border border-black/30 rounded-full flex justify-center"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-0.5 h-1.5 bg-black/40 rounded-full mt-1.5"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default WebdesignerHero;
