import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Navbar from "./components/core/Navbar";
import Footer from "./components/core/Footer";
import ContactSection from "./components/core/ConnectSection";
import { CursorProvider } from "./components/core/CustomCursor";
import LoadingScreen from "./components/core/Loader"; // Import the loading screen

import Home from "./pages/HomePage";
import CertificatePage from "./pages/CertificatePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import SpecialPage from "./pages/SpecialPage";
import ProgramDescriptionPage from "./pages/ProgramDescriptionPage"; // Add this import

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for exactly 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <CursorProvider>
        <Navbar navigate={navigate} location={location} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route
            path="/programs/:slug"
            element={<ProgramDescriptionPage />}
          />{" "}
          {/* Add this route */}
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/special" element={<SpecialPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </CursorProvider>
    </>
  );
}

export default App;
