import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Target,
  Code,
  ChevronRight,
} from "lucide-react";

const TestimonialSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const autoStart = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
    return () => clearTimeout(autoStart);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timings = [3500, 2500, 4000, 3000, 5000];
      const timer = setTimeout(() => {
        if (currentStep < 5) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsPlaying(false);
          setCurrentStep(0);
          setTimeout(() => setIsPlaying(true), 1500);
        }
      }, timings[currentStep] || 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying]);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      company: "Google",
      quote:
        "INLIGHN TECH's internship program transformed my career. The hands-on projects and mentorship prepared me perfectly for the tech industry.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      stats: { metric: "95%", label: "Job Placement" },
      color: "from-purple-200 to-purple-400",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      company: "Microsoft",
      quote:
        "The data science program exceeded my expectations. Real-world projects and industry mentors made all the difference in my learning journey.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5a1?w=150&h=150&fit=crop&crop=face&auto=format",
      stats: { metric: "100%", label: "Skill Growth" },
      color: "from-pink-200 to-pink-400",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      name: "David Chen",
      role: "Full Stack Developer",
      company: "Amazon",
      quote:
        "From zero to hero! The comprehensive curriculum and practical approach helped me land my dream job in just 6 months.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      stats: { metric: "6 months", label: "To Dream Job" },
      color: "from-orange-200 to-orange-400",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  const achievements = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      number: "500+",
      label: "Students Trained",
      description: "Successfully completed programs",
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      number: "95%",
      label: "Job Placement",
      description: "Within 6 months of completion",
    },
    {
      icon: <Award className="w-7 h-7" />,
      number: "4.9/5",
      label: "Student Rating",
      description: "Average program satisfaction",
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
        className="fixed bottom-6 right-6 z-40 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 hover:bg-white transition-all duration-300 text-gray-900 text-sm font-semibold flex items-center gap-2 shadow-lg group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
        <span>Play Story</span>
      </motion.button>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute opacity-[0.03] ${
              i % 3 === 0
                ? "w-24 h-24 bg-purple-400"
                : i % 3 === 1
                ? "w-16 h-16 bg-pink-400"
                : "w-20 h-20 bg-orange-400"
            } rounded-full blur-xl`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Step 0: Initial Title */}
      <AnimatePresence>
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8"
          >
            <div className="text-center max-w-5xl">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600 tracking-[0.3em] uppercase font-medium">
                  Student Success Stories
                </span>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </motion.div>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-gray-900 mb-6"
              >
                Amazing
              </motion.h1>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-8"
              >
                Transformations
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
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
              animate={{ x: -180 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none text-gray-900 absolute"
            >
              Amazing
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: 180 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent absolute"
            >
              Transformations
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
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center px-8 z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="max-w-6xl flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Large Quote Mark */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  type: "spring",
                  bounce: 0.3,
                }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-400 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/60 relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Quote className="w-16 h-16 text-purple-800" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20" />
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <div className="relative flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/60 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400" />

                  <motion.p
                    className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-800 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    "{testimonials[0].quote}"
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2, type: "spring", bounce: 0.4 }}
                      >
                        <img
                          src={testimonials[0].image}
                          alt={testimonials[0].name}
                          className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white">
                          {testimonials[0].icon}
                        </div>
                      </motion.div>
                      <div>
                        <p className="font-bold text-lg text-gray-900">
                          {testimonials[0].name}
                        </p>
                        <p className="text-gray-600">{testimonials[0].role}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {testimonials[0].company}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 2.2, type: "spring", bounce: 0.3 }}
                      className="text-center bg-gradient-to-br from-purple-200 to-purple-400 rounded-2xl p-4 border border-white/50"
                    >
                      <div className="text-2xl font-black text-purple-800">
                        {testimonials[0].stats.metric}
                      </div>
                      <div className="text-xs font-semibold text-purple-700">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center px-8 z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl w-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 80, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.15,
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  className="relative group"
                >
                  <motion.div
                    className={`bg-gradient-to-br ${testimonial.color} rounded-3xl p-8 shadow-2xl border-4 border-white/60 backdrop-blur-sm h-full relative overflow-hidden`}
                    whileHover={{
                      scale: 1.03,
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  >
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 opacity-10">
                      <motion.div
                        className="absolute top-4 right-4 w-16 h-16 border-2 border-white/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Quote className="absolute bottom-4 left-4 w-8 h-8 text-white/30" />
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/60 shadow-lg"
                    >
                      <div className="text-lg font-black text-gray-800">
                        {testimonial.stats.metric}
                      </div>
                      <div className="text-xs font-semibold text-gray-600">
                        {testimonial.stats.label}
                      </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                      className="flex justify-center mt-12 mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.7 + index * 0.1,
                        type: "spring",
                        bounce: 0.4,
                      }}
                    >
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-2xl object-cover border-4 border-white/80 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          {testimonial.icon}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center mb-6 relative z-10">
                      <motion.p
                        className="text-base leading-relaxed text-gray-800 font-medium mb-6 px-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        "{testimonial.quote}"
                      </motion.p>
                    </div>

                    {/* Author */}
                    <motion.div
                      className="text-center relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    >
                      <p className="font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {testimonial.company}
                      </p>
                    </motion.div>
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center px-8 z-10"
          >
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Proven Success
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Numbers that demonstrate our commitment to student success and
                  career transformation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 60, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.15,
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="text-center group"
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 h-full relative overflow-hidden"
                      whileHover={{
                        scale: 1.05,
                        y: -8,
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.2,
                      }}
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400" />

                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.7 + index * 0.1,
                          duration: 0.6,
                          type: "spring",
                          bounce: 0.4,
                        }}
                        className={`w-16 h-16 mx-auto mb-6 ${
                          index === 0
                            ? "bg-purple-200"
                            : index === 1
                            ? "bg-pink-200"
                            : "bg-orange-200"
                        } rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30" />
                        {achievement.icon}
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.9 + index * 0.1,
                          duration: 0.6,
                          type: "spring",
                          bounce: 0.3,
                        }}
                        className="text-3xl md:text-4xl font-black text-gray-900 mb-3"
                      >
                        {achievement.number}
                      </motion.div>

                      <p className="text-gray-800 font-bold mb-2">
                        {achievement.label}
                      </p>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
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
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0 z-10"
          >
            <div className="h-full flex flex-col justify-center items-center px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-center max-w-4xl"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Ready to Start Your
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                  Success Journey?
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                  Join thousands of students who have transformed their careers
                  with our industry-leading internship programs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl group"
                  >
                    <span>Start Your Journey</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 backdrop-blur-xl text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg border border-gray-200 shadow-xl"
                  >
                    View Programs
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span>Industry Certification</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>Career Support</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Progress Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="flex gap-2 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg">
          {[0, 1, 2, 3, 4, 5].map((step) => (
            <motion.div
              key={step}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentStep >= step
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gray-300"
              }`}
              animate={{
                width: currentStep >= step ? 24 : 8,
                scale: currentStep === step ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
