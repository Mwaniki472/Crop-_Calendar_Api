import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">
      <h1 className="brand"><strong>AgriClime</strong> 🌾</h1>

      <div className="header-content">
        <button
          className="get-started-btn"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>

        <div className="header-description">
          <p>The AgriClime app offers real-time weather updates and farm tips to help farmers make informed decisions,</p>
          <p>ultimately improving crop yields and sustainability.</p>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
