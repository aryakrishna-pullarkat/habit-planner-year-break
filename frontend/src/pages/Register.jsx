import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      console.log(response.data);

      alert(response.data.message);

    } catch (error) {
      console.log(error);

      alert(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleRegister}>
          <h2 style={styles.title}>Join cult</h2>

          <p style={styles.subtitle}>
            Register to your journey 
          </p>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
          <p style={styles.registerText}>
            aldready have an account?{" "}
            <span >
              <Link style={styles.registerLink} to="/Login">Login</Link>
            </span>
          </p>
        </form>

      </div>
    </Layout>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #f7f4f5, #bcb4fd, #732ee3)",
    position: "relative",
    overflow: "hidden",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "40px",
    background: "rgba(255,255,255,0.35)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "20px",
    width: "350px",
    boxShadow: "0px 10px 40px rgba(80, 0, 180, 0.25)",
    zIndex: 1,
    backdropFilter: "blur(18px)",
  },

  title: {
    color: "#7154ee",
    margin: "0",
    fontSize: "32px",
    textAlign: "center",
  },

  subtitle: {
    color: "#372cb3",
    textAlign: "center",
    marginTop: "-10px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  input: {
    padding: "14px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    outline: "none",
    background: "rgba(255,255,255,0.25)",
    color: "#4b3f72",
  },

  button: {
    padding: "14px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background:
      "linear-gradient(135deg, #8e2de2, #4a00e0)",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
  },

  registerText: {
    color: "#372cb3",
    textAlign: "center",
    fontSize: "14px",
  },

  registerLink: {
    color: "#a22ffa",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Register;