import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ name, image, color, minimal, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, boxShadow: "0 15px 40px rgba(255, 215, 0, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        cursor: "pointer",
        padding: "25px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: `5px solid ${color || "#FFD700"}`,
        transition: "all 0.3s ease",
      }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "70px", height: "70px", marginBottom: "16px" }}
      />
      <div
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#0D47A1",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {name}
      </div>
    </motion.div>
  );
}
