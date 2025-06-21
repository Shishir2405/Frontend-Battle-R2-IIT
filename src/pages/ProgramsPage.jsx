import React, { useState, useEffect } from "react";
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
  ChevronRight,
} from "lucide-react";

const ProgramsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const programs = [
    {
      id: 1,
      title: "Business Analyst Internship Program",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      icon: <BarChart3 className="w-5 h-5" />,
      rating: 5,
      description:
        "Gain practical business analysis skills by working on real-world projects and learn to bridge business needs with technical solutions.",
      gradient: "from-purple-200 via-purple-300 to-purple-400",
      accent: "bg-purple-900",
      height: "h-96",
      slug: "business-analyst",
    },
    {
      id: 2,
      title: "Front-End Development Internship",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=280&fit=crop",
      icon: <Code className="w-5 h-5" />,
      rating: 5,
      description:
        "Kickstart your journey into web development by mastering HTML, CSS, JavaScript, React, and modern development tools.",
      gradient: "from-blue-200 via-blue-300 to-blue-400",
      accent: "bg-blue-900",
      height: "h-80",
      slug: "frontend-development",
    },
    {
      id: 3,
      title: "Ethical Hacking with Kali Linux",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=260&fit=crop",
      icon: <Shield className="w-5 h-5" />,
      rating: 5,
      description:
        "🔒 Gain practical skills in cybersecurity, penetration testing, and vulnerability assessment using industry-standard tools.",
      gradient: "from-green-200 via-green-300 to-green-400",
      accent: "bg-green-900",
      height: "h-112",
      slug: "ethical-hacking",
    },
    {
      id: 4,
      title: "Full Stack Development Internship",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      icon: <Database className="w-5 h-5" />,
      rating: 5,
      description:
        "Master web development from the ground up with both frontend and backend technologies including databases and deployment.",
      gradient: "from-violet-200 via-violet-300 to-violet-400",
      accent: "bg-violet-900",
      height: "h-104",
      slug: "fullstack-development",
    },
    {
      id: 5,
      title: "AI & Machine Learning Internship",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=270&fit=crop",
      icon: <Brain className="w-5 h-5" />,
      rating: 5,
      description:
        "Dive into the future of technology with hands-on AI and ML projects. Learn Python, TensorFlow, neural networks, and build intelligent applications.",
      gradient: "from-pink-200 via-pink-300 to-pink-400",
      accent: "bg-pink-900",
      height: "h-120",
      slug: "ai-machine-learning",
    },
    {
      id: 6,
      title: "Data Analyst Internship",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
      icon: <PieChart className="w-5 h-5" />,
      rating: 5,
      description:
        "Transform raw data into actionable insights with modern analytics tools. Master Excel, Python, SQL, Tableau, and statistical analysis.",
      gradient: "from-orange-200 via-orange-300 to-orange-400",
      accent: "bg-orange-900",
      height: "h-80",
      slug: "data-analyst",
    },
    {
      id: 7,
      title: "Offensive Cyber Security Internship",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=290&fit=crop",
      icon: <Lock className="w-5 h-5" />,
      rating: 5,
      description:
        "Master advanced penetration testing and ethical hacking techniques. Learn network security, vulnerability assessment, and offensive security methodologies.",
      gradient: "from-red-200 via-red-300 to-red-400",
      accent: "bg-red-900",
      height: "h-128",
      slug: "offensive-cyber-security",
    },
    {
      id: 8,
      title: "Data Science Internship",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      icon: <TrendingUp className="w-5 h-5" />,
      rating: 5,
      description:
        "Explore statistical modeling, machine learning, and predictive analytics. Work with big data, create visualizations, and build models that predict future trends.",
      gradient: "from-teal-200 via-teal-300 to-teal-400",
      accent: "bg-teal-900",
      height: "h-96",
      slug: "data-science",
    },
  ];

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const handleCardClick = (slug) => {
    window.location.href = `/programs/${slug}`;
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < rating ? "text-black fill-current" : "text-black/20"
            }`}
          />
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

  const ProgramCard = ({ program, index }) => {
    const isHovered = hoveredCard === program.id;
    const randomRotate = Math.random() * 2 - 1;

    return (
      <div
        className={`${program.height} mb-6 group cursor-pointer break-inside-avoid`}
        onMouseEnter={() => setHoveredCard(program.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => handleCardClick(program.slug)}
        style={{
          animationDelay: `${index * 0.1}s`,
          animation: "fadeInUp 0.8s ease-out forwards",
          opacity: 0,
          transform: `translateY(20px) rotate(${randomRotate}deg)`,
        }}
      >
        <div
          className={`h-full bg-gradient-to-br ${program.gradient} rounded-2xl overflow-hidden shadow-lg border border-white/40 relative transition-all duration-500 hover:shadow-xl`}
          style={{
            transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px) ${
              isHovered ? "scale(1.02) rotate(0deg)" : ""
            }`,
            transformOrigin: "center",
          }}
        >
          {/* Top section with decorative elements */}
          <div className="p-5 pb-0 flex justify-between items-start relative">
            <div className={`w-3 h-3 ${program.accent} rounded-sm`}></div>
            <div className="text-xs font-mono text-black/60 uppercase tracking-wide font-medium">
              {String(program.id).padStart(2, "0")}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-32 overflow-hidden mx-5 mb-4 rounded-xl">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Content Section */}
          <div className="px-5 pb-5 h-full flex flex-col justify-between">
            {/* Icon center area */}
            <div className="flex justify-center mb-4">
              <div
                className={`${program.accent} p-2 rounded-sm transform ${
                  isHovered ? "rotate-45 scale-110" : "rotate-45"
                } transition-all duration-300`}
              >
                <div className="text-white transform -rotate-45">
                  {program.icon}
                </div>
              </div>
            </div>

            {/* Title and Rating */}
            <div className="space-y-3 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-black leading-tight mb-2 font-sans">
                  {program.title}
                </h3>
                <StarRating rating={program.rating} />
              </div>

              {/* Description */}
              <p className="text-black/70 text-xs leading-relaxed line-clamp-3 font-sans">
                {program.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <button className="w-full bg-black text-white py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center space-x-2 hover:bg-black/90 transition-all duration-300 font-sans uppercase tracking-wide">
                <span>Learn More</span>
                <ChevronRight
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
          font-size: clamp(2rem, 6vw, 3.5rem);
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .h-104 {
          height: 26rem;
        }
        .h-112 {
          height: 28rem;
        }
        .h-120 {
          height: 30rem;
        }
        .h-128 {
          height: 32rem;
        }
      `}</style>

      <section className="min-h-screen bg-[#f9f4eb] py-20 px-8">
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

          <div className="decorative-text text-black/60">PROG</div>

          <div className="decorative-text text-black/60">RAMS</div>

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
        <div className="max-w-7xl mx-auto text-center mb-16 mt-20">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-px bg-black/30" />
            <span className="decorative-text text-black/60 uppercase">
              Internship Programs
            </span>
            <div className="w-8 h-px bg-black/30" />
          </div>

          <h1 className="hero-title text-black mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>

          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed font-sans">
            Transform your career with industry-focused internship programs
            <br />
            designed to bridge the gap between academic learning and
            <br />
            professional excellence.{" "}
            <span className="text-black/50">Learn today, lead tomorrow.</span>
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center mt-24">
          <div className="bg-black rounded-2xl p-12 text-white shadow-xl border border-white/10">
            <h2 className="hero-title text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 mb-8 text-lg leading-relaxed font-sans">
              Join thousands of students who have transformed their careers
              <br />
              with INLIGHN TECH's industry-leading internship programs
            </p>
            <button
              className="bg-white text-black px-10 py-4 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-3 mx-auto font-sans uppercase tracking-wide"
              style={{
                transform: `translate(${mouseParallaxX * 2}px, ${
                  mouseParallaxY * 2
                }px)`,
              }}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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

        {/* Bottom Decorative Text */}
        <div className="flex justify-center mt-16">
          <div className="decorative-text text-black/40">
            TECH EDUCATION & INNOVATION
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsGrid;
