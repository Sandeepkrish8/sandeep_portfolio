import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaLink } from "react-icons/fa";

const papers = [
  {
    title: "Hand Gesture Recognition System by Using IoT",
    description:
      "This paper presents a real-time hand gesture recognition system using ESP32-CAM for IoT-based device interaction.",
    journal: "International Journal of Computer Applications",
    year: 2025,
    pdf: "/papers/Sign-Language-Iot.pdf",
  },
];

const PaperPublish = () => {
  return (
    <motion.section
      id="papers"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        padding: "80px 20px",
        background: "linear-gradient(120deg, #f0f4f8, #d9e7ff)",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "50px",
          textAlign: "center",
          background: "linear-gradient(90deg, #007cf0, #00dfd8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        📄 Research Publications
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {papers.map((paper, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.4 }}
            style={{
              width: "360px",
              background: "rgba(255, 255, 255, 0.85)",
              padding: "25px 20px",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#007cf0",
                color: "#fff",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              {paper.year}
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#1a1a40",
                marginBottom: "12px",
              }}
            >
              {paper.title}
            </h3>

            <p
              style={{
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "#333",
                marginBottom: "14px",
              }}
            >
              {paper.journal}
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {paper.description}
            </p>

            <div
              style={{
                display: "flex",
                gap: "18px",
              }}
            >
              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#007bff",
                    fontWeight: "bold",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FaLink /> View Online
                </a>
              )}

              <a
                href={paper.pdf}
                download
                style={{
                  color: "#e63946",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaFilePdf /> Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PaperPublish;
