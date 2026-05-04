import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);
const [error, setError] = useState("");
  const inputStyle = (field) => ({
    ...styles.input,
    borderColor: focused === field ? "#C8A97E" : "#E5D5C5",
    background: focused === field ? "#FFFDF8" : "#F7F2EA",
    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(200,169,126,0.2)"
        : "none",
  });

  const handleLogin = async () => {
  setError(""); // clear old errors

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ NO POPUP
      localStorage.setItem("token", data.token);

      navigate("/"); // or "/dashboard"
    } else {
      // ❌ Show inside UI
      setError(data.message || "Invalid email or password");
    }
  } catch (err) {
    console.log(err);
    setError("Server error. Please try again.");
  }
};
  return (
    <div style={styles.page}>
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div style={styles.card}>
        {/* Brand */}
        <div style={styles.brand}>
          <img src={logo} alt="HireAce" style={styles.logo} />
          <span>
            Hire<span style={styles.accent}>Ace</span>
          </span>
        </div>

        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.sub}>Sign in to continue your journey</p>

        {/* Email */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="you@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={inputStyle("email")}
          />
        </div>

        {/* Password */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            style={inputStyle("password")}
          />
        </div>
{error && <p style={styles.error}>{error}</p>}

        {/* Forgot password */}
        <div style={styles.forgotRow}>
          <Link to="/forgot" style={styles.forgot}>
            Forgot password?
          </Link>
        </div>

        {/* ✅ FIXED BUTTON */}
        <button onClick={handleLogin} style={styles.button}>
          Log in
        </button>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.divLine} />
          <span style={styles.divText}>or</span>
          <div style={styles.divLine} />
        </div>

        {/* Signup link */}
        <p style={styles.signupRow}>
          Don't have an account?
          <Link to="/signup" style={styles.signupLink}>
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

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

  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "700",
    color: "#4B3935",
  },

  accent: {
    color: "#C8A97E",
  },

  logo: {
    height: "28px",
    width: "28px",
    objectFit: "contain",
  },

  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#2C2C2C",
    marginBottom: "4px",
    textAlign: "center",
  },

  sub: {
    fontSize: "14px",
    color: "#7A6A65",
    marginBottom: "26px",
    textAlign: "center",
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
    boxSizing: "border-box",
  },

  forgotRow: {
    textAlign: "right",
    marginBottom: "20px",
  },

  forgot: {
    fontSize: "12px",
    color: "#4B3935",
    textDecoration: "none",
  },

  button: {
    width: "100%",
    padding: "13px",
    background: "#4B3935",
    color: "#fff",
    border: "none",
    borderRadius: "11px",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "0.3s",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  },

  divLine: {
    flex: 1,
    height: "1px",
    background: "#E5D5C5",
  },

  divText: {
    fontSize: "12px",
    color: "#C8A97E",
  },

  signupRow: {
    textAlign: "center",
    fontSize: "14px",
    color: "#6B7280",
  },

  signupLink: {
    marginLeft: "5px",
    color: "#4B3935",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default Login;