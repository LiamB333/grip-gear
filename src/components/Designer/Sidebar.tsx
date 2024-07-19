import React, { useState } from "react";
import LogoPicker from "@/components/Designer/LogoPicker";
import ColorPickerComponent from "@/components/Designer/ColorPicker";
import TemplateSelector from "@/components/Designer/TemplateSelector"; // Adjust the import path as necessary
import Image from "next/image"; // Make sure you have the Image component imported

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
    <div className="flex relative overflow-hidden">
      {/* Main Sidebar */}
      <div className="w-20 bg-white text-black flex flex-col items-center py-4 shadow-xl fixed top-0 left-0 h-full z-10">
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none flex flex-col items-center sidebar-button"
          onClick={() => toggleSidebar("design")}
        >
          <img
            src="/icons/color-pencil.svg"
            alt="Design"
            width={20}
            height={20}
            className="sidebar-icon"
          />
          <span className="mt-2">Design</span>
        </button>
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none flex flex-col items-center sidebar-button"
          onClick={() => toggleSidebar("colour")}
        >
          <img
            src="/icons/bucket.svg"
            alt="Colour"
            width={20}
            height={20}
            className="sidebar-icon"
          />
          <span className="mt-2">Colour</span>
        </button>
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none flex flex-col items-center sidebar-button"
          onClick={() => toggleSidebar("logo")}
        >
          <img
            src="/icons/export.svg"
            alt="Logo"
            width={20}
            height={20}
            className="sidebar-icon"
          />
          <span className="mt-2">Logo</span>
        </button>
      </div>

      {/* Nested Sidebar */}
      {activeSidebar && (
        <div className="w-64 bg-white h-full shadow-xl fixed top-0 left-20 z-10 overflow-hidden">
          {activeSidebar === "design" && (
            <div className="p-4">
              <div className="mb-2">
                <h1 className="text-xl">Select Design</h1>
                <p className="text-xs">Choose a standard design</p>
              </div>
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onChange={handleTemplateChange}
              />
            </div>
          )}
          {activeSidebar === "colour" && (
            <div className="p-4">
              <div className="mb-2">
                <h1 className="text-xl">Select Colour</h1>
                <p className="text-xs">Decide on your colour combination</p>
              </div>

              <ColorPickerComponent
                title="Choose Background Colour"
                onSelect={handleBackgroundColorSelect}
              />

              {selectedTemplate !== 1 && (
                <>
                  <ColorPickerComponent
                    title="Choose Stripe Colour"
                    onSelect={handleStripeColorSelect}
                  />
                </>
              )}
            </div>
          )}

          {activeSidebar === "logo" && (
            <div className="p-4">
              <div className="mb-2">
                <h1 className="text-xl">Select Logo</h1>
                <p className="text-xs">Decide on your sock badge</p>
              </div>
              <LogoPicker onLogoSelect={handleLogoSelect} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
