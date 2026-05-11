function HabitCard(props) {
  return (
    <div className="habit-card">
      <p>{props.name}</p>
      <button>Done</button>
    </div>
  );
}

export default HabitCard;