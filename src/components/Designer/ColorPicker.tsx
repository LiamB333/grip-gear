import React, { useState, useEffect, useRef } from "react";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  title: string;
  onSelect: (color: string) => void;
  defaultColor?: string; // Add a defaultColor prop
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  title,
  onSelect,
  defaultColor = "#FF0000",
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
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
    <div className="relative text-center mt-2" ref={colorPickerRef}>
      <button
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded bg-white text-black hover:bg-blue-100 transition duration-300"
        onClick={handleColorPickerToggle}
      >
        <div className="flex items-center">
          <span
            className="inline-block w-6 h-6 mr-2 rounded-full border border-gray-400"
            style={{ backgroundColor: selectedColor }}
          ></span>
          <span className="text-xs">{title}</span>
        </div>
        <svg
          className="w-4 h-4 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
      {displayColorPicker && (
        <div className="pb-20 z-10">
          <div className="p-1">
            <SketchPicker
              color={selectedColor}
              onChange={handleColorChange}
              width="200px"
              presetColors={[]}
              disableAlpha
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
