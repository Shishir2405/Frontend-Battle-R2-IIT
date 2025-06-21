import React, { useState, useEffect } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Sample program data
  const programData = {
    id: "fullstack-development",
    title: "Full Stack Development Internship",
    subtitle: "Master Modern Web Development from Frontend to Backend",
    description:
      "Comprehensive full-stack development program covering React, Node.js, databases, and deployment strategies. Build real-world projects and gain industry-ready skills.",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
    icon: <Database className="w-6 h-6" />,
    rating: 4.9,
    reviews: 1247,
    students: 3420,
    duration: "12 weeks",
    level: "Beginner to Advanced",
    price: "₹15,999",
    originalPrice: "₹25,999",
    discount: 38,
    gradient: "from-violet-200 via-violet-300 to-violet-400",
    accent: "bg-violet-900",
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
          <Star key={i} className={`${size} text-black fill-current`} />
        ))}
        {hasHalfStar && (
          <Star className={`${size} text-black fill-current opacity-50`} />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i} className={`${size} text-black/20`} />
        ))}
      </div>
    );
  };

  // Subtle mouse parallax effect
  const mouseParallaxX =
    (mousePosition.x -
      (typeof window !== "undefined" ? window.innerWidth : 0) / 2) *
    0.002;
  const mouseParallaxY =
    (mousePosition.y -
      (typeof window !== "undefined" ? window.innerHeight : 0) / 2) *
    0.002;

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap");

        :root {
          --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont,
            system-ui, sans-serif;
          --font-family-mono: "JetBrains Mono", "Fira Code", monospace;
        }

        .font-sans {
          font-family: var(--font-family-sans);
        }

        .font-mono {
          font-family: var(--font-family-mono);
        }

        .hero-title {
          font-family: var(--font-family-sans);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.02em;
        }

        .decorative-text {
          font-family: var(--font-family-mono);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#f9f4eb]">
        {/* Top Navigation Dots */}
        <div className="absolute top-20 left-0 right-0 flex justify-between items-center px-12 z-10 mt-10">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-black rounded-full"
                style={{
                  opacity: [1, 0.3, 1][i % 3],
                  animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          <div className="decorative-text text-black/60">FULL</div>

          <div className="decorative-text text-black/60">STACK</div>

          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-black rounded-full"
                style={{
                  opacity: [0.3, 1, 0.3][i % 3],
                  animation: `pulse 2s ease-in-out infinite ${i * 0.3 + 1}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="relative overflow-hidden pt-32">
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-8">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-12">
              <button
                className="flex items-center space-x-2 text-black/70 hover:text-black transition-colors font-sans"
                onClick={() => window.history.back()}
                style={{
                  transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px)`,
                }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Programs</span>
              </button>

              <div className="flex items-center space-x-4">
                <button
                  className="p-2 rounded-xl bg-white/80 hover:bg-white transition-colors shadow-sm border border-white/40"
                  style={{
                    transform: `translate(${mouseParallaxX * 2}px, ${
                      mouseParallaxY * 2
                    }px)`,
                  }}
                >
                  <Share2 className="w-5 h-5 text-black/60" />
                </button>
                <button
                  className="p-2 rounded-xl bg-white/80 hover:bg-white transition-colors shadow-sm border border-white/40"
                  style={{
                    transform: `translate(${mouseParallaxX * 2}px, ${
                      mouseParallaxY * 2
                    }px)`,
                  }}
                >
                  <Heart className="w-5 h-5 text-black/60" />
                </button>
              </div>
            </div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${programData.gradient} border border-white/40 shadow-lg`}
                  >
                    <div
                      className={`${programData.accent} p-2 rounded-sm transform rotate-45`}
                    >
                      <div className="text-white transform -rotate-45">
                        {programData.icon}
                      </div>
                    </div>
                  </div>
                  <div className="decorative-text text-black/60 uppercase">
                    {programData.level}
                  </div>
                </div>

                <div>
                  <h1 className="hero-title text-black mb-4 leading-tight">
                    {programData.title}
                  </h1>
                  <p className="text-xl text-black/70 leading-relaxed font-sans">
                    {programData.subtitle}
                  </p>
                </div>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <StarRating rating={programData.rating} size="w-4 h-4" />
                    <span className="font-semibold text-black font-sans">
                      {programData.rating}
                    </span>
                    <span className="text-black/60 font-sans">
                      ({programData.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-black/60 font-sans">
                    <Users className="w-4 h-4" />
                    <span>{programData.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2 text-black/60 font-sans">
                    <Clock className="w-4 h-4" />
                    <span>{programData.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-black text-black font-sans">
                    {programData.price}
                  </div>
                  <div className="text-lg text-black/40 line-through font-sans">
                    {programData.originalPrice}
                  </div>
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold font-sans">
                    {programData.discount}% OFF
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/40">
                  <img
                    src={programData.image}
                    alt={programData.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/30"
                      style={{
                        transform: `translate(${mouseParallaxX * 3}px, ${
                          mouseParallaxY * 3
                        }px)`,
                      }}
                    >
                      <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Floating stats */}
                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-white/40"
                  style={{
                    transform: `translate(${mouseParallaxX * 2}px, ${
                      mouseParallaxY * 2
                    }px)`,
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-black font-sans text-sm">
                        95% Success Rate
                      </div>
                      <div className="text-xs text-black/60 font-sans">
                        Job Placement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Enrollment Card */}
        <div className="sticky top-20 z-50 max-w-7xl mx-auto px-8 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-black text-black font-sans">
                  {programData.price}
                </div>
                <div className="text-black/60 font-sans">
                  Limited Time Offer
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-6 py-3 bg-white border border-black/20 rounded-xl font-semibold text-black hover:border-black/40 transition-all font-sans">
                  Try Free Demo
                </button>
                <button
                  className="px-8 py-3 bg-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 font-sans"
                  onClick={() => setIsEnrolled(true)}
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Navigation Tabs */}
              <div className="flex space-x-1 bg-white/50 rounded-2xl p-2 border border-white/40">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all font-sans text-sm ${
                      activeTab === tab.id
                        ? "bg-white shadow-sm text-black border border-white/60"
                        : "text-black/60 hover:text-black"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/40">
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-4 font-sans">
                        Program Overview
                      </h2>
                      <p className="text-black/70 leading-relaxed text-lg font-sans">
                        {programData.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-black mb-4 font-sans">
                        What You'll Learn
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {programData.skills.map((skill, index) => (
                          <div
                            key={skill}
                            className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl border border-gray-100"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-black/70 font-sans text-sm">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-black mb-4 font-sans">
                        Program Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programData.features.map((feature, index) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                          >
                            <div
                              className={`w-8 h-8 bg-gradient-to-br ${programData.gradient} rounded-xl flex items-center justify-center border border-white/40`}
                            >
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-black font-sans text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black mb-6 font-sans">
                      Course Curriculum
                    </h2>
                    {programData.modules.map((module, index) => (
                      <div
                        key={module.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                      >
                        <div
                          className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            setSelectedModule(
                              selectedModule === module.id ? null : module.id
                            )
                          }
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-10 h-10 bg-gradient-to-br ${programData.gradient} rounded-xl flex items-center justify-center text-black font-bold border border-white/40`}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-black font-sans">
                                  {module.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-black/60 mt-1 font-sans">
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
                            <div
                              style={{
                                transform:
                                  selectedModule === module.id
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                              }}
                            >
                              <ArrowRight className="w-5 h-5 text-black/40" />
                            </div>
                          </div>
                        </div>

                        {selectedModule === module.id && (
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <p className="text-black/60 mb-4 font-sans">
                              {module.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {module.topics.map((topic, topicIndex) => (
                                <div
                                  key={topicIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm text-black/70 font-sans">
                                    {topic}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "projects" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black mb-6 font-sans">
                      Real-World Projects
                    </h2>
                    {programData.projects.map((project, index) => (
                      <div
                        key={index}
                        className="p-6 border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors"
                      >
                        <h3 className="text-xl font-semibold text-black mb-3 font-sans">
                          {project.title}
                        </h3>
                        <p className="text-black/60 mb-4 font-sans">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-black text-white text-sm rounded-full font-sans"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "instructor" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black mb-6 font-sans">
                      Meet Your Instructor
                    </h2>
                    <div className="flex items-start space-x-6">
                      <img
                        src={programData.instructor.image}
                        alt={programData.instructor.name}
                        className="w-20 h-20 rounded-2xl object-cover border border-white/40"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-black font-sans">
                          {programData.instructor.name}
                        </h3>
                        <p className="text-black/60 mb-2 font-sans">
                          {programData.instructor.title} at{" "}
                          {programData.instructor.company}
                        </p>
                        <p className="text-black/60 mb-4 font-sans">
                          {programData.instructor.experience} experience
                        </p>
                        <button className="flex items-center space-x-2 text-black hover:text-black/80 transition-colors font-sans">
                          <MessageCircle className="w-5 h-5" />
                          <span>Message Instructor</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-32 border border-white/40">
                <h3 className="text-lg font-semibold text-black mb-4 font-sans">
                  Program Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-black/60 font-sans">Duration</span>
                    <span className="font-semibold font-sans">
                      {programData.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60 font-sans">Level</span>
                    <span className="font-semibold font-sans">
                      {programData.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60 font-sans">Students</span>
                    <span className="font-semibold font-sans">
                      {programData.students}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60 font-sans">Certificate</span>
                    <span className="font-semibold text-green-600 font-sans">
                      ✓ Included
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gray-100 text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 font-sans">
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Text */}
        <div className="flex justify-center pb-8">
          <div className="decorative-text text-black/40">
            TECH EDUCATION & INNOVATION
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/10 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `pulse ${
                  4 + Math.random() * 4
                }s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Enrollment Success Modal */}
        {isEnrolled && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsEnrolled(false)}
          >
            <div
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center border border-white/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${programData.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/40`}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-2 font-sans">
                Enrollment Successful!
              </h2>
              <p className="text-black/60 mb-6 font-sans">
                Welcome to your learning journey! Check your email for next
                steps.
              </p>
              <button
                className="w-full bg-black text-white py-3 rounded-xl font-semibold shadow-lg font-sans"
                onClick={() => setIsEnrolled(false)}
              >
                Continue Learning
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProgramDescriptionPage;
