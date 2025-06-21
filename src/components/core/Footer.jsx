import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, ExternalLink } from "lucide-react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // Navigation links
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/program" },
    { label: "Contact Us", href: "/contact" },
    { label: "Login To Portal", href: "/login" },
  ];

  // Social links
  const socialLinks = [
    {
      label: "LINKEDIN",
      href: "https://linkedin.com",
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      label: "X.COM",
      href: "https://x.com",
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      label: "Youtube",
      href: "https://dribbble.com",
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      label: "INSTAGRAM",
      href: "https://instagram.com",
      icon: <ExternalLink className="w-4 h-4" />,
    },
  ];

  // Legal links
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Term & Condition", href: "/term" },
    { label: "Disclaimer", href: "/discalimer" },
  ];

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Smooth scroll to section
  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <>
      <style jsx>{`
        .footer-text {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Avenir Next",
            Avenir, "Segoe UI", "Helvetica Neue", Helvetica, Cantarell, Ubuntu,
            Roboto, Noto, Arial, sans-serif;
          font-weight: 600;
        }

        .mono-text {
          font-family: "SF Mono", Menlo, Consolas, Monaco, "Liberation Mono",
            "Lucida Console", monospace;
          font-weight: 500;
        }

        .decorative-diamonds {
          font-family: "SF Mono", monospace;
          font-weight: 400;
        }
      `}</style>

      <footer className="bg-black text-white relative overflow-hidden">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Navigation Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="footer-text block text-white hover:text-yellow-400 transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Social Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="footer-text flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span>{link.label}</span>
                    <motion.div
                      animate={{
                        rotate: hoveredLink === link.label ? 45 : 0,
                        scale: hoveredLink === link.label ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.icon}
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {legalLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="footer-text block text-white hover:text-yellow-400 transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Back to Top Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <motion.button
                onClick={scrollToTop}
                className="footer-text text-white hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 ml-auto"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <span>Scroll To Top</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Left - Copyright */}
              <div className="flex items-center space-x-4">
                <motion.div
                  className="decorative-diamonds text-yellow-400 text-lg"
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ♦
                </motion.div>
                <span className="footer-text text-gray-400">
                  © 2025 INLIGHN TECH
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute decorative-diamonds text-gray-800 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            >
              ♦
            </motion.div>
          ))}
        </div>

        {/* Y2K Design Element */}
        <motion.div
          className="absolute bottom-4 left-4 mono-text text-gray-600 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          Y2K DESIGN
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
