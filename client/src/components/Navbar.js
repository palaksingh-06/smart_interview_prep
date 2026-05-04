import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>

        {/* TEXT LOGO */}
        <Link to="/" style={styles.brand}>
               <img src={logo} alt="HireAce" style={styles.logo} />
          Hire<span style={styles.accent}>Ace</span>
        </Link>

        {/* Links */}
        <div style={styles.navLinks}>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          <Link to="/settings" style={styles.navLink}>Settings</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/signup">
            <button style={styles.navButton}>Sign Up</button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

// ✅ MOVE THIS OUTSIDE FUNCTION
const styles = {
  navbar: {
    background: "#FFFFFF",
    height: "70px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(75,57,53,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
  },

  navContainer: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logo: {
  height: "25px",        // 👈 keep it smaller than navbar (70px)
  width: "25px",
  objectFit: "contain",
},

  brand: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#4B3935",
    textDecoration: "none",
    letterSpacing: "0.5px",
    cursor: "pointer",
  },

  accent: {
    color: "#C8A97E",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  navLink: {
    textDecoration: "none",
    color: "#4B3935",
    fontSize: "14px",
    fontWeight: 500,
  },

  navButton: {
    background: "#4B3935",
    color: "#FFF",
    border: "none",
    padding: "8px 18px",
    borderRadius: "8px",
    fontWeight: 500,
    cursor: "pointer",
  },
};

export default Navbar;