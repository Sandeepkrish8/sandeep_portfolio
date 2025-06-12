import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "JavaScript", "HTML", "CSS", "Git", "Responsive Design"];

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #f9f9f9, #e8f3ff)",
        color: "#1a1a40",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft background blob */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        background: "#00d9ff33",
        borderRadius: "50%",
        filter: "blur(80px)",
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "30px",
        zIndex: 2,
        position: "relative"
      }}>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ flex: "1 1 250px", textAlign: "center" }}
        >
          <img
  src="/profile.jpg"
  alt="Profile"
  style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "6px solid #00d9ff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
  }}
/>

        </motion.div>

        {/* About Text */}
        <div style={{ flex: "2 1 500px", textAlign: "left" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>👋 About Me</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
            I'm a passionate MCA graduate specializing in front-end development with React.js.
            I build responsive, accessible, and interactive web apps with clean code and modern UI.
            I'm always learning and enjoy solving real-world problems through technology.
          </p>

          {/* Skills */}
          <div style={{ marginTop: "20px" }}>
            <h4 style={{ marginBottom: "10px", color: "#444" }}>💻 Tech Stack:</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    background: "#00d9ff",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    cursor: "default"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              display: "inline-block",
              marginTop: "25px",
              background: "#00d9ff",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            📄 Download Resume
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
