import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import trademarkImage from "../assets/trademark.png";
import brandImage from "../assets/loyalty-program.png";
import coppyrightImage from "../assets/law.png";
import healthImage from "../assets/health-insurance.png";
import lifeImage from "../assets/life-insurance.png";
import businessplantImage from "../assets/money.png";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const servicesRef = useRef(null);
  const [servicesPaused, setServicesPaused] = useState(false);

  const carouselSlides = [
    {
      title: "Your Trusted Financial & Legal Partner",
      subtitle:
        "Comprehensive solutions for trademark registration, insurance, and business protection. Safeguard your assets with confidence and expert guidance.",
      buttonText: "Explore Services",
      backgroundImage:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlay:
        "linear-gradient(135deg, rgba(11,26,43,0.6) 0%, rgba(212,175,55,0.4) 100%)",
      textColor: "#ffffff",
      buttonBg: "#d4af37",
    },
    {
      title: "Protect Your Intellectual Property",
      subtitle:
        "Secure your brand identity through professional trademark and copyright registration. Ensure your creative work is fully protected.",
      buttonText: "Secure Your Brand",
      backgroundImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlay:
        "linear-gradient(135deg, rgba(11,26,43,0.6) 0%, rgba(212,175,55,0.4) 100%)",
      textColor: "#ffffff",
      buttonBg: "#d4af37",
    },
    {
      title: "Comprehensive Insurance Solutions",
      subtitle:
        "Tailored life and health insurance plans to secure your family's future and provide financial peace of mind.",
      buttonText: "Get Protected",
      backgroundImage:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlay:
        "linear-gradient(135deg, rgba(11,26,43,0.6) 0%, rgba(212,175,55,0.4) 100%)",
      textColor: "#ffffff",
      buttonBg: "#d4af37",
    },
    {
      title: "Expert Business Guidance",
      subtitle:
        "Professional financial advice and business registration services to help you start and grow your enterprise with certainty.",
      buttonText: "Start Your Journey",
      backgroundImage:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      overlay:
        "linear-gradient(135deg, rgba(11,26,43,0.6) 0%, rgba(212,175,55,0.4) 100%)",
      textColor: "#ffffff",
      buttonBg: "#d4af37",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topServices = [
    {
      name: "Trademark Registration",
      description: "Protect your brand legally and prevent unauthorized use.",
      image: [trademarkImage],
    },
    {
      name: "Brand/Logo Registration",
      description: "Secure your company's visual identity effectively.",
      image: [brandImage],
    },
    {
      name: "Copyright Registration",
      description: "Ensure your intellectual property rights for creative work.",
      image: [coppyrightImage],
    },
    {
      name: "Life Insurance",
      description: "Customized life plans for long-term financial security.",
      image: [lifeImage],
    },
    {
      name: "Health Insurance",
      description:
        "Comprehensive plans covering medical emergencies and wellness.",
      image: [healthImage],
    },
    {
      name: "Business Registration",
      description:
        "Legally register your business to start your journey with confidence.",
      image: [businessplantImage],
    },
  ];

  // Continuous Smooth Scroll for Services
  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;

    let step = isMobile ? 0.8 : 1.2;
    let stopped = false;

    function loop() {
      if (servicesPaused || stopped) return;
      el.scrollLeft += step;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0; // seamless reset
      }
      requestAnimationFrame(loop);
    }

    loop();

    return () => {
      stopped = true;
    };
  }, [isMobile, servicesPaused, topServices.length]);

  // Responsive Styles
  const heroSectionStyle = {
    position: "relative",
    padding: "0",
    margin: "0",
    height: isMobile ? "70vh" : "100vh",
    minHeight: isMobile ? "500px" : "600px",
    overflow: "hidden",
    width: "100%",
    display: "block",
  };

  const slideStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "flex-start",
    padding: isMobile ? "0 20px" : "0 8%",
    boxSizing: "border-box",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    marginTop: isMobile ? "0" : "-50px",
    textAlign: isMobile ? "center" : "left",
    width: "100%",
  };

  const heroTitleStyle = {
    fontSize: isMobile ? "2rem" : "3rem",
    fontWeight: "800",
    marginBottom: "1rem",
    lineHeight: "1.2",
    color: "#ffffff",
    textShadow: "0 4px 15px rgba(0,0,0,0.3)",
  };

  const heroSubtitleStyle = {
    fontSize: isMobile ? "1rem" : "1.2rem",
    marginBottom: "2rem",
    lineHeight: "1.5",
    color: "#ffffff",
  };

  const ctaButtonStyle = {
    background: "#d4af37",
    color: "#0b1a2b",
    padding: isMobile ? "12px 30px" : "14px 40px",
    borderRadius: "50px",
    fontSize: isMobile ? "0.9rem" : "1rem",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
  };

  const arrowStyle = (direction) => ({
    position: "absolute",
    top: "50%",
    [direction]: isMobile ? "20px" : "40px",
    transform: "translateY(-100%)",
    fontSize: isMobile ? "1.5rem" : "2rem",
    color: "#d4af37",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: "50%",
    width: isMobile ? "40px" : "50px",
    height: isMobile ? "40px" : "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 10,
    userSelect: "none",
  });

  // Services Styles
  const sectionStyle = {
    padding: isMobile ? "30px 16px" : "50px 24px",
    Width: "100%",
    margin: "0 auto",
  };

  const sectionTitleStyle = {
    fontSize: isMobile ? "2rem" : "2.5rem",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "1rem",
    color: "#0b1a2b",
  };

  const sectionSubtitleStyle = {
    fontSize: isMobile ? "1rem" : "1.1rem",
    textAlign: "center",
    color: "#555",
    marginBottom: "3rem",
    lineHeight: "1.6",
    padding: isMobile ? "0 10px" : "0",
  };

  const servicesGridStyle = {
    display: "flex",
    flexDirection: "row",
    gap: isMobile ? "16px" : "24px",
    overflowX: "hidden", // hide scrollbar for continuous scroll
    paddingBottom: "8px",
  };

  const servicesInnerStyle = {
    display: "flex",
    gap: isMobile ? "16px" : "24px",
  };

  const serviceCardStyle = {
    background: "#ffffff",
    borderRadius: "20px",
    padding: isMobile ? "20px" : "30px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    minWidth: isMobile ? "240px" : "300px",
    flex: "0 0 auto",
  };

  const serviceImageStyle = {
    width: isMobile ? "60px" : "80px",
    height: isMobile ? "60px" : "80px",
    marginBottom: isMobile ? "15px" : "20px",
    objectFit: "contain",
  };

  const serviceNameStyle = {
    fontSize: isMobile ? "1.1rem" : "1.2rem",
    fontWeight: "700",
    marginBottom: isMobile ? "8px" : "12px",
    color: "#0b1a2b",
  };

  const centralizedKnowMoreButtonStyle = {
    marginTop: "30px",
    background: "#d4af37",
    color: "#0b1a2b",
    border: "none",
    padding: isMobile ? "12px 25px" : "14px 35px",
    borderRadius: "25px",
    fontWeight: "600",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: isMobile ? "0" : "20px",
    fontSize: isMobile ? "0.9rem" : "1rem",
  };

  // About Section Styles
  const aboutSectionStyle = {
    background: "#ffffff",
    padding: isMobile ? "40px 16px" : "60px 24px",
    margin: isMobile ? "20px 0" : "40px 0",
    borderRadius: "20px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.05)",
  };

  const aboutContentStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
    gap: isMobile ? "30px" : "50px",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const aboutTitleStyle = {
    fontSize: isMobile ? "1.8rem" : "2rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: "#0b1a2b",
    textAlign: isMobile ? "center" : "left",
  };

  const aboutDescriptionStyle = {
    fontSize: isMobile ? "0.95rem" : "1rem",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    textAlign: isMobile ? "center" : "left",
  };

  const aboutButtonStyle = {
    background: "#d4af37",
    color: "#0b1a2b",
    border: "none",
    padding: isMobile ? "12px 25px" : "14px 35px",
    borderRadius: "25px",
    fontWeight: "600",
    cursor: "pointer",
    display: isMobile ? "block" : "inline-block",
    margin: isMobile ? "0 auto" : "0",
    fontSize: isMobile ? "0.9rem" : "1rem",
  };

  const aboutVisualStyle = {
    background: "#0b1a2b",
    color: "#d4af37",
    borderRadius: "20px",
    padding: isMobile ? "25px" : "40px",
    textAlign: "center",
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(2,1fr)",
    gap: isMobile ? "15px" : "20px",
    marginTop: "20px",
  };

  const statItemStyle = { textAlign: "center" };
  const statNumberStyle = {
    fontSize: isMobile ? "1.5rem" : "2rem",
    fontWeight: "700",
    marginBottom: "6px",
    color: "#d4af37",
  };
  const statLabelStyle = {
    fontSize: isMobile ? "0.85rem" : "1rem",
    color: "#f0e6b8",
  };

  const handleServicesMouseEnter = () => setServicesPaused(true);
  const handleServicesMouseLeave = () => setServicesPaused(false);
  const handleTouchStart = () => setServicesPaused(true);
  const handleTouchEnd = () => setTimeout(() => setServicesPaused(false), 400);

  return (
    <div
      style={{
        width: "100vw",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Hero Carousel */}
      <section style={heroSectionStyle}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            style={{
              ...slideStyle,
              backgroundImage: `url(${carouselSlides[currentSlide].backgroundImage})`,
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{ ...overlayStyle, background: carouselSlides[currentSlide].overlay }}
            >
              <div style={contentStyle}>
                <motion.h1 style={heroTitleStyle}>{carouselSlides[currentSlide].title}</motion.h1>
                <motion.p style={heroSubtitleStyle}>{carouselSlides[currentSlide].subtitle}</motion.p>
                <motion.button
                  style={ctaButtonStyle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/services")}
                >
                  {carouselSlides[currentSlide].buttonText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          style={arrowStyle("left")}
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
          }
        >
          &#10094;
        </div>
        <div
          style={arrowStyle("right")}
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
          }
        >
          &#10095;
        </div>
      </section>

      {/* Top Services */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Top Services</h2>
        <p style={sectionSubtitleStyle}>
          Explore our expert services designed to protect, secure, and grow your business with confidence.
        </p>
        <div
          style={servicesGridStyle}
          ref={servicesRef}
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            style={{
              ...servicesInnerStyle,
              paddingBottom: 6,
              marginLeft: isMobile ? 8 : 0,
            }}
          >
            {[...topServices, ...topServices].map((service, index) => (
              <motion.div
                key={index}
                style={serviceCardStyle}
                whileHover={
                  isMobile
                    ? {}
                    : { y: -8, boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }
                }
              >
                <img src={service.image} alt={service.name} style={serviceImageStyle} />
                <h3 style={serviceNameStyle}>{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.button
          style={centralizedKnowMoreButtonStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/services")}
        >
          Know More
        </motion.button>
      </section>

      {/* About Section */}
      <section style={aboutSectionStyle}>
        <div style={aboutContentStyle}>
          <div>
            <h2 style={aboutTitleStyle}>Why Trust Finicare?</h2>
            <p style={aboutDescriptionStyle}>
              With over a decade of excellence, Finicare stands as your premier partner for integrated financial and legal solutions. Our certified professionals navigate complex regulations while securing your financial prosperity.
            </p>
            <p style={aboutDescriptionStyle}>
              We cultivate lasting partnerships built on trust, transparency, and exceptional service. From trademark registration to tailored insurance strategies, we provide end-to-end solutions for your success.
            </p>
            <motion.button
              style={aboutButtonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/about")}
            >
              Discover Our Story
            </motion.button>
          </div>
          <div style={aboutVisualStyle}>
            <h3
              style={{
                marginBottom: "20px",
                fontWeight: "700",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
              }}
            >
              Excellence in Numbers
            </h3>
            <div style={statsGridStyle}>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>5,000+</div>
                <div style={statLabelStyle}>Satisfied Clients</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>12+</div>
                <div style={statLabelStyle}>Years Expertise</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>98%</div>
                <div style={statLabelStyle}>Success Rate</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>24/7</div>
                <div style={statLabelStyle}>Client Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
