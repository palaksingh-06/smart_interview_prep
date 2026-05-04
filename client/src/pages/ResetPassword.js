import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  const inputStyle = (field) => ({
    ...styles.input,
    borderColor: focused === field ? "#C8A97E" : "#E5D5C5",
    background: focused === field ? "#FFFDF8" : "#F7F2EA",
    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(200,169,126,0.2)"
        : "none",
  });

  const handleResetPassword = async () => {
    setError("");

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, newPassword: password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.removeItem("resetEmail");
        navigate("/login");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div style={styles.card}>
        <h1 style={styles.title}>Reset Password</h1>
        <p style={styles.sub}>
          Enter your new password
        </p>

        {/* Password */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            style={inputStyle("password")}
          />
        </div>

        {/* Error */}
        {error && <p style={styles.error}>{error}</p>}

        {/* Button */}
        <button onClick={handleResetPassword} style={styles.button}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F0E7D5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  blob1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "#E8DCCB",
    opacity: 0.6,
    top: "-120px",
    right: "-80px",
    filter: "blur(70px)",
  },

  blob2: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "#D6C2A8",
    opacity: 0.4,
    bottom: "-80px",
    left: "-60px",
    filter: "blur(60px)",
  },

  card: {
    position: "relative",
    zIndex: 2,
    background: "#FFFFFF",
    border: "1px solid rgba(75,57,53,0.15)",
    borderRadius: "22px",
    padding: "40px 36px",
    width: "100%",
    maxWidth: "380px",
    boxShadow: "0 10px 30px rgba(75,57,53,0.1)",
  },

  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#2C2C2C",
    textAlign: "center",
    marginBottom: "6px",
  },

  sub: {
    fontSize: "14px",
    color: "#7A6A65",
    textAlign: "center",
    marginBottom: "26px",
  },

  fieldGroup: {
    marginBottom: "14px",
  },

  label: {
    fontSize: "11px",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#4B3935",
    marginBottom: "6px",
    display: "block",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1.5px solid #E5D5C5",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s",
  },

  button: {
    width: "100%",
    padding: "13px",
    background: "#4B3935",
    color: "#fff",
    border: "none",
    borderRadius: "11px",
    fontSize: "15px",
    cursor: "pointer",
  },

  error: {
    color: "red",
    fontSize: "13px",
    textAlign: "center",
    marginBottom: "10px",
  },
};

export default ResetPassword;