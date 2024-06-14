// Shapes.js
import React, { useState } from "react";
import SierpinskiTriangle from "./SierpinskiTriangle";
import SierpinskiCarpet from "./SierpinskiCarpet";
import ColorPicker from "./ColorPicker";

const Shapes = () => {
  const [level, setLevel] = useState(4);
  const [colors, setColors] = useState(["#FFC67D", "#FF99CC", "#C9E4CA"]);

  const handleLevelChange = (event) => {
    const newLevel = parseInt(event.target.value);
    console.assert(
      newLevel >= 1 && newLevel <= 5,
      "Recursion level is out of bounds"
    );
    if (newLevel < 1) {
      setLevel(1);
    } else if (newLevel > 5) {
      setLevel(5);
    } else {
      setLevel(newLevel);
    }
  };

  const handleColorChange = (newColors) => {
    console.assert(newColors.length > 0, "Colors array is empty");
    setColors(newColors);
  };

  return (
    <div>
      <div className="flex justify-center p-4">
        <div className="flex flex-col items-center mr-4">
          <SierpinskiTriangle level={level} colors={colors} />
        </div>
        <div className="flex flex-col items-center">
          <SierpinskiCarpet level={level} colors={colors} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <label className="text-lg">Recursion Level:</label>
        <input
          type="number"
          value={level}
          onChange={handleLevelChange}
          className="w-24 p-2 border-2 border-gray-200 rounded-lg"
        />
      </div>
      <div className="flex justify-center mt-4">
        <ColorPicker handleColorChange={handleColorChange} />
      </div>
    </div>
  );
};

export default Shapes;
