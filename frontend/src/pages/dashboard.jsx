import "./Dashboard.css";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import HabitCard from "../components/HabitCard";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard">

        <h1>Hello Arya 👋</h1>

        <div className="stats-container">
          <StatsCard title="Total Habits" value="5" />
          <StatsCard title="Completed" value="3" />
          <StatsCard title="Streak" value="7 Days" />
        </div>

        <h2>Today's Habits</h2>

        <HabitCard name="Drink Water" />
        <HabitCard name="Exercise" />
        <HabitCard name="Study React" />

      </div>
    </div>
  );
}

export default Dashboard;