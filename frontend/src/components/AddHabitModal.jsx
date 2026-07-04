import { useState } from "react";
import { useEffect } from "react";

function AddHabitModal({
  isOpen,
  onClose,
  onAddHabit,
  editingHabit,
  onUpdateHabit,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("medium");

  useEffect(() => {
  if (editingHabit) {
    setTitle(editingHabit.title);
    setDescription(editingHabit.description);
    setImportance(editingHabit.importance);
  } else {
    setTitle("");
    setDescription("");
    setImportance("medium");
  }
}, [editingHabit]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingHabit) {

    onUpdateHabit({
        ...editingHabit,
        title,
        description,
        importance,
    });

} else {

    onAddHabit({
        id: Date.now(),
        title,
        description,
        importance,
        streak: 0,
        completed: false,
    });

}

    setTitle("");
    setDescription("");
    setImportance("medium");

    onClose();
  };

  return (
    <div style={styles.overlay}>

      <div style={styles.modal}>

        <h2>Add Habit</h2>

        <form onSubmit={handleSubmit}>

          <input
            style={styles.input}
            type="text"
            placeholder="Habit Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            style={styles.textarea}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            style={styles.select}
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="high">High Importance</option>
            <option value="medium">Medium Importance</option>
            <option value="low">Low Importance</option>
          </select>

          <div style={styles.buttons}>

            <button type="submit">
              {editingHabit ? "Save Changes" : "Add Habit"}
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    width: "400px",
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "30px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  },

  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    marginBottom: "15px",
    resize: "none",
  },

  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default AddHabitModal;