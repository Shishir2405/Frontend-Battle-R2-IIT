import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Rocket,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Zap,
  Globe,
  Code,
  Brain,
  Shield,
  Star,
} from "lucide-react";

const InnovativeAboutSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [animatedStats, setAnimatedStats] = useState({});
  const containerRef = useRef(null);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Number animation function
  const animateNumber = (targetValue, key, duration = 2000) => {
    const numericValue = parseInt(targetValue.replace(/\D/g, ""));
    const suffix = targetValue.replace(/\d/g, "");
    let startValue = 0;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= numericValue) {
        setAnimatedStats((prev) => ({ ...prev, [key]: targetValue }));
        clearInterval(timer);
      } else {
        setAnimatedStats((prev) => ({
          ...prev,
          [key]: Math.floor(startValue) + suffix,
        }));
      }
    }, 16);
  };

  // Section data
  const sections = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "FUTURE FORWARD",
      description:
        "To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands, shaping the next generation of tech innovators.",
      number: "01",
      icon: Target,
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=350&h=250&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&auto=format",
      ],
      features: [
        { icon: Globe, text: "Global EdTech Leadership" },
        { icon: Brain, text: "Innovation-Driven Learning" },
        { icon: Rocket, text: "Future-Ready Skills" },
      ],
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "EMPOWERMENT DRIVEN",
      description:
        "To empower students through immersive, real-world learning experiences via tailored internship programs that build practical skills and industry confidence.",
      number: "02",
      icon: Rocket,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
      features: [
        { icon: Users, text: "Student Empowerment" },
        { icon: Code, text: "Real-World Projects" },
        { icon: Zap, text: "Skill Development" },
      ],
    },
    {
      id: "stats",
      title: "Our Impact",
      subtitle: "PROVEN RESULTS",
      description:
        "Numbers that showcase our commitment to excellence and transformative student success stories.",
      number: "03",
      icon: TrendingUp,
      stats: [
        { value: "5000+", label: "Interns Enrolled", icon: Users },
        { value: "9000+", label: "Projects Completed", icon: Code },
        { value: "93%", label: "Satisfaction Rate", icon: Star },
        { value: "30+", label: "Expert Instructors", icon: Award },
      ],
    },
    {
      id: "benefits",
      title: "Why Choose Us",
      subtitle: "EXCELLENCE DELIVERED",
      description:
        "Discover the unique advantages that make InLight Tech the perfect choice for your transformative learning journey.",
      number: "04",
      icon: Award,
      benefits: [
        {
          title: "Premium Resources",
          description:
            "Expertly curated learning materials with hands-on projects, real-world applications, and personalized mentorship.",
          icon: BookOpen,
        },
        {
          title: "Industry Experts",
          description:
            "Learn from seasoned professionals who bring cutting-edge industry insights and practical experience.",
          icon: Users,
        },
        {
          title: "Portal Access",
          description:
            "24/7 access to comprehensive learning portal with course materials, progress tracking, and community support.",
          icon: Shield,
        },
      ],
    },
  ];

  // Floating particles background with Framer Motion
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-black/10 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // Individual section component
  const SectionCard = ({ section, index, isActive }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { threshold: 0.4 });

    useEffect(() => {
      if (isInView) {
        setActiveSection(index);

        // Trigger number animations for stats section
        if (section.id === "stats" && section.stats) {
          section.stats.forEach((stat, statIndex) => {
            setTimeout(() => {
              animateNumber(stat.value, `${section.id}-${statIndex}`, 2000);
            }, statIndex * 200);
          });
        }
      }
    }, [isInView, section, index]);

    // Mouse parallax
    const mouseParallaxX = (mousePosition.x - 50) * 0.003;
    const mouseParallaxY = (mousePosition.y - 50) * 0.003;

    return (
      <motion.div
        ref={cardRef}
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <FloatingParticles />

        {/* Content grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              section.id === "mission" ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Content (Left for most, Right for mission) */}
            <motion.div
              className={`space-y-8 ${
                section.id === "mission" ? "lg:col-start-2" : ""
              }`}
              style={{
                transform: `translate(${mouseParallaxX * 10}px, ${
                  mouseParallaxY * 10
                }px)`,
              }}
            >
              {/* Section header */}
              <div className="space-y-6">
                {/* Decorative dots */}
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
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
                  <div className="text-xs font-mono text-black/60 uppercase tracking-[0.3em]">
                    {section.subtitle}
                  </div>
                  <div className="flex-1 h-px bg-black/20" />
                </motion.div>

                {/* Number and icon */}
                <motion.div
                  className="flex items-center space-x-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-8xl font-black text-black/20 font-mono leading-none">
                    {section.number}
                  </span>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <section.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-black font-black leading-tight tracking-tight"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 4rem)",
                    letterSpacing: "-0.02em",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {section.title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className={
                        i === section.title.split(" ").length - 1
                          ? "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
                          : ""
                      }
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-xl text-black/80 leading-relaxed max-w-lg font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {section.description}
                </motion.p>

                {/* Features */}
                {section.features && (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {section.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                      >
                        <motion.div
                          className="w-8 h-8 bg-black rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <feature.icon className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-black/70 font-medium">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Decorative line */}
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Visual content (Right for most, Left for mission) */}
            <motion.div
              className={`relative ${
                section.id === "mission" ? "lg:col-start-1" : ""
              }`}
              style={{
                transform: `translate(${mouseParallaxX * -5}px, ${
                  mouseParallaxY * -5
                }px)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {section.id === "stats" ? (
                <StatsGrid section={section} />
              ) : section.id === "benefits" ? (
                <BenefitsGrid section={section} />
              ) : section.id === "vision" ? (
                <MasonryImageGrid section={section} />
              ) : (
                <SingleImageCard section={section} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-black/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
      </motion.div>
    );
  };

  // Masonry Image Grid for Vision with CSS curves
  const MasonryImageGrid = ({ section }) => (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 auto-rows-fr">
        {section.images?.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-lg group"
            style={{
              gridRow:
                index === 0
                  ? "span 2"
                  : index === 1
                  ? "span 3"
                  : index === 2
                  ? "span 2"
                  : "span 2",
            }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.9 + index * 0.2,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              z: 50,
            }}
          >
            <img
              src={image}
              alt={`Vision ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* CSS Curve Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-orange-600/20"
              style={{
                clipPath:
                  index % 2 === 0
                    ? "ellipse(80% 60% at 30% 40%)"
                    : "polygon(0% 0%, 100% 0%, 80% 100%, 0% 90%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Single Image Card for Mission (left side)
  const SingleImageCard = ({ section }) => (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/40"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ perspective: "1000px" }}
      >
        <img
          src={section.image}
          alt={section.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Curved overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/20"
          style={{
            clipPath: "ellipse(70% 80% at 50% 100%)",
          }}
        />

        <motion.div
          className="absolute bottom-6 left-6 right-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2 font-mono">{section.title}</h3>
          <p className="text-white/90 text-sm uppercase tracking-wider">
            {section.subtitle}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-4 text-xs font-mono text-black/60 uppercase tracking-wide"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {section.number}
      </motion.div>
    </motion.div>
  );

  // Stats grid with number animations and ticker effect
  const StatsGrid = ({ section }) => (
    <div className="grid grid-cols-2 gap-6">
      {section.stats?.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 group"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.9 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            y: -5,
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div className="text-center space-y-3">
            <motion.div
              className="w-10 h-10 mx-auto bg-black rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </motion.div>

            {/* Animated number with ticker effect */}
            <motion.div
              className="text-4xl font-black text-black font-mono overflow-hidden"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.1, type: "spring" }}
            >
              <motion.span
                key={animatedStats[`${section.id}-${index}`]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {animatedStats[`${section.id}-${index}`] || "0"}
              </motion.span>
            </motion.div>

            <div className="text-xs font-mono text-black/60 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Benefits grid with curves
  const BenefitsGrid = ({ section }) => (
    <div className="space-y-6">
      {section.benefits?.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 group relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.2 }}
          whileHover={{
            x: 5,
            scale: 1.02,
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          }}
        >
          {/* Curved background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 85%)",
            }}
          />

          <div className="flex items-start space-x-4 relative z-10">
            <motion.div
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
            >
              <benefit.icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black group-hover:text-black/90">
                {benefit.title}
              </h3>
              <p className="text-black/70 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          </div>

          {/* Animated progress bar */}
          <motion.div
            className="w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            whileHover={{ scaleY: 2 }}
            transition={{
              scaleX: { delay: 1.1 + index * 0.2, duration: 0.8 },
              scaleY: { duration: 0.2 },
            }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="relative bg-[#f9f4eb]">
      {/* Progress indicator on RIGHT side */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
              activeSection === index
                ? "bg-black border-white shadow-lg"
                : "bg-white/40 border-black/40"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: activeSection === index ? 1.2 : 1,
            }}
            onClick={() => {
              document.querySelector(`#section-${index}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        ))}
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={section.id} id={`section-${index}`}>
          <SectionCard
            section={section}
            index={index}
            isActive={activeSection === index}
          />
        </div>
      ))}
    </div>
  );
};

export default InnovativeAboutSections;
