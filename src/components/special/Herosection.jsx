import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Star,
  Award,
  Trophy,
  BookOpen,
  Play,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Calendar,
  Gift,
  Code,
  Clock,
  Brain,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Pause,
} from "lucide-react";

// Timeline Component
const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 flex items-center justify-center shadow-xl border-4 border-white">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-black text-amber-800/60">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-black text-amber-800/60">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-amber-200 to-transparent rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

// Enhanced Animated Testimonials
const AnimatedTestimonials = ({ testimonials, autoplay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-7xl px-8 py-20 font-sans">
      <div className="relative grid grid-cols-1 gap-32 lg:grid-cols-2 items-center">
        {/* Left side - Images with enhanced animations */}
        <div className="relative">
          <div className="relative h-96 w-full max-w-md mx-auto">
            {/* Floating decoration elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-xl"
            />

            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    z: -100,
                    rotate: randomRotateY(),
                    y: 50,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.9,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    y: isActive(index) ? 0 : 30,
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    z: 100,
                    rotate: randomRotateY(),
                    y: -50,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative group">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                    />
                    {/* Floating badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{
                        scale: isActive(index) ? 1 : 0,
                        rotate: isActive(index) ? 0 : -180,
                      }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                    >
                      ⭐ Featured
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side - Content with enhanced typography */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            key={active}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Name and role with decorative elements */}
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute -top-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {testimonials[active].name}
              </h3>
              <p className="text-lg text-purple-600 font-semibold">
                {testimonials[active].designation}
              </p>
            </div>

            {/* Quote with word-by-word animation */}
            <motion.div className="relative">
              <div className="absolute -left-4 -top-2 text-6xl text-purple-200 font-serif">
                "
              </div>
              <motion.p className="text-xl md:text-2xl text-gray-700 leading-relaxed pl-8 relative">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.02 * index + 0.5,
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              <div className="absolute -bottom-4 -right-0 text-6xl text-purple-200 font-serif">
                "
              </div>
            </motion.div>

            {/* Rating stars */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center space-x-1"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                >
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation with enhanced design */}
          <div className="flex items-center justify-between pt-8">
            <div className="flex gap-6">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:-translate-x-1" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActive(index)}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === active
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                  {index === active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-sm"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Innovative Video Carousel
const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      title: "LMS Mastery Guide",
      description: "Complete walkthrough of our advanced learning platform",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      duration: "8:45",
      category: "Tutorial",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Project Showcase Strategy",
      description: "Master the art of presenting your technical projects",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      duration: "12:30",
      category: "Guide",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Interview Excellence",
      description: "Advanced preparation for technical interviews",
      thumbnail:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
      duration: "15:20",
      category: "Preparation",
      color: "from-orange-500 to-red-500",
    },
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main video display */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <motion.div
          key={currentVideo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-video"
        >
          <img
            src={videos[currentVideo].thumbnail}
            alt={videos[currentVideo].title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${videos[currentVideo].color} opacity-20`}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                <motion.div
                  animate={{ scale: isPlaying ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <PlayCircle size={40} className="text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: isPlaying ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Pause size={40} className="text-white" />
                </motion.div>
              </div>

              {/* Ripple effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-24 h-24 bg-white/20 rounded-full"
              />
            </motion.button>
          </div>

          {/* Video info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span
                className={`inline-block px-4 py-2 bg-gradient-to-r ${videos[currentVideo].color} text-white rounded-full text-sm font-bold mb-4 shadow-lg`}
              >
                {videos[currentVideo].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                {videos[currentVideo].title}
              </h3>
              <p className="text-lg text-white/90 mb-3">
                {videos[currentVideo].description}
              </p>
              <div className="flex items-center space-x-4 text-white/70">
                <span className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {videos[currentVideo].duration}
                </span>
                <span className="flex items-center">
                  <Users size={16} className="mr-2" />
                  1.2K views
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video navigation */}
      <div className="flex items-center justify-between mt-8">
        <motion.button
          onClick={prevVideo}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft size={20} />
          <span className="font-medium">Previous</span>
        </motion.button>

        {/* Thumbnail previews */}
        <div className="flex space-x-4">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => setCurrentVideo(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentVideo
                  ? "border-white shadow-lg"
                  : "border-white/30 opacity-60 hover:opacity-80"
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-30`}
              />
              {index === currentVideo && (
                <motion.div
                  layoutId="activeVideo"
                  className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Play size={16} className="text-white" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={nextVideo}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <span className="font-medium">Next</span>
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  );
};

// Enhanced Process Timeline
const ProcessTimeline = () => {
  const timelineData = [
    {
      title: "Apply",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-amber-200/50"
        >
          <div className="flex items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mr-6 shadow-xl">
              <BookOpen size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                Skill Assessment
              </h3>
              <p className="text-gray-600 text-lg">
                Demonstrate your technical expertise
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
              className="rounded-2xl shadow-lg"
              alt="Assessment"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: -2 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
              className="rounded-2xl shadow-lg"
              alt="Technology"
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Submit",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-amber-200/50"
        >
          <div className="flex items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mr-6 shadow-xl">
              <Target size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                Project Portfolio
              </h3>
              <p className="text-gray-600 text-lg">
                Showcase your innovative creations
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
            >
              <Code size={24} className="text-purple-600 mr-4" />
              <span className="text-gray-700 font-semibold text-lg">
                Upload innovative projects
              </span>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
            >
              <Brain size={24} className="text-purple-600 mr-4" />
              <span className="text-gray-700 font-semibold text-lg">
                Demonstrate problem-solving
              </span>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Interview",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-amber-200/50"
        >
          <div className="flex items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mr-6 shadow-xl">
              <Users size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                Final Round
              </h3>
              <p className="text-gray-600 text-lg">
                Excellence meets opportunity
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
            <p className="text-gray-700 text-xl leading-relaxed italic">
              "Our final interview is a collaborative conversation where
              technical skills meet passion for innovation. Our expert mentors
              will guide you through real-world challenges, helping assess your
              potential for making meaningful impact."
            </p>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-bold mb-8 shadow-xl border border-orange-200"
          >
            🚀 Your Journey Begins
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Selection{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Your pathway to joining the most innovative tech community
          </p>
        </motion.div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

// Video Learning Section with Black Background
const VideoLearningSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-32 right-32 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-bold mb-8 border border-white/20 shadow-2xl"
          >
            📚 Knowledge Hub
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Learn Through{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto text-xl leading-relaxed">
            Immersive video content designed for the next generation of tech
            leaders
          </p>
        </motion.div>

        <VideoCarousel />
      </div>
    </section>
  );
};

// Enhanced Rewards Section
const RewardsSection = () => {
  const rewards = [
    {
      icon: "💰",
      title: "₹15,000",
      subtitle: "Monthly Excellence Reward",
      desc: "Recognition that truly rewards",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      delay: 0,
    },
    {
      icon: "🎁",
      title: "Premium Kit",
      subtitle: "Exclusive Welcome Package",
      desc: "Curated goodies for champions",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      delay: 0.2,
    },
    {
      icon: "⭐",
      title: "Spotlight",
      subtitle: "Platform Recognition",
      desc: "Showcase your achievements",
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            className={`absolute w-24 h-24 opacity-5 ${
              i % 3 === 0
                ? "bg-gradient-to-r from-yellow-300 to-orange-400"
                : i % 3 === 1
                ? "bg-gradient-to-r from-purple-300 to-pink-400"
                : "bg-gradient-to-r from-blue-300 to-cyan-400"
            } rounded-full blur-2xl`}
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full text-sm font-bold mb-8 shadow-2xl border border-orange-200"
          >
            🎯 Epic Recognition
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Intern of the Month{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Champions
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Celebrating 10 exceptional interns monthly with extraordinary
            rewards and industry recognition
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: reward.delay }}
              whileHover={{
                y: -15,
                rotateY: 8,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl border border-amber-200/50 transform-gpu group-hover:shadow-3xl transition-all duration-700">
                {/* Animated gradient background */}
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${reward.gradient} rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                />

                {/* Floating icon with complex animation */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8,
                  }}
                  className={`relative w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${reward.gradient} flex items-center justify-center text-4xl shadow-2xl`}
                >
                  {reward.icon}

                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${reward.gradient} rounded-3xl blur-xl opacity-30`}
                  />
                </motion.div>

                <div className="relative text-center space-y-4">
                  <h3 className="font-black text-3xl text-gray-900">
                    {reward.title}
                  </h3>
                  <p className="font-bold text-xl text-gray-700">
                    {reward.subtitle}
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {reward.desc}
                  </p>
                </div>

                {/* Animated border effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r ${reward.gradient} opacity-0 blur-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Projects Showcase
const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "AI Voice Assistant",
      author: "Shiva Kiran",
      tech: ["Python", "TensorFlow", "NLP", "Speech Recognition"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      type: "Machine Learning",
      description:
        "Revolutionary voice recognition system with advanced natural language processing and real-time response capabilities",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      stats: { lines: "12K+", commits: "247", stars: "89" },
    },
    {
      title: "Security Scanner Pro",
      author: "Aveda Nikita",
      tech: ["Python", "Networking", "Cybersecurity", "Penetration Testing"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      type: "Cybersecurity",
      description:
        "Comprehensive network security scanner with advanced vulnerability detection and automated threat assessment",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      stats: { lines: "8.5K+", commits: "156", stars: "67" },
    },
    {
      title: "Analytics Dashboard",
      author: "Arjun Sharma",
      tech: ["React", "Node.js", "D3.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      type: "Full Stack",
      description:
        "Interactive data visualization platform with real-time analytics and predictive modeling capabilities",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      stats: { lines: "15K+", commits: "312", stars: "124" },
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-pink-50/20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-bold mb-8 shadow-xl border border-purple-200"
          >
            🚀 Innovation Showcase
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Masterpiece{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Discover groundbreaking projects that are reshaping the future of
            technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="bg-white/95 rounded-[2rem] overflow-hidden shadow-2xl border border-amber-200/50 group-hover:shadow-3xl transition-all duration-700 transform group-hover:-translate-y-4">
                {/* Enhanced image container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Dynamic gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === index ? 0.85 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  />

                  {/* Enhanced type badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-black text-gray-700 shadow-lg border border-white/50">
                    {project.type}
                  </div>

                  {/* Project stats overlay */}
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white"
                      >
                        <div className="grid grid-cols-3 gap-4 mb-6 w-full">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-lg">
                              {project.stats.lines}
                            </div>
                            <div className="text-xs opacity-90">Lines</div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-lg">
                              {project.stats.commits}
                            </div>
                            <div className="text-xs opacity-90">Commits</div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-lg">
                              {project.stats.stars}
                            </div>
                            <div className="text-xs opacity-90">Stars</div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold border border-white/30 hover:bg-white/30 transition-colors text-lg"
                        >
                          Explore Project →
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Enhanced content section */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-semibold">
                      by {project.author}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Enhanced tech stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-bold border border-purple-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Niha Anjum",
      designation: "Data Science Intern",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=500&fit=crop&crop=face",
      quote:
        "The hands-on approach made concepts practical and engaging. Video explanations are clear and perfect for visual learners like me.",
    },
    {
      name: "Garima Pandey",
      designation: "Full Stack Developer",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      quote:
        "Enhanced my skills through interactive dashboards and real projects. The mentorship quality is exceptional and truly transformative.",
    },
    {
      name: "Arjun Sharma",
      designation: "AI/ML Intern",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      quote:
        "Innovative learning platform with cutting-edge projects. The recognition system keeps me motivated and engaged throughout.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-50/30 to-orange-50/20">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-l from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-bold mb-8 shadow-2xl border border-purple-200"
          >
            ✨ Success Stories
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Champions Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Real experiences from our community of innovators and future tech
            leaders
          </p>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

// Main Component
const InnovativeSpecialSections = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/60 min-h-screen">
      <ProcessTimeline />
      <VideoLearningSection />
      <RewardsSection />
      <TestimonialsSection />
      <ProjectsSection />
    </div>
  );
};

export default InnovativeSpecialSections;
