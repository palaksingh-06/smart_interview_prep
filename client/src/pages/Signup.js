import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    experience: "",
    terms: false,
  });
const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
const handleSubmit = async (e) => {
  e?.preventDefault();

  if (validate()) {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful 🎉");

        // 🔥 RESET FORM (optional)
        setForm({
          name: "",
          email: "",
          password: "",
          role: "",
          experience: "",
          terms: false,
        });

        // ✅ NAVIGATE TO LOGIN
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  }
};
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const getPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    if (score <= 2) return { label: "Weak", color: "red", width: "30%" };
    if (score <= 4) return { label: "Medium", color: "#C8A97E", width: "60%" };
    return { label: "Strong", color: "green", width: "100%" };
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(form.name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Min 6 chars, include uppercase, lowercase, number & symbol";
    }

    if (!form.terms) {
      newErrors.terms = "Accept terms to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 

  const passwordStrength = getPasswordStrength(form.password);

  const inputStyle = (field) => ({
    ...styles.input,
    borderColor: errors[field]
      ? "red"
      : focused === field
      ? "#C8A97E"
      : "#E5D5C5",
  });

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Create your account</h1>

        {/* Name */}
        <label style={styles.label}>Name *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          style={inputStyle("name")}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        {/* Email */}
        <label style={styles.label}>Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          style={inputStyle("email")}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        {/* Password */}
        {/* Password */}
<label style={styles.label}>
  Password <span style={styles.required}>*</span>
</label>

<div style={styles.passwordWrapper}>
<input
  type={showPassword ? "text" : "password"} // If true -> text, If false -> password
  name="password"
  value={form.password}
  onChange={handleChange}
  autoComplete="off" // Add this to prevent browser interference
  onFocus={() => setFocused("password")}
  onBlur={() => setFocused(null)}
  style={inputStyle("password")}
/>

 {/* FIXED EYE BUTTON */}
<div
  onClick={() => setShowPassword(!showPassword)} // Simple toggle
  style={styles.eyeIcon}
>
  {/* The icon changes based on state */}
  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
</div>
</div>
        {/* Strength */}
        {form.password.length > 0 && (
          <div style={styles.strengthContainer}>
            <div style={styles.strengthBarBackground}>
              <div
                style={{
                  ...styles.strengthBarFill,
                  width: passwordStrength.width,
                  background: passwordStrength.color,
                }}
              />
            </div>
            <span style={{ color: passwordStrength.color, fontSize: "12px" }}>
              {passwordStrength.label}
            </span>
          </div>
        )}

        {/* Role */}
        <label style={styles.label}>Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select Role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>UI/UX Designer</option>
        </select>

        {/* Experience */}
        <label style={styles.label}>Experience</label>
        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        {/* Terms */}
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          <span>I agree to Terms and Conditions *</span>
        </div>

        {errors.terms && <p style={styles.error}>{errors.terms}</p>}
<button type="submit" style={styles.button}>
  Sign Up
</button>
</form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F0E7D5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  title: {
    textAlign: "center",
  },

  label: {
    fontSize: "13px",
  },

  input: {
    padding: "10px",
    paddingRight: "40px",
    borderRadius: "10px",
    border: "1px solid #E5D5C5",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },

  passwordWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  eyeIcon: {
    position: "absolute",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#7A6A65",
    zIndex: 10,
  },

  select: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #E5D5C5",
  },

  checkboxContainer: {
    display: "flex",
    gap: "8px",
    fontSize: "12px",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#4B3935",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  error: {
    color: "red",
    fontSize: "12px",
  },

  strengthContainer: {
    marginBottom: "5px",
  },

  strengthBarBackground: {
    height: "6px",
    background: "#E5D5C5",
    borderRadius: "10px",
  },

  strengthBarFill: {
    height: "100%",
    transition: "0.3s",
  },
};

export default Signup;