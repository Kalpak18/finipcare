import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Founder information
  const founder = {
    name: "Alex Thompson",
    role: "Founder & Financial Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    experience: "15+ years",
    specialization: ["Wealth Management", "Investment Planning", "Tax Optimization", "Retirement Planning"],
    education: "CFP®, MBA Finance",
    quote: "I believe everyone deserves personalized financial guidance to achieve their dreams.",
    bio: "With over 15 years of experience in financial consulting, Alex founded Finicare with a vision to make professional financial advice accessible to individuals and small businesses. His expertise spans across investment strategies, tax planning, retirement planning, and wealth management.",
    achievements: [
      "Helped 500+ clients achieve their financial goals",
      "Managed over $50M in client assets",
      "99% client retention rate",
      "Featured in Financial Times & Business Today"
    ]
  };

  // Company milestones
  const milestones = [
    { year: "2009", event: "Finicare Founded", description: "Started with a vision to make financial planning accessible to everyone" },
    { year: "2012", event: "First 100 Clients", description: "Reached milestone of serving 100 satisfied clients within 3 years" },
    { year: "2015", event: "Digital Platform Launch", description: "Introduced online consulting to serve clients nationwide" },
    { year: "2020", event: "500+ Clients Milestone", description: "Expanded to serve over 500 individuals and businesses" },
    { year: "2024", event: "Industry Recognition", description: "Awarded 'Excellence in Financial Advisory' by Finance Today" },
  ];

  // Services
  const services = [
    { name: "Investment Planning", icon: "📈", description: "Strategic portfolio management tailored to your goals and risk tolerance" },
    { name: "Retirement Planning", icon: "🏖️", description: "Comprehensive strategies to secure your financial future and retirement" },
    { name: "Tax Optimization", icon: "💰", description: "Legal strategies to minimize tax liabilities and maximize your savings" },
    { name: "Wealth Management", icon: "💎", description: "Holistic approach to growing and preserving your wealth" },
    { name: "Risk Management", icon: "🛡️", description: "Protect your assets with comprehensive insurance solutions" },
    { name: "Business Finance", icon: "💼", description: "Financial consulting for small businesses and entrepreneurs" },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      text: "Alex helped me structure my business finances and personal investments. My net worth has grown 40% in 3 years! His personalized approach made all the difference.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "Retiree",
      text: "The retirement planning gave me the confidence to retire early. I'm living my dream lifestyle thanks to Alex's expert guidance and careful planning.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Young Professional",
      text: "As someone new to investing, Alex's patient guidance and clear explanations made financial planning approachable. I feel confident about my financial future.",
      rating: 5
    }
  ];

  // Stats for Hero
  const stats = [
    { icon: "👥", number: "500+", label: "Happy Clients" },
    { icon: "📊", number: "$50M+", label: "Assets Managed" },
    { icon: "⭐", number: "15+", label: "Years Experience" },
    { icon: "🎯", number: "99%", label: "Client Retention" },
  ];

  // Responsive Styles
  const styles = {
    container: {
      maxWidth: '1500px',
      margin: '0 auto',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: isMobile ? '0 16px' : '0 20px',
      paddingTop: isMobile ? '80px' : '100px',
    },
    hero: {
      background: 'linear-gradient(135deg, #0B1A33 0%, #233047 100%)',
      color: 'white',
      padding: isMobile ? '30px 16px 50px 16px' : '40px 20px 80px 20px',
      textAlign: 'center',
      borderRadius: isMobile ? '0 0 20px 20px' : '0 0 30px 30px',
      marginTop: isMobile ? '-50px' : '-60px',
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 1,
    },
    heroContent: {
      maxWidth: '900px',
      margin: isMobile ? '60px auto' : '80px auto',
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      fontWeight: '700',
      marginBottom: isMobile ? '15px' : '20px',
      lineHeight: '1.2',
    },
    highlight: {
      color: '#d4af37',
      display: 'block',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      lineHeight: '1.6',
      opacity: '0.95',
      marginBottom: isMobile ? '30px' : '40px',
      padding: isMobile ? '0 10px' : '0',
    },
    heroStats: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      marginTop: isMobile ? '30px' : '50px',
    },
    statItem: { 
      textAlign: 'center',
      padding: isMobile ? '10px' : '0',
    },
    statIcon: { 
      fontSize: isMobile ? '1.8rem' : '2.5rem', 
      marginBottom: isMobile ? '8px' : '10px' 
    },
    statNumber: { 
      fontSize: isMobile ? '1.5rem' : '2rem', 
      fontWeight: '700', 
      marginBottom: isMobile ? '3px' : '5px' 
    },
    statLabel: { 
      fontSize: isMobile ? '0.85rem' : '1rem', 
      opacity: '0.9' 
    },
    section: { 
      marginBottom: isMobile ? '50px' : '80px' 
    },
    sectionTitle: { 
      fontSize: isMobile ? '1.8rem' : '2.8rem', 
      fontWeight: '600', 
      textAlign: 'center', 
      marginBottom: isMobile ? '15px' : '20px', 
      color: '#2c5530',
      lineHeight: '1.2',
    },
    sectionSubtitle: { 
      fontSize: isMobile ? '1rem' : '1.2rem', 
      textAlign: 'center', 
      color: '#666', 
      marginBottom: isMobile ? '30px' : '50px', 
      maxWidth: '600px', 
      margin: '0 auto', 
      lineHeight: '1.6',
      padding: isMobile ? '0 10px' : '0',
    },
    tabContainer: { 
      background: '#f8f9fa', 
      borderRadius: isMobile ? '15px' : '20px', 
      overflow: 'hidden', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
    },
    tabHeaders: { 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      background: 'white', 
      borderBottom: '2px solid #e9ecef' 
    },
    tabHeader: { 
      flex: 1, 
      padding: isMobile ? '15px' : '20px', 
      border: 'none', 
      background: 'transparent', 
      fontSize: isMobile ? '1rem' : '1.1rem', 
      fontWeight: '600', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease', 
      color: '#666',
      borderBottom: isMobile ? '1px solid #e9ecef' : 'none',
    },
    activeTab: { 
      background: '#0B1A33', 
      color: 'white' 
    },
    tabContent: { 
      padding: isMobile ? '25px' : '40px', 
      minHeight: isMobile ? '200px' : '300px' 
    },
    tabPanel: { 
      animation: 'fadeIn 0.5s ease' 
    },
    tabTitle: { 
      fontSize: isMobile ? '1.5rem' : '2rem', 
      marginBottom: isMobile ? '15px' : '20px', 
      color: '#d4af37',
      textAlign: isMobile ? 'center' : 'left',
    },
    tabText: { 
      fontSize: isMobile ? '1rem' : '1.1rem', 
      lineHeight: '1.7', 
      marginBottom: isMobile ? '20px' : '25px', 
      color: '#555',
      textAlign: isMobile ? 'center' : 'left',
    },
    missionList: { 
      listStyle: 'none', 
      padding: 0 
    },
    missionListItem: { 
      fontSize: isMobile ? '1rem' : '1.1rem', 
      lineHeight: isMobile ? '1.8' : '2', 
      color: '#555', 
      marginBottom: isMobile ? '8px' : '10px',
      padding: isMobile ? '8px 0' : '0',
    },
    visionGoals: { 
      display: 'flex', 
      flexDirection: 'column', 
      gap: isMobile ? '12px' : '15px', 
      marginTop: isMobile ? '20px' : '25px' 
    },
    goal: { 
      background: '#ebe76bff', 
      padding: isMobile ? '12px 15px' : '15px 20px', 
      borderRadius: '10px', 
      fontWeight: '500', 
      color: '#2c5530',
      fontSize: isMobile ? '0.95rem' : '1rem',
    },
    valuesGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: isMobile ? '15px' : '20px', 
      marginTop: isMobile ? '20px' : '30px' 
    },
    valueCard: { 
      background: 'white', 
      padding: isMobile ? '20px' : '25px', 
      borderRadius: '15px', 
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)', 
      textAlign: 'center', 
      border: '2px solid #e8f5e8', 
      transition: 'transform 0.3s ease' 
    },
    valueCardTitle: { 
      color: '#2c5530', 
      marginBottom: isMobile ? '12px' : '15px', 
      fontSize: isMobile ? '1.1rem' : '1.3rem' 
    },
    valueCardText: { 
      color: '#666', 
      lineHeight: '1.6',
      fontSize: isMobile ? '0.9rem' : '1rem',
    },
    founderContainer: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', 
      gap: isMobile ? '30px' : '50px', 
      alignItems: 'start', 
      maxWidth: '1000px', 
      margin: '0 auto', 
      background: 'white', 
      padding: isMobile ? '25px' : '40px', 
      borderRadius: isMobile ? '15px' : '20px', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
    },
    founderImageContainer: { 
      textAlign: 'center' 
    },
    founderImage: { 
      width: '100%', 
      maxWidth: isMobile ? '250px' : '300px', 
      borderRadius: isMobile ? '15px' : '20px', 
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      margin: '0 auto',
    },
    founderInfo: { 
      padding: isMobile ? '0' : '0 20px' 
    },
    founderName: { 
      fontSize: isMobile ? '1.8rem' : '2.2rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '8px' : '10px', 
      color: '#2c5530',
      textAlign: isMobile ? 'center' : 'left',
    },
    founderRole: { 
      fontSize: isMobile ? '1.1rem' : '1.3rem', 
      color: '#4a7c59', 
      marginBottom: isMobile ? '12px' : '15px', 
      fontWeight: '500',
      textAlign: isMobile ? 'center' : 'left',
    },
    founderExperience: { 
      color: '#666', 
      marginBottom: isMobile ? '6px' : '8px', 
      fontSize: isMobile ? '0.9rem' : '1rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    founderEducation: { 
      color: '#666', 
      marginBottom: isMobile ? '15px' : '20px', 
      fontSize: isMobile ? '0.9rem' : '1rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    specializations: { 
      marginBottom: isMobile ? '15px' : '20px' 
    },
    specializationsTitle: { 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '12px' : '15px', 
      color: '#2c5530',
      textAlign: isMobile ? 'center' : 'left',
    },
    specializationsGrid: { 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: isMobile ? '8px' : '10px',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    specialization: { 
      background: '#e8f5e8', 
      padding: isMobile ? '6px 12px' : '8px 16px', 
      borderRadius: '20px', 
      fontSize: isMobile ? '0.85rem' : '0.95rem', 
      color: '#2c5530', 
      fontWeight: '500' 
    },
    founderQuote: { 
      fontStyle: 'italic', 
      color: '#777', 
      borderLeft: isMobile ? 'none' : '3px solid #4a7c59', 
      paddingLeft: isMobile ? '0' : '15px', 
      margin: isMobile ? '20px 0' : '25px 0', 
      fontSize: isMobile ? '1rem' : '1.1rem',
      textAlign: isMobile ? 'center' : 'left',
      padding: isMobile ? '15px' : '0 0 0 15px',
      background: isMobile ? '#f8f9fa' : 'transparent',
      borderRadius: isMobile ? '10px' : '0',
    },
    founderBio: { 
      marginBottom: isMobile ? '20px' : '25px' 
    },
    founderBioText: { 
      fontSize: isMobile ? '1rem' : '1.1rem', 
      lineHeight: '1.7', 
      color: '#555',
      textAlign: isMobile ? 'center' : 'left',
    },
    achievements: { 
      background: '#f8f9fa', 
      padding: isMobile ? '15px' : '20px', 
      borderRadius: '15px', 
      border: '1px solid #e9ecef' 
    },
    achievementsTitle: { 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '12px' : '15px', 
      color: '#2c5530',
      textAlign: isMobile ? 'center' : 'left',
    },
    achievementsList: { 
      listStyle: 'none', 
      padding: 0 
    },
    achievementItem: { 
      fontSize: isMobile ? '0.9rem' : '1rem', 
      lineHeight: isMobile ? '1.6' : '1.8', 
      color: '#555', 
      marginBottom: isMobile ? '6px' : '8px' 
    },
    servicesGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: isMobile ? '20px' : '30px', 
      marginTop: isMobile ? '30px' : '50px' 
    },
    serviceCard: { 
      background: 'white', 
      padding: isMobile ? '20px' : '30px', 
      borderRadius: '15px', 
      textAlign: 'center', 
      border: '1px solid #e9ecef', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease' 
    },
    serviceIcon: { 
      fontSize: isMobile ? '2.5rem' : '3rem', 
      marginBottom: isMobile ? '15px' : '20px' 
    },
    serviceName: { 
      fontSize: isMobile ? '1.2rem' : '1.4rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '12px' : '15px', 
      color: '#2c5530' 
    },
    serviceDescription: { 
      color: '#666', 
      lineHeight: '1.6',
      fontSize: isMobile ? '0.9rem' : '1rem',
    },
    timeline: { 
      position: 'relative', 
      maxWidth: '800px', 
      margin: isMobile ? '30px auto 0' : '50px auto 0' 
    },
    timelineItem: { 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center', 
      marginBottom: isMobile ? '30px' : '40px', 
      background: 'white', 
      padding: isMobile ? '20px' : '25px', 
      borderRadius: '15px', 
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)', 
      transition: 'transform 0.3s ease' 
    },
    timelineYear: { 
      background: '#2c5530', 
      color: 'white', 
      padding: isMobile ? '8px 15px' : '10px 20px', 
      borderRadius: '25px', 
      fontWeight: '600', 
      marginRight: isMobile ? '0' : '25px', 
      marginBottom: isMobile ? '15px' : '0',
      flexShrink: 0, 
      fontSize: isMobile ? '1rem' : '1.1rem',
      alignSelf: isMobile ? 'flex-start' : 'center',
    },
    timelineContent: { 
      flex: 1 
    },
    timelineEvent: { 
      fontSize: isMobile ? '1.1rem' : '1.3rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '6px' : '8px', 
      color: '#2c5530' 
    },
    timelineDescription: { 
      color: '#666', 
      lineHeight: '1.6',
      fontSize: isMobile ? '0.9rem' : '1rem',
    },
    testimonialSection: { 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
      padding: isMobile ? '50px 16px' : '80px 20px', 
      marginBottom: isMobile ? '50px' : '80px', 
      borderRadius: isMobile ? '20px' : '30px' 
    },
    testimonialsGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: isMobile ? '20px' : '30px', 
      marginTop: isMobile ? '30px' : '50px' 
    },
    testimonialCard: { 
      background: 'white', 
      padding: isMobile ? '20px' : '30px', 
      borderRadius: isMobile ? '15px' : '20px', 
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)', 
      transition: 'transform 0.3s ease' 
    },
    rating: { 
      marginBottom: isMobile ? '12px' : '15px', 
      fontSize: isMobile ? '1rem' : '1.2rem' 
    },
    testimonialText: { 
      fontSize: isMobile ? '0.95rem' : '1.1rem', 
      lineHeight: '1.6', 
      color: '#555', 
      marginBottom: isMobile ? '15px' : '20px', 
      fontStyle: 'italic' 
    },
    clientInfo: { 
      display: 'flex', 
      flexDirection: 'column' 
    },
    clientName: { 
      color: '#2c5530', 
      marginBottom: '5px',
      fontSize: isMobile ? '1rem' : '1.1rem',
    },
    clientRole: { 
      color: '#666', 
      fontSize: isMobile ? '0.85rem' : '0.9rem' 
    },
    ctaButton: { 
      background: '#d4af37', 
      color: '#2c5530', 
      border: 'none', 
      padding: isMobile ? '14px 30px' : '18px 45px', 
      borderRadius: '50px', 
      fontSize: isMobile ? '1rem' : '1.1rem', 
      fontWeight: '600', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '280px' : 'none',
    },
  };

  // Dynamic styles
  const getServiceCardStyle = (index) => ({
    ...styles.serviceCard,
    transform: hoveredService === index && !isMobile ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: hoveredService === index && !isMobile ? '0 15px 35px rgba(0,0,0,0.15)' : '0 5px 20px rgba(0,0,0,0.1)'
  });

  const getCtaButtonStyle = () => ({
    ...styles.ctaButton,
    transform: hoveredButton && !isMobile ? 'scale(1.05)' : 'scale(1)',
    backgroundColor: hoveredButton ? '#e6c130' : '#d4af37'
  });

  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Your Trusted Partner in <span style={styles.highlight}>Financial Excellence</span>
          </h1>
          <p style={styles.heroSubtitle}>
            For over 15 years, Finicare has been transforming financial futures through 
            personalized strategies, expert guidance, and unwavering commitment to our clients' success.
          </p>
          <div style={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <div style={styles.statIcon}>{stat.icon}</div>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={{ ...styles.statLabel, color: '#f0e6b8' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Approach Tabs */}
      <section style={styles.section}>
        <div style={styles.tabContainer}>
          <div style={styles.tabHeaders}>
            {["mission", "vision", "approach"].map(tab => (
              <button
                key={tab}
                style={{ ...styles.tabHeader, ...(activeTab === tab ? styles.activeTab : {}) }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div style={styles.tabContent}>
            {activeTab === "mission" && (
              <div style={styles.tabPanel}>
                <h2 style={styles.tabTitle}>Our Mission</h2>
                <p style={styles.tabText}>
                  To provide personalized, accessible financial guidance that empowers individuals and 
                  small businesses to achieve their financial goals and build lasting wealth.
                </p>
                <ul style={styles.missionList}>
                  <li style={styles.missionListItem}>🎯 Personalized financial strategies for every client</li>
                  <li style={styles.missionListItem}>💡 Clear, understandable financial advice</li>
                  <li style={styles.missionListItem}>🤝 Long-term partnerships built on trust</li>
                  <li style={styles.missionListItem}>📈 Results-driven approach to wealth building</li>
                </ul>
              </div>
            )}

            {activeTab === "vision" && (
              <div style={styles.tabPanel}>
                <h2 style={styles.tabTitle}>Our Vision</h2>
                <p style={styles.tabText}>
                  To be the most trusted financial partner for individuals and small businesses, 
                  known for delivering exceptional results through personalized service and expert guidance.
                </p>
                <div style={styles.visionGoals}>
                  <div style={styles.goal}>Making professional financial advice accessible to all</div>
                  <div style={styles.goal}>Building long-term wealth for every client</div>
                  <div style={styles.goal}>Setting new standards in personalized financial service</div>
                </div>
              </div>
            )}

            {activeTab === "approach" && (
              <div style={styles.tabPanel}>
                <h2 style={styles.tabTitle}>Our Approach</h2>
                <p style={styles.tabText}>
                  Every client receives my personal attention and expertise. I work closely with you to 
                  understand your unique situation and create customized strategies that deliver real results.
                </p>
                <div style={styles.valuesGrid}>
                  <div style={styles.valueCard}>
                    <h3 style={styles.valueCardTitle}>Personalized Service</h3>
                    <p style={styles.valueCardText}>One-on-one attention with strategies tailored to your specific goals and circumstances.</p>
                  </div>
                  <div style={styles.valueCard}>
                    <h3 style={styles.valueCardTitle}>Expert Guidance</h3>
                    <p style={styles.valueCardText}>15+ years of experience in financial markets, tax strategies, and wealth management.</p>
                  </div>
                  <div style={styles.valueCard}>
                    <h3 style={styles.valueCardTitle}>Transparent Process</h3>
                    <p style={styles.valueCardText}>Clear explanations, no hidden fees, and complete transparency in all recommendations.</p>
                  </div>
                  <div style={styles.valueCard}>
                    <h3 style={styles.valueCardTitle}>Proven Results</h3>
                    <p style={styles.valueCardText}>Track record of helping clients achieve their financial objectives and build wealth.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet Your Financial Partner</h2>
        <p style={styles.sectionSubtitle}>
          With over 15 years of experience, I provide personalized financial guidance to help you achieve your goals
        </p>
        <div style={styles.founderContainer}>
          <div style={styles.founderImageContainer}>
            <img src={founder.image} alt={founder.name} style={styles.founderImage} />
          </div>
          <div style={styles.founderInfo}>
            <h3 style={styles.founderName}>{founder.name}</h3>
            <p style={styles.founderRole}>{founder.role}</p>
            <p style={styles.founderExperience}>📅 {founder.experience} of financial expertise</p>
            <p style={styles.founderEducation}>🎓 {founder.education}</p>

            <div style={styles.specializations}>
              <h4 style={styles.specializationsTitle}>Areas of Expertise:</h4>
              <div style={styles.specializationsGrid}>
                {founder.specialization.map((spec, i) => (
                  <span key={i} style={styles.specialization}>{spec}</span>
                ))}
              </div>
            </div>

            <p style={styles.founderQuote}>"{founder.quote}"</p>

            <div style={styles.founderBio}>
              <p style={styles.founderBioText}>{founder.bio}</p>
            </div>

            <div style={styles.achievements}>
              <h4 style={styles.achievementsTitle}>Key Achievements:</h4>
              <ul style={styles.achievementsList}>
                {founder.achievements.map((achievement, index) => (
                  <li key={index} style={styles.achievementItem}>✓ {achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Comprehensive Financial Services</h2>
        <p style={styles.sectionSubtitle}>
          Personalized financial solutions designed to meet your unique needs and goals
        </p>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={getServiceCardStyle(index)}
              onMouseEnter={() => !isMobile && setHoveredService(index)}
              onMouseLeave={() => !isMobile && setHoveredService(null)}
            >
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceName}>{service.name}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            style={getCtaButtonStyle()} 
            onMouseEnter={() => !isMobile && setHoveredButton(true)} 
            onMouseLeave={() => !isMobile && setHoveredButton(false)}
            onClick={() => navigate("/services")}
          >
            Know More
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Journey</h2>
        <div style={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineYear}>{milestone.year}</div>
              <div style={styles.timelineContent}>
                <h3 style={styles.timelineEvent}>{milestone.event}</h3>
                <p style={styles.timelineDescription}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
        <p style={styles.sectionSubtitle}>
          Don't just take our word for it - hear from those who've achieved financial success with us
        </p>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.rating}>
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <div style={styles.clientInfo}>
                <strong style={styles.clientName}>{testimonial.name}</strong>
                <span style={styles.clientRole}>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}