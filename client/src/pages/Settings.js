import { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("personal");
  const [focused, setFocused] = useState(null);

  const [form, setForm] = useState({
    name: "Palak Singh",
    dob: "",
    gender: "",
    work: "Student",
    username: "palak_123",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle = (field) => ({
    ...styles.input,
    borderColor: focused === field ? "#C8A97E" : "#E5D5C5",
    background: focused === field ? "#FFFDF8" : "#F7F2EA",
  });

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={activeTab === "personal" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>

          <button
            style={activeTab === "account" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("account")}
          >
            Account
          </button>
        </div>

        {/* CONTENT */}
        {activeTab === "personal" && (
          <div style={styles.section}>
            <h2>Personal Details</h2>

            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              style={inputStyle("name")}
            />

            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              style={styles.input}
            />

            <label>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>

            <label>Work</label>
            <input
              name="work"
              value={form.work}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        )}

        {activeTab === "account" && (
          <div style={styles.section}>
            <h2>Account Settings</h2>

            <label>Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              style={styles.input}
            />

            <label>Password</label>
            <input type="password" value="********" disabled style={styles.input} />

            <p style={styles.note}>
              Password is securely stored and cannot be viewed.
            </p>

            <h3>Change Password</h3>

            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              style={styles.input}
            />

            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        )}

        <button style={styles.button}>Save Changes</button>
      </div>
    </div>
  );
}

/* STYLES */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F0E7D5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "420px",
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(75,57,53,0.1)",
  },

  tabs: {
    display: "flex",
    marginBottom: "20px",
    borderBottom: "1px solid #eee",
  },

  tab: {
    flex: 1,
    padding: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#7A6A65",
  },

  activeTab: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #4B3935",
    fontWeight: "600",
    color: "#4B3935",
    background: "none",
    cursor: "pointer",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1.5px solid #E5D5C5",
  },

  note: {
    fontSize: "12px",
    color: "#7A6A65",
  },

  button: {
    marginTop: "20px",
    padding: "12px",
    background: "#4B3935",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Settings;