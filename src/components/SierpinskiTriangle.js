// SierpinskiTriangle.js
import React, { useRef } from "react";
import useSierpinskiTriangle from "./useSierpinskiTriangle";

const SierpinskiTriangle = ({ level, colors }) => {
  const canvasRef = useRef(null);

  useSierpinskiTriangle(canvasRef, level, colors);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="border-2 border-gray-200 rounded-lg"
    />
  );
};

export default SierpinskiTriangle;
