import React from "react";
import trademarkImage from "../assets/trademark.png";
import brandImage from "../assets/loyalty-program.png";
import copyrightImage from "../assets/copyright.png";

const Services = () => {
  const services = [
    {
      name: "Trademark Registration",
      desc: "Safeguard your business identity with end-to-end trademark solutions. Protect your brand with confidence.",
      img: trademarkImage,
    },
    {
      name: "Brand & Logo Registration",
      desc: "Preserve the uniqueness of your brand identity with smooth, professional registration services.",
      img: brandImage,
    },
    {
      name: "Copyright Registration",
      desc: "Ensure your creative work stays yours with effortless copyright protection from experts.",
      img: copyrightImage,
    },
    {
      name: "Life Insurance",
      desc: "Comprehensive life insurance solutions tailored to secure your family's future and peace of mind.",
      img: "https://cdn-icons-png.flaticon.com/512/825/825509.png",
    },
    {
      name: "Health Insurance",
      desc: "Access plans designed to safeguard your health and financial wellbeing, crafted for all life stages.",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966328.png",
    },
    {
      name: "Business Registration",
      desc: "Simplify legal processes and start your venture with complete compliance and clarity.",
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
    },
  ];

  const heroStyle = {
    height: "40vh",
    background: "linear-gradient(to bottom right, #0b1a2b, #1e293b)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
  };

  const heroTitle = {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "0.5rem",
    letterSpacing: "-0.5px",
  };

  const heroSubtitle = {
    fontSize: "1.1rem",
    fontWeight: 400,
    color: "#e2e8f0",
    maxWidth: "700px",
    lineHeight: "1.6",
  };

  const pageStyle = {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
    color: "#0b1a2b",
    minHeight: "100vh",
    padding: "6rem 2rem",
  };

  const containerStyle = {
    maxWidth: "1300px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: 800,
    color: "#0b1a2b",
    marginBottom: "1rem",
    letterSpacing: "-0.5px",
  };

  const subheadingStyle = {
    color: "#475569",
    fontSize: "1.1rem",
    marginBottom: "4rem",
    lineHeight: "1.7",
    maxWidth: "750px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2.5rem",
    alignItems: "stretch",
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #ffffff, #f5f7fa)",
    border: "1px solid rgba(212,175,55,0.2)",
    borderRadius: "20px",
    padding: "2.5rem 2rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
    transition: "all 0.35s ease",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const iconWrapper = {
    width: "70px",
    height: "70px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #d4af37 0%, #f8e7a1 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    boxShadow: "0 5px 15px rgba(212,175,55,0.2)",
  };

  const imageStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: "0.8rem",
  };

  const descStyle = {
    color: "#475569",
    fontSize: "1rem",
    lineHeight: "1.6",
    flexGrow: 1,
  };

  const lineStyle = {
    height: "2px",
    width: "60px",
    background: "#d4af37",
    marginTop: "1.2rem",
    borderRadius: "2px",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.08)";
    e.currentTarget.style.border = "1px solid rgba(212,175,55,0.5)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.04)";
    e.currentTarget.style.border = "1px solid rgba(212,175,55,0.2)";
  };

  return (
    <>
      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1 style={heroTitle}>Our Expertise</h1>
        <p style={heroSubtitle}>
        Empowering your business with precision-driven financial, legal, and insurance services. Explore how Finicare brings expertise and trust to your growth.
        </p>
      </section>

      {/* SERVICES GRID */}
      <div style={pageStyle}>
        <div style={containerStyle}>
          {/* <h1 style={headingStyle}>Our Expertise</h1>
          <p style={subheadingStyle}>
            Empowering your business with precision-driven financial, legal, and insurance services. Explore how Finicare brings expertise and trust to your growth.
          </p> */}

          <div style={gridStyle}>
            {services.map((service, index) => (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={cardHover}
                onMouseLeave={cardLeave}
              >
                <div>
                  <div style={iconWrapper}>
                    <img src={service.img} alt={service.name} style={imageStyle} />
                  </div>
                  <h3 style={titleStyle}>{service.name}</h3>
                  <p style={descStyle}>{service.desc}</p>
                </div>
                <div style={lineStyle}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
