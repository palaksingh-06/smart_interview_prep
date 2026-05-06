import { useState } from "react";

function Dashboard() {
  const user = {
    name: "Palak Singh",
    email: "palak@example.com",
    role: "Frontend Developer",
    experience: "Intermediate",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT PROFILE PANEL */}
        <div style={styles.profileCard}>
          <img src={user.avatar} alt="avatar" style={styles.avatar} />

          <h2 style={styles.name}>{user.name}</h2>
          <p style={styles.text}>{user.role}</p>
          <p style={styles.sub}>{user.email}</p>

          <div style={styles.badge}>{user.experience}</div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div style={styles.right}>

          {/* TOP STATS */}
          <div style={styles.grid}>
            
            <div style={styles.card}>
              <h3>Progress</h3>
              <h1>72%</h1>
              <p>Overall preparation</p>
            </div>

            <div style={styles.card}>
              <h3>Interviews</h3>
              <h1>5</h1>
              <p>Mock interviews taken</p>
            </div>

            <div style={styles.card}>
              <h3>Questions</h3>
              <h1>120</h1>
              <p>Solved this month</p>
            </div>

            <div style={styles.card}>
              <h3>Streak</h3>
              <h1>12 🔥</h1>
              <p>Days active</p>
            </div>

          </div>

          {/* PROGRESS BARS */}
          <div style={styles.bigCard}>
            <h3>Skill Breakdown</h3>

            <p>DSA</p>
            <div style={styles.bar}>
              <div style={{ ...styles.fill, width: "60%" }} />
            </div>

            <p>System Design</p>
            <div style={styles.bar}>
              <div style={{ ...styles.fill, width: "40%" }} />
            </div>

            <p>Aptitude</p>
            <div style={styles.bar}>
              <div style={{ ...styles.fill, width: "80%" }} />
            </div>
          </div>

          {/* RECOMMENDATIONS */}
          <div style={styles.bigCard}>
            <h3>Recommended for you</h3>
            <ul>
              <li>👉 Practice Graphs (Weak Area)</li>
              <li>👉 Attempt Mock Interview (Medium Level)</li>
              <li>👉 Revise Arrays & Strings</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F0E7D5",
    fontFamily: "sans-serif",
    padding: "20px",
  },

  container: {
    display: "flex",
    gap: "20px",
  },

  profileCard: {
    width: "250px",
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "10px",
  },

  name: {
    margin: "5px 0",
  },

  text: {
    color: "#4B3935",
    fontSize: "14px",
  },

  sub: {
    fontSize: "12px",
    color: "#7A6A65",
  },

  badge: {
    marginTop: "10px",
    padding: "5px 10px",
    background: "#C8A97E",
    borderRadius: "10px",
    display: "inline-block",
    color: "#fff",
    fontSize: "12px",
  },

  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  bigCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  bar: {
    width: "100%",
    height: "8px",
    background: "#E5D5C5",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  fill: {
    height: "100%",
    background: "#4B3935",
    borderRadius: "10px",
  },
};

export default Dashboard;