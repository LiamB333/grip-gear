// components/ColorPickerComponent.tsx

import React, { useState, useEffect, useRef } from "react";
import { SketchPicker } from "react-color";

interface ColorPickerComponentProps {
  onSelect: (color: string) => void;
}

const ColorPickerComponent: React.FC<ColorPickerComponentProps> = ({
  onSelect,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("#FF0000");
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setDisplayColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
    onSelect(color.hex);
  };

  const handleColorPickerToggle = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <div className="text-center mt-2" ref={colorPickerRef}>
      <button
        className="p-2 border border-black rounded bg-white text-black hover:bg-gray-100 hover:text-black transition duration-300"
        onClick={handleColorPickerToggle}
      >
        {displayColorPicker ? "Close Color Picker" : "Pick a Color"}
      </button>
      {displayColorPicker && (
        <div className="mt-2">
          <SketchPicker
            color={selectedColor}
            onChange={handleColorChange}
            presetColors={[
              "#D0021B",
              "#F5A623",
              "#F8E71C",
              "#8B572A",
              "#7ED321",
              "#417505",
              "#BD10E0",
              "#9013FE",
              "#4A90E2",
              "#50E3C2",
              "#B8E986",
              "#000000",
              "#4A4A4A",
              "#9B9B9B",
              "#FFFFFF",
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPickerComponent;
