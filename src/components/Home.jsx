import React, { useEffect } from "react";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    const speak = new SpeechSynthesisUtterance(
      "Welcome to my portfolio. I am Sandeep Krishnan, a web developer and AI enthusiast. Scroll down to explore my projects and skills."
    );
    speak.lang = "en-IN"; // Set language to Indian English
    speak.voice = window.speechSynthesis.getVoices().find(voice => voice.lang === speak.lang);
    speak.pitch = 1;
    speak.rate = 1;
    speak.volume = 1;

    const voicesReady = setTimeout(() => {
      window.speechSynthesis.speak(speak);
    }, 500);

    return () => {
      clearTimeout(voicesReady);
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,rgb(233, 150, 233), #fff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#1a1a40" }}>
        Hi, I'm <span style={{ color: "#00bcd4" }}>Sandeep Krishnan</span> 👋
      </h1>

      <Typed
        strings={[
          "Web Developer 💻",
          "AI Enthusiast 🤖",
          "Open Source Contributor 🌐",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        style={{ fontSize: "1.5rem", color: "#555", marginBottom: "20px" }}
      />

      

      <p
        style={{
          marginTop: "50px",
          fontSize: "1rem",
          color: "#888",
          animation: "bounce 2s infinite",
        }}
      >
        ⬇ Scroll down to explore more
      </p>

      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `}
      </style>
    </motion.section>
  );
}

export default Home;
