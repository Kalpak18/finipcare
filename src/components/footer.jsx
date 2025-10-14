import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quickLinks = [
    { label: "Our Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const services = [
    "Trademark Registration",
    "Brand Protection",
    "Copyright Services",
    "Life Insurance",
    "Health Insurance",
    "Financial Planning",
  ];

  // Responsive Styles
  const footerStyle = {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    color: '#ffffff',
    width: '100%',
    paddingTop: isMobile ? '40px' : '60px',
    paddingRight: isMobile ? '16px' : '20px',
    paddingBottom: isMobile ? '20px' : '20px',
    paddingLeft: isMobile ? '16px' : '20px',
    marginTop: 'auto',
  };

  const mainContentStyle = {
    display: isMobile ? 'flex' : 'grid',
    flexDirection: isMobile ? 'column' : 'unset',
    gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr',
    gap: isMobile ? '30px' : '40px',
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
    alignItems: 'start',
  };

  const consultantCardStyle = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)',
    borderRadius: isMobile ? '16px' : '20px',
    paddingTop: isMobile ? '20px' : '30px',
    paddingRight: isMobile ? '20px' : '30px',
    paddingBottom: isMobile ? '20px' : '30px',
    paddingLeft: isMobile ? '20px' : '30px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
  };

  const consultantHeaderStyle = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: isMobile ? '12px' : '15px', 
    marginBottom: isMobile ? '20px' : '25px'
  };

  const avatarStyle = {
    width: isMobile ? '50px' : '60px', 
    height: isMobile ? '50px' : '60px', 
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  };

  const avatarTextStyle = { 
    fontSize: isMobile ? '16px' : '18px', 
    fontWeight: 'bold', 
    color: '#fff'
  };

  const consultantNameStyle = {
    margin: 0, 
    fontSize: isMobile ? '18px' : '20px', 
    fontWeight: '700',
    background: 'linear-gradient(90deg, #6e8efb, #a777e3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const consultantTitleStyle = { 
    margin: 0, 
    color: '#cccccc', 
    fontSize: isMobile ? '13px' : '14px'
  };

  const contactItemStyle = { 
    display: 'flex', 
    alignItems: 'flex-start', 
    gap: isMobile ? '10px' : '12px', 
    marginBottom: isMobile ? '10px' : '12px', 
    fontSize: isMobile ? '13px' : '14px'
  };

  const iconStyle = { 
    fontSize: isMobile ? '14px' : '16px', 
    flexShrink: 0, 
    marginTop: '2px'
  };

  const socialSectionStyle = { 
    borderTop: '1px solid rgba(255,255,255,0.1)', 
    paddingTop: isMobile ? '16px' : '20px'
  };

  const socialTitleStyle = { 
    margin: '0 0 15px 0', 
    fontSize: isMobile ? '15px' : '16px', 
    fontWeight: '600', 
    color: '#cccccc'
  };

  const socialIconsStyle = { 
    display: 'flex', 
    gap: isMobile ? '8px' : '10px',
    flexWrap: 'wrap'
  };

  const socialIconStyle = { 
    width: isMobile ? '36px' : '40px', 
    height: isMobile ? '36px' : '40px', 
    borderRadius: isMobile ? '8px' : '10px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textDecoration: 'none'
  };

  const socialIconTextStyle = { 
    color: '#ffffff', 
    fontSize: isMobile ? '13px' : '14px', 
    fontWeight: 'bold'
  };

  const sectionTitleStyle = { 
    fontSize: isMobile ? '16px' : '18px', 
    fontWeight: '700', 
    marginBottom: isMobile ? '16px' : '20px', 
    background: 'linear-gradient(90deg, #6e8efb, #a777e3)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent'
  };

  const linkStyle = { 
    color: '#cccccc', 
    textDecoration: 'none', 
    fontSize: isMobile ? '13px' : '14px'
  };

  const servicesListStyleHorizontal = { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: isMobile ? '8px' : '10px', 
    marginTop: '10px'
  };

  const serviceTagStyle = { 
    background: 'rgba(255,255,255,0.08)', 
    paddingTop: isMobile ? '6px' : '8px',
    paddingBottom: isMobile ? '6px' : '8px',
    paddingLeft: isMobile ? '10px' : '12px',
    paddingRight: isMobile ? '10px' : '12px',    
    borderRadius: isMobile ? '10px' : '12px', 
    fontSize: isMobile ? '11px' : '12px', 
    color: '#cccccc', 
    textAlign: 'center'
  };

  const copyrightStyle = { 
    borderTop: '1px solid rgba(255,255,255,0.1)', 
    paddingTop: isMobile ? '16px' : '20px'
  };

  const copyrightContentStyle = { 
    maxWidth: '1200px', 
    margin: '0 auto', 
    display: 'flex', 
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    fontSize: isMobile ? '12px' : '14px', 
    color: '#cccccc', 
    gap: isMobile ? '8px' : '10px',
    textAlign: isMobile ? 'center' : 'left'
  };

  const madeWithStyle = { fontStyle: 'italic' };

  return (
    <footer style={footerStyle}>
      <div style={mainContentStyle}>
        {/* Consultant Info */}
        <motion.div
          style={consultantCardStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={consultantHeaderStyle}>
            <div style={avatarStyle}>
              <span style={avatarTextStyle}>FC</span>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={consultantNameStyle}>Financial Consultant</h3>
              <p style={consultantTitleStyle}>Certified Financial Advisor</p>
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <div style={contactItemStyle}>
              <span style={iconStyle}>📍</span>
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
            <div style={contactItemStyle}>
              <span style={iconStyle}>📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div style={contactItemStyle}>
              <span style={iconStyle}>✉️</span>
              <span>consultant@finicare.com</span>
            </div>
          </div>

          <div style={socialSectionStyle}>
            <h4 style={socialTitleStyle}>Connect With Us</h4>
            <div style={socialIconsStyle}>
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
                  style={{ ...socialIconStyle, background: social.bg }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={socialIconTextStyle}>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 style={sectionTitleStyle}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {quickLinks.map((link, idx) => (
              <li key={idx} style={{ marginBottom: '12px' }}>
                <motion.a
                  href={link.href}
                  style={linkStyle}
                  whileHover={{ color: "#FFD93D" }}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 style={sectionTitleStyle}>Our Services</h4>
          <div style={servicesListStyleHorizontal}>
            {services.map((service, idx) => (
              <span key={idx} style={serviceTagStyle}>
                {isMobile ? service.split(' ')[0] : service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        style={copyrightStyle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div style={copyrightContentStyle}>
          <span>&copy; {new Date().getFullYear()} Finicare. All rights reserved.</span>
          <span style={madeWithStyle}>
            {isMobile ? "Made with ❤️" : "Made with ❤️ for your financial security"}
          </span>
        </div>
      </motion.div>
    </footer>
  );
}