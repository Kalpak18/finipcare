import React, { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const servicesList = [
    "Trademark Registration",
    "Brand / Logo Registration",
    "Copyright Registration",
    "Life Insurance",
    "Health Insurance",
  ];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Fixed WhatsApp Integration with form data
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form has required data
    if (!formData.name || !formData.email) {
      alert("Please fill in required fields: Name and Email");
      return;
    }

    const { name, email, phone, services, message } = formData;
    const selectedServices = services.length > 0 ? services.join(", ") : "Not specified";

    // Create the message with form data
    const formattedMessage = `Hello Finicare 👋

*Contact Inquiry Details:*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || "Not provided"}
*Services Interested:* ${selectedServices}
*Message:* ${message}

I would like to know more about your services. Thank you!`;

    const whatsappNumber = "919876543210"; // 🔹 Replace with your actual number
    
    // Clean and encode message
    const cleanMessage = formattedMessage.trim();
    const encodedMessage = encodeURIComponent(cleanMessage);
    
    console.log("Form Data:", formData);
    console.log("WhatsApp Message:", cleanMessage);

    // Construct WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    // Open WhatsApp
    window.location.href = whatsappUrl;
    
    // Show success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    // Optional: Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", services: [], message: "" });
    }, 1000);
  };

  // Test function with sample form data
  const testWhatsAppWithFormData = () => {
    // Use current form data or sample data
    const name = formData.name || "Test User";
    const email = formData.email || "test@example.com";
    const phone = formData.phone || "9876543210";
    const services = formData.services.length > 0 ? formData.services : ["Trademark Registration"];
    const message = formData.message || "This is a test message from the form";
    
    const selectedServices = services.join(", ");

    const formattedMessage = `Hello Finicare 👋

*Test Message with Form Data:*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Services Interested:* ${selectedServices}
*Message:* ${message}

This is a test message with current form data.`;

    const whatsappNumber = "918766716546";
    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    console.log("Test with form data:", { name, email, phone, services, message });
    window.location.href = whatsappUrl;
  };

  // Contact action handlers
  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:hello@finicare.com?subject=Inquiry from Finicare Website&body=Hello Finicare, I would like to know more about your services.', '_self');
  };

  const handleMap = () => {
    const address = "203 Business Avenue, Baner, Pune, Maharashtra 411045";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  // Styles - keeping your existing styles, just adding hero background
  const pageStyle = {
    background: "linear-gradient(135deg, #f1f5ff, #ffffff)",
    minHeight: "100vh",
    padding: "4rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  };

  // Added hero background style
  const heroStyle = { 
    textAlign: "center", 
    marginBottom: "3rem", 
    height: "30%",
    width: "100%",
    background: "linear-gradient(135deg, #0B1A33 0%, #233047 100%)",
    color: "white",
    padding: "8rem 4rem",
    boxShadow: "0 10px 30px rgba(11, 26, 51, 0.2)",
  };

  const infoGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "4rem", width: "100%", maxWidth: "1000px" };
  
  // Updated infoCard to be clickable
  const infoCard = { 
    background: "rgba(255, 255, 255, 0.8)", 
    padding: "2rem", 
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.07)", 
    textAlign: "center", 
    backdropFilter: "blur(10px)", 
    transition: "all 0.3s ease",
    cursor: "pointer" // Added cursor pointer
  };
  
  const formContainer = { background: "white", padding: "3rem", borderRadius: "22px", boxShadow: "0 12px 35px rgba(21, 101, 192, 0.12)", width: "100%", maxWidth: "750px", textAlign: "center" };
  const inputStyle = { 
    flex: 1, 
    padding: "0.9rem 1.1rem", 
    border: "1.5px solid #d0d0d0", 
    borderRadius: "10px", 
    fontSize: "1rem", 
    width: "100%", 
    transition: "0.3s", 
    outline: "none",
    boxSizing: "border-box"
  };
  const buttonStyle = { 
    background: "linear-gradient(135deg, #1565c0, #0d47a1)", 
    color: "white", 
    padding: "0.9rem 2.2rem", 
    fontWeight: "600", 
    borderRadius: "12px", 
    border: "none", 
    cursor: "pointer", 
    fontSize: "1rem", 
    transition: "0.3s ease",
    margin: "0.5rem",
    minWidth: "200px"
  };
  const socialLinks = { display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" };
  const successPopup = { 
    position: "fixed", 
    top: "30%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    background: "white", 
    borderRadius: "16px", 
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)", 
    padding: "2rem 3rem", 
    textAlign: "center", 
    zIndex: "9999", 
    transition: "all 0.3s ease", 
    animation: "fadeIn 0.3s ease",
    border: "2px solid #2e7d32"
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section with Background */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "white", marginBottom: "0.6rem" }}>
          Let's Build Something Great Together
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.7", maxWidth: "400px", margin: "0 auto" }}>
          At <strong>Finicare</strong>, every conversation matters. Whether you have a query, need guidance, or want to explore a service — our team is ready to assist you personally.
        </p>
      </section>

      {/* Interactive Info Cards */}
      <section style={infoGrid}>
        {/* Map Card */}
        <div
          style={infoCard}
          onClick={handleMap}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <MapPin color="#1565c0" size={35} />
          <h3 style={{ color: "#0d47a1", marginTop: "1rem", fontSize: "1.3rem", fontWeight: "600" }}>
            Visit Our Office
          </h3>
          <p style={{ color: "#444", fontSize: "1rem", marginTop: "0.6rem" }}>
            203 Business Avenue, Baner, Pune, Maharashtra 411045
          </p>
          <p style={{ color: "#1565c0", fontSize: "0.9rem", marginTop: "0.5rem", fontWeight: "600" }}>
            Click to Open Map
          </p>
        </div>

        {/* Email Card */}
        <div
          style={infoCard}
          onClick={handleEmail}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <Mail color="#1565c0" size={35} />
          <h3 style={{ color: "#0d47a1", marginTop: "1rem", fontSize: "1.3rem", fontWeight: "600" }}>
            Write to Us
          </h3>
          <p style={{ color: "#444", fontSize: "1rem", marginTop: "0.6rem" }}>
            hello@finicare.com
          </p>
          <p style={{ color: "#1565c0", fontSize: "0.9rem", marginTop: "0.5rem", fontWeight: "600" }}>
            Click to Send Email
          </p>
        </div>

        {/* Phone Card */}
        <div
          style={infoCard}
          onClick={handleCall}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <Phone color="#1565c0" size={35} />
          <h3 style={{ color: "#0d47a1", marginTop: "1rem", fontSize: "1.3rem", fontWeight: "600" }}>
            Call or WhatsApp
          </h3>
          <p style={{ color: "#444", fontSize: "1rem", marginTop: "0.6rem" }}>
            +91 98765 43210
          </p>
          <p style={{ color: "#1565c0", fontSize: "0.9rem", marginTop: "0.5rem", fontWeight: "600" }}>
            Click to Call
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section style={formContainer}>
        <h2 style={{ color: "#0d47a1", fontWeight: "700", marginBottom: "2rem", fontSize: "1.8rem" }}>Send Us a Message</h2>
        <p style={{ color: "#555", marginBottom: "2rem", fontSize: "1rem" }}>
          Have a question or need personalized consulting? Fill the form and we'll open WhatsApp with your message ready to send.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name *" 
              value={formData.name} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address *" 
              value={formData.email} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>

          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            style={inputStyle} 
          />

          {/* Multi-Service Selection */}
          <div style={{ textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "0.8rem", color: "#0d47a1", fontWeight: "600" }}>
              Services Interested In:
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "1rem" }}>
              {servicesList.map((s, i) => (
                <label
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: formData.services.includes(s) ? "#1565c0" : "#f0f0f0",
                    color: formData.services.includes(s) ? "white" : "#333",
                    padding: "0.5rem 0.8rem",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <input
                    type="checkbox"
                    value={s}
                    checked={formData.services.includes(s)}
                    onChange={() => {
                      if (formData.services.includes(s)) {
                        setFormData({ ...formData, services: formData.services.filter((svc) => svc !== s) });
                      } else {
                        setFormData({ ...formData, services: [...formData.services, s] });
                      }
                    }}
                    style={{ display: "none" }}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <textarea 
            name="message" 
            placeholder="Write your message... *" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ ...inputStyle, resize: "none" }} 
            required 
          />

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            {/* send Button with Form Data */}
            <button
              type="button"
              onClick={testWhatsAppWithFormData}
              style={{
                ...buttonStyle, 
                background: "linear-gradient(135deg, #2e7d32, #1b5e20)",
              }}
              onMouseEnter={(e) => (e.target.style.background = "linear-gradient(135deg, #388e3c, #2e7d32)")}
              onMouseLeave={(e) => (e.target.style.background = "linear-gradient(135deg, #2e7d32, #1b5e20)")}
            >
              Send message via WhatsApp
            </button>
          </div>
        </form>

        <p style={{ fontSize: "0.9rem", color: "#777", marginTop: "1rem" }}>
          💬 Fill the form and click "Send via WhatsApp". Your message will open in WhatsApp ready to send.
        </p>
      </section>

      {/* Social Media */}
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h3 style={{ color: "#0d47a1", fontSize: "1.4rem", marginBottom: "1rem", fontWeight: "600" }}>Stay Connected</h3>
        <p style={{ color: "#555", marginBottom: "1rem" }}>
          Follow <strong>Finicare</strong> on social platforms for insights, updates, and success stories.
        </p>
        <div style={socialLinks}>
          <a href="#"><Linkedin color="#1565c0" size={28} /></a>
          <a href="#"><Instagram color="#1565c0" size={28} /></a>
          <a href="#"><Facebook color="#1565c0" size={28} /></a>
        </div>
      </section>

      {/* Success Popup */}
      {success && (
        <div style={successPopup}>
          <CheckCircle color="#2e7d32" size={50} />
          <h3 style={{ marginTop: "1rem", color: "#2e7d32", fontWeight: "700" }}>Opening WhatsApp!</h3>
          <p style={{ color: "#555", marginTop: "0.5rem" }}>
            Your form data is being sent to WhatsApp...
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;