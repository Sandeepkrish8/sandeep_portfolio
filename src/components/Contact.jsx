import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to right,rgb(118, 167, 216), #e0f7fa)",
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
          fontSize: "2.2rem",
          color: "#1a1a40",
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
            <FaMapMarkerAlt color="#00d9ff" />
            <span>Chennai, India</span>
          </div>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaPhone color="#00d9ff" />
            <span>+91 98765 43210</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaEnvelope color="#00d9ff" />
            <span>youremail@example.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          style={{
            flex: "1",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ position: "relative" }}>
            <input
              type="text"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #00d9ff",
                borderRadius: "8px",
                background: "#fff",
                fontSize: "1rem",
              }}
              placeholder="Your Name"
            />
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="email"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #00d9ff",
                borderRadius: "8px",
                background: "#fff",
                fontSize: "1rem",
              }}
              placeholder="Your Email"
            />
          </div>
          <div style={{ position: "relative" }}>
            <textarea
              rows="5"
              required
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
              letterSpacing: "1px",
            }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
