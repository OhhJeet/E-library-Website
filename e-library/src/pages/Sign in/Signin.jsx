import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // To display feedback to the user
  const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && name) {
      try {
        const response = await axios.post("http://localhost:5001/api/signup", {
          name,
          email,
          password,
        }, {
          headers: {
            "Content-Type": "application/json",
          }});
        if (response.status === 201) {
          navigate('/')
          setMessage("Sign in successful!");
          // Clear form fields
          setName("");
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>User Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    marginTop: "10px",
    fontSize: "14px",
    color: "green",
  },
};

export default SignInForm;
