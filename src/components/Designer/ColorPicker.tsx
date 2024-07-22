import React, { useState } from "react";

interface ColorPickerProps {
  title: string;
  onSelect: (color: string) => void;
  defaultColor?: string;
}

const presetColors = [
  "#F1EB9C",
  "#E9EC6B",
  "#FEDD00",
  "#FFCD00",
  "#FFB81C",
  "#FF8200",
  "#FF8674",
  "#FE5000",
  "#F9423A",
  "#E4002B",
  "#A6192E",
  "#D50032",
  "#6C1D45",
  "#CE0058",
  "#FABBCB",
  "#E31C79",
  "#9678D3",
  "#582C83",
  "#D48BC8",
  "#93328E",
  "#6A3460",
  "#005A6F",
  "#008C96",
  "#6ECEB2",
  "#8BB8E8",
  "#004C97",
  "#171C8F",
  "#003865",
  "#BDD6E6",
  "#8DC8E8",
  "#5BC2E7",
  "#00B2A9",
  "#0057B7",
  "#051C2C",
  "#000000",
  "#FFFFFF",
];

const ColorPicker: React.FC<ColorPickerProps> = ({
  title,
  onSelect,
  defaultColor = "#FF0000",
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onSelect(color);
  };

  return (
    <div className="text-center mt-2">
      <div className="grid grid-cols-6 gap-2 justify-center">
        {presetColors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? "border-blue-900" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
