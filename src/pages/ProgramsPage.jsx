import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Star,
  BarChart3,
  Code,
  Shield,
  Database,
  Brain,
  PieChart,
  Lock,
  TrendingUp,
} from "lucide-react";

const ProgramsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Business Analyst Internship Program",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      icon: <BarChart3 className="w-6 h-6" />,
      rating: 5,
      description:
        "Business Analyst – Internship Program Gain practical business analysis skills by working on...",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      height: "h-80",
      slug: "business-analyst",
    },
    {
      id: 2,
      title: "Front-End Development Internship",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=280&fit=crop",
      icon: <Code className="w-6 h-6" />,
      rating: 5,
      description:
        "Front-End Web Development – Internship Program Kickstart your journey into web development by...",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-100",
      height: "h-96",
      slug: "frontend-development",
    },
    {
      id: 3,
      title: "Ethical Hacking with Kali Linux",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=260&fit=crop",
      icon: <Shield className="w-6 h-6" />,
      rating: 5,
      description:
        "🔒 Ethical Hacking with Kali Linux – Internship Program Gain practical skills in...",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      height: "h-72",
      slug: "ethical-hacking",
    },
    {
      id: 4,
      title: "Full Stack Development Internship",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      icon: <Database className="w-6 h-6" />,
      rating: 5,
      description:
        "Full-Stack Web Development – Internship Program Master web development from the ground up...",
      gradient: "from-purple-500 via-violet-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      height: "h-88",
      slug: "fullstack-development",
    },
    {
      id: 5,
      title: "AI & Machine Learning Internship Program",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=270&fit=crop",
      icon: <Brain className="w-6 h-6" />,
      rating: 5,
      description:
        "Dive into the future of technology with hands-on AI and ML projects...",
      gradient: "from-pink-500 via-rose-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      height: "h-84",
      slug: "ai-machine-learning",
    },
    {
      id: 6,
      title: "Data Analyst Internship",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      icon: <PieChart className="w-6 h-6" />,
      rating: 5,
      description:
        "Transform raw data into actionable insights with modern analytics tools...",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
      height: "h-76",
      slug: "data-analyst",
    },
    {
      id: 7,
      title: "Offensive Cyber Security Internship",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=290&fit=crop",
      icon: <Lock className="w-6 h-6" />,
      rating: 5,
      description:
        "Master advanced penetration testing and ethical hacking techniques...",
      gradient: "from-red-500 via-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100",
      height: "h-92",
      slug: "offensive-cyber-security",
    },
    {
      id: 8,
      title: "Data Science Internship",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      icon: <TrendingUp className="w-6 h-6" />,
      rating: 5,
      description:
        "Explore statistical modeling, machine learning, and predictive analytics...",
      gradient: "from-teal-500 via-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100",
      height: "h-80",
      slug: "data-science",
    },
  ];

  const handleCardClick = (slug) => {
    // Redirect to program description page
    window.location.href = `/programs/${slug}`;
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const ProgramCard = ({ program, index }) => {
    const isInView = useInView({ once: true });

    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        className={`${program.height} mb-6 group cursor-pointer`}
        onMouseEnter={() => setHoveredCard(program.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => handleCardClick(program.slug)}
      >
        <motion.div
          className={`h-full ${program.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm relative`}
          whileHover={{
            scale: 1.02,
            y: -8,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Image Section */}
          <div className="relative h-40 overflow-hidden">
            <motion.img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80`}
            />

            {/* Icon */}
            <motion.div
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {program.icon}
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-6 left-4 w-2 h-2 bg-white/40 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="p-6 h-full flex flex-col justify-between">
            {/* Title and Rating */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <motion.h3
                  className="text-lg font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {program.title}
                </motion.h3>
              </div>

              <StarRating rating={program.rating} />

              <motion.p
                className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {program.description}
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn More</span>
                <motion.div
                  animate={{ x: hoveredCard === program.id ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Hover effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap");

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .h-76 {
          height: 19rem;
        }
        .h-84 {
          height: 21rem;
        }
        .h-88 {
          height: 22rem;
        }
        .h-92 {
          height: 23rem;
        }
      `}</style>

      <section className="min-h-screen bg-[#f9f4eb] py-20 px-8">
        {/* Header */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-8 h-px bg-gradient-to-r from-purple-600 to-orange-600" />
            <span className="text-gray-600 text-sm font-mono tracking-wider uppercase">
              Internship Programs
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-orange-600 to-purple-600" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Programs
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Transform your career with industry-focused internship programs
            designed to bridge the gap between academic learning and
            professional excellence.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="max-w-4xl mx-auto text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of students who have transformed their careers with
              INLIGHN TECH
            </p>
            <motion.button
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProgramsGrid;
