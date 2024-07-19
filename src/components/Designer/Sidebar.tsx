import React, { useState } from "react";
import LogoPicker from "@/components/Designer/LogoPicker";
import ColorPickerComponent from "@/components/Designer/ColorPicker";
import TemplateSelector from "@/components/Designer/TemplateSelector"; // Adjust the import path as necessary

interface SidebarProps {
  activeSidebar: string | null;
  toggleSidebar: (sidebar: string) => void;
  handleLogoSelect: (
    leftLogoId: string,
    rightLogoId: string,
    fullLogoId: string
  ) => void;
  handleBackgroundColorSelect: (color: string) => void;
  handleStripeColorSelect: (color: string) => void;
  handleTemplateChange: (selectedValue: number) => void;
  selectedTemplate: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSidebar,
  toggleSidebar,
  handleLogoSelect,
  handleBackgroundColorSelect,
  handleStripeColorSelect,
  handleTemplateChange,
  selectedTemplate,
}) => {
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState(false);
  const [showStripeColorPicker, setShowStripeColorPicker] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Main Sidebar */}
      <div className="w-20 bg-white text-black flex flex-col items-center py-4 shadow-xl fixed top-0 left-0 h-full z-10">
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none"
          onClick={() => toggleSidebar("design")}
        >
          Design
        </button>
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none"
          onClick={() => toggleSidebar("colour")}
        >
          Colour
        </button>
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none"
          onClick={() => toggleSidebar("logo")}
        >
          Logo
        </button>
      </div>

      {/* Nested Sidebar */}
      {activeSidebar && (
        <div className="w-64 bg-white h-full shadow-xl fixed top-0 left-20 z-10 overflow-auto">
          {activeSidebar === "design" && (
            <div className="p-4">
              <h1 className="">Select Design</h1>
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onChange={handleTemplateChange}
              />
            </div>
          )}
          {activeSidebar === "colour" && (
            <>
              <h1 className="p-4">Select Colour</h1>

              <ColorPickerComponent
                title="Choose Background Colour"
                onSelect={handleBackgroundColorSelect}
              />

              {selectedTemplate !== 1 && (
                <ColorPickerComponent
                  title="Choose Stripe Colour"
                  onSelect={handleStripeColorSelect}
                />
              )}
            </>
          )}

          {activeSidebar === "logo" && (
            <>
              <h1 className="p-4">Select Logo</h1>
              <div className="p-4">
                <LogoPicker onLogoSelect={handleLogoSelect} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
