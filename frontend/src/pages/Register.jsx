import { useState } from "react";
import axios from "axios";

function Register({ switchToLogin, setFocused }) {

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

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

      setMessage(
        "Registration successful ✨"
      );

      setUsername("");
      setEmail("");
      setPassword("");

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Registration failed"
      );
    }

    setLoading(false);
  };

  return (

    <form
      style={styles.form}
      onSubmit={handleRegister}
    >

      <h1 style={styles.title}>
        Join cult
      </h1>

      <p style={styles.subtitle}>
        Start your journey today
      </p>

      <input
        type="text"
        placeholder="Enter Username"

        value={username}

        onChange={(e) =>
          setUsername(e.target.value)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Enter Email"

        value={email}

        onChange={(e) =>
          setEmail(e.target.value)
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
              message ===
              "Registration successful ✨"
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
            ? "Creating Account..."
            : "Register"
        }

      </button>

      <p style={styles.registerText}>

        Already have an account?{" "}

        <span
          style={styles.registerLink}
          onClick={switchToLogin}
        >
          Login
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

export default Register;