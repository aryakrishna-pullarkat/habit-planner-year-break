import { useState } from "react";

import Layout from "../components/Layout";
import HabitCard from "../components/Habitcard";

function Dashboard() {

  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Workout",
      description: "Pushups and cardio",
      streak: 5,
      importance: "high",
      completed: false,
    },

    {
      id: 2,
      title: "Study DSA",
      description: "Practice Leetcode problems",
      streak: 12,
      importance: "medium",
      completed: true,
    },

    {
      id: 3,
      title: "Drink Water",
      description: "Complete daily water goal",
      streak: 3,
      importance: "low",
      completed: false,
    },
  ]);

  const completedCount = habits.filter(
    (habit) => habit.completed
  ).length;

  const handleComplete = (id) => {

    const updatedHabits = habits.map((habit) => {

      if (habit.id === id) {
        return {
          ...habit,
          completed: !habit.completed,
        };
      }

      return habit;
    });

    setHabits(updatedHabits);
  };

  const handleEdit = (habit) => {
    console.log("Edit clicked", habit);
  };

  return (
    <Layout>

      <div style={styles.dashboardContainer}>

        <div style={styles.topBar}>

          <button style={styles.addButton}>
            + Add Habit
          </button>

          <div style={styles.completedBox}>
            Completed Today: {completedCount}/{habits.length}
          </div>

        </div>

        <div style={styles.habitGrid}>

          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              title={habit.title}
              description={habit.description}
              streak={habit.streak}
              importance={habit.importance}
              completed={habit.completed}
              onComplete={() => handleComplete(habit.id)}
              onEdit={() => handleEdit(habit)}
            />
          ))}

        </div>

      </div>

    </Layout>
  );
}

const styles = {
  dashboardContainer: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "15px",
  },

  addButton: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    backgroundColor: "#222",
    color: "white",
  },

  completedBox: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  habitGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
  },
};

export default Dashboard;