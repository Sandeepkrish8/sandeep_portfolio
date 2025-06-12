import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
        borderRadius: "16px",
        maxWidth: "1000px",
        margin: "auto",
        boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2.4rem",
          color: "#1a1a40",
          fontWeight: "bold",
        }}
      >
        📬 Get in Touch
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        {/* Contact Info */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaMapMarkerAlt color="#1a1a40" size={18} />
            <span>Chennai, India</span>
          </div>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaPhone color="#1a1a40" size={18} />
            <span>+91 98765 43210</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaEnvelope color="#1a1a40" size={18} />
            <span>sandeepkrsk08@example.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Name Input */}
          <div style={{ position: "relative" }}>
            <FaUser
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#00d9ff",
              }}
            />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                border: "2px solid #00d9ff",
                borderRadius: "8px",
                background: "#fff",
                fontSize: "1rem",
              }}
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div style={{ position: "relative" }}>
            <FaEnvelope
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#00d9ff",
              }}
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                border: "2px solid #00d9ff",
                borderRadius: "8px",
                background: "#fff",
                fontSize: "1rem",
              }}
              placeholder="Your Email"
            />
          </div>

          {/* Message Box */}
          <div style={{ position: "relative" }}>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #00d9ff",
                borderRadius: "8px",
                background: "#fff",
                fontSize: "1rem",
              }}
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              background: "#00d9ff",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              letterSpacing: "1px",
            }}
          >
            <FaPaperPlane /> Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
