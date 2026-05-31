function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2026 Habit Planner Team
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "18px",
    textAlign: "center",
    zIndex: 100,
    background: "rgba(255, 255, 255, 0.83)",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
  },

  text: {
    color: "blue",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    margin: 0,
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.23)",
  },
};

export default Footer;