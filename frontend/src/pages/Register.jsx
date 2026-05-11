import { useState } from "react";
import axios from "axios";

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
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleRegister}>
        <h2>Register</h2>

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
    background: "linear-gradient(135deg, #084654, #2e104b, #571ca5)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0px 0px 100px rgba(19, 64, 154, 0.98)",
  },

  input: {
    padding: "10px",
    fontSize: "16px",
  },

  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Register;