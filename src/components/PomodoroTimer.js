import React from "react";
import usePomodoroTimer from "./usePomodoroTimer";

const PomodoroTimer = () => {
  const {
    workTime,
    breakTime,
    onBreak,
    startTimer,
    stopTimer,
    resetTimer,
  } = usePomodoroTimer();

  return (
    <div className="flex justify-between bg-gray-600 p-4 rounded-lg text-white mx-auto">
      <h2 className="text-2xl font-bold">
        {onBreak ? "🎮Break Time" : "🍅Work Time"}
      </h2>
      <p className="text-lg">
        {onBreak
          ? `${Math.floor(breakTime / 60)}:${breakTime % 60}`
          : `${Math.floor(workTime / 60)}:${workTime % 60}`}
      </p>
      <div>
        <button
          onClick={startTimer}
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 mr-2"
        >
          Start Timer
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 mr-2"
        >
          Stop Timer
        </button>
        <button
          onClick={resetTimer}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
