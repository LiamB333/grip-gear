import React, { useState, useEffect, useRef } from "react";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  title: string;
  onSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ title, onSelect }) => {
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
    <div className="relative text-center mt-2" ref={colorPickerRef}>
      <button
        className="p-2 border border-black rounded bg-white text-black hover:bg-gray-100 hover:text-black transition duration-300"
        onClick={handleColorPickerToggle}
      >
        {displayColorPicker ? "Close Color Picker" : "Pick a Color"}
      </button>
      {displayColorPicker && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-10">
          <SketchPicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
