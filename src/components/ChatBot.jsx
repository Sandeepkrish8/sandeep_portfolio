import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const responses = {
  hi: "Hello! I'm Sk-Bot 🤖. Ask me about projects, skills, or resume.",
  hello: "Hi there! 👋 How can I assist you?",
  projects: "You can explore my Projects section to see what I've built.",
  paper: "Check the Papers section for my research publications 📄.",
  resume: "You can download my resume using the top right menu.",
  skills: "I’m skilled in React, JavaScript, Python, IoT, and more!",
  contact: "Visit the Contact section to connect with me!",
  github: "My GitHub projects are listed under the Projects section.",
  default: "Hmm 🤔 I didn't catch that. Try keywords like 'projects', 'resume', or 'skills'."
};

const suggestions = ["Projects", "Skills", "Resume", "Paper", "Contact", "GitHub"];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your assistant 🤖", time: new Date() }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userInput) => {
    const key = Object.keys(responses).find((k) =>
      userInput.toLowerCase().includes(k)
    );
    return responses[key] || responses["default"];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim(), time: new Date() };
    const botMsg = {
      from: "bot",
      text: getResponse(input.trim()),
      time: new Date()
    };
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          background: "#00d9ff",
          color: "#fff",
          padding: "14px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          zIndex: 999
        }}
      >
        💬
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "340px",
            maxHeight: "500px",
            background: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 999
          }}
        >
          <div
            style={{
              background: "#00d9ff",
              color: "#fff",
              padding: "12px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem"
            }}
          >
            <FaRobot style={{ marginRight: 8 }} /> Sk-Bot - Assistant
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "0.9rem",
              background: "#f9f9f9"
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.from === "bot" ? "left" : "right",
                  marginBottom: "10px"
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: msg.from === "bot" ? "#eee" : "#00d9ff",
                    color: msg.from === "bot" ? "#000" : "#fff",
                    padding: "10px 14px",
                    borderRadius: "20px",
                    maxWidth: "80%",
                    fontSize: "0.9rem"
                  }}
                >
                  {msg.text}
                </div>
                <div style={{ fontSize: "0.65rem", color: "#777", marginTop: 4 }}>
                  {msg.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ padding: "10px", background: "#fff" }}>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "6px" }}>
              {suggestions.map((sugg, i) => (
                <button
                  key={i}
                  onClick={() => setInput(sugg)}
                  style={{
                    background: "#e3f7ff",
                    border: "1px solid #00d9ff",
                    borderRadius: "20px",
                    padding: "4px 10px",
                    fontSize: "0.75rem",
                    color: "#00d9ff",
                    cursor: "pointer"
                  }}
                >
                  {sugg}
                </button>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  padding: "10px",
                  fontSize: "0.9rem",
                  border: "1px solid #ddd",
                  borderTopLeftRadius: "6px",
                  borderBottomLeftRadius: "6px",
                  outline: "none"
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  background: "#00d9ff",
                  color: "#fff",
                  padding: "0 14px",
                  border: "none",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  cursor: "pointer",
                  fontSize: "1rem"
                }}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;
