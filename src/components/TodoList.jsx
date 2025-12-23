import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>No todos yet. Add your first todo!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="todo-items">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
