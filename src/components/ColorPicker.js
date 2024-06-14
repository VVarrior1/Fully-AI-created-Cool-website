import React, { useState } from "react";

const ColorPicker = ({ handleColorChange }) => {
  const [color, setColor] = useState("#ff0000");
  const [complementaryColors, setComplementaryColors] = useState([]);

  const handleColorSelection = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    generateComplementaryColors(selectedColor);
  };

  const generateComplementaryColors = (selectedColor) => {
    const rgb = hexToRgb(selectedColor);
    const hsl = rgbToHsl(rgb);
    const hsl1 = { h: (hsl.h + 120) % 360, s: hsl.s, l: hsl.l };
    const hsl2 = { h: (hsl.h - 120) % 360, s: hsl.s, l: hsl.l };
    const color1 = hslToHex(hsl1);
    const color2 = hslToHex(hsl2);
    setComplementaryColors([selectedColor, color1, color2]);
    handleColorChange([selectedColor, color1, color2]);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (rgb) => {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;
    if (diff > 0) {
      s = diff / (1 - Math.abs(max + min - 1));
      if (max === r) {
        h = (g - b) / diff;
      } else if (max === g) {
        h = 2 + (b - r) / diff;
      } else {
        h = 4 + (r - g) / diff;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return { h, s, l };
  };

  const hslToHex = (hsl) => {
    const h = hsl.h;
    const s = hsl.s;
    const l = hsl.l;
    let r, g, b;
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = Math.floor(hueToRgb(p, q, h + 120) * 255);
      g = Math.floor(hueToRgb(p, q, h) * 255);
      b = Math.floor(hueToRgb(p, q, h - 120) * 255);
    }
    return `#${(r < 16 ? "0" : "") + r.toString(16)}${
      (g < 16 ? "0" : "") + g.toString(16)
    }${(b < 16 ? "0" : "") + b.toString(16)}`;
  };

  const hueToRgb = (p, q, t) => {
    if (t < 0) {
      t += 360;
    }
    if (t > 360) {
      t -= 360;
    }
    if (t < 60) {
      return p + ((q - p) * t) / 60;
    }
    if (t < 180) {
      return q;
    }
    if (t < 240) {
      return p + ((q - p) * (240 - t)) / 60;
    }
    return p;
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Select a Color:</h2>
      <input
        type="color"
        value={color}
        onChange={handleColorSelection}
        className="w-24 p-2 border-2 border-gray-200 rounded-lg"
      />
      <div className="flex justify-center mt-2">
        {complementaryColors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color, width: "20px", height: "20px" }}
            className="mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
