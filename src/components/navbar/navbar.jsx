import React, { useState, useEffect } from "react"; 
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const FinipcareLogo = ({ size = "large", color = "#2563eb" }) => (
    <div className="finipcare-logo" style={{ lineHeight: "1.1" }}>
      <div
        className={`logo-text ${size} ${isMobile ? "mobile" : ""}`}
        style={{ color }}
      >
        <span>F</span>
        <span className="logo-i">i</span>
        <span>N</span>
        <span className="logo-i">i</span>
        <span>P</span>
        <span className="logo-care">CARE</span>
      </div>
      {(size === "small" || isMobile) && (
        <div
          className={`logo-subtitle ${
            scrolled || isMobile ? "scrolled" : "white"
          }`}
        >
          FINANCE IPR & INSURANCE
        </div>
      )}
    </div>
  );

  return (
    <>
      {!isMobile && (
        <div
          className={`top-bar ${scrolled ? "hidden" : ""}`}
        >
          <a
            href="mailto:info@finipcare.com"
            className={`info-btn ${hovered === "email" ? "hover" : ""}`}
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered(null)}
          >
            📧 info@finipcare.com
          </a>
          <div className="divider"></div>
          <a
            href="tel:+919876543210"
            className={`info-btn ${hovered === "phone" ? "hover" : ""}`}
            onMouseEnter={() => setHovered("phone")}
            onMouseLeave={() => setHovered(null)}
          >
            📞 +91 98765 43210
          </a>
        </div>
      )}

      <nav
        className={`navbar-container ${scrolled ? "scrolled" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <div className="navbar-inner">
          <Link to="/" className="logo-link">
            <FinipcareLogo
              size="small"
              color={scrolled || isMobile ? "#2563eb" : "#fff"}
            />
          </Link>

          <div
            className={`nav-links ${isMobile ? "mobile" : ""} ${
              scrolled ? "scrolled" : ""
            }`}
          >
            {links.map((link) => (
              <div key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
                {location.pathname === link.path && (
                  <div className="nav-active-indicator" />
                )}
              </div>
            ))}
          </div>

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "×" : "☰"}
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <div key={link.name} className="mobile-item">
              <Link
                to={link.path}
                className={`mobile-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {location.pathname === link.path && (
                <div className="mobile-active-indicator" />
              )}
            </div>
          ))}
          <div className="mobile-contact">
            <a href="mailto:info@finipcare.com">📧 info@finipcare.com</a>
            <a href="tel:+919876543210">📞 +91 98765 43210</a>
          </div>
        </div>
      </nav>

      {isOpen && isMobile && (
        <div className="overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}