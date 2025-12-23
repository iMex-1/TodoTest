import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import {
  removeTodo,
  updateTodoText,
  changeTodoStatus,
} from "../store/todoSlice";
import "./TodoItem.css";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(updateTodoText({ id: todo.id, text: editText.trim() }));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleStatusChange = (event) => {
    dispatch(changeTodoStatus({ id: todo.id, status: event.target.value }));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todo.status}`}>
      <div className="todo-content">
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
            />
            <button onClick={handleSave} className="save-btn">
              <FaSave />
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              <FaTimes />
            </button>
          </div>
        ) : (
          <div className="display-mode">
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-btn"
              aria-label="Edit todo"
            >
              <FaEdit />
            </button>
          </div>
        )}
      </div>

      <div className="todo-controls">
        <select
          value={todo.status}
          onChange={handleStatusChange}
          className="status-select"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <button
          onClick={handleDelete}
          className="delete-btn"
          aria-label="Delete todo"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
