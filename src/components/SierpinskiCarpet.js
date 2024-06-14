// SierpinskiCarpet.js
import React, { useRef } from "react";
import useSierpinskiCarpet from "./useSierpinskiCarpet";

const SierpinskiCarpet = ({ level, colors }) => {
  const canvasRef = useRef(null);

  useSierpinskiCarpet(canvasRef, level, colors);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="border-2 border-gray-200 rounded-lg"
    />
  );
};

export default SierpinskiCarpet;
