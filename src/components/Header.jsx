import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaBars, FaTimes, FaMoon, FaSun,
  FaDownload, FaCircle
} from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const toggleTheme = () => setDarkMode(!darkMode);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "🌅 Good Morning!";
    if (hour < 18) return "☀️ Good Afternoon!";
    return "🌙 Good Evening!";
  };

  useEffect(() => {
    document.body.style.background = darkMode ? "#121212" : "#fff";
    document.body.style.color = darkMode ? "#eee" : "#000";

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    const handleOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, [darkMode]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 999,
      background: darkMode ? "#1e1e1e" : "#ffffff",
      color: darkMode ? "#eee" : "#1a1a40",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      {/* Scroll Progress Bar */}
      <div
        style={{
          height: "4px",
          background: "#00d9ff",
          width: `${scrollProgress}%`,
          transition: "width 0.25s ease",
        }}
      />

      <nav style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", padding: "1rem 2rem",
        maxWidth: "1200px", margin: "0 auto"
      }}>
        {/* Logo and Greeting */}
        <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          <span role="img" aria-label="wave">👋</span> {getGreeting()}
        </div>

        {/* Desktop Nav */}
        <ul className="desktop-nav" style={{
          display: "flex", gap: "25px", listStyle: "none",
          alignItems: "center"
        }}>
          {navLinks.map((link) => (
            <li key={link}>
              <ScrollLink
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onSetActive={() => setActive(link.toLowerCase())}
                style={{
                  cursor: "pointer",
                  fontWeight: 500,
                  position: "relative",
                  color: active === link.toLowerCase() ? "#00d9ff" : darkMode ? "#ccc" : "#1a1a40",
                }}
              >
                {link}
                <span style={{
                  display: "block",
                  height: "2px",
                  background: "#00d9ff",
                  width: active === link.toLowerCase() ? "100%" : "0",
                  transition: "width 0.3s ease"
                }} />
              </ScrollLink>
            </li>
          ))}

          {/* Resume Download */}
          <li>
            <a
              href="/resume.pdf"
              download
              style={{
                background: "#00d9ff",
                padding: "8px 14px",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaDownload /> Resume
            </a>
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.2rem",
                cursor: "pointer",
                color: darkMode ? "#ffd700" : "#1a1a40",
              }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>

          {/* Online Status */}
          <li title={isOnline ? "Online" : "Offline"}>
            <FaCircle style={{
              color: isOnline ? "#00c853" : "#f44336",
              fontSize: "0.8rem"
            }} />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="mobile-toggle"
          onClick={() => setMobileOpen(!isMobileOpen)}
          style={{ display: "none", fontSize: "1.5rem", cursor: "pointer" }}
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isMobileOpen && (
        <ul style={{
          background: darkMode ? "#1e1e1e" : "#f8f8f8",
          padding: "1rem 0",
          listStyle: "none",
          textAlign: "center"
        }}>
          {navLinks.map((link) => (
            <li key={link} style={{ padding: "10px 0" }}>
              <ScrollLink
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: darkMode ? "#ccc" : "#1a1a40",
                  fontSize: "1.1rem"
                }}
              >
                {link}
              </ScrollLink>
            </li>
          ))}

          <li style={{ padding: "10px 0" }}>
            <a
              href="/resume.pdf"
              download
              style={{
                color: "#00d9ff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <FaDownload /> Resume
            </a>
          </li>

          <li style={{ padding: "10px 0" }}>
            <button
              onClick={toggleTheme}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.3rem",
                color: darkMode ? "#ffd700" : "#1a1a40",
                cursor: "pointer"
              }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      )}

      {/* Mobile responsive override styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-toggle {
              display: block !important;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
