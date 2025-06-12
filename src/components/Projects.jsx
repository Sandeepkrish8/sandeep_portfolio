import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Drizzle",
    description: "It's small scale web page which drizzle btn when you clicks the btn it will displat rain drizzles.",
    image: "https://images.unsplash.com/photo-1625191855012-f64c72208ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyaXp6bGV8ZW58MHx8MHx8fDA%3D",
    demoLink: "https://drizzles-indol.vercel.app/",
    githubLink: "https://github.com/Sandeepkrish8/drizzles",
  },
  {
    title: "Hair Growth Nutrition App",
    description: "React app that suggests food and vitamins for hair care with ML image analysis.",
    image: "https://hair-growth-app.vercel.app/images/healthy-hair.png",
    demoLink: "https://hair-growth-app.vercel.app/",
    githubLink: "https://github.com/Sandeepkrish8/hair-growth-app",
  },
  {
    title: "Todo List App",
    description: "A simple Todo List app built with React, allowing users to add, edit, and delete tasks.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQENIBc7X2ENVQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727578818185?e=2147483647&v=beta&t=nyLBcj8XvOC2O1g_481Rso9lrAkgT31XNsoVNsmH4_Y",
    demoLink: "https://to-do-list-nine-phi-84.vercel.app/",
    githubLink: "https://github.com/Sandeepkrish8/TO-DO-LIST",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "80px 20px",
        background: "#f5f5f5",
        color: "#1a1a40",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "40px" }}>🚀 My Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image Zoom */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              style={{
                overflow: "hidden",
                height: "200px",
              }}
            >
              <img
              backgroundimage
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </motion.div>

            <div style={{ padding: "20px", textAlign: "left", flexGrow: 1 }}>
              <h3 style={{ marginBottom: "10px", color: "#00bcd4" }}>
                {project.title}
              </h3>
              <p style={{ marginBottom: "20px", color: "#555" }}>{project.description}</p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 16px",
                    background: "#00d9ff",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 16px",
                    background: "#1a1a40",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
