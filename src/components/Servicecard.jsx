import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ service, onClick, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  // Service Card Styles
  const serviceCardStyle = {
    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)",
    backdropFilter: "blur(16px)",
    borderRadius: "20px",
    padding: isMobile ? "28px 20px" : "36px 28px",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
    boxShadow: isHovered 
      ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)" 
      : "0 8px 32px rgba(0, 0, 0, 0.3)",
  };

  const cardGradientOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: service.gradient,
    borderRadius: "20px 20px 0 0",
  };

  const cardIconContainer = {
    width: isMobile ? "70px" : "80px",
    height: isMobile ? "70px" : "80px",
    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}08 100%)`,
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto",
    border: `1.5px solid ${service.color}25`,
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
  };

  const cardIconStyle = {
    fontSize: isMobile ? "2rem" : "2.2rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
  };

  const cardNameStyle = {
    fontSize: isMobile ? "1.2rem" : "1.4rem",
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "12px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.3",
  };

  const cardDescriptionStyle = {
    fontSize: isMobile ? "0.85rem" : "0.95rem",
    color: "#94A3B8",
    lineHeight: "1.6",
    marginBottom: "20px",
    minHeight: isMobile ? "60px" : "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const featuresGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
    marginBottom: "24px",
  };

  const featureStyle = {
    fontSize: "0.75rem",
    color: service.color,
    background: `rgba(${parseInt(service.color.slice(1, 3), 16)}, ${parseInt(service.color.slice(3, 5), 16)}, ${parseInt(service.color.slice(5, 7), 16)}, 0.1)`,
    padding: "6px 8px",
    borderRadius: "8px",
    textAlign: "center",
    border: `1px solid ${service.color}20`,
    fontWeight: "500",
  };

  const exploreButtonStyle = {
    background: service.gradient,
    color: "#FFFFFF",
    border: "none",
    padding: "12px 24px",
    borderRadius: "10px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
  };

  const buttonHoverOverlay = {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "left 0.6s ease",
  };

  return (
    <motion.div
      style={serviceCardStyle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Gradient Top Border */}
      <div style={cardGradientOverlay}></div>
      
      {/* Icon Container */}
      <motion.div 
        style={cardIconContainer}
        whileHover={{ 
          scale: 1.1,
          background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}12 100%)`
        }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div style={cardIconStyle}>{service.icon}</div>
      </motion.div>
      
      {/* Service Name */}
      <h3 style={cardNameStyle}>{service.name}</h3>
      
      {/* Service Description */}
      <p style={cardDescriptionStyle}>{service.description}</p>
      
      {/* Features Grid */}
      <div style={featuresGridStyle}>
        {service.features.slice(0, 4).map((feature, idx) => (
          <motion.span 
            key={idx} 
            style={featureStyle}
            whileHover={{ 
              scale: 1.05,
              background: `rgba(${parseInt(service.color.slice(1, 3), 16)}, ${parseInt(service.color.slice(3, 5), 16)}, ${parseInt(service.color.slice(5, 7), 16)}, 0.15)`
            }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {feature}
          </motion.span>
        ))}
      </div>
      
      {/* Explore Button */}
      <motion.button
        style={exploreButtonStyle}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)"
        }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={(e) => {
          e.currentTarget.querySelector('.button-shine').style.left = '100%';
        }}
        onHoverEnd={(e) => {
          e.currentTarget.querySelector('.button-shine').style.left = '-100%';
        }}
      >
        <div 
          className="button-shine"
          style={buttonHoverOverlay}
        ></div>
        Explore More
      </motion.button>

      {/* Hover Glow Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at center, ${service.color}08 0%, transparent 70%)`,
            borderRadius: "20px",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      )}
    </motion.div>
  );
}