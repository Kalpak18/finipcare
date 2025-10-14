// src/pages/Services.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import trademarkImage from "../assets/trademark.png";
import brandImage from "../assets/loyalty-program.png";
import coppyrightImage from "../assets/copyright.png";

export default function Services() {
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : true;
  const [activeService, setActiveService] = useState("trademark");

  // HERO BACKGROUND
  const heroBackground =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

  // Updated services data
  const services = [
    {
      id: "trademark",
      title: "Trademark Registration",
      shortTitle: "Trademark Reg.",
      description: "A trademark (popularly known as brand name) is a visual symbol which may be a word, signature, name, device, label, numerals or combination of colors used by one undertaking on goods or services to distinguish it from other undertakings.",
      image: trademarkImage,
      overview: "A trademark registration grants the owner exclusive rights to use the mark for the registered classes of goods/services. Registered marks are enforceable in court and act as a public record of ownership.",
      why: "Registration prevents others from using confusingly similar marks, strengthens your brand's legal position, and increases trust with customers and partners.",
      whatCanBeTrademarked: [
        "Name, word, or phrase",
        "Logo or symbol",
        "Device or label",
        "Numerals",
        "Combination of colors",
        "Sound marks",
        "3D shapes"
      ],
      whatCannotBeTrademarked: [
        "Generic terms or phrases",
        "Government symbols or emblems",
        "Vulgar or offensive words",
        "Deceptive or scandalous content",
        "Proper names without consent",
        "Immoral or deceptive symbols"
      ],
      importance: [
        "Distinguishes your company from others",
        "Indicates the source of goods",
        "Protects brand identity",
        "Enables legal enforcement",
        "Builds customer trust",
        "Facilitates business expansion"
      ],
      documents: [
        "Soft copy of logo / wordmark (PNG / JPG / PDF)",
        "Business name and address proof",
        "Identity proof of applicant (PAN, Aadhaar, passport)",
        "Power of Attorney (if filed via attorney)",
        "Specification of goods/services and class number",
      ],
      steps: [
        {
          title: "Trademark Search",
          text: "Perform comprehensive search to check availability and reduce objection risks.",
        },
        {
          title: "Application Filing",
          text: "File TM-A form online with required details and documents.",
        },
        {
          title: "Examination",
          text: "Trademark Office reviews application and issues examination report.",
        },
        {
          title: "Publication",
          text: "Accepted marks published in Trade Marks Journal for opposition.",
        },
        {
          title: "Registration",
          text: "Certificate issued if no opposition within stipulated period.",
        },
      ],
    },
    {
      id: "copyright",
      title: "Copyright Protection",
      shortTitle: "Copyright Reg.",
      description: "Register original creative works — literary, artistic, software, and designs — to create a public record and deter infringement. Copyright protection is automatic but registration provides stronger enforcement benefits.",
      image: coppyrightImage,
      overview: "Copyright protects original works of authorship automatically on creation; registration provides a clear statutory record and stronger enforcement benefits.",
      why: "Registration is helpful evidence in disputes, simplifies takedown and enforcement, and often required by platforms and partners as proof of ownership.",
      whatCanBeProtected: [
        "Literary works (books, articles)",
        "Artistic works (paintings, drawings)",
        "Musical compositions",
        "Software and code",
        "Photographs",
        "Architectural designs",
        "Cinematographic films"
      ],
      benefits: [
        "Legal evidence of ownership",
        "Statutory protection",
        "Enforcement capabilities",
        "Commercial licensing",
        "International protection",
        "Deterrent against infringement"
      ],
      duration: "Copyright protection typically lasts for the lifetime of the author plus 60 years.",
      documents: [
        "Copy of the work (soft copy for literary/software; images for art/designs)",
        "Author/creator identity and address proof",
        "Statement of particulars (creation date, publication status)",
        "Power of Attorney if using a representative",
      ],
      steps: [
        {
          title: "Prepare Submission",
          text: "Collect final version(s) of the work and author details.",
        },
        {
          title: "Complete Form",
          text: "Fill the relevant online copyright registration form.",
        },
        {
          title: "Upload Work",
          text: "Submit the work in the prescribed format.",
        },
        {
          title: "Payment & Acknowledgement",
          text: "Pay fees and receive acknowledgement number.",
        },
        {
          title: "Certificate Issuance",
          text: "Receive registration certificate after processing.",
        },
      ],
    },
    {
      id: "patent",
      title: "Patent Registration",
      shortTitle: "Patent Reg.",
      description: "Protect your inventions and innovations with patent registration. Secure exclusive rights to your novel inventions and prevent others from making, using, or selling your invention without permission.",
      image: "https://cdn-icons-png.flaticon.com/512/1570/1570172.png",
      overview: "A patent is an exclusive right granted for an invention, which is a product or a process that provides a new way of doing something, or offers a new technical solution to a problem.",
      why: "Patents protect your inventions, provide competitive advantage, enable licensing opportunities, and increase company valuation.",
      requirements: [
        "Novelty (new invention)",
        "Inventive step (non-obvious)",
        "Industrial applicability",
        "Patentable subject matter"
      ],
      types: [
        "Utility Patents (20 years protection)",
        "Design Patents (15 years protection)",
        "Plant Patents (20 years protection)"
      ],
      documents: [
        "Complete specification of the invention",
        "Drawings and diagrams (if applicable)",
        "Abstract of the invention",
        "Inventor details and identity proof",
        "Power of Attorney",
      ],
      steps: [
        {
          title: "Patent Search",
          text: "Conduct thorough search to ensure novelty and non-obviousness.",
        },
        {
          title: "Drafting",
          text: "Prepare complete specification with claims and abstract.",
        },
        {
          title: "Filing",
          text: "File patent application with the Indian Patent Office.",
        },
        {
          title: "Examination",
          text: "Respond to examination reports and objections.",
        },
        {
          title: "Grant",
          text: "Receive patent certificate upon successful examination.",
        },
      ],
    },
    {
      id: "design",
      title: "Design Registration",
      shortTitle: "Design Reg.",
      description: "Protect the visual appearance of your products through design registration. Safeguard the unique shape, configuration, pattern, or ornamentation applied to an article.",
      image: "https://cdn-icons-png.flaticon.com/512/3148/3148933.png",
      overview: "Design registration protects the visual design of objects that are not purely utilitarian. It covers the features of shape, configuration, pattern, or ornamentation.",
      why: "Prevents unauthorized copying of your product designs, enhances brand identity, and provides legal recourse against infringement.",
      protectionScope: [
        "Shape and configuration",
        "Surface pattern",
        "Ornamentation",
        "Color combinations",
        "Overall visual appearance"
      ],
      duration: "Design registration is valid for 10 years, renewable for another 5 years.",
      documents: [
        "Representations of the design (drawings/photos)",
        "Statement of novelty",
        "Applicant details and identity proof",
        "Power of Attorney",
        "Class of articles",
      ],
      steps: [
        {
          title: "Design Search",
          text: "Check for existing similar designs to ensure uniqueness.",
        },
        {
          title: "Application Preparation",
          text: "Prepare design representations and required documents.",
        },
        {
          title: "Filing",
          text: "File design application with the appropriate office.",
        },
        {
          title: "Examination",
          text: "Respond to any objections raised during examination.",
        },
        {
          title: "Registration",
          text: "Receive design registration certificate.",
        },
      ],
    },
    {
      id: "iso",
      title: "ISO Certifications",
      shortTitle: "ISO Certifications",
      description: "Get ISO certified to demonstrate your commitment to quality, efficiency, and international standards. Enhance your business credibility and open doors to global opportunities.",
      image: "https://cdn-icons-png.flaticon.com/512/3063/3063775.png",
      overview: "ISO certifications are international standards that help organizations ensure quality, safety, and efficiency. They provide a framework for consistent processes and continuous improvement.",
      why: "Improves customer satisfaction, enhances market credibility, increases efficiency, and opens up global business opportunities.",
      popularStandards: [
        "ISO 9001 - Quality Management",
        "ISO 14001 - Environmental Management",
        "ISO 45001 - Occupational Health & Safety",
        "ISO 27001 - Information Security",
        "ISO 22000 - Food Safety Management"
      ],
      benefits: [
        "Enhanced customer confidence",
        "Improved process efficiency",
        "Competitive advantage",
        "Regulatory compliance",
        "International recognition"
      ],
      documents: [
        "Company registration documents",
        "Quality manual and procedures",
        "Organization chart",
        "Process flow charts",
        "Legal compliance documents",
      ],
      steps: [
        {
          title: "Gap Analysis",
          text: "Assess current processes against ISO requirements.",
        },
        {
          title: "Documentation",
          text: "Develop quality manual, procedures, and records.",
        },
        {
          title: "Implementation",
          text: "Implement the management system across organization.",
        },
        {
          title: "Internal Audit",
          text: "Conduct internal audits to check system effectiveness.",
        },
        {
          title: "Certification Audit",
          text: "External audit by certification body for ISO certification.",
        },
      ],
    },
    {
      id: "mpcb",
      title: "MPCB Certificate",
      shortTitle: "MPCB Certificate",
      description: "Obtain MPCB (Maharashtra Pollution Control Board) consent for your business. Ensure environmental compliance and operate your business legally in Maharashtra.",
      image: "https://cdn-icons-png.flaticon.com/512/3127/3127695.png",
      overview: "MPCB consent is mandatory for industries and businesses in Maharashtra to ensure they comply with environmental norms and regulations for pollution control.",
      why: "Legal requirement for operation, prevents penalties and shutdowns, demonstrates environmental responsibility, and builds community trust.",
      consentTypes: [
        "Consent to Establish (CTE)",
        "Consent to Operate (CTO)",
        "Authorization for Hazardous Waste",
        "Bio-medical Waste Authorization"
      ],
      validity: [
        "Red Category: 1 year",
        "Orange Category: 2 years", 
        "Green Category: 5 years"
      ],
      documents: [
        "Industry registration documents",
        "Site plan and layout",
        "Water and air pollution control details",
        "Waste management plan",
        "Consent fee payment receipt",
      ],
      steps: [
        {
          title: "Application Preparation",
          text: "Gather all required documents and complete application form.",
        },
        {
          title: "Document Submission",
          text: "Submit application with supporting documents to MPCB.",
        },
        {
          title: "Site Inspection",
          text: "MPCB officials conduct site inspection if required.",
        },
        {
          title: "Consent Grant",
          text: "Receive consent certificate upon approval.",
        },
        {
          title: "Compliance",
          text: "Maintain compliance and renew consent periodically.",
        },
      ],
    },
    {
      id: "barcode",
      title: "Barcode Registration",
      shortTitle: "Barcode",
      description: "Get barcode registration for your products to enable efficient inventory management, retail sales, and global product identification through GS1 standards.",
      image: "https://cdn-icons-png.flaticon.com/512/3148/3148976.png",
      overview: "Barcode registration provides unique product identification numbers that help in inventory management, supply chain efficiency, and retail operations globally.",
      why: "Essential for modern retail, improves supply chain efficiency, enables accurate inventory tracking, and enhances product professionalism.",
      applications: [
        "Retail product identification",
        "Inventory management",
        "Supply chain tracking",
        "E-commerce integration",
        "Global trade compliance"
      ],
      benefits: [
        "Faster checkout process",
        "Accurate inventory control",
        "Reduced errors",
        "Enhanced customer experience",
        "Global recognition"
      ],
      documents: [
        "Business registration certificate",
        "Company PAN card",
        "Address proof",
        "Product list with details",
        "Authorized signatory details",
      ],
      steps: [
        {
          title: "Application",
          text: "Apply for GS1 company prefix with required documents.",
        },
        {
          title: "Document Verification",
          text: "GS1 verifies submitted documents and details.",
        },
        {
          title: "Prefix Allocation",
          text: "Receive unique company prefix from GS1.",
        },
        {
          title: "Number Generation",
          text: "Generate unique barcode numbers for your products.",
        },
        {
          title: "Certificate Issue",
          text: "Receive barcode registration certificate.",
        },
      ],
    },
    {
      id: "msme",
      title: "MSME Registration",
      shortTitle: "MSME",
      description: "Register your business under MSME (Micro, Small & Medium Enterprises) to avail various government benefits, subsidies, and support schemes for business growth.",
      image: "https://cdn-icons-png.flaticon.com/512/3148/3148978.png",
      overview: "MSME registration provides official recognition to micro, small, and medium enterprises, making them eligible for various government schemes, subsidies, and benefits.",
      why: "Access to government subsidies, easier bank loans, tax benefits, preference in government tenders, and various business support schemes.",
      categories: [
        "Micro: Investment < ₹1 crore, turnover < ₹5 crore",
        "Small: Investment < ₹10 crore, turnover < ₹50 crore", 
        "Medium: Investment < ₹50 crore, turnover < ₹250 crore"
      ],
      benefits: [
        "Collateral-free bank loans",
        "Subsidized interest rates",
        "Tax exemptions and benefits",
        "Government tender preference",
        "Credit linked capital subsidy"
      ],
      documents: [
        "Aadhaar card of proprietor/partners/directors",
        "PAN card of business/individual",
        "Business address proof",
        "Bank account details",
        "Investment in plant & machinery details",
      ],
      steps: [
        {
          title: "Document Collection",
          text: "Gather all required documents for MSME registration.",
        },
        {
          title: "Online Application",
          text: "Fill Udyam registration form on the government portal.",
        },
        {
          title: "Verification",
          text: "Automatic verification through government databases.",
        },
        {
          title: "Certificate Generation",
          text: "Receive MSME registration certificate instantly.",
        },
        {
          title: "Benefits Availment",
          text: "Start availing various MSME benefits and schemes.",
        },
      ],
    },
    {
      id: "ce",
      title: "CE Marking",
      shortTitle: "CE Marking",
      description: "Obtain CE marking for your products to demonstrate compliance with European health, safety, and environmental protection standards for product marketing in EEA.",
      image: "https://cdn-icons-png.flaticon.com/512/3148/3148990.png",
      overview: "CE marking is a certification mark that indicates conformity with health, safety, and environmental protection standards for products sold within the European Economic Area.",
      why: "Mandatory for products sold in EEA, enhances product credibility, demonstrates safety compliance, and facilitates international trade.",
      applicableProducts: [
        "Electrical equipment",
        "Machinery",
        "Medical devices",
        "Toys",
        "Construction products",
        "Personal protective equipment"
      ],
      requirements: [
        "Technical documentation",
        "Risk assessment",
        "EU declaration of conformity",
        "Quality system implementation",
        "Notified body assessment (if required)"
      ],
      documents: [
        "Product technical documentation",
        "Risk assessment report",
        "Test reports from accredited labs",
        "Manufacturing process details",
        "Quality control procedures",
      ],
      steps: [
        {
          title: "Product Assessment",
          text: "Determine applicable directives and standards for your product.",
        },
        {
          title: "Testing",
          text: "Conduct required tests with accredited laboratories.",
        },
        {
          title: "Technical Documentation",
          text: "Prepare comprehensive technical documentation.",
        },
        {
          title: "Declaration of Conformity",
          text: "Issue EU declaration of conformity.",
        },
        {
          title: "CE Marking",
          text: "Affix CE mark on product and packaging.",
        },
      ],
    },
  ];

  // Find active service details
  const active = services.find((s) => s.id === activeService);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.45 }}>
      {/* HERO SECTION */}
      <section
        style={{
          width: "100%",
          minHeight: isMobile ? "50vh" : "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(11, 26, 51, 0.7), rgba(11, 26, 51, 0.8)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: isMobile ? "80px 20px 40px" : "120px 20px 60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          width: "100%",
          margin: "0 auto",
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isMobile ? "2.2rem" : "3.2rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 20px 0",
              lineHeight: 1.1,
            }}
          >
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: isMobile ? "1.1rem" : "1.3rem",
              color: "rgba(255,255,255,0.95)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Comprehensive business compliance, intellectual property protection, and certification services
          </motion.p>
        </div>
      </section>

      {/* SERVICES CONTENT - SIDEBAR + MAIN CONTENT */}
      <section style={{ 
        background: "#f7f8fb", 
        minHeight: "70vh",
        padding: isMobile ? "40px 0" : "60px 0" 
      }}>
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto",
          display: isMobile ? "block" : "flex",
          gap: "40px",
          padding: isMobile ? "0 20px" : "0 40px"
        }}>
          
          {/* SIDEBAR NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: isMobile ? "100%" : "320px",
              flexShrink: 0,
              marginBottom: isMobile ? "30px" : "0",
            }}
          >
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 8px 30px rgba(12,18,31,0.08)",
              border: "1px solid rgba(12,18,31,0.06)",
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "0" : "100px",
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#0b1a2b",
                margin: "0 0 20px 0",
                paddingBottom: "16px",
                borderBottom: "2px solid #0d47a1"
              }}>
                Our Services
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    style={{
                      background: activeService === service.id 
                        ? "linear-gradient(90deg, #0d47a1, #207ce5)" 
                        : "transparent",
                      color: activeService === service.id ? "#fff" : "#556",
                      padding: "14px 16px",
                      borderRadius: "10px",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontWeight: activeService === service.id ? 600 : 500,
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                    onMouseOver={(e) => {
                      if (activeService !== service.id) {
                        e.target.style.background = "rgba(13,71,161,0.08)";
                        e.target.style.color = "#0b1a2b";
                      }
                    }}
                    onMouseOut={(e) => {
                      if (activeService !== service.id) {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#556";
                      }
                    }}
                  >
                    <div style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: activeService === service.id ? "rgba(255,255,255,0.2)" : "rgba(13,71,161,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}>
                      {services.indexOf(service) + 1}
                    </div>
                    {service.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MAIN CONTENT */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "16px",
              padding: isMobile ? "24px" : "40px",
              boxShadow: "0 8px 30px rgba(12,18,31,0.08)",
              border: "1px solid rgba(12,18,31,0.06)",
            }}
          >
            {/* Service Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "32px",
              paddingBottom: "24px",
              borderBottom: "1px solid rgba(12,18,31,0.08)"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(13,71,161,0.1), rgba(32,124,229,0.1))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(13,71,161,0.1)",
              }}>
                <img
                  src={active.image}
                  alt={active.title}
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: isMobile ? "1.8rem" : "2.2rem",
                  fontWeight: 800,
                  color: "#0b1a2b",
                  margin: "0 0 8px 0",
                }}>
                  {active.title}
                </h2>
                <p style={{
                  fontSize: "1.1rem",
                  color: "#666",
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {active.description}
                </p>
              </div>
            </div>

            {/* Service Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              
              {/* Overview */}
              <section>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#0b1a2b",
                  margin: "0 0 16px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span style={{
                    width: "4px",
                    height: "24px",
                    background: "linear-gradient(180deg, #0d47a1, #207ce5)",
                    borderRadius: "2px"
                  }}></span>
                  Overview
                </h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#444",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {active.overview}
                </p>
              </section>

              {/* Why Important */}
              <section>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#0b1a2b",
                  margin: "0 0 16px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span style={{
                    width: "4px",
                    height: "24px",
                    background: "linear-gradient(180deg, #0d47a1, #207ce5)",
                    borderRadius: "2px"
                  }}></span>
                  Why It's Important
                </h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#444",
                  lineHeight: 1.7,
                  margin: "0 0 20px 0",
                }}>
                  {active.why}
                </p>
                
                {/* Dynamic content based on service */}
                {active.importance && (
                  <div style={{
                    background: "rgba(13,71,161,0.03)",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid rgba(13,71,161,0.1)",
                  }}>
                    <h4 style={{ margin: "0 0 12px 0", color: "#0b1a2b", fontSize: "1.1rem" }}>
                      Key Benefits:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#444" }}>
                      {active.importance.map((item, index) => (
                        <li key={index} style={{ marginBottom: "8px", lineHeight: 1.5 }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {active.whatCanBeTrademarked && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
                    <div style={{
                      background: "rgba(13,71,161,0.03)",
                      padding: "20px",
                      borderRadius: "12px",
                      border: "1px solid rgba(13,71,161,0.1)",
                    }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "#0b1a2b", fontSize: "1.1rem" }}>
                        What Can Be Trademarked:
                      </h4>
                      <ul style={{ margin: 0, paddingLeft: "20px", color: "#444" }}>
                        {active.whatCanBeTrademarked.map((item, index) => (
                          <li key={index} style={{ marginBottom: "6px", fontSize: "0.95rem" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{
                      background: "rgba(220,53,69,0.03)",
                      padding: "20px",
                      borderRadius: "12px",
                      border: "1px solid rgba(220,53,69,0.1)",
                    }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "#0b1a2b", fontSize: "1.1rem" }}>
                        What Cannot Be Trademarked:
                      </h4>
                      <ul style={{ margin: 0, paddingLeft: "20px", color: "#444" }}>
                        {active.whatCannotBeTrademarked.map((item, index) => (
                          <li key={index} style={{ marginBottom: "6px", fontSize: "0.95rem" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>

              {/* Procedure Steps */}
              <section>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#0b1a2b",
                  margin: "0 0 20px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span style={{
                    width: "4px",
                    height: "24px",
                    background: "linear-gradient(180deg, #0d47a1, #207ce5)",
                    borderRadius: "2px"
                  }}></span>
                  Registration Procedure
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {active.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                        background: "#fbfbff",
                        border: "1px solid rgba(12,18,31,0.06)",
                        padding: "20px",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "#f8f9ff";
                        e.currentTarget.style.borderColor = "rgba(13,71,161,0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "#fbfbff";
                        e.currentTarget.style.borderColor = "rgba(12,18,31,0.06)";
                      }}
                    >
                      <div
                        style={{
                          minWidth: "48px",
                          height: "48px",
                          borderRadius: "10px",
                          background: "linear-gradient(90deg,#d4af37,#f5d488)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#0b1a2b",
                          fontWeight: 800,
                          fontSize: "16px",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <strong style={{ 
                          display: "block", 
                          marginBottom: "8px",
                          fontSize: "1.1rem",
                          color: "#0b1a2b"
                        }}>
                          {step.title}
                        </strong>
                        <div style={{ 
                          color: "#555", 
                          fontSize: "1rem",
                          lineHeight: 1.5
                        }}>
                          {step.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Required Documents */}
              <section>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#0b1a2b",
                  margin: "0 0 16px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span style={{
                    width: "4px",
                    height: "24px",
                    background: "linear-gradient(180deg, #0d47a1, #207ce5)",
                    borderRadius: "2px"
                  }}></span>
                  Required Documents
                </h3>
                <div style={{
                  background: "#fafafa",
                  borderRadius: "12px",
                  border: "1px solid rgba(12,18,31,0.06)",
                  padding: "24px",
                }}>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: "20px", 
                    color: "#444",
                    fontSize: "1rem",
                    lineHeight: 1.6
                  }}>
                    {active.documents.map((doc, i) => (
                      <li key={i} style={{ marginBottom: "12px" }}>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CTA Buttons */}
              <div style={{ 
                display: "flex", 
                gap: "16px", 
                flexWrap: "wrap",
                paddingTop: "20px",
                borderTop: "1px solid rgba(12,18,31,0.08)"
              }}>
                <button
                  onClick={() => {
                    // Navigate to contact or open contact modal
                  }}
                  style={{
                    padding: "16px 32px",
                    borderRadius: "12px",
                    border: "none",
                    background: "linear-gradient(90deg, rgba(13,71,161,0.95), rgba(32,124,229,0.95))",
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(13,71,161,0.3)",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 20px rgba(13,71,161,0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(13,71,161,0.3)";
                  }}
                >
                  Get Started Now
                </button>

                <button
                  onClick={() => {
                    const subject = encodeURIComponent(`${active.title} - Inquiry`);
                    const body = encodeURIComponent(
                      `Hi,\n\nI would like to know more about ${active.title}. Please share next steps and pricing details.\n\nThanks.`
                    );
                    window.location.href = `mailto:info@veronicaconsultants.com?subject=${subject}&body=${body}`;
                  }}
                  style={{
                    padding: "16px 32px",
                    borderRadius: "12px",
                    border: "1px solid rgba(12,18,31,0.1)",
                    background: "#fff",
                    color: "#0b1a2b",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#f8f9ff";
                    e.target.style.borderColor = "rgba(13,71,161,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#fff";
                    e.target.style.borderColor = "rgba(12,18,31,0.1)";
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}