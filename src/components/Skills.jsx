import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, label: "HTML5", level: "Advanced" },
  { icon: <FaCss3Alt />, label: "CSS3", level: "Advanced" },
  { icon: <FaJs />, label: "JavaScript", level: "Intermediate" },
  { icon: <FaReact />, label: "React.js", level: "Intermediate" },
  { icon: <FaGithub />, label: "GitHub", level: "Proficient" },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "80px 20px",
        background: "radial-gradient(circle at center, #e3f2fd, #ffffff)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Optional subtle background grid dots */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundImage:
            "radial-gradient(#90caf9 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
          opacity: 0.05,
          zIndex: 0,
        }}
      ></div>

      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "#1a1a40",
          zIndex: 1,
          position: "relative",
        }}
      >
        🛠 My Skills
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            title={`Level: ${skill.level}`}
            style={{
              width: "140px",
              height: "140px",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
              color: "#00bcd4",
              border: "3px solid transparent",
              backgroundImage:
                "linear-gradient(#fff, #fff), radial-gradient(circle at top left, #00d9ff, #1a1a40)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              position: "relative",
            }}
          >
            {skill.icon}
            <span
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#1a1a40",
              }}
            >
              {skill.label}
            </span>

            {/* Proficiency dots */}
            <div style={{ marginTop: "6px", display: "flex", gap: "4px" }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background:
                      i <
                      (skill.level === "Advanced"
                        ? 3
                        : skill.level === "Intermediate"
                        ? 2
                        : 1)
                        ? "#00d9ff"
                        : "#ccc",
                  }}
                ></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
