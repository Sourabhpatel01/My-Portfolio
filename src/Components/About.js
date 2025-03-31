import React, { useState } from "react";
import "../External CSS/AboutSection.css";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("programming");

  const skills = {
    programming: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "SQLite"],
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "Django"],
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <img src="/sourabh.jpg" alt="Sourabh" className="profile-pic" />
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>
            I'm <span className="highlight">Sourabh</span>, a passionate Full-Stack Developer 
            with expertise in creating dynamic, high-performance web applications. 
            I love solving complex problems, optimizing UI/UX, and learning new technologies 
            to stay ahead in the industry. My goal is to develop user-centric applications 
            that are both functional and aesthetically pleasing.
          </p>
        </motion.div>
      </div>
      
      <div className="skills-container">
        <div className="tabs">
          {Object.keys(skills).map((category) => (
            <button 
              key={category} 
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <motion.ul 
          className="skills-list"
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills[activeTab].map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
