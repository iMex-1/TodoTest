import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TodoItem from "../components/TodoItem";
import todoReducer from "../store/todoSlice";

const createStore = () => {
  return configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
};

const mockTodo = {
  id: "1",
  text: "Test todo",
  status: "todo",
};

describe("TodoItem", () => {
  it("should render todo text", () => {
    const store = createStore();
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  it("should show edit and delete buttons", () => {
    const store = createStore();
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );

    expect(screen.getByLabelText("Edit todo")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete todo")).toBeInTheDocument();
  });
});
