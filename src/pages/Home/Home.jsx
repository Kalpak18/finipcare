import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./home.css";

import trademarkImage from "../../assets/trademark.png";
import brandImage from "../../assets/loyalty-program.png";
import coppyrightImage from "../../assets/law.png";
import healthImage from "../../assets/medical-insurance.png";
import lifeImage from "../../assets/life-insurance.png";
import businessplantImage from "../../assets/enterprise.png";

export default function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [instant, setInstant] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const servicesRef = useRef(null);
  const [servicesPaused, setServicesPaused] = useState(false);
  const autoTimerRef = useRef(null);

  const baseSlides = [
    {
      title: "Your Trusted Financial & Legal Partner",
      subtitle: "Comprehensive solutions for trademark registration, insurance, and business protection. Safeguard your assets with confidence and expert guidance.",
      buttonText: "Explore Services",
      backgroundImage: "https://media.istockphoto.com/id/1382275656/photo/smiling-caucasian-partners-listening-to-their-employees-during-a-business-meeting.jpg?s=612x612&w=0&k=20&c=rZO5-fCg9M5K3FxHoyJAQWEj5wdnJ-BlGRirZVHlPow=",
      overlay: "linear-gradient(90deg, rgba(11,26,43,0.9) 0%, rgba(11,26,43,0.7) 30%, rgba(11,26,43,0.4) 60%, transparent 100%)",
      buttonBg: "#d4af37"
    },
    {
      title: "Protect Your Intellectual Property",
      subtitle: "Secure your brand identity through professional trademark and copyright registration. Ensure your creative work is fully protected.",
      buttonText: "Secure Your Brand",
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      overlay: "linear-gradient(90deg, rgba(11,26,43,0.9) 0%, rgba(11,26,43,0.7) 30%, rgba(11,26,43,0.4) 60%, transparent 100%)",
      buttonBg: "#d4af37"
    },
    {
      title: "Comprehensive Insurance Solutions",
      subtitle: "Tailored life and health insurance plans to secure your family's future and provide financial peace of mind.",
      buttonText: "Get Protected",
      backgroundImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlay: "linear-gradient(90deg, rgba(11,26,43,0.9) 0%, rgba(11,26,43,0.7) 30%, rgba(11,26,43,0.4) 60%, transparent 100%)",
      buttonBg: "#d4af37"
    },
    {
      title: "Expert Business Guidance",
      subtitle: "Professional financial advice and business registration services to help you start and grow your enterprise with certainty.",
      buttonText: "Start Your Journey",
      backgroundImage: "https://media.istockphoto.com/id/1449412156/photo/an-anonymous-businessman-using-laptop-computer-at-home.jpg?s=612x612&w=0&k=20&c=7so1kP_fr7pDI3UAzV73U2PyIIPtpYF3bSJ3Lc8awFk=",
      overlay: "linear-gradient(90deg, rgba(11,26,43,0.9) 0%, rgba(11,26,43,0.7) 30%, rgba(11,26,43,0.4) 60%, transparent 100%)",
      buttonBg: "#d4af37"
    },
  ];

  const slides = [baseSlides[baseSlides.length - 1], ...baseSlides, baseSlides[0]];
  const transitionDuration = 0.8;
  const autoInterval = 6000;

  const startAutoplay = () => {
    clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(handleNext, autoInterval);
  };

  const stopAutoplay = () => clearInterval(autoTimerRef.current);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return setTouchStart(null), setTouchEnd(null);
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) < 50) return setTouchStart(null), setTouchEnd(null);
    distance > 0 ? handleNext() : handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
    setInstant(false);
    setIsAnimating(true);
    startAutoplay();
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentIndex((prev) => prev - 1);
    setInstant(false);
    setIsAnimating(true);
    startAutoplay();
  };

  const handleMotionComplete = () => {
    setIsAnimating(false);
    if (currentIndex === slides.length - 1) {
      setInstant(true);
      setCurrentIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    }
    if (currentIndex === 0) {
      const lastIndex = slides.length - 2;
      setInstant(true);
      setCurrentIndex(lastIndex);
      requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    }
  };

  // Services continuous scroll
  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;
    let step = isMobile ? 0.8 : 1.2;
    let stopped = false;

    const loop = () => {
      if (servicesPaused || stopped) return;
      el.scrollLeft += step;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2;
      requestAnimationFrame(loop);
    };

    loop();
    return () => (stopped = true);
  }, [isMobile, servicesPaused]);

  const handleServicesMouseEnter = () => setServicesPaused(true);
  const handleServicesMouseLeave = () => setServicesPaused(false);
  const handleServicesTouchStart = () => setServicesPaused(true);
  const handleServicesTouchEnd = () => setTimeout(() => setServicesPaused(false), 400);

  const visibleCardsDesktop = () => {
    const width = window.innerWidth;
    if (width >= 1400) return 6;
    if (width >= 1200) return 5;
    if (width >= 992) return 4;
    if (width >= 768) return 3;
    return 2;
  };

  return (
    <div className="home-wrapper">
      {/* HERO */}
      <section
        className="hero-section"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="hero-track"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: instant ? 0 : transitionDuration, ease: "easeInOut" }}
          onAnimationComplete={handleMotionComplete}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="hero-slide" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
              <div className="hero-overlay" style={{ background: slide.overlay }}>
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <button className="hero-button" onClick={() => navigate("/services")}>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {!isMobile && (
          <>
            <div className="hero-arrow left" onClick={handlePrev}>&#10094;</div>
            <div className="hero-arrow right" onClick={handleNext}>&#10095;</div>
          </>
        )}
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2 className="section-title">Our Top Services</h2>
        <div
          className="services-grid"
          ref={servicesRef}
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
          onTouchStart={handleServicesTouchStart}
          onTouchEnd={handleServicesTouchEnd}
        >
          <div className="services-inner">
            {[...topServicesWithLocal(), ...topServicesWithLocal()].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                style={{
                  flex: isMobile ? "0 0 auto" : `0 0 ${Math.floor(100 / visibleCardsDesktop())}%`,
                }}
                whileHover={
                  isMobile ? {} : { y: -8, boxShadow: "0 15px 40px rgba(0,0,0,0.1)", borderBottom: "6px solid #2196f3" }
                }
              >
                <img
                  src={Array.isArray(service.image) ? service.image[0] : service.image}
                  alt={service.name}
                  className="service-image"
                />
                <h3 className="service-name">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        <button className="know-more-btn" onClick={() => navigate("/services")}>
          Know More {'>'}
        </button>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Why Trust finipcare?</h2>
            <p>With over a decade of excellence, finipcare stands as your premier partner for integrated financial and legal solutions. Our certified professionals navigate complex regulations while securing your financial prosperity.</p>
            <p>We cultivate lasting partnerships built on trust, transparency, and exceptional service. From trademark registration to tailored insurance strategies, we provide end-to-end solutions for your success.</p>
            <button onClick={() => navigate("/about")}>Discover Our Story</button>
          </div>
          <div className="about-stats">
            <h3>Excellence in Numbers</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Expertise</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Client Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  function topServicesWithLocal() {
    return [
      { name: "Trademark Registration", image: [trademarkImage] },
      { name: "Brand/Logo Registration", image: [brandImage] },
      { name: "Copyright Registration", image: [coppyrightImage] },
      { name: "Life Insurance", image: [lifeImage] },
      { name: "Health Insurance", image: [healthImage] },
      { name: "Business Registration", image: [businessplantImage] },
    ];
  }
}
