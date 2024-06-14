import { useState } from "react";

const useTodoList = () => {
  const [tasks, setTasks] = useState([
    { id: "1", content: "Task 1", completed: false },
    { id: "2", content: "Task 2", completed: false },
    { id: "3", content: "Task 3", completed: false },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, setTasks, addTask, deleteTask, toggleCompletion };
};

export default useTodoList;
