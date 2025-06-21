import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Square, Clock, Monitor, Sparkles, ArrowRight } from "lucide-react";

// CardRotate Component for interactive draggable cards
function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

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
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// Interactive Card Stack Component with auto-rotation
function CardStack({
  randomRotation = true,
  sensitivity = 200,
  cardDimensions = { width: 320, height: 400 },
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true,
}) {
  const [cards, setCards] = useState([
    {
      id: 1,
      color: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
      icon: <Square className="w-12 h-12 text-purple-900" />,
      label: "STRATEGY",
      services: [
        "Visual Research",
        "Competitor Analysis",
        "User Journey",
        "Wireframes",
      ],
      image:
        "https://www.inlighntech.com/wp-content/uploads/2025/04/mca-1.webp",
    },
    {
      id: 2,
      color: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
      icon: <Clock className="w-12 h-12 text-pink-900" />,
      label: "DESIGN",
      services: [
        "UI/UX Design",
        "Brand Identity",
        "Prototyping",
        "Design System",
      ],
      image: "https://www.inlighntech.com/wp-content/uploads/2025/04/iso-1.png",
    },
    {
      id: 3,
      color: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
      icon: <Monitor className="w-12 h-12 text-orange-900" />,
      label: "BUILD",
      services: [
        "Webflow Development",
        "Animations",
        "CMS Setup",
        "SEO Optimization",
      ],
      image:
        "https://www.inlighntech.com/wp-content/uploads/2025/04/startup-india-logo-gradient-circle.png",
    },
  ]);

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const firstCard = newCards.shift();
        newCards.push(firstCard);
        return newCards;
      });
    }, 3000);

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
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 1000,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 8 - 4 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-3xl shadow-2xl border-4 border-white/60 backdrop-blur-lg overflow-hidden relative"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 6 + randomRotate,
                scale: 1 + index * 0.03 - cards.length * 0.03,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
              whileHover={{
                scale: 1.05 + index * 0.03 - cards.length * 0.03,
                rotateZ: 0,
                transition: { duration: 0.3 },
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Subtle parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 50]);
  const cardsY = useTransform(scrollY, [0, 500], [0, -30]);
  const backgroundY = useTransform(scrollY, [0, 500], [0, 75]);

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
    0.005;
  const mouseParallaxY =
    (mousePosition.y -
      (typeof window !== "undefined" ? window.innerHeight : 0) / 2) *
    0.005;

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

        :root {
          --font-family-normal: "Inter", -apple-system, BlinkMacSystemFont,
            "Avenir Next", Avenir, "Segoe UI", "Helvetica Neue", Helvetica,
            Cantarell, Ubuntu, Roboto, Noto, Arial, sans-serif;
          --font-size-h1: clamp(3rem, 6vw, 8rem);
          --font-size-p1: clamp(0.9rem, 1.5vw, 1.1rem);
        }

        .hero-title {
          font-family: var(--font-family-normal);
          font-size: var(--font-size-h1);
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-family: var(--font-family-normal);
          font-size: var(--font-size-p1);
          font-weight: 500;
        }
      `}</style>

      <div className="min-h-screen bg-[#f9f4eb] overflow-hidden relative">
        {/* Subtle background elements */}
        <motion.div
          className="absolute inset-0 opacity-3"
          style={{ y: backgroundY }}
        >
          {/* Very subtle floating shapes */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-xl"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 50}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-8 pt-16">
          {/* Left Side - Text Content */}
          <motion.div className="flex-1 max-w-4xl" style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{
                transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px)`,
              }}
            >
              {/* Main Title */}
              <div className="hero-title mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="overflow-hidden"
                >
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="block"
                  >
                    INLIGHN
                  </motion.span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="overflow-hidden"
                >
                  <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
                  >
                    TECH
                  </motion.span>
                </motion.div>
              </div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="space-y-6"
              >
                {/* Price Badge */}
                <motion.div
                  className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full text-base font-bold"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Explore Internships</span>
                </motion.div>

                {/* Description */}
                <p className="hero-subtitle max-w-2xl leading-relaxed text-gray-700">
                  Gain real-world experience with our immersive internship
                  programs in Cyber Security, Full Stack Development, Data
                  Science, Data Analyst and in various tech domains.
                </p>

                <p className="text-base text-gray-500 max-w-xl">
                Learn
                today, lead tomorrow.
                </p>
                
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Card Stack */}
          <motion.div
            className="flex-shrink-0 relative"
            style={{ y: cardsY }}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <motion.div
              style={{
                transform: `translate(${mouseParallaxX * 3}px, ${
                  mouseParallaxY * 3
                }px)`,
              }}
            >
              <CardStack />
            </motion.div>

            {/* Subtle decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-40 blur-sm"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-30 blur-sm"
              animate={{
                scale: [1.05, 1, 1.05],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Subtle scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-5 h-8 border border-gray-400 rounded-full flex justify-center opacity-60"
            animate={{ opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-0.5 h-2 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
