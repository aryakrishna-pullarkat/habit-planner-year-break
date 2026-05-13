import { useState } from "react";
import axios from "axios";

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          emailOrUsername,
          password,
        }
      );

      console.log(response.data);

      setMessage("Login successful ✨");
    } catch (error) {
      console.log(error);

      setMessage(
        "Credentials do not exist. Please register."
      );
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <form style={styles.form} onSubmit={handleLogin}>
        <h1 style={styles.title}>Welcome Back</h1>

        <p style={styles.subtitle}>
          Login to continue your journey 🚀
        </p>

        <input
          type="text"
          placeholder="Enter Email or Username"
          value={emailOrUsername}
          onChange={(e) =>
            setEmailOrUsername(e.target.value)
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {message && (
          <p
            style={{
              color:
                message === "Login successful ✨"
                  ? "#90ee90"
                  : "#ffb3c1",
              fontSize: "14px",
              margin: "0",
            }}
          >
            {message}
          </p>
        )}

        <button type="submit" style={styles.button}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={styles.registerText}>
          Don’t have an account?{" "}
          <span style={styles.registerLink}>
            Register
          </span>
        </p>
      </form>
    </div>
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

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(2px)",
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

export default Login;