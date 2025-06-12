import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #1a1a40,rgb(116, 211, 228))",
        color: "#fff",
        textAlign: "center",
        padding: "40px 20px",
        marginTop: "80px",
      }}
    >
      {/* Logo or Scroll to Top */}
      <div
        onClick={() => scroll.scrollToTop({ smooth: true })}
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "20px",
          display: "inline-block",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        🔝 Back to Top
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          fontSize: "1.6rem",
          marginBottom: "20px",
        }}
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", transition: "color 0.3s" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", transition: "color 0.3s" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your@email.com"
          style={{ color: "#fff", transition: "color 0.3s" }}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
        © {new Date().getFullYear()} Sandeep Krishnan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
