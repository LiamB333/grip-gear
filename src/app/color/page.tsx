// pages/color-selection.tsx
"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ColorPickerComponent from "@/components/ColorPicker"; // Import ColorPickerComponent

const ColorSelectionPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const template = searchParams.get("template");
  const [selectedColor, setSelectedColor] = useState<string>(""); // State to hold selected color

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const navigateToDetailsPage = () => {
    if (template && selectedColor) {
      router.push(
        `/details?template=${template}&color=${encodeURIComponent(
          selectedColor
        )}`
      );
    } else {
      console.error("Template or selected color is missing.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Choose Sock Color</h1>
        <ColorPickerComponent onSelect={handleColorSelect} /> {/* Use ColorPickerComponent */}
        <div className="mt-4">
          <button
            onClick={navigateToDetailsPage}
            className="text-blue-500 hover:text-blue-700"
          >
            Next: Enter Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorSelectionPage;
