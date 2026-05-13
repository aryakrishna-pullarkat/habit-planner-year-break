import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h2>Habit Planner</h2>

      <nav style={styles.nav}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#a61dea",
  },

  nav: {
    display: "flex",
    gap: "15px",
  },
};

export default Header;