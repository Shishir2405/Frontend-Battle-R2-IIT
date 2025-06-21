import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Send, ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  const budgetOptions = [
    "€ 5.000 - € 10.000",
    "€ 10.000 - € 25.000",
    "€ 25.000 - € 50.000",
    "€ 50.000+",
  ];

  const projectTypes = [
    "Neue Website",
    "Website Redesign",
    "E-Commerce Shop",
    "Landing Page",
    "Web App",
    "Beratung",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        project: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    rows = null,
  }) => {
    const isTextarea = type === "textarea";
    const Component = isTextarea ? "textarea" : "input";

    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {label} {required && <span className="text-orange-500">*</span>}
        </label>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <Component
            type={isTextarea ? undefined : type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            rows={rows}
            required={required}
            className={`w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 resize-none ${
              focusedField === name
                ? "border-purple-400 bg-white shadow-lg transform scale-[1.02]"
                : "border-gray-200 hover:border-gray-300"
            } focus:outline-none focus:border-purple-400 focus:bg-white focus:shadow-lg`}
          />

          {/* Animated border effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{
              background:
                focusedField === name
                  ? "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))"
                  : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  const SelectField = ({
    label,
    name,
    options,
    placeholder,
    required = false,
  }) => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <select
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          required={required}
          className={`w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 appearance-none cursor-pointer ${
            focusedField === name
              ? "border-purple-400 bg-white shadow-lg transform scale-[1.02]"
              : "border-gray-200 hover:border-gray-300"
          } focus:outline-none focus:border-purple-400 focus:bg-white focus:shadow-lg`}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <ArrowUpRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="kontakt"
      className="bg-[#f9f4eb] py-24 px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 opacity-5 ${
              i % 3 === 0
                ? "bg-purple-300"
                : i % 3 === 1
                ? "bg-pink-300"
                : "bg-orange-300"
            } rounded-full blur-2xl`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-7xl md:text-8xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kontakt
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Bereit für ein außergewöhnliches Website-Projekt? Lassen Sie uns
            über Ihre Vision sprechen.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-8">
                Starten wir Ihr Projekt
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Direkte Antwort
                    </p>
                    <p className="text-gray-600">Innerhalb von 24 Stunden</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-pink-200 rounded-xl flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-pink-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Kostenlose Beratung
                    </p>
                    <p className="text-gray-600">
                      30 Minuten Strategiegespräch
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-orange-200 rounded-xl flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Maßgeschneidert
                    </p>
                    <p className="text-gray-600">
                      Individuelle Lösungen für Sie
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-black text-xl text-gray-900 mb-6">
                Warum Eduard Bodak?
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    Erfolgreiche Projekte
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-pink-600 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    Kundenzufriedenheit
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-600 mb-2">
                    24h
                  </div>
                  <div className="text-sm text-gray-600">Antwortzeit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 mb-2">
                    DE
                  </div>
                  <div className="text-sm text-gray-600">Made in Germany</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Ihr Name"
                  name="name"
                  placeholder="Max Mustermann"
                  required
                />
                <InputField
                  label="E-Mail Adresse"
                  name="email"
                  type="email"
                  placeholder="max@unternehmen.de"
                  required
                />
              </div>

              <InputField
                label="Unternehmen"
                name="company"
                placeholder="Ihre Firma GmbH"
              />

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="Projektart"
                  name="project"
                  options={projectTypes}
                  placeholder="Was können wir für Sie tun?"
                  required
                />
                <SelectField
                  label="Budget"
                  name="budget"
                  options={budgetOptions}
                  placeholder="Ungefährer Budgetrahmen"
                />
              </div>

              <InputField
                label="Projektbeschreibung"
                name="message"
                type="textarea"
                placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und Vorstellungen..."
                rows={6}
                required
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitStatus === "sending"}
                className={`w-full py-6 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                  submitStatus === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-500 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                } shadow-xl`}
                whileHover={
                  submitStatus === "sending" ? {} : { scale: 1.02, y: -2 }
                }
                whileTap={submitStatus === "sending" ? {} : { scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {submitStatus === "sending" && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                )}
                {submitStatus === "success" && (
                  <CheckCircle className="w-6 h-6" />
                )}
                {!submitStatus && <Send className="w-6 h-6" />}

                <span>
                  {submitStatus === "sending"
                    ? "Wird gesendet..."
                    : submitStatus === "success"
                    ? "Nachricht gesendet!"
                    : "Projekt anfragen"}
                </span>

                {!submitStatus && <ArrowUpRight className="w-6 h-6" />}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center p-4 bg-green-100 text-green-800 rounded-2xl border border-green-200"
                  >
                    <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold">
                      Vielen Dank für Ihre Anfrage!
                    </p>
                    <p className="text-sm">
                      Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Privacy Note */}
              <motion.p
                className="text-sm text-gray-500 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                Ihre Daten werden vertraulich behandelt und nicht an Dritte
                weitergegeben.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
