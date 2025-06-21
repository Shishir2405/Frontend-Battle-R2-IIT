import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ navigate, location }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Navigation items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Certificate", href: "/certificate" },
    { label: "What's Special", href: "/special" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Check if current path is active
  const isActiveLink = (href) => {
    return location?.pathname === href;
  };

  // Navigate to page
  const handleNavigation = (href) => {
    if (navigate) {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <style>{`
        .nav-text {
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

        .glass-effect {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        @media (max-width: 767px) {
          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 40;
          }
        }

        .nav-link-active {
          background: #000000;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .nav-link-hover:hover {
          border: 2px solid #000000;
          background: transparent;
          color: #000000;
        }

        .nav-link-default {
          border: 2px solid transparent;
          background: transparent;
          color: #000000;
        }

        .dark .nav-link-active {
          background: #ffffff;
          color: #000000;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .dark .nav-link-hover:hover {
          border: 2px solid #ffffff;
          background: transparent;
          color: #ffffff;
        }

        .dark .nav-link-default {
          border: 2px solid transparent;
          background: transparent;
          color: #ffffff;
        }
      `}</style>

      {/* Desktop/Mobile Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? isDarkMode
              ? "bg-gray-900/90 glass-effect border-b border-white/10 shadow-lg"
              : "bg-[#f9f4eb]/90 glass-effect border-b border-black/10 shadow-lg"
            : isDarkMode
            ? "bg-gray-900/80 glass-effect border-b border-white/5"
            : "bg-[#f9f4eb]/80 glass-effect border-b border-black/5"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3 md:space-x-4 cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavigation("/")}
            data-cursor-hover
            data-cursor-text="HOME"
          >
            <motion.div
              className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="text-white font-black text-sm md:text-xl relative z-10">
                IT
              </span>
            </motion.div>

            <motion.span
              className={`nav-text text-lg md:text-2xl tracking-wide font-black ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              whileHover={{
                background: "linear-gradient(45deg, #7c3aed, #ec4899, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              transition={{ duration: 0.3 }}
            >
              {isMobile ? "IT" : "INLIGHN TECH"}
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`nav-text px-6 py-3 rounded-2xl text-sm transition-all duration-300 relative overflow-hidden group ${
                  isActiveLink(item.href)
                    ? "nav-link-active"
                    : "nav-link-default nav-link-hover"
                }`}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
                data-cursor-text="NAVIGATE"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 md:p-3 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              data-cursor-hover
              data-cursor-text="THEME"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Moon className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              data-cursor-hover
              data-cursor-text="MENU"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
          style={{
            width: `${scrolled ? "100%" : "0%"}`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 ${
              isDarkMode
                ? "bg-gray-900/95 border-l border-white/10"
                : "bg-[#f9f4eb]/95 border-l border-black/10"
            } glass-effect md:hidden`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="p-6 h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.span
                  className={`nav-text text-xl font-black ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Menu
                </motion.span>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 rounded-xl ${
                    isDarkMode
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                  data-cursor-hover
                  data-cursor-text="CLOSE"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full text-left nav-text px-6 py-4 rounded-2xl text-lg transition-all duration-300 relative overflow-hidden group border-2 ${
                      isActiveLink(item.href)
                        ? isDarkMode
                          ? "bg-white text-black shadow-lg border-white"
                          : "bg-black text-white shadow-lg border-black"
                        : isDarkMode
                        ? "hover:border-white text-white border-transparent hover:bg-transparent"
                        : "hover:border-black text-black border-transparent hover:bg-transparent"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor-hover
                    data-cursor-text="GO"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-10"
                      initial={{ scale: 0, rotate: 45 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="relative z-10 flex items-center justify-between">
                      {item.label}
                      {isActiveLink(item.href) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-current rounded-full"
                        />
                      )}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
                <motion.div
                  className={`text-center text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  © 2025 Inlighn Tech
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
