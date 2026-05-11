// 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bot,
  BarChart3,
  Target,
  TrendingUp,
} from "lucide-react";

const Home = ({ darkMode }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const navigate = useNavigate();

  return (
    <div
      style={{
        ...styles.page,
        background: darkMode ? "#111111" : "#F0E7D5",
        color: darkMode ? "#FFFFFF" : "#4B3935",
      }}
    >
      {/* HERO */}
      <header style={styles.hero}>
        <div style={styles.blob1} />
        <div style={styles.blob2} />

        <h1 style={styles.heroTitle}>
          Master Your Next Interview <br />
          with <span style={{ color: "#C8A97E" }}>AI Intelligence</span>
        </h1>

        <p
          style={{
            ...styles.heroSub,
            color: darkMode ? "#D1D1D1" : "#7A6A65",
          }}
        >
          Practice real-time mock interviews, get instant
          feedback, and track your growth with HireAce.
        </p>

        <div style={styles.heroBtns}>
          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/interview")}
          >
            Start Mock Interview
          </button>

          <button
            style={{
              ...styles.secondaryBtn,
              color: darkMode ? "#FFFFFF" : "#4B3935",
              border: darkMode
                ? "2px solid #FFFFFF"
                : "2px solid #4B3935",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Watch Demo
          </button>
        </div>
      </header>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Core Features</h2>

        <div style={styles.featuresGrid}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                ...styles.featureCard,
                background: darkMode ? "#1E1E1E" : "#FFFFFF",
                border: darkMode
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(75,57,53,0.1)",
                transform:
                  hoveredFeature === i
                    ? "translateY(-6px)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div style={styles.featureIcon}>
                {f.icon}
              </div>

              <h3 style={styles.featureTitle}>
                {f.title}
              </h3>

              <p
                style={{
                  ...styles.featureText,
                  color: darkMode
                    ? "#CFCFCF"
                    : "#7A6A65",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section
        style={{
          ...styles.demoSection,
          background: darkMode ? "#191919" : "#E8DCCB",
        }}
      >
        <h2 style={styles.sectionTitle}>
          Demo Interview Library
        </h2>

        <p
          style={{
            ...styles.subText,
            color: darkMode ? "#D1D1D1" : "#7A6A65",
          }}
        >
          Learn from the best before you start your own
          session.
        </p>

        <div style={styles.videoPlaceholder}>
          <div style={styles.playBtn}>▶</div>

          <p>
            How to Ace a Frontend Interview — Live AI Demo
          </p>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "AI Mock Interviews",
    desc: "Real-time AI asks role-specific questions.",
    icon: <Bot size={32} color="#C8A97E" />,
  },

  {
    title: "Smart Feedback",
    desc: "Instant scoring and suggestions.",
    icon: <BarChart3 size={32} color="#C8A97E" />,
  },

  {
    title: "Role-Based Prep",
    desc: "Frontend, Backend, UI/UX and more.",
    icon: <Target size={32} color="#C8A97E" />,
  },

  {
    title: "Progress Tracking",
    desc: "Track your growth over time.",
    icon: <TrendingUp size={32} color="#C8A97E" />,
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    transition: "0.3s",
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px",
    position: "relative",
    overflow: "hidden",
  },

  heroTitle: {
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
  },

  heroSub: {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },

  heroBtns: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primaryBtn: {
    background: "#4B3935",
    color: "white",
    border: "none",
    padding: "14px 28px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    padding: "12px 28px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },

  section: {
    maxWidth: "1100px",
    margin: "60px auto",
    padding: "0 20px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "40px",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
  },

  featureCard: {
    padding: "30px",
    borderRadius: "20px",
    transition: "0.3s",
    textAlign: "center",
  },

  featureIcon: {
    marginBottom: "15px",
  },

  featureTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
  },

  featureText: {
    fontSize: "14px",
    lineHeight: 1.5,
  },

  demoSection: {
    padding: "80px 20px",
    textAlign: "center",
    transition: "0.3s",
  },

  subText: {
    marginBottom: "40px",
  },

  videoPlaceholder: {
    maxWidth: "800px",
    height: "400px",
    margin: "0 auto",
    background: "#4B3935",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
  },

  playBtn: {
    width: "70px",
    height: "70px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    marginBottom: "20px",
    border: "2px solid white",
  },

  blob1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#C8A97E",
    opacity: 0.15,
    filter: "blur(90px)",
    top: "-50px",
    left: "10%",
  },

  blob2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#D6C2A8",
    opacity: 0.2,
    filter: "blur(90px)",
    bottom: "0",
    right: "10%",
  },
};

export default Home;