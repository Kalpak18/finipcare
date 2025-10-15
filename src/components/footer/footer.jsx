import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./footer.css";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quickLinks = [
    { label: "Our Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    // { label: "Privacy Policy", href: "/privacy" },
    // { label: "Terms of Service", href: "/terms" },
  ];

  const services = [
    "Trademark Registration",
    "Brand Protection",
    "Copyright Services",
    "Life Insurance",
    "Health Insurance",
    "Financial Planning",
  ];

  return (
    <footer className={`footer ${isMobile ? "mobile" : ""}`}>
      <div className="footer-main">
        {/* Consultant Info */}
        <motion.div
          className="consultant-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="consultant-header">
            <div className="avatar">
              <span className="avatar-text">FC</span>
            </div>
            <div className="consultant-info">
              <h3 className="consultant-name">Financial Consultant</h3>
              <p className="consultant-title">Certified Financial Advisor</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>
                {isMobile ? (
                  <>
                    123 Business Plaza<br />
                    Financial District, Mumbai<br />
                    India - 400001
                  </>
                ) : (
                  "123 Business Plaza, Financial District, Mumbai, India - 400001"
                )}
              </span>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <span>consultant@finipcare.com</span>
            </div>
          </div>

          <div className="social-section">
            <h4 className="social-title">Connect With Us</h4>
            <div className="social-icons">
              {[
                { icon: "f", bg: "#1877F2", href: "#" },
                { icon: "𝕏", bg: "#1DA1F2", href: "#" },
                { icon: "in", bg: "#0077B5", href: "#" },
                { icon: "IG", bg: "#E4405F", href: "#" },
                { icon: "📱", bg: "#25D366", href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="social-icon"
                  style={{ background: social.bg }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="quick-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="section-title">Quick Links</h4>
          <ul>
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <motion.a href={link.href} whileHover={{ color: "#FFD93D" }}>
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services Summary */}
        <motion.div
          className="services-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="section-title">Our Services</h4>
          <div className="services-list">
            {services.map((service, idx) => (
              <span key={idx} className="service-tag">
                {isMobile ? service.split(" ")[0] : service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="copyright-content">
          <span>&copy; {new Date().getFullYear()} finipcare. All rights reserved.</span>
          <span className="made-with">
            {isMobile ? "Made with ❤️" : "Made with ❤️ for your financial security"}
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
