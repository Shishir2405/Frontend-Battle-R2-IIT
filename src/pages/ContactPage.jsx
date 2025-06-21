import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Address",
      info: "info@inlighntech.com",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-100 to-red-100",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      info: "+91-9368842663",
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-100 to-blue-100",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Office",
      info: "Corporate Office- Office No: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-100 to-red-100",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Registered Office",
      info: "Opposite swasti hospital anupam nagar badaun road bareilly uttar pradesh 243001",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-100 to-pink-100",
    },
  ];

  const faqs = [
    {
      question:
        "What makes Inlighn Tech different from other learning platforms?",
      answer:
        "Inlighn Tech provides top-quality learning modules and projects based on the latest industry technologies and trends.",
      isOpen: true,
    },
    {
      question: "How can I register for an internship?",
      answer:
        "You can register for an internship by visiting our programs page and filling out the application form. Our team will review your application and get back to you within 2-3 business days.",
    },
    {
      question:
        "After filling out the registration form, whom should I contact?",
      answer:
        "After registration, our admissions team will contact you directly. You can also reach out to us via email at info@inlighntech.com or call us at +91-9368842663.",
    },
    {
      question: "What is the project submission deadline?",
      answer:
        "Project submission deadlines vary by program. Typically, you'll have 2-4 weeks to complete your final project. Specific deadlines will be communicated during your program orientation.",
    },
    {
      question:
        "Is it mandatory to submit a project only from the available options on the portal?",
      answer:
        "While we provide project options, you can also propose your own project idea. It must be approved by your mentor and align with your program's learning objectives.",
    },
    {
      question: "How can I proceed with signing up at Inlighn Tech?",
      answer:
        "Visit our programs page, choose your desired course, fill out the application form, and make the payment. You'll receive access credentials within 24 hours of successful enrollment.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-[#f9f4eb] relative overflow-hidden"
      data-bg="light"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 opacity-5 ${
              i % 3 === 0
                ? "bg-purple-300"
                : i % 3 === 1
                ? "bg-pink-300"
                : "bg-orange-300"
            } rounded-full blur-xl`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
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

      <div className="relative z-10 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-8"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Connect{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to start your tech journey? We're here to help you every step
            of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-8"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.2,
                  ease: "easeOut",
                }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                data-cursor-hover
                data-cursor-text="CONTACT"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    className={`w-20 h-20 bg-gradient-to-br ${contact.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl text-white`}
                  >
                    {contact.icon}
                  </motion.div>

                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {contact.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {contact.info}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Send className="w-8 h-8 text-purple-800" />
                </motion.div>

                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-300 rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-semibold">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/90"
                        placeholder="Enter your full name"
                        data-cursor-hover
                        data-cursor-text="TYPE"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.1, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/90"
                        placeholder="Enter your email"
                        data-cursor-hover
                        data-cursor-text="TYPE"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/90"
                        placeholder="Enter your phone number"
                        data-cursor-hover
                        data-cursor-text="TYPE"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/90"
                      data-cursor-hover
                      data-cursor-text="SELECT"
                    >
                      <option value="">Select a subject</option>
                      <option value="internship">Internship Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                >
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/90 resize-none"
                      placeholder="Tell us how we can help you..."
                      data-cursor-hover
                      data-cursor-text="TYPE"
                    ></textarea>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl disabled:cursor-not-allowed"
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.02,
                    y: isSubmitting ? 0 : -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                  data-cursor-text="SEND"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <MessageSquare className="w-8 h-8 text-orange-800" />
                </motion.div>

                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">
                  Find quick answers to common questions about our programs and
                  services.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/50"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/90 transition-all duration-300 group"
                      data-cursor-hover
                      data-cursor-text="EXPAND"
                    >
                      <span className="text-gray-900 font-bold text-lg pr-4 group-hover:text-purple-600 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{
                          rotate: activeAccordion === index ? 180 : 0,
                          scale: activeAccordion === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          index % 3 === 0
                            ? "bg-gradient-to-br from-purple-200 to-purple-400"
                            : index % 3 === 1
                            ? "bg-gradient-to-br from-pink-200 to-pink-400"
                            : "bg-gradient-to-br from-orange-200 to-orange-400"
                        } shadow-lg border-2 border-white/50`}
                      >
                        <motion.div
                          animate={{
                            rotateX: activeAccordion === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown
                            className={`w-6 h-6 ${
                              index % 3 === 0
                                ? "text-purple-800"
                                : index % 3 === 1
                                ? "text-pink-800"
                                : "text-orange-800"
                            }`}
                          />
                        </motion.div>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={`bg-gradient-to-br ${
                            index % 3 === 0
                              ? "from-purple-50 to-purple-100"
                              : index % 3 === 1
                              ? "from-pink-50 to-pink-100"
                              : "from-orange-50 to-orange-100"
                          } border-t border-white/50`}
                        >
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="px-8 py-6"
                          >
                            <div className="flex items-start gap-4">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                  index % 3 === 0
                                    ? "bg-purple-300"
                                    : index % 3 === 1
                                    ? "bg-pink-300"
                                    : "bg-orange-300"
                                } shadow-md`}
                              >
                                <CheckCircle
                                  className={`w-5 h-5 ${
                                    index % 3 === 0
                                      ? "text-purple-800"
                                      : index % 3 === 1
                                      ? "text-pink-800"
                                      : "text-orange-800"
                                  }`}
                                />
                              </motion.div>
                              <p
                                className={`leading-relaxed font-medium ${
                                  index % 3 === 0
                                    ? "text-purple-800"
                                    : index % 3 === 1
                                    ? "text-pink-800"
                                    : "text-orange-800"
                                }`}
                              >
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
