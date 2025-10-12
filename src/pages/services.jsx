import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "../components/Servicecard";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      name: "Trademark Registration",
      description: "Protect your brand identity with comprehensive trademark registration services. Secure your business name, logo, and slogan legally.",
      documents: ["Business PAN Card", "Address Proof", "Brand Logo Image", "Trademark Application Form", "User Affidavit"],
      image: "https://cdn-icons-png.flaticon.com/512/2455/2455233.png",
      color: "#2563EB",
      gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
      icon: "®",
      features: ["Brand Protection", "Legal Security", "Nationwide Coverage", "Renewal Services", "Online Tracking", "Expert Support"],
      benefits: ["Exclusive Rights", "Legal Protection", "Brand Value", "Business Credibility"]
    },
    {
      name: "Brand Registration",
      description: "Secure your company's visual identity with professional brand registration. Protect your logos, taglines, and brand elements.",
      documents: ["Identity Proof", "Logo Design Files", "Business Certificate", "Authorization Letter", "Brand Usage Details"],
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      color: "#7C3AED",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
      icon: "🖋️",
      features: ["Logo Protection", "Brand Identity", "Design Security", "Legal Backup", "Portfolio Management", "Global Protection"],
      benefits: ["Visual Identity", "Market Recognition", "Legal Security", "Asset Protection"]
    },
    {
      name: "Copyright Registration",
      description: "Protect your creative works including books, music, software, and artistic creations with copyright registration.",
      documents: ["Author ID Proof", "Work Sample/Manuscript", "Application Form", "Declaration Form", "Publication Details"],
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
      color: "#DC2626",
      gradient: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
      icon: "©",
      features: ["IP Protection", "Legal Evidence", "Digital Rights", "Lifetime Coverage", "International Protection", "Royalty Management"],
      benefits: ["Creative Protection", "Legal Rights", "Revenue Security", "Global Recognition"]
    },
    {
      name: "Life Insurance",
      description: "Secure your family's financial future with customized life insurance plans. Comprehensive coverage for life's uncertainties.",
      documents: ["Identity Proof", "Income Documents", "Medical Reports", "Nominee Details", "Bank Details"],
      image: "https://cdn-icons-png.flaticon.com/512/825/825509.png",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      icon: "🛡️",
      features: ["Life Coverage", "Tax Benefits", "Savings Plan", "Family Security", "Critical Illness", "Accident Cover"],
      benefits: ["Financial Security", "Tax Savings", "Wealth Creation", "Peace of Mind"]
    },
    {
      name: "Health Insurance",
      description: "Comprehensive health insurance plans covering hospitalization, critical illnesses, and wellness programs for complete protection.",
      documents: ["ID Proof", "Medical History", "Income Proof", "Family Details", "Previous Policy Details"],
      image: "https://cdn-icons-png.flaticon.com/512/2966/2966328.png",
      color: "#EA580C",
      gradient: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)",
      icon: "🏥",
      features: ["Cashless Treatment", "Critical Illness", "OPD Coverage", "Tax Savings", "Wellness Programs", "Emergency Cover"],
      benefits: ["Medical Security", "Cashless Hospitals", "Tax Benefits", "Family Protection"]
    },
    {
      name: "Business Registration",
      description: "Complete business registration services for startups, SMEs, and enterprises. Legal entity formation and compliance management.",
      documents: ["Founder ID Proof", "Business Address Proof", "Business Plan", "Partnership Deed", "Office Space Proof"],
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
      color: "#CA8A04",
      gradient: "linear-gradient(135deg, #CA8A04 0%, #A16207 100%)",
      icon: "🏢",
      features: ["Legal Entity", "GST Registration", "Compliance", "Business Banking", "Tax Planning", "License Support"],
      benefits: ["Legal Structure", "Business Growth", "Tax Benefits", "Investor Confidence"]
    }
  ];

  // Modern Styles
  const pageStyle = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
    padding: isMobile ? "80px 16px 40px" : "120px 24px 60px",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  const backgroundDecoration = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.08) 0%, transparent 50%)
    `,
    zIndex: 0,
  };

  const sectionTitle = {
    fontSize: isMobile ? "2.2rem" : "3.2rem",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: isMobile ? "16px" : "24px",
    background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    zIndex: 1,
    lineHeight: "1.2",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "1rem" : "1.2rem",
    textAlign: "center",
    color: "#94A3B8",
    marginBottom: isMobile ? "40px" : "60px",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    position: "relative",
    zIndex: 1,
    fontWeight: "400",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
    gap: isMobile ? "24px" : "32px",
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  };

  // Overlay Styles
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(16px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: isMobile ? "16px" : "24px",
  };

  const overlayContentStyle = {
    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    padding: isMobile ? "24px" : "40px",
    maxWidth: "800px",
    width: "100%",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 32px 64px rgba(0, 0, 0, 0.4)",
    position: "relative",
    overflow: "hidden",
    maxHeight: "90vh",
    overflowY: "auto",
  };

  const overlayGradientStyle = (gradient) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "6px",
    background: gradient,
    borderRadius: "24px 24px 0 0",
  });

  const overlayHeaderStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "24px",
    marginBottom: "32px",
    paddingRight: "40px",
  };

  const overlayIconContainer = {
    width: "80px",
    height: "80px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    flexShrink: 0,
  };

  const overlayIconStyle = {
    fontSize: "2.5rem",
  };

  const overlayTitleStyle = {
    fontSize: isMobile ? "1.5rem" : "2rem",
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "8px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.3",
  };

  const overlayDescStyle = {
    fontSize: isMobile ? "0.95rem" : "1.1rem",
    color: "#CBD5E0",
    lineHeight: "1.6",
  };

  const overlaySectionStyle = {
    marginBottom: "28px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const overlaySectionTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const documentsListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const documentItemStyle = {
    padding: "12px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#E2E8F0",
    fontSize: "0.95rem",
  };

  const documentBulletStyle = (color) => ({
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: color,
    flexShrink: 0,
  });

  const featuresGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "12px",
  };

  const featureItemStyle = (color) => ({
    background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`,
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    color: color,
    border: `1px solid ${color}20`,
  });

  const benefitsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "12px",
  };

  const benefitItemStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    color: "#10B981",
    border: "1px solid rgba(16, 185, 129, 0.2)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const overlayActionsStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "32px",
    flexDirection: isMobile ? "column" : "row",
  };

  const contactButtonStyle = {
    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    color: "#FFFFFF",
    border: "none",
    padding: "16px 32px",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    flex: 1,
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(37, 99, 235, 0.3)",
  };

  const closeButtonStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    color: "#FFFFFF",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "16px 24px",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flex: isMobile ? 1 : "none",
  };

  const closeIconStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#FFFFFF",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
  };

  const handleContactClick = () => {
    setSelectedService(null);
    navigate("/contact");
  };

  return (
    <div style={pageStyle}>
      {/* Background Decoration */}
      <div style={backgroundDecoration}></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={sectionTitle}
      >
        Our Professional Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={subtitleStyle}
      >
        Comprehensive solutions for your business and personal needs. 
        Experience professional service with guaranteed quality and support.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={gridStyle}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onClick={() => setSelectedService(service)}
            isMobile={isMobile}
          />
        ))}
      </motion.div>

      {/* Service Detail Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={overlayStyle}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={overlayContentStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={overlayGradientStyle(selectedService.gradient)}></div>
              
              <motion.div 
                style={closeIconStyle}
                whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedService(null)}
              >
                ×
              </motion.div>

              <div style={overlayHeaderStyle}>
                <div style={overlayIconContainer}>
                  <div style={overlayIconStyle}>{selectedService.icon}</div>
                </div>
                <div>
                  <h2 style={overlayTitleStyle}>{selectedService.name}</h2>
                  <p style={overlayDescStyle}>{selectedService.description}</p>
                </div>
              </div>

              <div style={overlaySectionStyle}>
                <h3 style={overlaySectionTitleStyle}>
                  📋 Required Documents
                </h3>
                <ul style={documentsListStyle}>
                  {selectedService.documents.map((doc, index) => (
                    <li key={index} style={documentItemStyle}>
                      <div style={documentBulletStyle(selectedService.color)}></div>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={overlaySectionStyle}>
                <h3 style={overlaySectionTitleStyle}>
                  ✨ Key Features
                </h3>
                <div style={featuresGridStyle}>
                  {selectedService.features.map((feature, index) => (
                    <div key={index} style={featureItemStyle(selectedService.color)}>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div style={overlaySectionStyle}>
                <h3 style={overlaySectionTitleStyle}>
                  💫 Key Benefits
                </h3>
                <div style={benefitsGridStyle}>
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} style={benefitItemStyle}>
                      <span>✓</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div style={overlayActionsStyle}>
                <motion.button
                  style={contactButtonStyle}
                  whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  style={closeButtonStyle}
                  whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}