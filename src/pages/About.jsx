import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : true;

  // Updated color palette with gold accents
  const colors = {
    primary: "#0b1a2b",
    secondary: "#0d47a1",
    accent: "#207ce5",
    gold: "#D4AF37",
    goldLight: "#F5D488",
    light: "#f7f8fb",
    white: "#FFFFFF",
    textDark: "#2D3748",
    textLight: "#718096",
    border: "rgba(12,18,31,0.06)",
  };

  // Company stats
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Services Offered", value: "10+" },
  ];

  // Team members
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Alex has 15+ years of experience in financial consulting and founded Finicare to provide transparent, professional financial guidance.",
    },
    {
      name: "Sarah Lee",
      role: "Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Sarah ensures every client gets a personalized strategy aligned with their goals and risk profile.",
    },
    {
      name: "Robert Martinez",
      role: "Lead Financial Advisor",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      bio: "Robert specializes in investment planning and wealth management to maximize growth and minimize risk.",
    },
  ];

  // Company values
  const values = [
    { 
      title: "Integrity", 
      desc: "We prioritize honesty and transparency in all dealings.",
      icon: "🔒"
    },
    { 
      title: "Excellence", 
      desc: "Delivering top-quality financial advice to every client.",
      icon: "⭐"
    },
    { 
      title: "Innovation", 
      desc: "Leveraging technology to provide smarter solutions.",
      icon: "💡"
    },
    { 
      title: "Client-Centric", 
      desc: "Our clients' success drives our mission.",
      icon: "❤️"
    },
  ];

  // Services offered
  const services = [
    { 
      title: "Trademark Registration", 
      icon: "🏢", 
      desc: "Complete trademark registration services to protect your brand identity." 
    },
    { 
      title: "ISO Certification", 
      icon: "📋", 
      desc: "Get ISO certified to enhance your business credibility and quality standards." 
    },
    { 
      title: "MPCB License", 
      icon: "🌿", 
      desc: "Environmental compliance and MPCB license consulting services." 
    },
    { 
      title: "Patent & Copyright", 
      icon: "📝", 
      desc: "Protect your intellectual property with expert patent and copyright services." 
    },
  ];

  // Company information sections
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: colors.light, lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          minHeight: isMobile ? "60vh" : "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(11, 26, 51, 0.7), rgba(11, 26, 51, 0.8)), url('https://plus.unsplash.com/premium_photo-1661765771430-fec42b8ea9d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          padding: isMobile ? "100px 20px 60px" : "140px 20px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ 
          maxWidth: "900px", 
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isMobile ? "2.2rem" : "3.2rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: colors.white,
              margin: "0 0 24px 0",
              lineHeight: 1.1,
            }}
          >
            About <span style={{ color: colors.gold }}>Finipcare Consultants</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: isMobile ? "1.1rem" : "1.3rem",
              color: "rgba(255,255,255,0.95)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Leading Trademark Registration Consultants in Kothrud, Pune - Your trusted partner for business compliance and certification services.
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section style={{ 
        padding: isMobile ? "60px 20px" : "80px 20px",
        background: colors.white,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2 style={{ 
              fontSize: isMobile ? "2rem" : "2.8rem", 
              marginBottom: "16px", 
              color: colors.primary,
              fontWeight: 800 
            }}>
              Get to Know Our Company
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              color: colors.textLight,
              maxWidth: "800px",
              margin: "0 auto",
            }}>
              Finipcare Consultants in Kothrud, Pune is a leading establishment in the Trademark Registration and Business Compliance sector
            </p>
          </motion.div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", 
            gap: "30px",
            marginBottom: "60px"
          }}>
            {companyInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  background: colors.light,
                  padding: "30px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 30px rgba(12,18,31,0.04)",
                  border: `1px solid ${colors.border}`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div style={{
                  fontSize: "2.5rem",
                  flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: "1.3rem", 
                    fontWeight: 700, 
                    color: colors.primary, 
                    marginBottom: "12px" 
                  }}>
                    {info.title}
                  </h3>
                  <p style={{ 
                    fontSize: "1rem", 
                    color: colors.textLight,
                    lineHeight: 1.6 
                  }}>
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, #1a365d)`,
              padding: "40px",
              borderRadius: "16px",
              color: colors.white,
              textAlign: "center",
            }}
          >
            <h3 style={{ 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              marginBottom: "16px",
              color: colors.gold 
            }}>
              📍 Our Location
            </h3>
            <p style={{ 
              fontSize: "1.1rem", 
              marginBottom: "20px",
              opacity: 0.9
            }}>
              New DP Road, near Badhai Sweet Chowk, Kothrud, Pune
            </p>
            <p style={{ 
              fontSize: "1rem", 
              opacity: 0.8,
              fontStyle: "italic"
            }}>
              Easily accessible with various modes of transport readily available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Gold Accents */}
      <section style={{ 
        padding: isMobile ? "60px 20px" : "80px 20px",
        background: colors.light,
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "30px",
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: colors.white,
                padding: "30px 20px",
                borderRadius: "16px",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(12,18,31,0.04)",
                border: `1px solid ${colors.border}`,
              }}
            >
              <h2 style={{ 
                fontSize: "2.5rem", 
                fontWeight: 800, 
                color: colors.gold,  // Gold color for numbers
                marginBottom: "10px" 
              }}>
                {stat.value}
              </h2>
              <p style={{ 
                fontSize: "1rem", 
                color: colors.textDark,
                fontWeight: 600 
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section style={{ 
        padding: isMobile ? "60px 20px" : "80px 20px",
        background: colors.white,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2 style={{ 
              fontSize: isMobile ? "2rem" : "2.8rem", 
              marginBottom: "16px", 
              color: colors.primary,
              fontWeight: 800 
            }}>
              Our Expertise
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              color: colors.textLight,
              maxWidth: "700px",
              margin: "0 auto",
            }}>
              Comprehensive business compliance and certification services tailored to your needs
            </p>
          </motion.div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", 
            gap: "24px" 
          }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 50px rgba(12,18,31,0.15)",
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: colors.light,
                  padding: "30px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 30px rgba(12,18,31,0.04)",
                  border: `1px solid ${colors.border}`,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ 
                  fontSize: "3rem", 
                  marginBottom: "20px" 
                }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  fontSize: "1.3rem", 
                  fontWeight: 700, 
                  color: colors.primary, 
                  marginBottom: "12px" 
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontSize: "1rem", 
                  color: colors.textLight,
                  lineHeight: 1.6 
                }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Services List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <h3 style={{ 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              color: colors.primary,
              marginBottom: "20px"
            }}>
              We're Also Known For
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "15px",
              maxWidth: "800px",
              margin: "0 auto",
            }}>
              {[
                "Trademark Registration Consultants",
                "ISO Certification Consultants", 
                "MPCB License Consultants",
                "ISO Consultants",
                "Patent Consultants",
                "Copyright Consultants"
              ].map((service, i) => (
                <div key={i} style={{
                  padding: "12px 16px",
                  background: colors.light,
                  borderRadius: "8px",
                  color: colors.textDark,
                  fontWeight: 500,
                  border: `1px solid ${colors.border}`,
                }}>
                  {service}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ 
        background: colors.light, 
        padding: isMobile ? "60px 20px" : "80px 20px" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2 style={{ 
              fontSize: isMobile ? "2rem" : "2.8rem", 
              marginBottom: "16px", 
              color: colors.primary,
              fontWeight: 800 
            }}>
              Meet Our Team
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              color: colors.textLight,
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              Our dedicated professionals are committed to delivering exceptional service and building lasting client relationships
            </p>
          </motion.div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
            gap: "30px" 
          }}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 50px rgba(12,18,31,0.15)",
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: colors.white,
                  padding: "30px",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 8px 30px rgba(12,18,31,0.04)",
                  border: `1px solid ${colors.border}`,
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ 
                    width: "120px", 
                    height: "120px", 
                    borderRadius: "50%", 
                    objectFit: "cover", 
                    marginBottom: "20px",
                    border: `3px solid ${colors.light}`
                  }}
                />
                <h3 style={{ 
                  fontSize: "1.3rem", 
                  fontWeight: 700, 
                  marginBottom: "8px", 
                  color: colors.primary 
                }}>
                  {member.name}
                </h3>
                <p style={{ 
                  fontSize: "1rem", 
                  fontWeight: 600, 
                  color: colors.gold,  // Gold color for roles
                  marginBottom: "16px" 
                }}>
                  {member.role}
                </p>
                <p style={{ 
                  fontSize: "0.95rem", 
                  color: colors.textLight,
                  lineHeight: 1.6 
                }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        textAlign: "center", 
        padding: isMobile ? "60px 20px" : "80px 20px", 
        background: colors.primary 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            color: colors.white, 
            fontSize: isMobile ? "2rem" : "2.5rem", 
            marginBottom: "24px",
            fontWeight: 800 
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.1rem",
            marginBottom: "32px",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}>
            Contact us today for expert guidance on trademarks, certifications, and business compliance
          </p>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldLight})`,
              color: colors.primary,
              padding: "16px 32px",
              fontSize: "1.1rem",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}