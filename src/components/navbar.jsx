import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  const FinipcareLogo = ({ size = "large", color = "#2563eb" }) => (
    <div style={{ lineHeight: "1.1" }}>
      <div
        style={{
          fontSize: isMobile ? "1.25rem" : size === "small" ? "1.5rem" : "2rem",
          fontWeight: "900",
          color: color,
          letterSpacing: "1px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <span>F</span>
        <span
          style={{
            fontSize: isMobile ? "0.9rem" : size === "small" ? "1.1rem" : "1.4rem",
            color: "#FFD93D",
            marginBottom: isMobile ? "1px" : size === "small" ? "2px" : "4px",
          }}
        >
          i
        </span>
        <span>N</span>
        <span
          style={{
            fontSize: isMobile ? "0.9rem" : size === "small" ? "1.1rem" : "1.4rem",
            color: "#FFD93D",
            marginBottom: isMobile ? "1px" : size === "small" ? "2px" : "4px",
          }}
        >
          i
        </span>
        <span>P</span>
        <span style={{ color: "#667eea" }}>CARE</span>
      </div>
      {(size === "small" || isMobile) && (
        <div
          style={{
            fontSize: isMobile ? "0.4rem" : "0.5rem",
            fontWeight: "600",
            color: scrolled ? "#666" : isMobile ? "#666" : "#fff",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginTop: "2px",
          }}
        >
          FINANCE IPR & INSURANCE
        </div>
      )}
    </div>
  );

  // --- Responsive Styles ---
  const topBarStyle = {
    display: isMobile ? "none" : scrolled ? "none" : "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    background: "#f3f4f6",
    color: "#0b1a2b",
    padding: isMobile ? "8px 0" : "11px 0",
    paddingLeft: isMobile ? "20px" : "60px",
    fontSize: isMobile ? "0.8rem" : "0.95rem",
    fontWeight: "600",
    fontFamily: "'Inter', sans-serif",
    gap: isMobile ? "10px" : "15px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 60,
    transition: "all 0.3s ease",
    overflowX: "auto",
    whiteSpace: "nowrap",
  };

  const infoButtonStyle = {
    color: "#0b1a2b",
    textDecoration: "none",
    padding: isMobile ? "4px 8px" : "5px 12px",
    borderRadius: "6px",
    border: "1px solid rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "4px" : "6px",
    fontSize: "inherit",
  };

  const infoButtonHover = {
    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
    color: "#fff",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const dividerStyle = {
    width: "1px",
    height: isMobile ? "16px" : "20px",
    background: "rgba(0,0,0,0.15)",
    display: isMobile ? "none" : "block",
  };

  const navStyle = {
    position: "fixed",
    top: isMobile ? 0 : scrolled ? 0 : 49,
    left: 0,
    width: "100%",
    backgroundColor: scrolled ? "#fff" : isMobile ? "#fff" : "transparent",
    boxShadow: scrolled || isMobile ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
    zIndex: 50,
    fontFamily: "'Inter', sans-serif",
    transition: "all 0.3s ease",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile 
      ? "12px 16px" 
      : scrolled 
        ? "16px 24px" 
        : "36px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const linksContainerStyle = {
    display: isMobile ? "none" : "flex",
    gap: isMobile ? "16px" : "24px",
    alignItems: "center",
    color: scrolled || isMobile ? "#374151" : "#fff",
  };

  const linkStyle = {
    color: scrolled || isMobile ? "#374151" : "#fff",
    fontWeight: "500",
    textDecoration: "none",
    transition: "color 0.3s",
    fontSize: isMobile ? "0.9rem" : "1rem",
    padding: isMobile ? "8px 0" : "0",
  };

  const linkActiveStyle = {
    color: "#2563eb",
    fontWeight: "600",
  };

  const hamburgerStyle = {
    display: isMobile ? "flex" : "none",
    fontSize: "24px",
    cursor: "pointer",
    userSelect: "none",
    color: scrolled ? "#374151" : isMobile ? "#374151" : "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  };

  const hamburgerHoverStyle = {
    backgroundColor: "rgba(0,0,0,0.05)",
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    maxHeight: isOpen ? "400px" : "0",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    zIndex: 100,
  };

  const mobileLinkStyle = {
    display: "block",
    padding: "16px 20px",
    color: "#374151",
    fontWeight: "500",
    textDecoration: "none",
    borderBottom: "1px solid #f3f4f6",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const mobileLinkActiveStyle = {
    backgroundColor: "#f8fafc",
    color: "#2563eb",
    fontWeight: "600",
  };

  const mobileLinkHoverStyle = {
    backgroundColor: "#f8fafc",
  };

  return (
    <>
      {/* Top Info Bar - Hidden on mobile */}
      <div style={topBarStyle}>
        <a
          href="mailto:info@finipcare.com"
          style={{
            ...infoButtonStyle,
            ...(hovered === "email" ? infoButtonHover : {}),
          }}
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
        >
          📧 {isMobile ? "Email" : "info@finipcare.com"}
        </a>
        <div style={dividerStyle}></div>
        <a
          href="tel:+919876543210"
          style={{
            ...infoButtonStyle,
            ...(hovered === "phone" ? infoButtonHover : {}),
          }}
          onMouseEnter={() => setHovered("phone")}
          onMouseLeave={() => setHovered(null)}
        >
          📞 {isMobile ? "Call" : "+91 98765 43210"}
        </a>
      </div>

      {/* Main Navbar */}
      <nav style={navStyle} className="navbar-container">
        <div style={containerStyle}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <FinipcareLogo 
              size="small" 
              color={scrolled || isMobile ? "#2563eb" : "#fff"} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div style={linksContainerStyle}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={
                  location.pathname === link.path
                    ? { ...linkStyle, ...linkActiveStyle }
                    : linkStyle
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div 
            style={{
              ...hamburgerStyle,
              ...(isOpen ? hamburgerHoverStyle : {})
            }} 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "×" : "☰"}
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                ...mobileLinkStyle,
                ...(location.pathname === link.path ? mobileLinkActiveStyle : {}),
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = mobileLinkHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.path) {
                  e.target.style.backgroundColor = "";
                }
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Contact Info */}
          <div style={{ padding: "20px", borderTop: "1px solid #f3f4f6" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a 
                href="mailto:info@finipcare.com" 
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#374151",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                📧 info@finipcare.com
              </a>
              <a 
                href="tel:+919876543210"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#374151",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {isOpen && isMobile && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 40,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}