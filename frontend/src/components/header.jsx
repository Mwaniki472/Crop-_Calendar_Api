import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1>AgriClime</h1>
    <p>The AgriClime app offers real-time weather updates</p>
       <p>and farm tips to help farmers make informed decisions,</p>
         <p>ultimately improving crop yieldsand sustainability.</p>
          
      
      <p>SDG Addressed: #2 Zero Hunger</p>
      <button onClick={() => navigate("/login")}>Get Started</button>
    </header>
  );
};

export default Header;
