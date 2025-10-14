import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  const navigate = useNavigate();
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : true;

  const colors = {
    primary: "#0b1a2b",
    gold: "#D4AF37",
    goldLight: "#F5D488",
    light: "#f7f8fb",
    white: "#FFFFFF",
    textDark: "#2D3748",
    textLight: "#718096",
    border: "rgba(12,18,31,0.06)",
  };

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Services Offered", value: "10+" },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Alex has 15+ years of experience in financial consulting and founded finipcare to provide transparent, professional financial guidance.",
    },
    {
      name: "Sarah Lee",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah ensures every client gets a personalized strategy aligned with their goals and risk profile.",
    },
    {
      name: "Robert Martinez",
      role: "Lead Financial Advisor",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      bio: "Robert specializes in investment planning and wealth management to maximize growth and minimize risk.",
    },
  ];

  const services = [
    { title: "Trademark Registration", icon: "🏢", desc: "Complete trademark registration services to protect your brand identity." },
    { title: "ISO Certification", icon: "📋", desc: "Get ISO certified to enhance your business credibility and quality standards." },
    { title: "MPCB License", icon: "🌿", desc: "Environmental compliance and MPCB license consulting services." },
    { title: "Patent & Copyright", icon: "📝", desc: "Protect your intellectual property with expert patent and copyright services." },
  ];

  const companyInfo = [
    {
      title: "About Our Company",
      content: "Finipcare Consultants in Kothrud, Pune is one of the leading businesses in the Trademark Registration Consultants sector. With years of expertise, we serve as your trusted partner for all legal and certification needs.",
      icon: "🏢"
    },
    {
      title: "Our Location & Reach",
      content: "Strategically located in Kothrud, Pune, we serve clients both locally and from across the region. Our prominent location at New DP Road, near Badhai Sweet Chowk, makes us easily accessible to all our valued clients.",
      icon: "📍"
    },
    {
      title: "Our Mission",
      content: "We believe that customer satisfaction is as important as our products and services. This philosophy has helped us build a vast and growing client base that trusts us for their business compliance needs.",
      icon: "🎯"
    },
    {
      title: "Future Vision",
      content: "We are continuously expanding our services to cater to a larger client base while maintaining the quality and personalized attention that sets us apart in the industry.",
      icon: "🚀"
    }
  ];

  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className={`about-hero ${isMobile ? "mobile" : ""}`}>
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="gold-text">Finipcare Consultants</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Leading Trademark Registration Consultants in Kothrud, Pune - Your trusted partner for business compliance and certification services.
          </motion.p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="company-info-section">
        <div className="company-info-grid">
          {companyInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="company-info-card"
            >
              <div className="company-info-icon">{info.icon}</div>
              <div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div className="company-location-highlight">
          <h3>📍 Our Location</h3>
          <p>New DP Road, near Badhai Sweet Chowk, Kothrud, Pune</p>
          <p className="italic">Easily accessible with various modes of transport readily available</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stat-card"
          >
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Services Section */}
      <section className="services-section">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
        <motion.div className="additional-services">
          {[
            "Trademark Registration Consultants",
            "ISO Certification Consultants",
            "MPCB License Consultants",
            "ISO Consultants",
            "Patent Consultants",
            "Copyright Consultants"
          ].map((s, i) => (
            <div key={i} className="additional-service-item">{s}</div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="team-card"
          >
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.bio}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for expert guidance on trademarks, certifications, and business compliance</p>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
