// App.jsx
import { useState } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer'; // Import TaskContainer

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  const createTask = () => {
    if (taskName) {
      const newTask = {
        id: tasks.length + 1,
        name: taskName,
        status: 'Not Started',
        people: [],
        color: `hsl(${Math.random() * 360}, 70%, 50%)`, // Random color for the task
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setIsCreatingTask(false);
    }
  };

  const updateTaskStatus = (id, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const addPersonToTask = (id, person) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, people: [...task.people, person] } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <header className="header">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <button onClick={() => setIsCreatingTask(!isCreatingTask)}>Create Task</button>
      </header>

      {isCreatingTask && (
        <div className="createTaskContainer">
          <button onClick={createTask}>Confirm Create Task</button>
        </div>
      )}

      <div className="taskList">
        {tasks.map(task => (
          <TaskContainer
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
            addPersonToTask={addPersonToTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
