import { useState, useEffect } from "react";

const usePomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(30 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setWorkTime(30 * 60);
    setBreakTime(5 * 60);
    setOnBreak(false);
    setTimerRunning(false);
  };

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        if (onBreak) {
          setBreakTime((prevTime) => prevTime - 1);
          if (breakTime <= 0) {
            setOnBreak(false);
            setBreakTime(5 * 60);
          }
        } else {
          setWorkTime((prevTime) => prevTime - 1);
          if (workTime <= 0) {
            setOnBreak(true);
            setWorkTime(30 * 60);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, onBreak, workTime, breakTime]);

  return {
    workTime,
    breakTime,
    timerRunning,
    onBreak,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default usePomodoroTimer;
