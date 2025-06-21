import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);

  // Cards data
  const cards = [
    {
      id: 1,
      color: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
      content: "STRATEGY",
      accent: "bg-purple-900",
    },
    {
      id: 2,
      color: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
      content: "DESIGN",
      accent: "bg-pink-900",
    },
    {
      id: 3,
      color: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
      content: "BUILD",
      accent: "bg-orange-900",
    },
  ];

  useEffect(() => {
    // Auto shuffle every 800ms, complete after 6 shuffles
    const shuffleInterval = setInterval(() => {
      setShuffleCount((prev) => {
        if (prev >= 5) {
          // After 6 shuffles (0-5)
          clearInterval(shuffleInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete && onComplete();
            }, 500);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(shuffleInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#f9f4eb] z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Card Stack Container */}
          <div className="relative" style={{ width: 200, height: 280 }}>
            {cards.map((card, index) => {
              // Calculate positions for shuffling animation
              const baseRotation = (cards.length - index - 1) * 4;
              const shuffleRotation =
                shuffleCount % 2 === 0
                  ? baseRotation
                  : baseRotation + index * 8;
              const shuffleOffset =
                shuffleCount % 2 === 0 ? 0 : (index - 1) * 15;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute rounded-2xl shadow-xl border border-white/40 overflow-hidden ${card.color}`}
                  style={{
                    width: 200,
                    height: 280,
                    transformOrigin: "center center",
                  }}
                  animate={{
                    rotateZ: shuffleRotation,
                    x: shuffleOffset,
                    y: shuffleOffset * 0.5,
                    scale: 1 + index * 0.02 - cards.length * 0.02,
                    zIndex: cards.length - index,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.05 + index * 0.02 - cards.length * 0.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Card Content */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    {/* Top section */}
                    <div className="flex justify-between items-start">
                      <div
                        className={`w-4 h-4 ${card.accent} rounded-sm`}
                      ></div>
                      <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">
                        {String(card.id).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className={`w-12 h-12 ${card.accent} rounded-sm`}
                        animate={{ rotate: [0, 45, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </div>

                    {/* Bottom text */}
                    <div className="text-center">
                      <div className="text-base font-mono text-gray-700 uppercase tracking-wider font-semibold">
                        {card.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Optional: Shuffle indicator dots */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i <= shuffleCount ? "bg-black/40" : "bg-black/10"
                }`}
                animate={{
                  scale: i === shuffleCount ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-40"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="text-lg font-mono text-black/60 uppercase tracking-wider text-center">
              Loading
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
