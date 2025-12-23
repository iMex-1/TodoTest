import { describe, it, expect } from "vitest";
import todoReducer, {
  addTodo,
  removeTodo,
  updateTodoText,
  changeTodoStatus,
} from "../store/todoSlice";

describe("todoSlice", () => {
  const initialState = {
    todos: [],
  };

  it("should return the initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should add a todo", () => {
    const action = addTodo("Test todo");
    const result = todoReducer(initialState, action);

    expect(result.todos).toHaveLength(1);
    expect(result.todos[0].text).toBe("Test todo");
    expect(result.todos[0].status).toBe("todo");
  });

  it("should remove a todo", () => {
    const stateWithTodo = {
      todos: [{ id: "1", text: "Test todo", status: "todo" }],
    };
    const action = removeTodo("1");
    const result = todoReducer(stateWithTodo, action);

    expect(result.todos).toHaveLength(0);
  });

  it("should update todo text", () => {
    const stateWithTodo = {
      todos: [{ id: "1", text: "Old text", status: "todo" }],
    };
    const action = updateTodoText({ id: "1", text: "New text" });
    const result = todoReducer(stateWithTodo, action);

    expect(result.todos[0].text).toBe("New text");
  });

  it("should change todo status", () => {
    const stateWithTodo = {
      todos: [{ id: "1", text: "Test todo", status: "todo" }],
    };
    const action = changeTodoStatus({ id: "1", status: "done" });
    const result = todoReducer(stateWithTodo, action);

    expect(result.todos[0].status).toBe("done");
  });
});
