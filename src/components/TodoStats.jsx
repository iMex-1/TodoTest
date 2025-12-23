import { useSelector } from "react-redux";
import "../styles/TodoStats.css";

function TodoStats() {
  const todos = useSelector((state) => state.todos.todos);

  const total = todos.length;
  const todoCount = todos.filter((todo) => todo.status === "todo").length;
  const inProgressCount = todos.filter(
    (todo) => todo.status === "in-progress"
  ).length;
  const doneCount = todos.filter((todo) => todo.status === "done").length;

  return (
    <div className="todo-stats">
      <h2>Statistics</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{total}</div>
          <div className="stat-label">Total</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{todoCount}</div>
          <div className="stat-label">To Do</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{inProgressCount}</div>
          <div className="stat-label">In Progress</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{doneCount}</div>
          <div className="stat-label">Done</div>
        </div>
      </div>

      {total > 0 && (
        <div className="progress-info">
          <p>Progress: {Math.round((doneCount / total) * 100)}% completed</p>
        </div>
      )}
    </div>
  );
}

export default TodoStats;
