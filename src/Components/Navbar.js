import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "../External CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Sourabh</div>
      <div className={`nav-container ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li className="nav-item"><Link to="/" onClick={() => setMenuOpen(false)}><FaHome className="nav-icon" /> Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={() => setMenuOpen(false)}><FaUser className="nav-icon" /> About</Link></li>
          <li className="nav-item"><Link to="/services" onClick={() => setMenuOpen(false)}><FaBriefcase className="nav-icon" /> Services</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={() => setMenuOpen(false)}><FaEnvelope className="nav-icon" /> Contact</Link></li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
