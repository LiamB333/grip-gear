// components/ColorPickerComponent.tsx
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

interface ColorPickerComponentProps {
  onSelect: (color: string) => void;
}

const ColorPickerComponent: React.FC<ColorPickerComponentProps> = ({ onSelect }) => {
  const [selectedColor, setSelectedColor] = useState<string>('#FF0000');

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
    onSelect(color.hex); // Pass selected color to parent component
  };

  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-semibold">Color Picker</h1>
      <SketchPicker color={selectedColor} onChange={handleColorChange} />
      <div className="mt-4">Selected Color: {selectedColor}</div>
    </div>
  );
};

export default ColorPickerComponent;
