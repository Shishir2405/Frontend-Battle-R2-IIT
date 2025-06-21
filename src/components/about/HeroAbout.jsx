import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Phone, Mail, Search, X, ArrowRight } from "lucide-react";

const RoadmapJourney = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [pathComplete, setPathComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPathComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Registration Form & Portal Access",
      description:
        "Register yourself at InLighnTech and get your portal access. Begin your journey with us by creating your account.",
      icon: FileText,
      pathPosition: { x: 50, y: 50 },
      color: "bg-purple-200",
    },
    {
      id: 2,
      title: "Interview Call - Next Day",
      description:
        "Schedule and attend your interview call with our team. We'll discuss your goals and expectations.",
      icon: Phone,
      pathPosition: { x: 50, y: 250 },
      color: "bg-pink-200",
    },
    {
      id: 3,
      title: "Offer Letter with Batch Group Link",
      description:
        "Once you receive Offer Letter, You will get access of WhatsApp Group for your batch coordination.",
      icon: Mail,
      pathPosition: { x: 200, y: 30 },
      color: "bg-orange-200",
    },
    {
      id: 4,
      title: "Select Your Project and Submit Work",
      description:
        "Choose your project from the portal and submit your completed work for evaluation.",
      icon: Search,
      pathPosition: { x: 350, y: 220 },
      color: "bg-blue-200",
    },
    {
      id: 5,
      title: "Experience Letter & Certificate",
      description:
        "Receive your ISO-Certified Completion Certificate and Experience Letter upon successful completion.",
      icon: FileText,
      pathPosition: { x: 350, y: 60 },
      color: "bg-green-200",
    },
  ];

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  const pointVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap");
      `}</style>

      <div className="w-full min-h-screen bg-[#f9f4eb] relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 md:px-12 z-10">
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
            className="text-xs font-mono text-black/60 uppercase tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            JOURNEY
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

        {/* Top Heading Section */}
        <motion.div
          className="text-center pt-24 pb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-black font-black leading-none tracking-tight mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            ABOUT{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              US
            </span>{" "}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-12 lg:px-20 gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2
                  className="text-black font-black leading-tight tracking-tight mb-6"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Your Journey to{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    Success
                  </span>
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At InLighn Tech, we believe that the future of education lies
                  in bridging the gap between academic learning and industry
                  needs. Our comprehensive internship program is designed to
                  equip you with practical skills and real-world experience.
                </p>

                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  Follow our structured 5-step journey that takes you from
                  registration to certification. Each step is carefully designed
                  to build your confidence and expertise in your chosen field.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Roadmap Visualization */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-full max-w-lg h-[400px]"
            >
              <svg
                className="absolute inset-0 top-2 w-full h-full py-4"
                viewBox="0 0 400 350"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Enhanced Path */}
                <motion.path
                  d="M 50 50
                     L 50 250
                     Q 50 280, 80 280
                     L 170 280
                     Q 200 280, 200 250
                     L 200 30
                     Q 200 0, 230 0
                     L 320 0
                     Q 350 0, 350 30
                     L 350 220"
                  stroke="#000000"
                  strokeWidth="18"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* Road Center Dashed Line */}
                <motion.path
                  d="M 50 50
                     L 50 250
                     Q 50 280, 80 280
                     L 170 280
                     Q 200 280, 200 250
                     L 200 30
                     Q 200 0, 230 0
                     L 320 0
                     Q 350 0, 350 30
                     L 350 220"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="15 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>

              {/* Step Points */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${(step.pathPosition.x / 400) * 100}%`,
                    top: `${(step.pathPosition.y / 350) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  variants={pointVariants}
                  initial="hidden"
                  animate={pathComplete ? "visible" : "hidden"}
                  transition={{ delay: index * 0.3 }}
                  onClick={() => setSelectedStep(step)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    {/* Ripple Effect */}
                    <motion.div
                      className={`absolute inset-0 ${step.color} rounded-full opacity-30`}
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.6,
                      }}
                    />

                    {/* Main Point */}
                    <motion.div
                      className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-xl border-3 border-white relative z-10`}
                      whileHover={{
                        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      }}
                    >
                      <step.icon className="w-5 h-5 text-gray-700" />

                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {step.id}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Modal Card */}
        <AnimatePresence>
          {selectedStep && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-lg w-full mx-4 relative shadow-2xl"
                initial={{ scale: 0.5, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: 100 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedStep(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Step Icon */}
                <div
                  className={`w-16 h-16 ${selectedStep.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <selectedStep.icon className="w-8 h-8 text-gray-700" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wide mr-2">
                      STEP {selectedStep.id}
                    </span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                    {selectedStep.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedStep.description}
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <span>Continue Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-black/10 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RoadmapJourney;
