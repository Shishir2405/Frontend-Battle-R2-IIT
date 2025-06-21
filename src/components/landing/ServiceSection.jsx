import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Square, Clock, Monitor } from "lucide-react";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [1500, 2500], [50, -50]);

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
      id: "strategy",
      title: "Projects",
      icon: <Square className="w-6 h-6 text-purple-800" />,
      color: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
      items: [
        "Visual Research",
        "Mitbewerber Analyse",
        "Wireframes",
        "Content Mapping",
        "User Flow",
        "Konzepte",
      ],
    },
    {
      id: "design",
      title: "Mentorship",
      icon: <Clock className="w-6 h-6 text-pink-800" />,
      color: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
      items: [
        "Unternehmenswebsites",
        "Marketing Websites",
        "Design System",
        "Animation",
        "Design Support",
        "Barrierefreies Design",
      ],
    },
    {
      id: "build",
      title: "Programs",
      icon: <Monitor className="w-6 h-6 text-orange-800" />,
      color: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
      items: [
        "Webflow Entwicklung",
        "Web Animation",
        "Webflow CMS",
        "Barrierefreie Entwicklung",
        "Technisches SEO",
        "Frontend Support",
      ],
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
      <motion.div
        ref={cardRef}
        className="relative group"
        initial={{ opacity: 0, x: -100, rotateY: -15 }}
        animate={
          isCardInView
            ? {
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                },
              }
            : {}
        }
        onMouseEnter={() => setActiveCard(service.id)}
        onMouseLeave={() => setActiveCard(null)}
      >
        {/* Card background */}
        <motion.div
          className={`${service.color} rounded-3xl shadow-xl border-4 border-white/50 backdrop-blur-sm h-[460px] p-8 flex flex-col relative overflow-hidden`}
          style={{ perspective: "1000px" }}
          whileHover={{
            scale: 1.02,
            y: -8,
            rotateY: 2,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full" />
            <div className="absolute bottom-8 left-4 w-24 h-24 border border-white/20 rounded-lg rotate-12" />
          </div>

          {/* Header section */}
          <motion.div
            className="mb-8 relative z-10"
            animate={{
              y: activeCard === service.id ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon container */}
            <motion.div
              className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/40"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
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

            {/* Title */}
            <h3 className="text-2xl font-black tracking-wider text-gray-900">
              {service.title}
            </h3>
          </motion.div>

          {/* Services list */}
          <div className="flex-1 space-y-3 relative z-10">
            {service.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 border border-white/50"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isCardInView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.2 + itemIndex * 0.1,
                          ease: "easeOut",
                        },
                      }
                    : {}
                }
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.85)",
                  x: 4,
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/50 via-white/80 to-white/50"
            animate={{
              opacity: activeCard === service.id ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
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
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-20 h-20 opacity-5 ${
              i % 3 === 0
                ? "bg-purple-300"
                : i % 3 === 1
                ? "bg-pink-300"
                : "bg-orange-300"
            } rounded-full`}
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-7xl md:text-8xl font-black text-gray-900">
              Service
            </h2>

            {/* Animated dots indicator */}
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    i === 0
                      ? "bg-purple-400"
                      : i === 1
                      ? "bg-pink-400"
                      : "bg-orange-400"
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          <p className="text-2xl text-gray-600 max-w-3xl">
            Wenn alles gleich ist, ist es die größte Chance, anders zu sein.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom corner decoration */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-24 h-16 border border-gray-300 rounded-lg p-3 bg-white/60 backdrop-blur-sm">
          <div className="text-gray-600 text-xs font-mono mb-1">SERVICES</div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-sm ${
                  i === 0
                    ? "bg-purple-400"
                    : i === 1
                    ? "bg-pink-400"
                    : "bg-orange-400"
                }`}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
