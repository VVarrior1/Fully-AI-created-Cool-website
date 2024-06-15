import React from "react";

const TimeWidget = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-xl text-gray-100">{time.toLocaleTimeString()}</div>
  );
};

export default TimeWidget;
