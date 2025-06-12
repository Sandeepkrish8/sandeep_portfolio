import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

function Header() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode ? "#121212" : "#fff";
    document.body.style.color = darkMode ? "#eee" : "#000";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#eee" : "#1a1a40",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>MyPortfolio</div>

        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "25px",
            listStyle: "none",
            alignItems: "center",
          }}
        >
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
                  transition: "color 0.3s",
                }}
              >
                {link}
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    background: "#00d9ff",
                    width: active === link.toLowerCase() ? "100%" : "0",
                    transition: "width 0.3s ease",
                  }}
                />
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
        </ul>

        {/* Mobile Toggle */}
        <div
          className="mobile-toggle"
          onClick={() => setMobileOpen(!isMobileOpen)}
          style={{ display: "none", fontSize: "1.5rem", cursor: "pointer" }}
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <ul
          style={{
            background: darkMode ? "#1e1e1e" : "#f8f8f8",
            padding: "1rem 0",
            listStyle: "none",
            textAlign: "center",
          }}
        >
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
                  textDecoration: "none",
                  fontSize: "1.1rem",
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
                cursor: "pointer",
              }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      )}

      {/* Responsive toggle styles */}
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
}

export default Header;
