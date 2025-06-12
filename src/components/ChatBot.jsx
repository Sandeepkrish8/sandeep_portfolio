import React, { useState } from "react";
import { motion } from "framer-motion";


const responses = {
  hi: "Hello! I'm Sk-Bot 🤖. Ask me about projects, skills, or resume.",
  hello: "Hi there! 👋 How can I help you?",
  projects: "Sure! Scroll to the Projects section to see my best work.",
  PaperPublish: "You can find my research publications in the Papers section.",
  resume: "You can download my resume from the top menu 📄.",
  skills: "I’m skilled in React, JavaScript, Python, and more!",
  contact: "Scroll down to the Contact section or email me directly.",
  default: "Sorry, I didn't understand. Try asking about 'projects', 'skills', or 'resume'."
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your portfolio assistant 🤖" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botText =
      responses[input.toLowerCase()] || responses["default"];
    const botMessage = { from: "bot", text: botText };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          background: "#00d9ff",
          color: "#fff",
          padding: "15px",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "30px",
            width: "300px",
            maxHeight: "400px",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: "#00d9ff",
              color: "#fff",
              padding: "12px",
              fontWeight: "bold",
              textTransform: "lowercase",
              textAlign: "center"
            }}
          >
            🤖 Sk-Bot
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "0.9rem"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.from === "bot" ? "left" : "right",
                  marginBottom: "8px"
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background:
                      msg.from === "bot" ? "#f1f1f1" : "#00d9ff",
                    color: msg.from === "bot" ? "#000" : "#fff",
                    padding: "8px 12px",
                    borderRadius: "15px",
                    maxWidth: "80%"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none"
              }}
              placeholder="Ask me anything..."
            />
            <button
              onClick={handleSend}
              style={{
                padding: "10px",
                background: "#00d9ff",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;
