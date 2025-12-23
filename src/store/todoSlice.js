import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        text: action.payload,
        status: "todo",
      };
      state.todos.push(newTodo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodoText: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },

    changeTodoStatus: (state, action) => {
      const { id, status } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = status;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodoText, changeTodoStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
