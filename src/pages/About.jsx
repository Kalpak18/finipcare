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

  // Rich Gold Color Palette
  const colors = {
    primary: "#0B1A33",           // Deep navy
    secondary: "#B8860B",         // Rich gold
    accent: "#D4AF37",            // Metallic gold
    lightGold: "#F5E6B8",         // Light gold
    darkGold: "#8B6914",          // Dark gold
    cream: "#FFFBF0",             // Cream background
    background: "#F8F9FA",        // Light gray
    textDark: "#2D3748",          // Dark gray
    textLight: "#718096",         // Medium gray
    white: "#FFFFFF",
  };

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

  // Enhanced Responsive Styles with Gold Theme
  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: isMobile ? '0 16px' : '0 24px',
      paddingTop: isMobile ? '80px' : '100px',
      lineHeight: '1.6',
      background: colors.cream,
    },
    hero: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, #1a2b4d 100%)`,
      color: colors.white,
      padding: isMobile ? '40px 16px 60px 16px' : '60px 24px 100px 24px',
      textAlign: 'center',
      borderRadius: isMobile ? '0 0 24px 24px' : '0 0 32px 32px',
      marginTop: isMobile ? '-50px' : '-60px',
      marginBottom: isMobile ? '50px' : '80px',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 10px 40px rgba(11, 26, 51, 0.2)',
    },
    heroContent: {
      maxWidth: '900px',
      margin: isMobile ? '40px auto' : '60px auto',
    },
    heroTitle: {
      fontSize: isMobile ? '2.2rem' : '3.75rem',
      fontWeight: '700',
      marginBottom: isMobile ? '20px' : '28px',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },
    highlight: {
      color: colors.accent,
      display: 'inline-block',
      background: `linear-gradient(135deg, ${colors.accent}, ${colors.lightGold})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.4rem',
      lineHeight: '1.6',
      opacity: '0.9',
      marginBottom: isMobile ? '35px' : '50px',
      padding: isMobile ? '0 10px' : '0',
      fontWeight: '400',
      maxWidth: '700px',
      margin: '0 auto',
    },
    heroStats: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '25px' : '40px',
      marginTop: isMobile ? '40px' : '60px',
      maxWidth: '800px',
      margin: '40px auto 0',
    },
    statItem: { 
      textAlign: 'center',
      padding: isMobile ? '15px' : '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: `1px solid rgba(212, 175, 55, 0.3)`,
    },
    statIcon: { 
      fontSize: isMobile ? '2rem' : '2.8rem', 
      marginBottom: isMobile ? '12px' : '16px',
      opacity: '0.9',
    },
    statNumber: { 
      fontSize: isMobile ? '1.6rem' : '2.2rem', 
      fontWeight: '700', 
      marginBottom: isMobile ? '5px' : '8px',
      color: colors.accent,
    },
    statLabel: { 
      fontSize: isMobile ? '0.9rem' : '1rem', 
      opacity: '0.9',
      fontWeight: '500',
    },
    section: { 
      marginBottom: isMobile ? '60px' : '100px' 
    },
    sectionTitle: { 
      fontSize: isMobile ? '2rem' : '3rem', 
      fontWeight: '700', 
      textAlign: 'center', 
      marginBottom: isMobile ? '20px' : '28px', 
      color: colors.primary,
      lineHeight: '1.2',
      letterSpacing: '-0.01em',
    },
    sectionSubtitle: { 
      fontSize: isMobile ? '1.1rem' : '1.3rem', 
      textAlign: 'center', 
      color: colors.textLight, 
      marginBottom: isMobile ? '40px' : '60px', 
      maxWidth: '700px', 
      margin: '0 auto', 
      lineHeight: '1.6',
      padding: isMobile ? '0 16px' : '0',
      fontWeight: '400',
    },
    tabContainer: { 
      background: colors.white, 
      borderRadius: isMobile ? '20px' : '24px', 
      overflow: 'hidden', 
      boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
      border: `1px solid rgba(212, 175, 55, 0.2)`,
    },
    tabHeaders: { 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      background: `linear-gradient(135deg, ${colors.lightGold} 0%, #f8f0d5 100%)`, 
      borderBottom: `1px solid rgba(212, 175, 55, 0.3)`,
    },
    tabHeader: { 
      flex: 1, 
      padding: isMobile ? '18px 16px' : '24px 32px', 
      border: 'none', 
      background: 'transparent', 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      fontWeight: '600', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease', 
      color: colors.darkGold,
      borderBottom: isMobile ? `1px solid rgba(212, 175, 55, 0.3)` : 'none',
      position: 'relative',
    },
    activeTab: { 
      background: colors.white, 
      color: colors.primary,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
    },
    tabContent: { 
      padding: isMobile ? '32px 20px' : '48px 40px', 
      minHeight: isMobile ? '280px' : '350px',
      background: colors.white,
    },
    tabPanel: { 
      animation: 'fadeIn 0.5s ease' 
    },
    tabTitle: { 
      fontSize: isMobile ? '1.6rem' : '2.2rem', 
      marginBottom: isMobile ? '20px' : '28px', 
      color: colors.secondary,
      textAlign: isMobile ? 'center' : 'left',
      fontWeight: '600',
    },
    tabText: { 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      lineHeight: '1.7', 
      marginBottom: isMobile ? '25px' : '32px', 
      color: colors.textDark,
      textAlign: isMobile ? 'center' : 'left',
    },
    missionList: { 
      listStyle: 'none', 
      padding: 0,
      marginTop: isMobile ? '25px' : '32px',
    },
    missionListItem: { 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      lineHeight: isMobile ? '1.8' : '2', 
      color: colors.textDark, 
      marginBottom: isMobile ? '12px' : '16px',
      padding: isMobile ? '12px 0' : '16px 0',
      paddingLeft: '32px',
      position: 'relative',
    },
    visionGoals: { 
      display: 'flex', 
      flexDirection: 'column', 
      gap: isMobile ? '16px' : '20px', 
      marginTop: isMobile ? '28px' : '36px' 
    },
    goal: { 
      background: `linear-gradient(135deg, ${colors.lightGold}, #f8f0d5)`, 
      padding: isMobile ? '20px' : '24px', 
      borderRadius: '16px', 
      fontWeight: '600', 
      color: colors.darkGold,
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      border: `1px solid rgba(184, 134, 11, 0.3)`,
      textAlign: 'center',
    },
    valuesGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: isMobile ? '20px' : '28px', 
      marginTop: isMobile ? '28px' : '40px' 
    },
    valueCard: { 
      background: colors.white, 
      padding: isMobile ? '24px' : '32px', 
      borderRadius: '20px', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
      textAlign: 'center', 
      border: `1px solid rgba(212, 175, 55, 0.2)`, 
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    valueCardTitle: { 
      color: colors.secondary, 
      marginBottom: isMobile ? '16px' : '20px', 
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      fontWeight: '600',
    },
    valueCardText: { 
      color: colors.textLight, 
      lineHeight: '1.6',
      fontSize: isMobile ? '1rem' : '1.1rem',
    },
    founderContainer: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', 
      gap: isMobile ? '40px' : '60px', 
      alignItems: 'start', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      background: colors.white, 
      padding: isMobile ? '32px' : '48px', 
      borderRadius: isMobile ? '20px' : '28px', 
      boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
      border: `1px solid rgba(212, 175, 55, 0.2)`,
    },
    founderImageContainer: { 
      textAlign: 'center',
      position: 'relative',
    },
    founderImage: { 
      width: '100%', 
      maxWidth: isMobile ? '280px' : '360px', 
      borderRadius: isMobile ? '20px' : '24px', 
      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
      margin: '0 auto',
      border: `3px solid ${colors.lightGold}`,
    },
    founderInfo: { 
      padding: isMobile ? '0' : '0 24px' 
    },
    founderName: { 
      fontSize: isMobile ? '2rem' : '2.5rem', 
      fontWeight: '700', 
      marginBottom: isMobile ? '12px' : '16px', 
      color: colors.primary,
      textAlign: isMobile ? 'center' : 'left',
      lineHeight: '1.1',
    },
    founderRole: { 
      fontSize: isMobile ? '1.2rem' : '1.4rem', 
      color: colors.secondary, 
      marginBottom: isMobile ? '16px' : '20px', 
      fontWeight: '600',
      textAlign: isMobile ? 'center' : 'left',
    },
    founderExperience: { 
      color: colors.textLight, 
      marginBottom: isMobile ? '8px' : '12px', 
      fontSize: isMobile ? '1rem' : '1.1rem',
      textAlign: isMobile ? 'center' : 'left',
      fontWeight: '500',
    },
    founderEducation: { 
      color: colors.textLight, 
      marginBottom: isMobile ? '20px' : '28px', 
      fontSize: isMobile ? '1rem' : '1.1rem',
      textAlign: isMobile ? 'center' : 'left',
      fontWeight: '500',
    },
    specializations: { 
      marginBottom: isMobile ? '20px' : '28px' 
    },
    specializationsTitle: { 
      fontSize: isMobile ? '1.2rem' : '1.3rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '16px' : '20px', 
      color: colors.primary,
      textAlign: isMobile ? 'center' : 'left',
    },
    specializationsGrid: { 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: isMobile ? '10px' : '12px',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    specialization: { 
      background: `linear-gradient(135deg, ${colors.lightGold}, #f8f0d5)`, 
      padding: isMobile ? '10px 16px' : '12px 20px', 
      borderRadius: '24px', 
      fontSize: isMobile ? '0.9rem' : '1rem', 
      color: colors.darkGold, 
      fontWeight: '600',
      border: `1px solid rgba(184, 134, 11, 0.3)`,
    },
    founderQuote: { 
      fontStyle: 'italic', 
      color: colors.textLight, 
      borderLeft: isMobile ? 'none' : `4px solid ${colors.accent}`, 
      paddingLeft: isMobile ? '0' : '24px', 
      margin: isMobile ? '24px 0' : '32px 0', 
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      textAlign: isMobile ? 'center' : 'left',
      padding: isMobile ? '20px' : '0 0 0 24px',
      background: isMobile ? colors.lightGold : 'transparent',
      borderRadius: isMobile ? '12px' : '0',
      fontWeight: '500',
      lineHeight: '1.6',
    },
    founderBio: { 
      marginBottom: isMobile ? '24px' : '32px' 
    },
    founderBioText: { 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      lineHeight: '1.7', 
      color: colors.textDark,
      textAlign: isMobile ? 'center' : 'left',
    },
    achievements: { 
      background: colors.lightGold, 
      padding: isMobile ? '20px' : '28px', 
      borderRadius: '16px', 
      border: `1px solid rgba(184, 134, 11, 0.3)`,
    },
    achievementsTitle: { 
      fontSize: isMobile ? '1.2rem' : '1.3rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '16px' : '20px', 
      color: colors.primary,
      textAlign: isMobile ? 'center' : 'left',
    },
    achievementsList: { 
      listStyle: 'none', 
      padding: 0 
    },
    achievementItem: { 
      fontSize: isMobile ? '1rem' : '1.1rem', 
      lineHeight: isMobile ? '1.6' : '1.8', 
      color: colors.textDark, 
      marginBottom: isMobile ? '10px' : '12px',
      paddingLeft: '24px',
      position: 'relative',
      fontWeight: '500',
    },
    servicesGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: isMobile ? '24px' : '32px', 
      marginTop: isMobile ? '40px' : '60px' 
    },
    serviceCard: { 
      background: colors.white, 
      padding: isMobile ? '28px' : '40px', 
      borderRadius: '20px', 
      textAlign: 'center', 
      border: `1px solid rgba(212, 175, 55, 0.2)`, 
      cursor: 'pointer', 
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    serviceIcon: { 
      fontSize: isMobile ? '3rem' : '3.5rem', 
      marginBottom: isMobile ? '20px' : '24px',
      transition: 'transform 0.3s ease',
    },
    serviceName: { 
      fontSize: isMobile ? '1.4rem' : '1.6rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '16px' : '20px', 
      color: colors.primary,
      transition: 'color 0.3s ease',
    },
    serviceDescription: { 
      color: colors.textLight, 
      lineHeight: '1.6',
      fontSize: isMobile ? '1rem' : '1.1rem',
      transition: 'color 0.3s ease',
    },
    timeline: { 
      position: 'relative', 
      maxWidth: '900px', 
      margin: isMobile ? '40px auto 0' : '60px auto 0' 
    },
    timelineItem: { 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center', 
      marginBottom: isMobile ? '32px' : '48px', 
      background: colors.white, 
      padding: isMobile ? '24px' : '32px', 
      borderRadius: '20px', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
      transition: 'all 0.3s ease',
      border: `1px solid rgba(212, 175, 55, 0.2)`,
      position: 'relative',
    },
    timelineYear: { 
      background: `linear-gradient(135deg, ${colors.secondary}, ${colors.darkGold})`, 
      color: colors.white, 
      padding: isMobile ? '12px 20px' : '14px 24px', 
      borderRadius: '28px', 
      fontWeight: '700', 
      marginRight: isMobile ? '0' : '28px', 
      marginBottom: isMobile ? '16px' : '0',
      flexShrink: 0, 
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      alignSelf: isMobile ? 'flex-start' : 'center',
      boxShadow: '0 4px 15px rgba(184, 134, 11, 0.4)',
    },
    timelineContent: { 
      flex: 1 
    },
    timelineEvent: { 
      fontSize: isMobile ? '1.3rem' : '1.5rem', 
      fontWeight: '600', 
      marginBottom: isMobile ? '8px' : '12px', 
      color: colors.primary 
    },
    timelineDescription: { 
      color: colors.textLight, 
      lineHeight: '1.6',
      fontSize: isMobile ? '1rem' : '1.1rem',
    },
    testimonialSection: { 
      background: `linear-gradient(135deg, ${colors.lightGold} 0%, #f8f0d5 100%)`, 
      padding: isMobile ? '60px 16px' : '100px 24px', 
      marginBottom: isMobile ? '60px' : '100px', 
      borderRadius: isMobile ? '24px' : '32px',
      border: `1px solid rgba(212, 175, 55, 0.3)`,
    },
    testimonialsGrid: { 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: isMobile ? '24px' : '32px', 
      marginTop: isMobile ? '40px' : '60px' 
    },
    testimonialCard: { 
      background: colors.white, 
      padding: isMobile ? '28px' : '40px', 
      borderRadius: isMobile ? '20px' : '24px', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
      transition: 'transform 0.3s ease',
      border: `1px solid rgba(212, 175, 55, 0.2)`,
      position: 'relative',
    },
    rating: { 
      marginBottom: isMobile ? '16px' : '20px', 
      fontSize: isMobile ? '1.2rem' : '1.4rem' 
    },
    testimonialText: { 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      lineHeight: '1.6', 
      color: colors.textDark, 
      marginBottom: isMobile ? '20px' : '24px', 
      fontStyle: 'italic',
      fontWeight: '500',
    },
    clientInfo: { 
      display: 'flex', 
      flexDirection: 'column' 
    },
    clientName: { 
      color: colors.primary, 
      marginBottom: '6px',
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: '600',
    },
    clientRole: { 
      color: colors.textLight, 
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '500',
    },
    ctaButton: { 
      background: `linear-gradient(135deg, ${colors.accent}, ${colors.secondary})`, 
      color: colors.primary, 
      border: 'none', 
      padding: isMobile ? '16px 32px' : '20px 48px', 
      borderRadius: '50px', 
      fontSize: isMobile ? '1.1rem' : '1.2rem', 
      fontWeight: '700', 
      cursor: 'pointer', 
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '300px' : 'none',
      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
      letterSpacing: '0.02em',
    },
  };

  // Dynamic styles
  const getServiceCardStyle = (index) => ({
    ...styles.serviceCard,
    transform: hoveredService === index && !isMobile ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: hoveredService === index && !isMobile ? 
      '0 20px 40px rgba(212, 175, 55, 0.15)' : 
      '0 4px 20px rgba(0,0,0,0.06)',
    borderColor: hoveredService === index && !isMobile ? 
      `rgba(212, 175, 55, 0.4)` : 
      'rgba(212, 175, 55, 0.2)'
  });

  const getCtaButtonStyle = () => ({
    ...styles.ctaButton,
    transform: hoveredButton && !isMobile ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredButton && !isMobile ? 
      '0 8px 30px rgba(212, 175, 55, 0.6)' : 
      '0 4px 20px rgba(212, 175, 55, 0.4)'
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
                <div style={styles.statLabel}>{stat.label}</div>
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
                style={{ 
                  ...styles.tabHeader, 
                  ...(activeTab === tab ? styles.activeTab : {}) 
                }}
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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
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