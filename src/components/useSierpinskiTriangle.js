// useSierpinskiTriangle.js
import { useEffect, useRef } from "react";

const useSierpinskiTriangle = (canvasRef, level, colors, middleColor) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = 350;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Function to draw a Sierpinski triangle
    function drawSierpinskiTriangle(x, y, size, level, colorIndex) {
      // Base case: If the recursion level is 0, draw a simple triangle and return.
      if (level === 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - (Math.sqrt(3) * size) / 2);
        ctx.closePath();
        if (
          (x === 10 && y === 410) ||
          (x === 210 && y === 410) ||
          (x === 110 && y === 259.81) ||
          (x === 110 && y === 560.19)
        ) {
          ctx.fillStyle = middleColor;
        } else {
          ctx.fillStyle = colors[colorIndex % colors.length];
        }
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        return;
      }

      // Recursive case: Draw three smaller triangles at each corner of the larger triangle.
      else {
        drawSierpinskiTriangle(x, y, size / 2, level - 1, colorIndex);
        drawSierpinskiTriangle(
          x + size / 2,
          y,
          size / 2,
          level - 1,
          colorIndex + 1
        );
        drawSierpinskiTriangle(
          x + size / 4,
          y - (Math.sqrt(3) * size) / 4,
          size / 2,
          level - 1,
          colorIndex + 2
        );
      }
    }

    // Start the recursive drawing of Sierpinski triangle
    // Center the triangle
    drawSierpinskiTriangle(0, 370, size, level, 0);
  }, [canvasRef, level, colors, middleColor]);
};

export default useSierpinskiTriangle;
