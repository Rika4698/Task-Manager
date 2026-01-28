# Task Manager Application

### **Overview:** A simple , elegant and fully functional task manager application built with React.js and Tailwind CSS. This application demonstrates React including functional components, hooks, state management and localStorage persistence.

## **Live link:** https://task-manager-five-xi-24.vercel.app/


## Technology Stack

- **React 19.2** - Modern React with functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **LocalStorage** - Client-side data persistence



## Features:

### **Core Features:**
- Display a list of tasks
- Add a new task
- Mark a task as completed or incomplete
- Delete a task

### **Extra Features:**
- **LocalStorage Persistence:** Tasks are saved automatically and persist across sessions.
- **Task Filtering:** Filter tasks by Al, Pending and Completed status.
- **Statistics:** View total tasks, completed Tasks, pending tasks and complete rate percentage.
- **Well-Organized Structure:** Clean component architecture with separation of concerns.




## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
    git clone <repository-url>
    cd Task-Manager
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
   The application will automatically open at `http://localhost:5173`


## Project Structure

```
task-manager/
├─ src/
│  ├─ components/
│  │  ├─ Section/
│  │  │  ├─ AddTask.jsx         # Input form for adding task
│  │  │  ├─ EachTask.jsx        # Individual task component
│  │  │  ├─ EmptySection.jsx    # Empty placeholder when no task
│  │  │  ├─ FilterTask.jsx      # Filter task with all , pending and complete status
│  │  │  ├─ Header.jsx          # App header with statistics
│  │  │  └─ TaskList.jsx        # Container for all tasks
│  │  └─ MainPage.jsx           # Main page with all components section
│  ├─ App.css                   
│  ├─ App.jsx                   # Main application components
│  ├─ index.css                 # Global styles and Tailwind directives
│  └─ main.jsx                  # React entry point
├─ .gitignore
├─ eslint.config.js
├─ index.html                   # HTML template
├─ package-lock.json
├─ package.json                 # Dependencies and scripts
├─ postcss.config.js            # PostCSS configuration
├─ README.md                    # This file
├─ tailwind.config.js           # Tailwind configuration
└─ vite.config.js               # Vite configuration
```


## How to use

### **Adding Task:**
1. User type a task in the input field
2. Press Enter or click the "Add Task" button
3. User task will appear at the top of the task list

### **Completing Task:**
- Click the checkbox next to any task to mark it as complete
- The task text will be struck through and grayed out
- Click again to mark as incomplete


### **Filtering Tasks:**
- **All Tasks**: Shows all tasks regardless of status
- **Pending**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

### **Deleting Task:**
-When a user clicks the delete button, the deleteTask function is triggered.

- A confirmation dialog appears asking the user to confirm the deletion.

- If the user confirms, the selected task is removed from the task list.

- A success alert is shown with OK button. when user press OK button, the task is deleted.

### Statistics
The header displays a small statistics:
- Total number of tasks
- Number of completed tasks
- Number of pending tasks
- Overall complete rate percentage


## Key React Concepts Demonstrated

### State Management
- `useState` hook for managing tasks and filter state
- Proper state immutability practices
- State lifting and prop drilling

### Side Effects
- `useEffect` for localStorage synchronization
- Effect dependencies array
- Cleanup and side effect management

### Component Architecture
- Functional components
- Component composition
- Props passing and callback functions
- Conditional rendering

### Best Practices
- Single Responsibility Principle
- Clean, readable code structure
- Proper event handling

## LocalStorage Implementation

Tasks are automatically saved to localStorage:
- Saved on every task modification
- Loaded when the application starts
- Data persists across browser sessions
- Error handling for JSON parsing


## Performance Considerations

- Efficient re-renders using React's reconciliation
- Minimal component re-rendering
- LocalStorage operations optimized
- CSS-based animations for smooth performance



## Author

- Name: Sharmin Akter Reka
- Email: rika_cse_1819@istt.edu.bd
- Portfolio: https://my-portfolio-df10f.web.app/

---

**Note**: This is a frontend-only application. All data is stored locally in the browser using localStorage API.