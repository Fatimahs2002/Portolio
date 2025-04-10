import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // Import SplashScreen
import { Toaster } from 'react-hot-toast';
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 10 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <Navbar />
          <Header />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
    </Router>
  );
};

export default App;


