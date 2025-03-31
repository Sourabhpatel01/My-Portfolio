import React from "react";
import "../External CSS/MainSection.css"; // Import external CSS for main section
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <section className="main-section">
      <motion.div 
        className="intro"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm <span className="highlight">Sourabh</span></h1>
        <h2>Creative <span className="highlight">Full-Stack Developer</span></h2>
        <p>I specialize in building modern, high-performance web applications with a focus on beautiful UI and seamless UX.</p>
        <ul className="skills">
          <li>🔥 Next.js & React</li>
          <li>⚡ Frontend & Backend Development</li>
          <li>🎨 UI/UX Enthusiast</li>
          <li>🚀 Performance Optimization</li>
        </ul>
        <motion.a 
          href="./RESUME.pdf" target="_blank" 
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >Download CV</motion.a>
      </motion.div>
      
      <motion.div 
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, rotate: 3 }}
      >
        <img src="/sourabh.jpg" alt="Sourabh" className="animated-image" />
      </motion.div>
    </section>
  );
};

// export default Main;
// import React from 'react'

// export const Main = () => {
//   return (
//     <div>Main</div>
//   )
// }

