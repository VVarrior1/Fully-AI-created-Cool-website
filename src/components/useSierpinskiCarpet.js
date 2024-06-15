import { useEffect } from 'react';

const useSierpinskiCarpet = (canvasRef, level, colors) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = 400;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Function to draw a Sierpinski Carpet
    function drawSierpinskiCarpet(x, y, size, level) {
      // Base case: If the recursion level is 0, draw a square and return.
      if (level === 0) {
        ctx.fillStyle = colors[level % colors.length];
        ctx.fillRect(x, y, size, size);
        return;
      }

      // Recursive case: Draw eight smaller squares at each corner and center of the larger square.
      else {
        const newSize = size / 3;
        drawSierpinskiCarpet(x, y, newSize, level - 1);
        drawSierpinskiCarpet(x + newSize, y, newSize, level - 1);
        drawSierpinskiCarpet(x + 2 * newSize, y, newSize, level - 1);
        drawSierpinskiCarpet(x, y + newSize, newSize, level - 1);
        drawSierpinskiCarpet(x + 2 * newSize, y + newSize, newSize, level - 1);
        drawSierpinskiCarpet(x, y + 2 * newSize, newSize, level - 1);
        drawSierpinskiCarpet(x + newSize, y + 2 * newSize, newSize, level - 1);
        drawSierpinskiCarpet(x + 2 * newSize, y + 2 * newSize, newSize, level - 1);
      }
    }

    // Start the recursive drawing of Sierpinski Carpet
    drawSierpinskiCarpet(0, 0, size, level);
  }, [canvasRef, level, colors]);
};

export default useSierpinskiCarpet;