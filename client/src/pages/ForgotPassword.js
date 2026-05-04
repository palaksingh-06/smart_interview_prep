import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const inputStyle = (field) => ({
    ...styles.input,
    borderColor: focused === field ? "#C8A97E" : "#E5D5C5",
    background: focused === field ? "#FFFDF8" : "#F7F2EA",
    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(200,169,126,0.2)"
        : "none",
  });

  const handleSendOtp = async () => {
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("resetEmail", email);
        navigate("/verify-otp");
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
        {/* Brand
        <div style={styles.brand}>
          <img src={logo} alt="HireAce" style={styles.logo} />
          <span>
            Hire<span style={styles.accent}>Ace</span>
          </span>
        </div> */}

        <h1 style={styles.title}>Forgot Password</h1>
        <p style={styles.sub}>
          Enter your email to receive an OTP
        </p>

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

        {/* Error */}
        {error && <p style={styles.error}>{error}</p>}

        {/* Button */}
        <button onClick={handleSendOtp} style={styles.button}>
          Send OTP
        </button>

        {/* Back to login */}
        <p style={styles.signupRow}>
          Remember your password?
          <Link to="/login" style={styles.signupLink}>
            Log in
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
    marginBottom: "10px",
    textAlign: "center",
  },

  signupRow: {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "15px",
  },

  signupLink: {
    marginLeft: "5px",
    color: "#4B3935",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default ForgotPassword;