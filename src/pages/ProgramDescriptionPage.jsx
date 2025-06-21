import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  Play,
  BookOpen,
  Download,
  Calendar,
  Globe,
  MessageCircle,
  Share2,
  Heart,
  ArrowRight,
  Code,
  Database,
  Shield,
  Brain,
  BarChart3,
  TrendingUp,
  PieChart,
  Lock,
} from "lucide-react";

const ProgramDescriptionPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);

  // Sample program data - this would come from your backend/routing
  const programData = {
    id: "fullstack-development",
    title: "Full Stack Development Internship",
    subtitle: "Master Modern Web Development from Frontend to Backend",
    description:
      "Comprehensive full-stack development program covering React, Node.js, databases, and deployment strategies. Build real-world projects and gain industry-ready skills.",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
    icon: <Database className="w-8 h-8" />,
    rating: 4.9,
    reviews: 1247,
    students: 3420,
    duration: "12 weeks",
    level: "Beginner to Advanced",
    price: "₹15,999",
    originalPrice: "₹25,999",
    discount: 38,
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    bgColor: "from-purple-50 to-violet-100",
    instructor: {
      name: "Rahul Sharma",
      title: "Senior Full Stack Developer",
      company: "Google",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      experience: "8+ years",
    },
    features: [
      "Live Interactive Sessions",
      "Real-world Projects",
      "1-on-1 Mentorship",
      "Industry Certification",
      "Job Placement Support",
      "Lifetime Access to Materials",
    ],
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript ES6+",
      "HTML5/CSS3",
      "Git/GitHub",
      "API Development",
      "Database Design",
      "Deployment",
    ],
    modules: [
      {
        id: 1,
        title: "Frontend Fundamentals",
        duration: "2 weeks",
        lessons: 15,
        description: "HTML5, CSS3, JavaScript basics and modern ES6+ features",
        topics: [
          "HTML5 Semantic Elements",
          "CSS Grid & Flexbox",
          "JavaScript ES6+",
          "DOM Manipulation",
        ],
      },
      {
        id: 2,
        title: "React Development",
        duration: "3 weeks",
        lessons: 22,
        description:
          "Build dynamic user interfaces with React and modern state management",
        topics: [
          "React Components",
          "Hooks & State",
          "Context API",
          "React Router",
        ],
      },
      {
        id: 3,
        title: "Backend with Node.js",
        duration: "3 weeks",
        lessons: 18,
        description:
          "Server-side development with Node.js and Express framework",
        topics: [
          "Node.js Fundamentals",
          "Express.js",
          "RESTful APIs",
          "Authentication",
        ],
      },
      {
        id: 4,
        title: "Database & MongoDB",
        duration: "2 weeks",
        lessons: 12,
        description: "Database design and MongoDB for modern applications",
        topics: [
          "Database Design",
          "MongoDB CRUD",
          "Mongoose ODM",
          "Data Relationships",
        ],
      },
      {
        id: 5,
        title: "Full Stack Integration",
        duration: "2 weeks",
        lessons: 16,
        description: "Connect frontend and backend, deployment strategies",
        topics: [
          "API Integration",
          "State Management",
          "Error Handling",
          "Performance Optimization",
        ],
      },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Build a complete online store with cart, payments, and admin panel",
        tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      },
      {
        title: "Social Media Dashboard",
        description: "Create a social media management tool with analytics",
        tech: ["React", "Express", "Socket.io", "Chart.js"],
      },
      {
        title: "Task Management App",
        description: "Develop a collaborative project management application",
        tech: ["React", "Node.js", "MongoDB", "JWT Auth"],
      },
    ],
  };

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "curriculum",
      label: "Curriculum",
      icon: <Play className="w-4 h-4" />,
    },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    {
      id: "instructor",
      label: "Instructor",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  const StarRating = ({ rating, size = "w-4 h-4" }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className={`${size} text-yellow-400 fill-current`} />
        ))}
        {hasHalfStar && (
          <Star className={`${size} text-yellow-400 fill-current opacity-50`} />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i} className={`${size} text-gray-300`} />
        ))}
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap");

        .gradient-text {
          background: linear-gradient(
            135deg,
            #8b5cf6 0%,
            #a855f7 25%,
            #c084fc 50%,
            #e879f9 75%,
            #f472b6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div className="min-h-screen bg-[#f9f4eb]">
        {/* Header with Hero Section */}
        <motion.div className="relative overflow-hidden" style={{ y: headerY }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #c084fc 0%, transparent 50%)`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 py-8">
            {/* Navigation */}
            <motion.div
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                whileHover={{ x: -5 }}
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Programs</span>
              </motion.button>

              <div className="flex items-center space-x-4">
                <motion.button
                  className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </motion.button>
                <motion.button
                  className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${programData.gradient} text-white shadow-lg`}
                  >
                    {programData.icon}
                  </div>
                  <div className="text-sm text-gray-600 font-mono tracking-wide uppercase">
                    {programData.level}
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {programData.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {programData.subtitle}
                  </p>
                </div>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <StarRating rating={programData.rating} size="w-5 h-5" />
                    <span className="font-semibold text-gray-900">
                      {programData.rating}
                    </span>
                    <span className="text-gray-600">
                      ({programData.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{programData.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{programData.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold gradient-text">
                    {programData.price}
                  </div>
                  <div className="text-lg text-gray-500 line-through">
                    {programData.originalPrice}
                  </div>
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {programData.discount}% OFF
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={programData.image}
                    alt={programData.title}
                    className="w-full h-80 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${programData.gradient} opacity-20`}
                  />

                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.button
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Floating stats */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        95% Success Rate
                      </div>
                      <div className="text-sm text-gray-600">Job Placement</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Sticky Enrollment Card */}
        <motion.div
          className="sticky top-4 z-50 max-w-7xl mx-auto px-8 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass-morphism rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold gradient-text">
                  {programData.price}
                </div>
                <div className="text-gray-600">Limited Time Offer</div>
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  className="px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-gray-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Free Demo
                </motion.button>
                <motion.button
                  className={`px-8 py-3 bg-gradient-to-r ${programData.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEnrolled(true)}
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Navigation Tabs */}
              <div className="flex space-x-1 bg-white/50 rounded-2xl p-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-white shadow-sm text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Program Overview
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {programData.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        What You'll Learn
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {programData.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Program Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programData.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${programData.gradient} rounded-full flex items-center justify-center`}
                            >
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium text-gray-900">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Course Curriculum
                    </h2>
                    {programData.modules.map((module, index) => (
                      <motion.div
                        key={module.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            setSelectedModule(
                              selectedModule === module.id ? null : module.id
                            )
                          }
                          whileHover={{ backgroundColor: "#f9fafb" }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${programData.gradient} rounded-xl flex items-center justify-center text-white font-bold`}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {module.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                  <span className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{module.duration}</span>
                                  </span>
                                  <span className="flex items-center space-x-1">
                                    <Play className="w-4 h-4" />
                                    <span>{module.lessons} lessons</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                rotate: selectedModule === module.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </div>
                        </motion.div>

                        {selectedModule === module.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 border-t border-gray-100"
                          >
                            <p className="text-gray-600 mb-4">
                              {module.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {module.topics.map((topic, topicIndex) => (
                                <div
                                  key={topicIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm text-gray-700">
                                    {topic}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "projects" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Real-World Projects
                    </h2>
                    {programData.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="p-6 border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${programData.gradient} text-white text-sm rounded-full`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "instructor" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Meet Your Instructor
                    </h2>
                    <div className="flex items-start space-x-6">
                      <img
                        src={programData.instructor.image}
                        alt={programData.instructor.name}
                        className="w-24 h-24 rounded-2xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {programData.instructor.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {programData.instructor.title} at{" "}
                          {programData.instructor.company}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {programData.instructor.experience} experience
                        </p>
                        <motion.button
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>Message Instructor</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-lg sticky top-32"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Program Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">
                      {programData.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold">{programData.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold">
                      {programData.students}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-semibold text-green-600">
                      ✓ Included
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <motion.button
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enrollment Success Modal */}
        {isEnrolled && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsEnrolled(false)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${programData.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Enrollment Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Welcome to your learning journey! Check your email for next
                steps.
              </p>
              <motion.button
                className={`w-full bg-gradient-to-r ${programData.gradient} text-white py-3 rounded-xl font-semibold shadow-lg`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEnrolled(false)}
              >
                Continue Learning
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ProgramDescriptionPage;
