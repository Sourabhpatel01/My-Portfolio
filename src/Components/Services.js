import React from "react";
import "../External CSS/Services.css";
import { FaLaptopCode, FaPencilRuler, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="service-icon" />, 
      title: "Web Design", 
      description: "Creating modern, responsive, and high-performance websites tailored to client needs."
    },
    {
      icon: <FaPencilRuler className="service-icon" />, 
      title: "UI/UX Design", 
      description: "Designing user-friendly interfaces with seamless user experience for web and mobile applications."
    },
    {
      icon: <FaPaintBrush className="service-icon" />, 
      title: "Graphics Design", 
      description: "Crafting visually appealing and creative graphics for branding, marketing, and digital presence."
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
