import React from 'react';

const Task = ({ task, deleteTask, toggleCompletion }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.content}
      </span>
      <button onClick={() => toggleCompletion(task.id)}>Toggle</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;