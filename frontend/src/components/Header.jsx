import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.title}>Habit Planner</h2>
        <nav style={styles.nav}>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </nav>
    </header>
  );
}

const styles = {
  header: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "linear-gradient(135deg, #f5fbff, #c9c2ff)",
  borderBottom: "1px solid rgba(255,255,255,0.4)",
},

  title: {
  color: "#7b1ed2",
  fontSize: "28px",
  fontWeight: "bold",
  margin: 0,
  },

  nav: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  link: {
  textDecoration: "none",
  color: "rgba(49, 51, 166, 0.7)",
  fontSize: "18px",
  fontWeight: "600",
  fontFamily: "sans-serif",
  },
};

export default Header;