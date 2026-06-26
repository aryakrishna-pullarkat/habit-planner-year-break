function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.subtitle}>© 2026 Habit Planner Team</p>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "linear-gradient(-135deg, #561c99, #bcb4fd)",
  borderTop: "1px solid rgba(238, 222, 255, 0.6)",
  borderColor:"red",
  borderWidth: "10px",
  },

  subtitle: {
    color: "#372cb3",
    textAlign: "center",
    padding: "2px",
    fontSize: "14px",
  },
};

export default Footer;