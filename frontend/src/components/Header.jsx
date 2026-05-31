function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.title}>Habit Planner</h2>
    </header>
  );
}

const styles = {
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "24px 40px",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },

  title: {
    color: "white",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1px",
    textShadow: "0 4px 20px rgba(0,0,0,0.25)",
  },
};

export default Header;