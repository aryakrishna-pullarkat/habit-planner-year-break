import { useState } from "react";
import axios from "axios";

function Login({ switchToRegister , setFocused }) {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
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
    <form
      style={styles.form}
      onSubmit={handleLogin}
    >
      <h1 style={styles.title}>
        Welcome Back to cult
      </h1>
      <p style={styles.subtitle}>
        Login to continue your journey
      </p>
      <input
        type="text"
        placeholder="Enter Email or Username"
        value={emailOrUsername}
        onChange={(e) =>
          setEmailOrUsername(e.target.value)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
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
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        style={styles.button}
        className="auth-btn"
      >
        {
          loading
            ? "Logging in..."
            : "Login"
        }

      </button>
      <p style={styles.registerText}>
        Don’t have an account?{" "}
        <span
          style={styles.registerLink}
          onClick={switchToRegister}
        >
          Register
        </span>
      </p>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "50px",
    position: "relative",
    background:
      "rgba(255, 255, 255, 0.70)",
    border:
      "1px solid rgb(255, 255, 255)",
    borderRadius: "30px",
    width: "400px",
    boxShadow:
      "0px 20px 60px rgba(81, 0, 180, 0.36)",
    zIndex: 2,
    transform: "translateY(-10px)",
    backdropFilter: "blur(10px)",
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
    border:
      "1px solid rgba(255,255,255,0.2)",
    outline: "none",
    background:
      "rgba(255,255,255,0.25)",
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