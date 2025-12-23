import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TodoList from "./TodoList";
import todoReducer from "../store/todoSlice";

const createStore = (todos = []) => {
  return configureStore({
    reducer: {
      todos: todoReducer,
    },
    preloadedState: {
      todos: { todos },
    },
  });
};

describe("TodoList", () => {
  it("should show empty message when no todos", () => {
    const store = createStore();
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(
      screen.getByText("No todos yet. Add your first todo!")
    ).toBeInTheDocument();
  });

  it("should show todo list when todos exist", () => {
    const todos = [{ id: "1", text: "Test todo", status: "todo" }];
    const store = createStore(todos);

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });
});
