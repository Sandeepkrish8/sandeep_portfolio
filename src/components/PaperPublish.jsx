import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaLink } from "react-icons/fa";

const papers = [
  {
    title: "Hand Gesture Recognition System by Using IoT",
    journal: "International Journal of Computer Applications",
    year: 2025,
    link: "https://www.irjmets.com/paperdetail.php?paperId=3eb209e80f3a0d454f00cf5f49838715",
    pdf: "/papers/Sign-Language-Iot.pdf"
  },
];

const PaperPublish = () => {
  return (
    <motion.section
      id="papers"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "80px 20px",
        backgroundColor: "#f3f4f6",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "30px", color: "#1a1a40" }}>
        📄 Research Publications
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        {papers.map((paper, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            style={{
              width: "320px",
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              textAlign: "left"
            }}
          >
            <h3 style={{ fontSize: "1.2rem", color: "#333" }}>{paper.title}</h3>
            <p style={{ color: "#555" }}>{paper.journal}, {paper.year}</p>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                <FaLink style={{ marginRight: "5px" }} /> View Online
              </a>
              <a
                href={paper.pdf}
                download
                style={{ color: "#e63946", textDecoration: "none" }}
              >
                <FaFilePdf style={{ marginRight: "5px" }} /> PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PaperPublish;
