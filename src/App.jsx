import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/core/Navbar";
import Footer from "./components/core/Footer";
import ContactSection from "./components/core/ConnectSection";
import { CursorProvider } from "./components/core/CustomCursor";

import Home from "./pages/HomePage";
// import About from "./pages/About";
// import Programs from "./pages/Programs";

function App() {
  return (
    <>
      <CursorProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} /> */}
        </Routes>
       
        <Footer />
      </CursorProvider>
    </>
  );
}

export default App;
