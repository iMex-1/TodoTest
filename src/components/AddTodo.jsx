import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { addTodo } from "../store/todoSlice";
import "../styles/AddTodo.css";

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText.trim()));
      setTodoText("");
    }
  };

  return (
    <div className="add-todo">
      <h2>Add New Todo</h2>

      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your todo..."
          className="todo-input"
        />
        <button type="submit" className="add-btn" disabled={!todoText.trim()}>
          <FaPlus /> Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
