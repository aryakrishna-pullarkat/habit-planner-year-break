function HabitCard({
  title,
  description,
  streak,
  importance,
  completed,
  onComplete,
  onEdit,
}) {

  const getColor = () => {
    switch (importance) {
      case "high":
        return "#b00020";

      case "medium":
        return "#9c4dcc";

      case "low":
        return "#808080";

      default:
        return "#555";
    }
  };

  return (
    <div
      style={{...styles.card, backgroundColor: getColor(),
      }}
    >
      <div style={styles.topSection}>
        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div style={styles.bottomSection}>

        <p>🔥 Streak: {streak} days</p>

        <div style={styles.buttonContainer}>

          <button
            style={styles.completeButton}
            onClick={onComplete}
          >
            {completed ? "Completed" : "Complete"}
          </button>

          <button
            style={styles.editButton}
            onClick={onEdit}
          >
            Edit
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    minHeight: "220px",
    borderRadius: "20px",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  },

  topSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  bottomSection: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  buttonContainer: {
    display: "flex",
    gap: "10px",
  },

  completeButton: {
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "white",
  },

  editButton: {
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#222",
    color: "white",
  },
};

export default HabitCard;