# Simple Todo App with Redux

A basic todo application built with React and Redux Toolkit for learning purposes.

## Features

- Add new todos
- Edit todo text
- Change todo status (To Do, In Progress, Done)
- Delete todos
- View statistics

## Technologies Used

- React 19
- Redux Toolkit
- React Icons
- Vite
- Vitest (for testing)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm run test
```

## Project Structure

```
src/
├── components/          # React components
│   ├── TodoItem.jsx    # Individual todo item
│   ├── TodoList.jsx    # List of todos
│   ├── TodoStats.jsx   # Statistics display
│   └── AddTodo.jsx     # Add new todo form
├── store/              # Redux store
│   ├── store.js        # Store configuration
│   └── todoSlice.js    # Todo slice with actions and reducers
├── App.jsx            # Main app component
└── main.jsx          # Entry point
```

## Redux Actions

- `addTodo(text)` - Add a new todo
- `removeTodo(id)` - Remove a todo by ID
- `updateTodoText({id, text})` - Update todo text
- `changeTodoStatus({id, status})` - Change todo status

## Todo Status Options

- `todo` - To Do
- `in-progress` - In Progress
- `done` - Done

## Tests

Basic tests are included for:

- Redux reducer functions
- Component rendering
- User interactions

Run tests with: `npm run test`
