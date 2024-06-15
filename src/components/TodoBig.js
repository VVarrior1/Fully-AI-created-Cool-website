import React from "react";
import TodoList from "./TodoList";
import PomodoroTimer from "./PomodoroTimer";
import TimeWidget from "./TimeWidget";

const TodoBig = () => {
  return (
    <div>
      <TimeWidget />
      <TodoList />
      <PomodoroTimer />
    </div>
  );
};

export default TodoBig;
