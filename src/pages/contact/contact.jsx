import React, { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, CheckCircle } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", services: [], message: "" });
  const [success, setSuccess] = useState(false);

  const servicesList = [
    "Trademark Registration",
    "Brand / Logo Registration",
    "Copyright Registration",
    "Life Insurance",
    "Health Insurance",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("Please fill in required fields: Name and Email");

    const { name, email, phone, services, message } = formData;
    const selectedServices = services.length ? services.join(", ") : "Not specified";

    const formattedMessage = `Hello finipcare 👋

*Contact Inquiry Details:*
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || "Not provided"}
*Services Interested:* ${selectedServices}
*Message:* ${message}

I would like to know more about your services. Thank you!`;

    const whatsappNumber = "919876543210";
    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setTimeout(() => setFormData({ name: "", email: "", phone: "", services: [], message: "" }), 1000);
  };

  const testWhatsAppWithFormData = () => {
    const name = formData.name || "Test User";
    const email = formData.email || "test@example.com";
    const phone = formData.phone || "9876543210";
    const services = formData.services.length > 0 ? formData.services : ["Trademark Registration"];
    const message = formData.message || "This is a test message from the form";
    const selectedServices = services.join(", ");

    const formattedMessage = `Hello finipcare 👋

*Test Message with Form Data:*
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Services Interested:* ${selectedServices}
*Message:* ${message}

This is a test message with current form data.`;

    const whatsappNumber = "918766716546";
    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  };

  const handleCall = () => window.open("tel:+919876543210", "_self");
  const handleEmail = () =>
    window.open(
      "mailto:hello@finipcare.com?subject=Inquiry from finipcare Website&body=Hello finipcare, I would like to know more about your services.",
      "_self"
    );
  const handleMap = () => {
    const address = "203 Business Avenue, Baner, Pune, Maharashtra 411045";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Let's Build Something Great Together</h1>
        <p>
          At <strong>finipcare</strong>, every conversation matters. Whether you have a query, need guidance, or want to
          explore a service — our team is ready to assist you personally.
        </p>
      </section>

      {/* Info Cards */}
      <section className="contact-info-grid">
        <div className="contact-info-card" onClick={handleMap}>
          <MapPin color="#1565c0" size={35} />
          <h3>Visit Our Office</h3>
          <p>203 Business Avenue, Baner, Pune, Maharashtra 411045</p>
          <p>Click to Open Map</p>
        </div>

        <div className="contact-info-card" onClick={handleEmail}>
          <Mail color="#1565c0" size={35} />
          <h3>Write to Us</h3>
          <p>hello@finipcare.com</p>
          <p>Click to Send Email</p>
        </div>

        <div className="contact-info-card" onClick={handleCall}>
          <Phone color="#1565c0" size={35} />
          <h3>Call or WhatsApp</h3>
          <p>+91 98765 43210</p>
          <p>Click to Call</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-container">
        <h2>Send Us a Message</h2>
        <p>Have a question or need personalized consulting? Fill the form and we'll open WhatsApp with your message ready to send.</p>

        <form onSubmit={handleSubmit}>
          <div className="contact-input-row">
            <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required />
          </div>

          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />

          <div className="contact-services">
            <label>Services Interested In:</label>
            <div className="services-list">
              {servicesList.map((s, i) => (
                <label key={i} className={formData.services.includes(s) ? "selected" : ""}>
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
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <textarea name="message" placeholder="Write your message... *" rows="5" value={formData.message} onChange={handleChange} required />

          <div className="contact-button-container">
            <button type="button" className="whatsapp-button" onClick={testWhatsAppWithFormData}>
              Send message via WhatsApp
            </button>
          </div>
        </form>

        <p className="contact-note">💬 Fill the form and click "Send via WhatsApp". Your message will open in WhatsApp ready to send.</p>
      </section>

      {/* Social Media */}
      <section className="contact-social">
        <h3>Stay Connected</h3>
        <p>Follow <strong>finipcare</strong> on social platforms for insights, updates, and success stories.</p>
        <div className="social-links">
          <a href="#"><Linkedin color="#1565c0" size={28} /></a>
          <a href="#"><Instagram color="#1565c0" size={28} /></a>
          <a href="#"><Facebook color="#1565c0" size={28} /></a>
        </div>
      </section>

      {/* Success Popup */}
      {success && (
        <div className="contact-success-popup">
          <CheckCircle color="#2e7d32" size={50} />
          <h3>Opening WhatsApp!</h3>
          <p>Your form data is being sent to WhatsApp...</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
