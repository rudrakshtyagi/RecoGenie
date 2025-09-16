// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundAbstracts from "./components/BackgroundAbstracts";
import Home from "./pages/Home";
import Hackathons from "./pages/Hackathons";
import Internships from "./pages/Internships";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 transition-colors duration-500">
      <BackgroundAbstracts />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8 min-h-[calc(100vh-160px)]">
        {/* min height leaves space for footer and spacer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Spacer above footer for extra components */}
      <div className="h-24"></div>

      <Footer />
    </div>
  );
}