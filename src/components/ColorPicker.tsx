// components/ColorPickerComponent.tsx

import React, { useState } from "react";
import { SketchPicker } from "react-color";

interface ColorPickerComponentProps {
  onSelect: (color: string) => void;
}

const ColorPickerComponent: React.FC<ColorPickerComponentProps> = ({
  onSelect,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("#FF0000");

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
    onSelect(color.hex);
  };

  return (
    <div className="text-center mt-4">
      <SketchPicker color={selectedColor} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPickerComponent;
