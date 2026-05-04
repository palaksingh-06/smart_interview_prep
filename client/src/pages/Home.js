import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, BarChart3, Target, TrendingUp } from "lucide-react";
const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* Navbar */}

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.blob1} />
        <div style={styles.blob2} />

        <h1 style={styles.heroTitle}>
          Master Your Next Interview <br />
          with <span style={{ color: "#C8A97E" }}>AI Intelligence</span>
        </h1>

        <p style={styles.heroSub}>
          Practice real-time mock interviews, get instant feedback, and track your growth with HireAce.
        </p>

        <div style={styles.heroBtns}>
          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/interview")}
          >
            Start Mock Interview
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => navigate("/dashboard")}
          >
            Watch Demo
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Core Features</h2>

        <div style={styles.featuresGrid}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                ...styles.featureCard,
                transform: hoveredFeature === i ? "translateY(-6px)" : "none",
              }}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div style={styles.featureIcon}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureText}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section style={styles.demoSection}>
        <h2 style={styles.sectionTitle}>Demo Interview Library</h2>
        <p style={styles.subText}>
          Learn from the best before you start your own session.
        </p>

        <div style={styles.videoPlaceholder}>
          <div style={styles.playBtn}>▶</div>
          <p>How to Ace a Frontend Interview — Live AI Demo</p>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "AI Mock Interviews",
    desc: "Real-time AI asks role-specific questions. Feels like a real interview.",
    icon: <Bot size={32} color="#4B3935" />
  },
  {
    title: "Smart Feedback",
    desc: "Instant scoring and actionable suggestions to improve your answers.",
    icon: <BarChart3 size={32} color="#4B3935" />
  },
  {
    title: "Role-Based Prep",
    desc: "Tailored preparation for Frontend, Backend, UI/UX, and more.",
    icon: <Target size={32} color="#4B3935" />
  },
  {
    title: "Progress Tracking",
    desc: "Track your growth and performance over time.",
    icon: <TrendingUp size={32} color="#4B3935" />
  }
];
const styles = {
  page: {
    background: "#F0E7D5",
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    color: "#4B3935",
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
    color: "#7A6A65",
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
    boxShadow: "0 4px 15px rgba(75,57,53,0.2)",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#4B3935",
    border: "2px solid #4B3935",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
  },

  featureCard: {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid rgba(75,57,53,0.1)",
    transition: "all 0.3s ease",
    textAlign: "center",
  },

  featureIcon: {
    fontSize: "32px",
    marginBottom: "15px",
  },

  featureTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
  },

  featureText: {
    fontSize: "14px",
    color: "#7A6A65",
    lineHeight: 1.5,
  },

  demoSection: {
    background: "#E8DCCB",
    padding: "80px 20px",
    textAlign: "center",
  },

  subText: {
    color: "#7A6A65",
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
    opacity: 0.2,
    filter: "blur(80px)",
    top: "-50px",
    left: "10%",
  },

  blob2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#D6C2A8",
    opacity: 0.3,
    filter: "blur(80px)",
    bottom: "0",
    right: "10%",
  },
};

export default Home;