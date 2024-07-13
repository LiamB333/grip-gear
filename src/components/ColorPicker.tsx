// components/ColorPicker.tsx
"use client"
import React from 'react';

interface ColorPickerProps {
  onSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelect }) => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']; // Example colors

  return (
    <div className="flex justify-center mt-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-full mx-2 cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
