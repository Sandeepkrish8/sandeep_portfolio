import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "80px 20px",
        background: "#f9f9f9",
        color: "#1a1a40",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>👋 About Me</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
          I'm a passionate MCA graduate with a strong foundation in frontend development,
          specializing in React.js. I love crafting responsive, user-friendly web apps
          and continuously learning new technologies. I enjoy solving complex problems,
          building portfolio projects, and contributing to open-source.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
