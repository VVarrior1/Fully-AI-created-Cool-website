import React from "react";
import TodoList from "./TodoList";
import PomodoroTimer from "./PomodoroTimer";

const TodoBig = () => {
  return (
    <div>
      <TodoList />
      <PomodoroTimer />
    </div>
  );
};

export default TodoBig;
