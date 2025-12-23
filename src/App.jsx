import { Provider } from "react-redux";
import { store } from "./store/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>Todo App</h1>
        </header>

        <main className="app-main">
          <div className="app-grid">
            <div className="todo-section">
              <AddTodo />
              <TodoList />
            </div>

            <div className="stats-section">
              <TodoStats />
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
