import React from "react";
import "../App.css"; // Import CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCode } from "react-icons/fa"; // Import coding icon

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <FaCode className="splash-icon" /> {/* Coding Icon */}
    </div>
  );
};

export default SplashScreen;

