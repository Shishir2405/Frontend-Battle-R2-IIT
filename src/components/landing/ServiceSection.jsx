import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Square, Clock, Monitor, BookOpen, Users, Award } from "lucide-react";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [1500, 2500], [30, -30]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const services = [
    {
      id: "projects",
      title: "Real Projects",
      icon: <Square className="w-6 h-6 text-purple-800" />,
      color: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
      description: "Work on industry-level projects",
      items: [
        "Live Client Projects",
        "Portfolio Development",
        "GitHub Collaboration",
        "Code Reviews",
        "Technical Documentation",
        "Project Management",
      ],
    },
    {
      id: "mentorship",
      title: "Expert Mentorship",
      icon: <Users className="w-6 h-6 text-pink-800" />,
      color: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
      description: "Learn from industry professionals",
      items: [
        "1-on-1 Guidance",
        "Industry Best Practices",
        "Career Counseling",
        "Technical Support",
        "Skill Assessment",
        "Interview Preparation",
      ],
    },
    {
      id: "programs",
      title: "Learning Programs",
      icon: <BookOpen className="w-6 h-6 text-orange-800" />,
      color: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
      description: "Structured learning paths",
      items: [
        "Full Stack Development",
        "Data Science & Analytics",
        "Cyber Security",
        "UI/UX Design",
        "Cloud Computing",
        "Mobile Development",
      ],
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
      <motion.div
        ref={cardRef}
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={
          isCardInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  delay: index * 0.15,
                  bounce: 0.3,
                },
              }
            : {}
        }
        onMouseEnter={() => setActiveCard(service.id)}
        onMouseLeave={() => setActiveCard(null)}
      >
        {/* Hover background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: activeCard === service.id ? 1 : 0,
            scale: activeCard === service.id ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main card */}
        <motion.div
          className={`${service.color} rounded-3xl shadow-xl border-4 border-white/60 backdrop-blur-sm h-[500px] p-8 flex flex-col relative overflow-hidden`}
          whileHover={{
            scale: 1.03,
            y: -12,
            rotateY: 3,
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            type: "spring",
            duration: 0.4,
            bounce: 0.2,
          }}
        >
          {/* Animated background shapes */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-4 right-4 w-32 h-32 border-2 border-white/40 rounded-full"
              animate={{
                rotate: activeCard === service.id ? 180 : 0,
                scale: activeCard === service.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute bottom-8 left-4 w-24 h-24 border-2 border-white/30 rounded-lg"
              animate={{
                rotate: activeCard === service.id ? -15 : 12,
                scale: activeCard === service.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/20 rounded-full"
              animate={{
                rotate: activeCard === service.id ? 360 : 0,
                x: activeCard === service.id ? -20 : -8,
                y: activeCard === service.id ? -20 : -8,
              }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Header section */}
          <motion.div
            className="mb-6 relative z-10"
            animate={{
              y: activeCard === service.id ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon container with improved animation */}
            <motion.div
              className="w-14 h-14 bg-white/70 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/50 shadow-lg"
              whileHover={{
                scale: 1.1,
                rotate: 8,
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
              animate={{
                scale: activeCard === service.id ? 1.05 : 1,
                rotate: activeCard === service.id ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  scale: activeCard === service.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
            </motion.div>

            {/* Title and description */}
            <motion.h3
              className="text-2xl font-black tracking-wide text-gray-900 mb-2"
              animate={{
                scale: activeCard === service.id ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>

            <motion.p
              className="text-sm text-gray-700 font-medium opacity-80"
              initial={{ opacity: 0, y: 10 }}
              animate={
                isCardInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {service.description}
            </motion.p>
          </motion.div>

          {/* Services list with staggered animation */}
          <div className="flex-1 space-y-3 relative z-10">
            {service.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 border border-white/50 shadow-sm"
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={
                  isCardInView
                    ? {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          duration: 0.6,
                          delay: index * 0.15 + itemIndex * 0.08,
                          bounce: 0.3,
                        },
                      }
                    : {}
                }
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  x: 6,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  animate={{
                    color: activeCard === service.id ? "#374151" : "#4B5563",
                  }}
                >
                  {item}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced bottom accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white/60 via-white/90 to-white/60 rounded-b-3xl"
            animate={{
              opacity: activeCard === service.id ? 1 : 0.7,
              height: activeCard === service.id ? 8 : 2,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating number indicator */}
          <motion.div
            className="absolute top-6 right-6 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-xs font-bold text-gray-700"
            initial={{ scale: 0, rotate: -180 }}
            animate={
              isCardInView
                ? {
                    scale: 1,
                    rotate: 0,
                    transition: { delay: index * 0.15 + 0.6, duration: 0.5 },
                  }
                : {}
            }
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 bg-[#f9f4eb] relative overflow-hidden"
      style={{ y: sectionY }}
    >
      {/* Enhanced background effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(124,58,237,0.1) 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Improved floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-5 ${
              i % 3 === 0
                ? "bg-purple-400 w-24 h-24"
                : i % 3 === 1
                ? "bg-pink-400 w-16 h-16"
                : "bg-orange-400 w-20 h-20"
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900"
              animate={isInView ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h2>

            {/* Enhanced dots indicator */}
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-4 h-4 rounded-lg ${
                    i === 0
                      ? "bg-purple-400"
                      : i === 1
                      ? "bg-pink-400"
                      : "bg-orange-400"
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transform your potential into expertise with our comprehensive
            internship programs designed for the next generation of tech
            professionals.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Enhanced bottom decoration */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, rotate: 0 }
            : { opacity: 0, scale: 0, rotate: -45 }
        }
        transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.3 }}
      >
        <motion.div
          className="w-28 h-20 border-2 border-gray-300 rounded-xl p-4 bg-white/70 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <div className="text-gray-600 text-xs font-mono mb-2 tracking-wider">
            PROGRAMS
          </div>
          <div className="flex space-x-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-lg ${
                  i === 0
                    ? "bg-purple-400"
                    : i === 1
                    ? "bg-pink-400"
                    : "bg-orange-400"
                }`}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
