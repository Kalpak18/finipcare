// src/pages/Services.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./services.css";

import trademarkImage from "../../assets/trademark.png";
import brandImage from "../../assets/loyalty-program.png";
import copyrightImage from "../../assets/copyright.png";

export default function Services() {
  const [activeService, setActiveService] = useState("trademark");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroBackground =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

  const services = [
    {
      id: "trademark",
      title: "Trademark Registration",
      shortTitle: "Trademark Reg.",
      description:
        "A trademark (popularly known as brand name) is a visual symbol which may be a word, signature, name, device, label, numerals or combination of colors used by one undertaking on goods or services to distinguish it from other undertakings.",
      image: trademarkImage,
      overview:
        "A trademark registration grants the owner exclusive rights to use the mark for the registered classes of goods/services. Registered marks are enforceable in court and act as a public record of ownership.",
      why:
        "Registration prevents others from using confusingly similar marks, strengthens your brand's legal position, and increases trust with customers and partners.",
      whatCanBeTrademarked: [
        "Name, word, or phrase",
        "Logo or symbol",
        "Device or label",
        "Numerals",
        "Combination of colors",
        "Sound marks",
        "3D shapes",
      ],
      whatCannotBeTrademarked: [
        "Generic terms or phrases",
        "Government symbols or emblems",
        "Vulgar or offensive words",
        "Deceptive or scandalous content",
        "Proper names without consent",
        "Immoral or deceptive symbols",
      ],
      importance: [
        "Distinguishes your company from others",
        "Indicates the source of goods",
        "Protects brand identity",
        "Enables legal enforcement",
        "Builds customer trust",
        "Facilitates business expansion",
      ],
      documents: [
        "Soft copy of logo / wordmark (PNG / JPG / PDF)",
        "Business name and address proof",
        "Identity proof of applicant (PAN, Aadhaar, passport)",
        "Power of Attorney (if filed via attorney)",
        "Specification of goods/services and class number",
      ],
      steps: [
        { title: "Trademark Search", text: "Perform comprehensive search to check availability and reduce objection risks." },
        { title: "Application Filing", text: "File TM-A form online with required details and documents." },
        { title: "Examination", text: "Trademark Office reviews application and issues examination report." },
        { title: "Publication", text: "Accepted marks published in Trade Marks Journal for opposition." },
        { title: "Registration", text: "Certificate issued if no opposition within stipulated period." },
      ],
    },
    {
      id: "copyright",
      title: "Copyright Protection",
      shortTitle: "Copyright Reg.",
      description:
        "Register original creative works — literary, artistic, software, and designs — to create a public record and deter infringement. Copyright protection is automatic but registration provides stronger enforcement benefits.",
      image: copyrightImage,
      overview:
        "Copyright protects original works of authorship automatically on creation; registration provides a clear statutory record and stronger enforcement benefits.",
      why:
        "Registration is helpful evidence in disputes, simplifies takedown and enforcement, and often required by platforms and partners as proof of ownership.",
      documents: [
        "Copy of the work (soft copy for literary/software; images for art/designs)",
        "Author/creator identity and address proof",
        "Statement of particulars (creation date, publication status)",
        "Power of Attorney if using a representative",
      ],
      steps: [
        { title: "Prepare Submission", text: "Collect final version(s) of the work and author details." },
        { title: "Complete Form", text: "Fill the relevant online copyright registration form." },
        { title: "Upload Work", text: "Submit the work in the prescribed format." },
        { title: "Payment & Acknowledgement", text: "Pay fees and receive acknowledgement number." },
        { title: "Certificate Issuance", text: "Receive registration certificate after processing." },
      ],
    },
    // Add other services here in the same format...
  ];

  const active = services.find((s) => s.id === activeService);

  return (
    <div className="services-container">
      {/* HERO SECTION */}
      <section
        className="services-hero"
        style={{ backgroundImage: `linear-gradient(rgba(11,26,51,0.7), rgba(11,26,51,0.8)), url(${heroBackground})` }}
      >
        <div className="services-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive business compliance, intellectual property protection, and certification services
          </motion.p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="services-main">
        <div className="services-wrapper">
          {/* SIDEBAR */}
          <motion.div
            className="services-sidebar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sidebar-inner">
              <h3>Our Services</h3>
              <div className="sidebar-buttons">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    className={`sidebar-btn ${activeService === service.id ? "active" : ""}`}
                    onClick={() => setActiveService(service.id)}
                  >
                    <div className="btn-number">{index + 1}</div>
                    {service.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            key={activeService}
            className="services-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="service-header">
              <div className="service-icon">
                <img src={active.image} alt={active.title} />
              </div>
              <div>
                <h2>{active.title}</h2>
                <p>{active.description}</p>
              </div>
            </div>

            {/* Overview */}
            <section className="service-section">
              <h3>Overview</h3>
              <p>{active.overview}</p>
            </section>

            {/* Why Important */}
            <section className="service-section">
              <h3>Why It's Important</h3>
              <p>{active.why}</p>
              {active.importance && (
                <div className="importance-box">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {active.importance.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Steps */}
            <section className="service-section">
              <h3>Registration Procedure</h3>
              <div className="steps-container">
                {active.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="step-box"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="step-number">{index + 1}</div>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Documents */}
            <section className="service-section">
              <h3>Required Documents</h3>
              <div className="documents-box">
                <ul>
                  {active.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="service-cta">
              <button className="cta-primary">Get Started Now</button>
              <button
                className="cta-secondary"
                onClick={() => {
                  const subject = encodeURIComponent(`${active.title} - Inquiry`);
                  const body = encodeURIComponent(`Hi,\n\nI would like to know more about ${active.title}. Please share next steps and pricing details.\n\nThanks.`);
                  window.location.href = `mailto:info@veronicaconsultants.com?subject=${subject}&body=${body}`;
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
