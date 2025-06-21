import React from "react";
import { motion } from "framer-motion";

const SpecialPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f4eb] relative overflow-hidden" data-bg="light">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 opacity-5 ${
              i % 3 === 0 ? "bg-purple-300" : i % 3 === 1 ? "bg-pink-300" : "bg-orange-300"
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

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-none"
            >
              What's
            </motion.h1>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-8 tracking-tight leading-none"
            >
              Special
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Discover what makes INLIGHN TECH unique and special in the world of tech education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-8"
            />
          </motion.div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white/50"
            >
              <span className="text-3xl">✨</span>
            </motion.div>

            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Something Special Coming
            </h2>
            
            <p className="text-gray-600 text-lg">
              We're crafting a unique page that will highlight what makes our internship programs, mentorship approach, and learning methodology truly special and different from the rest.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPage;