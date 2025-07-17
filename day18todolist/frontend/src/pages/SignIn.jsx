import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { login } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        userData
      );
      alert(response.data.message);
      login(response.data.token);
      navigate("/todolist");
    } catch (error) {
      console.log(error);
      setErrorMsg("Invalid email or password.");
    } finally {
      setLoading(false);
    }

    setUserData({
      email: "",
      password: "",
    });
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign In</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            style={styles.input}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            style={styles.input}
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>

        {errorMsg && <p style={styles.error}>{errorMsg}</p>}

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
};

export default SignIn;
