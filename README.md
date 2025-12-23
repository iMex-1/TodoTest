# Simple Todo App with Redux

A beginner-friendly todo application built with React and Redux Toolkit for learning purposes. This project demonstrates modern React development patterns with clean, organized code structure.

## 🚀 Features

- ✅ Add new todos
- ✅ Edit todo text inline
- ✅ Change todo status (To Do → In Progress → Done)
- ✅ Delete todos
- ✅ View real-time statistics
- ✅ Responsive design
- ✅ Clean, professional UI with React Icons

## 🛠️ Technologies Used

- **React 19** - Modern React with functional components and hooks
- **Redux Toolkit** - Simplified Redux state management
- **React Icons** - Professional icon library
- **Vite** - Fast development server and build tool
- **Vitest** - Modern testing framework
- **CSS3** - Custom styling with flexbox and grid

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AddTodo.jsx     # Form to add new todos
│   ├── TodoItem.jsx    # Individual todo item component
│   ├── TodoList.jsx    # List container for all todos
│   └── TodoStats.jsx   # Statistics display component
├── store/              # Redux store and state management
│   ├── store.js        # Redux store configuration
│   └── todoSlice.js    # Todo slice with actions and reducers
├── styles/             # CSS stylesheets
│   ├── App.css         # Main application styles
│   ├── AddTodo.css     # Add todo form styles
│   ├── TodoItem.css    # Individual todo item styles
│   ├── TodoList.css    # Todo list container styles
│   └── TodoStats.css   # Statistics component styles
├── tests/              # Test files
│   ├── TodoItem.test.jsx    # TodoItem component tests
│   ├── TodoList.test.jsx    # TodoList component tests
│   └── todoSlice.test.js    # Redux slice tests
├── test/               # Test configuration
│   └── setup.js        # Vitest setup file
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 📋 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd TodoTest
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser:**
   Navigate to `http://localhost:5173/`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run lint         # Run ESLint
```

## 🧩 Component Documentation

### 📄 **App.jsx**

**Purpose:** Main application component that sets up Redux Provider and layout structure.

**Key Functions:**

- Provides Redux store to all child components
- Defines main application layout with header and grid structure
- Renders AddTodo, TodoList, and TodoStats components

### 🏠 **main.jsx**

**Purpose:** Application entry point that renders the App component into the DOM.

**Key Functions:**

- Creates React root element
- Renders App component with StrictMode for development warnings

---

## 📦 Components

### ➕ **AddTodo.jsx**

**Purpose:** Form component for adding new todos to the list.

**Key Functions:**

- `handleSubmit(event)` - Processes form submission and dispatches addTodo action
- Form validation (prevents empty todos)
- Clears input after successful submission
- Uses controlled input with React state

**Props:** None

**State:**

- `todoText` - Current input value

### 📝 **TodoItem.jsx**

**Purpose:** Individual todo item with edit, delete, and status change functionality.

**Key Functions:**

- `handleSave()` - Saves edited todo text and exits edit mode
- `handleCancel()` - Cancels editing and restores original text
- `handleStatusChange(event)` - Updates todo status via dropdown
- `handleDelete()` - Removes todo from the list
- Inline editing with input field
- Visual status indicators with CSS classes

**Props:**

- `todo` (object) - Todo item with id, text, and status properties

**State:**

- `isEditing` - Boolean for edit mode toggle
- `editText` - Temporary text during editing

### 📋 **TodoList.jsx**

**Purpose:** Container component that displays all todos or empty state message.

**Key Functions:**

- Renders list of TodoItem components
- Shows empty state when no todos exist
- Uses Redux selector to get todos from store

**Props:** None

**Redux Selectors:**

- `useSelector(state => state.todos.todos)` - Gets all todos from Redux store

### 📊 **TodoStats.jsx**

**Purpose:** Displays statistics about todos including counts and progress percentage.

**Key Functions:**

- Calculates total todos count
- Counts todos by status (todo, in-progress, done)
- Computes completion percentage
- Shows progress bar visualization

**Props:** None

**Calculations:**

- `total` - Total number of todos
- `todoCount` - Number of todos with 'todo' status
- `inProgressCount` - Number of todos with 'in-progress' status
- `doneCount` - Number of todos with 'done' status
- `progress` - Percentage of completed todos

---

## 🏪 Redux Store

### ⚙️ **store.js**

**Purpose:** Configures and exports the Redux store with todoSlice reducer.

**Configuration:**

- Uses Redux Toolkit's `configureStore`
- Includes Redux DevTools for development
- Single reducer: `todos: todoReducer`

### 🔄 **todoSlice.js**

**Purpose:** Defines Redux slice with actions, reducers, and selectors for todo management.

**Initial State:**

```javascript
{
  todos: []; // Array of todo objects
}
```

**Actions & Reducers:**

#### `addTodo(text)`

- **Purpose:** Adds a new todo to the list
- **Payload:** String - todo text
- **Logic:** Creates new todo object with unique ID, provided text, and 'todo' status

#### `removeTodo(id)`

- **Purpose:** Removes a todo from the list
- **Payload:** String - todo ID
- **Logic:** Filters out todo with matching ID

#### `updateTodoText({id, text})`

- **Purpose:** Updates the text of an existing todo
- **Payload:** Object with id and new text
- **Logic:** Finds todo by ID and updates its text property

#### `changeTodoStatus({id, status})`

- **Purpose:** Changes the status of a todo
- **Payload:** Object with id and new status
- **Logic:** Finds todo by ID and updates its status property

**Todo Object Structure:**

```javascript
{
  id: "timestamp_string",     // Unique identifier
  text: "Todo description",   // User-provided text
  status: "todo" | "in-progress" | "done"  // Current status
}
```

---

## 🎨 Styles Documentation

### 🎯 **App.css**

**Purpose:** Main application layout and global styles.

**Key Classes:**

- `.app` - Main container with flexbox layout
- `.app-header` - Blue header with title
- `.app-main` - Main content area with max-width
- `.app-grid` - CSS Grid layout for components (2fr 1fr)
- Responsive design with mobile breakpoints

### ➕ **AddTodo.css**

**Purpose:** Styles for the add todo form component.

**Key Classes:**

- `.add-todo` - Form container with background and border
- `.add-todo-form` - Flexbox layout for input and button
- `.todo-input` - Styled text input with focus states
- `.add-btn` - Green submit button with hover effects
- Disabled state styling for empty input

### 📝 **TodoItem.css**

**Purpose:** Styles for individual todo items with status-based theming.

**Key Classes:**

- `.todo-item` - Main container with flexbox layout
- `.todo-item.todo` - Blue left border for todo status
- `.todo-item.in-progress` - Orange left border for in-progress
- `.todo-item.done` - Green left border and opacity for completed
- `.edit-mode` / `.display-mode` - Different layouts for editing states
- Button styles for edit, save, cancel, delete actions

### 📋 **TodoList.css**

**Purpose:** Styles for the todo list container and empty state.

**Key Classes:**

- `.todo-list` - Container with background and border
- `.todo-items` - Scrollable container for todo items
- `.todo-list-empty` - Centered empty state message
- Custom scrollbar styling

### 📊 **TodoStats.css**

**Purpose:** Styles for the statistics component with card layout.

**Key Classes:**

- `.todo-stats` - Main container matching other components
- `.stats-grid` - CSS Grid for statistic cards (2x2 layout)
- `.stat-card` - Individual statistic card with icon and numbers
- `.progress-info` - Progress bar and percentage display
- Responsive grid layout for mobile devices

---

## 🧪 Testing Documentation

### 🔧 **Test Setup (test/setup.js)**

**Purpose:** Configures testing environment for all test files.

**Configuration:**

- Imports `@testing-library/jest-dom` for additional matchers
- Sets up DOM testing utilities
- Provides custom matchers like `toBeInTheDocument()`

### 🧪 **todoSlice.test.js**

**Purpose:** Tests Redux slice functionality including actions and reducers.

**Test Cases:**

1. **Initial State Test** - Verifies empty initial state
2. **Add Todo Test** - Tests todo creation with correct properties
3. **Remove Todo Test** - Tests todo deletion by ID
4. **Update Text Test** - Tests text modification functionality
5. **Change Status Test** - Tests status transitions

**Test Structure:**

```javascript
describe("todoSlice", () => {
  // Test initial state
  // Test each action/reducer pair
  // Verify state changes are correct
});
```

### 🧪 **TodoItem.test.jsx**

**Purpose:** Tests TodoItem component rendering and user interactions.

**Test Cases:**

1. **Render Test** - Verifies todo text displays correctly
2. **Button Test** - Checks edit and delete buttons are present

**Test Utilities:**

- Uses `@testing-library/react` for component rendering
- Creates mock Redux store for each test
- Uses `screen` queries to find elements

### 🧪 **TodoList.test.jsx**

**Purpose:** Tests TodoList component with different data states.

**Test Cases:**

1. **Empty State Test** - Verifies empty message when no todos
2. **With Todos Test** - Checks list renders with todo data

**Mock Data:**

- Creates test store with predefined todo data
- Tests both empty and populated states

---

## 🎯 Key Learning Concepts

### React Concepts Demonstrated:

- **Functional Components** - Modern React component pattern
- **Hooks** - useState, useDispatch, useSelector
- **Props** - Component data passing
- **Event Handling** - Form submission, button clicks
- **Conditional Rendering** - Edit mode, empty states
- **Component Composition** - Building UI from smaller components

### Redux Concepts Demonstrated:

- **Store Configuration** - Setting up Redux store
- **Slices** - Modern Redux Toolkit pattern
- **Actions** - Dispatching state changes
- **Reducers** - Pure functions for state updates
- **Selectors** - Accessing state in components
- **Immutable Updates** - Using Immer under the hood

### CSS Concepts Demonstrated:

- **Flexbox Layout** - Component internal layout
- **CSS Grid** - Main application layout
- **Responsive Design** - Mobile-first approach
- **CSS Variables** - Consistent theming
- **Pseudo-classes** - Hover and focus states
- **Component-based Styling** - Modular CSS organization

### Testing Concepts Demonstrated:

- **Unit Testing** - Testing individual functions
- **Component Testing** - Testing React components
- **Integration Testing** - Testing Redux integration
- **Mock Data** - Creating test fixtures
- **Test Organization** - Describe blocks and test cases

---

## 🚀 Development Workflow

### Adding New Features:

1. **Create Component** - Add new .jsx file in `src/components/`
2. **Add Styles** - Create corresponding .css file in `src/styles/`
3. **Update Redux** - Add actions/reducers if needed in `todoSlice.js`
4. **Write Tests** - Add test file in `src/tests/`
5. **Import & Use** - Import component in parent components

### Best Practices Followed:

- **Single Responsibility** - Each component has one clear purpose
- **Consistent Naming** - Clear, descriptive names for files and functions
- **Modular Structure** - Organized folder structure
- **Error Handling** - Input validation and edge cases
- **Accessibility** - ARIA labels and semantic HTML
- **Performance** - Efficient Redux selectors and updates

## 🎓 Learning Path

### Beginner Level:

1. Understand component structure and props
2. Learn basic React hooks (useState)
3. Practice CSS styling and layout
4. Understand event handling

### Intermediate Level:

1. Master Redux concepts and data flow
2. Learn testing with React Testing Library
3. Understand component lifecycle and effects
4. Practice responsive design patterns

### Advanced Level:

1. Optimize performance with memoization
2. Add advanced features (drag & drop, persistence)
3. Implement error boundaries and loading states
4. Add TypeScript for type safety

---

## 📝 License

This project is created for educational purposes. Feel free to use and modify for learning React and Redux concepts.

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment with new features or improvements!

---

**Happy Coding! 🎉**
