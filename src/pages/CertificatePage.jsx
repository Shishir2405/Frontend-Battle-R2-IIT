import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Search,
  Award,
  FileText,
  Calendar,
  User,
  Star,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const CertificatePage = () => {
  const [internId, setInternId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const mockCertificates = {
    ITID001: {
      name: "Sarah Johnson",
      program: "Full Stack Development",
      duration: "6 months",
      startDate: "January 2024",
      endDate: "June 2024",
      grade: "A+",
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
      ],
      mentor: "Dr. Michael Smith",
      issueDate: "June 15, 2024",
    },
    ITID002: {
      name: "Alex Chen",
      program: "Data Science & Analytics",
      duration: "4 months",
      startDate: "February 2024",
      endDate: "May 2024",
      grade: "A",
      skills: [
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
      ],
      mentor: "Dr. Emily Rodriguez",
      issueDate: "May 20, 2024",
    },
    ITID003: {
      name: "Jessica Kumar",
      program: "Cyber Security",
      duration: "5 months",
      startDate: "March 2024",
      endDate: "July 2024",
      grade: "A+",
      skills: [
        "Network Security",
        "Ethical Hacking",
        "Penetration Testing",
        "Cryptography",
      ],
      mentor: "Prof. David Wilson",
      issueDate: "July 10, 2024",
    },
  };

  const handleVerify = async () => {
    if (!internId.trim()) return;
    setIsVerifying(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const certificate = mockCertificates[internId.toUpperCase()];
    if (certificate) {
      setVerificationResult(certificate);
      setIsVerified(true);
    } else {
      setVerificationResult(null);
      setIsVerified(false);
    }
    setIsVerifying(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f4eb] via-[#faf5f0] to-[#f5f0e8] relative overflow-hidden">
      {/* Aesthetic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          style={{ top: "-10%", right: "-10%" }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"
          style={{ bottom: "-10%", left: "-10%" }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0
                ? "bg-purple-300/30"
                : i % 3 === 1
                ? "bg-pink-300/30"
                : "bg-orange-300/30"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8 px-8 flex justify-center"
        >
          <div className="flex items-center gap-2 bg-white/40 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              Certificate Verification Portal
            </span>
          </div>
        </motion.div>

        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="max-w-4xl w-full">
            {/* Main Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="relative mb-8 inline-block"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/60 relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-2 border-2 border-white/20 rounded-2xl"
                  />
                  <ShieldCheck className="w-10 h-10 text-white relative z-10" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg"
                />
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight"
              >
                Verify Your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Achievement
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Enter your Intern ID to verify your certificate and showcase
                your skills to the world
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex justify-center gap-1 mt-6"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Verification Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/60">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.2,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30"
                    />
                    <Search className="w-8 h-8 text-white relative z-10" />
                  </motion.div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Enter Your Intern ID
                  </h2>
                  <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                    Your unique identifier can be found on your completion
                    certificate or offer letter
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="flex-1 relative"
                    >
                      <input
                        type="text"
                        value={internId}
                        onChange={(e) => setInternId(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="e.g., ITID001"
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-lg font-medium transition-all duration-300 bg-white/90 backdrop-blur-sm placeholder-gray-400"
                      />
                      <motion.div
                        animate={{ scale: internId ? [1, 1.1, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      >
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </motion.div>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      onClick={handleVerify}
                      disabled={isVerifying || !internId.trim()}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-2xl disabled:cursor-not-allowed group"
                      whileHover={{
                        scale: isVerifying ? 1 : 1.05,
                        y: isVerifying ? 0 : -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isVerifying ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5" />
                          <span>Verify Now</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Verification Result */}
            {(verificationResult ||
              (!isVerified && internId && !isVerifying)) && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="mt-12 relative group"
              >
                <div
                  className={`absolute -inset-1 rounded-3xl blur opacity-25 ${
                    isVerified
                      ? "bg-gradient-to-r from-green-400 to-emerald-400"
                      : "bg-gradient-to-r from-red-400 to-orange-400"
                  }`}
                ></div>
                <div
                  className={`relative bg-white/90 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 ${
                    isVerified ? "border-green-200" : "border-red-200"
                  }`}
                >
                  {isVerified ? (
                    // Verified Certificate
                    <div>
                      <div className="text-center mb-12">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            type: "spring",
                            bounce: 0.5,
                          }}
                          className="relative mb-8 inline-block"
                        >
                          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/60">
                            <CheckCircle className="w-12 h-12 text-white" />
                          </div>
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -inset-3 bg-green-400/20 rounded-full blur-lg"
                          />
                        </motion.div>

                        <motion.h3
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-3xl md:text-4xl font-black text-green-600 mb-4"
                        >
                          Certificate Verified!
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-lg text-gray-600 mb-6"
                        >
                          Congratulations! This certificate is authentic and
                          issued by INLIGHN TECH
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="flex justify-center gap-1"
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: 1 + i * 0.1,
                                duration: 0.5,
                                type: "spring",
                                bounce: 0.6,
                              }}
                            >
                              <Star className="w-6 h-6 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                            <div className="flex items-center gap-4 relative z-10">
                              <div className="w-12 h-12 bg-purple-300 rounded-xl flex items-center justify-center shadow-lg">
                                <User className="w-6 h-6 text-purple-800" />
                              </div>
                              <div>
                                <p className="text-xs text-purple-600 uppercase tracking-wider font-bold mb-1">
                                  Student Name
                                </p>
                                <p className="text-xl font-black text-purple-900">
                                  {verificationResult.name}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200 relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-pink-200/30 rounded-full -translate-y-8 translate-x-8"></div>
                            <div className="flex items-center gap-4 relative z-10">
                              <div className="w-12 h-12 bg-pink-300 rounded-xl flex items-center justify-center shadow-lg">
                                <FileText className="w-6 h-6 text-pink-800" />
                              </div>
                              <div>
                                <p className="text-xs text-pink-600 uppercase tracking-wider font-bold mb-1">
                                  Program
                                </p>
                                <p className="text-xl font-black text-pink-900">
                                  {verificationResult.program}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6, duration: 0.6 }}
                            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                            <div className="flex items-center gap-4 relative z-10">
                              <div className="w-12 h-12 bg-orange-300 rounded-xl flex items-center justify-center shadow-lg">
                                <Calendar className="w-6 h-6 text-orange-800" />
                              </div>
                              <div>
                                <p className="text-xs text-orange-600 uppercase tracking-wider font-bold mb-1">
                                  Duration
                                </p>
                                <p className="text-lg font-black text-orange-900">
                                  {verificationResult.startDate} -{" "}
                                  {verificationResult.endDate}
                                </p>
                                <p className="text-sm text-orange-700 font-semibold">
                                  ({verificationResult.duration})
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 shadow-lg relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full -translate-y-10 translate-x-10"></div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center shadow-lg">
                                <Award className="w-6 h-6 text-purple-800" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 uppercase tracking-wider font-bold mb-1">
                                  Final Grade
                                </p>
                                <p className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                  {verificationResult.grade}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2, duration: 0.6 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
                          >
                            <p className="text-xs text-gray-600 uppercase tracking-wider font-bold mb-4">
                              Skills Mastered
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {verificationResult.skills.map((skill, index) => (
                                <motion.span
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 2.2 + index * 0.1,
                                  }}
                                  className={`px-3 py-2 rounded-xl text-sm font-bold border-2 shadow-sm ${
                                    index % 3 === 0
                                      ? "bg-purple-100 text-purple-800 border-purple-200"
                                      : index % 3 === 1
                                      ? "bg-pink-100 text-pink-800 border-pink-200"
                                      : "bg-orange-100 text-orange-800 border-orange-200"
                                  }`}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.4, duration: 0.6 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
                          >
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-gray-600 uppercase tracking-wider font-bold mb-2">
                                  Mentor
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                  {verificationResult.mentor}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 uppercase tracking-wider font-bold mb-2">
                                  Issue Date
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                  {verificationResult.issueDate}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Certificate Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.6 }}
                        className="mt-10 relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl text-white text-center shadow-2xl">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 2.8,
                              duration: 0.6,
                              type: "spring",
                              bounce: 0.5,
                            }}
                            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute inset-2 border-2 border-white/30 rounded-xl"
                            />
                            <Award className="w-8 h-8 text-white relative z-10" />
                          </motion.div>
                          <p className="text-2xl font-black mb-2">
                            INLIGHN TECH Certified
                          </p>
                          <p className="text-lg opacity-90">
                            Digitally verified and blockchain secured
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    // Invalid Certificate
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          type: "spring",
                          bounce: 0.5,
                        }}
                        className="relative mb-8 inline-block"
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/60">
                          <XCircle className="w-12 h-12 text-white" />
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -inset-3 bg-red-400/20 rounded-full blur-lg"
                        />
                      </motion.div>

                      <motion.h3
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl md:text-4xl font-black text-red-600 mb-6"
                      >
                        Certificate Not Found
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-gray-600 mb-8"
                      >
                        The Intern ID "
                        <span className="font-bold text-red-600">
                          {internId}
                        </span>
                        " could not be verified. Please double-check your ID and
                        try again.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-8 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/20 rounded-full -translate-y-16 translate-x-16"></div>
                        <h4 className="text-xl font-bold text-red-800 mb-6 relative z-10">
                          Please ensure:
                        </h4>
                        <ul className="text-red-700 text-left space-y-3 max-w-md mx-auto relative z-10">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>
                              Your Intern ID format is correct (e.g., ITID001)
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>
                              You have successfully completed your internship
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>
                              Your certificate has been officially issued
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>
                              Contact our support team if you believe this is an
                              error
                            </span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Sample IDs for Demo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-16 text-center"
            >
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl">
                <p className="text-lg font-semibold text-gray-700 mb-6">
                  Try these demo certificate IDs:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {Object.keys(mockCertificates).map((id, index) => (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 2 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      onClick={() => setInternId(id)}
                      className={`group relative px-6 py-3 rounded-2xl text-white font-bold transition-all duration-300 shadow-lg overflow-hidden ${
                        index === 0
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : index === 1
                          ? "bg-gradient-to-r from-pink-500 to-pink-600"
                          : "bg-gradient-to-r from-orange-500 to-orange-600"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">{id}</span>
                    </motion.button>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-sm text-gray-500 mt-4"
                >
                  Click any ID above to see a sample verification result
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="pb-8 text-center"
        >
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Secure Verification</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-500" />
              <span>Blockchain Secured</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>Instantly Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatePage;
