// 
import { Link } from "react-router-dom";
import React from "react";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      style={{
        ...styles.navbar,
        background: darkMode ? "#171717" : "#FFFFFF",
        borderBottom: darkMode
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(75,57,53,0.1)",
      }}
    >
      <div style={styles.navContainer}>
        {/* LOGO */}
        <Link
          to="/"
          style={{
            ...styles.brand,
            color: darkMode ? "#FFFFFF" : "#4B3935",
          }}
        >
          <img src={logo} alt="HireAce" style={styles.logo} />
          Hire<span style={styles.accent}>Ace</span>
        </Link>

        {/* Links */}
        <div style={styles.navLinks}>
          {/* 🌙 THEME TOGGLE */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            style={{
              ...styles.themeIcon,
              background: darkMode ? "#262626" : "#ffffff",
              color: darkMode ? "#ffffff" : "#4B3935",
            }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </div>

          <Link
            to="/dashboard"
            style={{
              ...styles.navLink,
              color: darkMode ? "#ffffff" : "#4B3935",
            }}
          >
            Dashboard
          </Link>

          <Link
            to="/settings"
            style={{
              ...styles.navLink,
              color: darkMode ? "#ffffff" : "#4B3935",
            }}
          >
            Settings
          </Link>

          <Link
            to="/login"
            style={{
              ...styles.navLink,
              color: darkMode ? "#ffffff" : "#4B3935",
            }}
          >
            Login
          </Link>

          <Link to="/signup">
            <button style={styles.navButton}>Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
    transition: "0.3s",
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
    height: "25px",
    width: "25px",
    objectFit: "contain",
  },

  brand: {
    fontSize: "26px",
    fontWeight: "700",
    textDecoration: "none",
    letterSpacing: "0.5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
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

  themeIcon: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    borderRadius: "10px",
    transition: "0.3s",
  },
};

export default Navbar;