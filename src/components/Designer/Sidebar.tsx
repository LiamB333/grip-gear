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
  className?: string; // Add this line to accept className prop
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSidebar,
  toggleSidebar,
  handleLogoSelect,
  handleBackgroundColorSelect,
  handleStripeColorSelect,
  handleTemplateChange,
  selectedTemplate,
  className, // Add this line to accept className prop
}) => {
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState(false);
  const [showStripeColorPicker, setShowStripeColorPicker] = useState(false);

  const templates = [
    { id: 1, image: "/sock-1.png" },
    { id: 2, image: "/sock-2.png" },
    { id: 3, image: "/sock-3.png" },
    { id: 4, image: "/sock-4.png" },
  ];

  return (
    <div className={`flex relative overflow-hidden ${className}`}>
      {/* Main Sidebar */}
      <div className="w-20 bg-white text-black flex flex-col items-center py-4 shadow-xl fixed top-0 left-0 h-full z-10">
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none flex flex-col items-center group"
          onClick={() => toggleSidebar("design")}
        >
          <img
            src="/icons/color-pencil.svg"
            alt="Design"
            width={20}
            height={20}
            className="sidebar-icon group-hover:fill-current text-blue-500"
          />
          <span className="mt-2 font-semibold group-hover:text-blue-500">
            Design
          </span>
        </button>
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none flex flex-col items-center group"
          onClick={() => toggleSidebar("colour")}
        >
          <img
            src="/icons/bucket.svg"
            alt="Colour"
            width={20}
            height={20}
            className="sidebar-icon group-hover:fill-current text-blue-500"
          />
          <span className="mt-2 font-semibold group-hover:text-blue-500">
            Colour
          </span>
        </button>
        <button
          className="mb-4 p-2 bg-white text-black hover:text-blue-500 focus:outline-none flex flex-col items-center group"
          onClick={() => toggleSidebar("logo")}
        >
          <img
            src="/icons/export.svg"
            alt="Logo"
            width={20}
            height={20}
            className="sidebar-icon group-hover:fill-current text-blue-500"
          />
          <span className="mt-2 font-semibold group-hover:text-blue-500">
            Logo
          </span>
        </button>
      </div>

      {/* Nested Sidebar */}
      {activeSidebar && (
        <div className="w-64 bg-white h-full shadow-xl fixed top-0 left-20 z-10 overflow-auto">
          {activeSidebar === "design" && (
            <div className="p-4">
              <div className="mb-2">
                <h1 className="text-xl">Select Design</h1>
                <p className="text-xs">Choose a standard design</p>
              </div>
              <div className="grid grid-cols-2 gap-2 overflow-auto max-h-96">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`p-1 border-2 ${
                      selectedTemplate === template.id
                        ? "border-blue-500"
                        : "border-gray-300"
                    } cursor-pointer`}
                    onClick={() => handleTemplateChange(template.id)}
                  >
                    <Image
                      src={template.image}
                      alt={`Template ${template.id}`}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSidebar === "colour" && (
            <div className="p-4">
              <div className="mb-2">
                <h1 className="text-xl">Select Colour</h1>
                <p className="text-xs">Decide on your colour combination</p>
              </div>

              <ColorPickerComponent
                title="Background Colour"
                onSelect={handleBackgroundColorSelect}
              />

              {selectedTemplate !== 1 && (
                <>
                  <ColorPickerComponent
                    title="Stripe Colour"
                    onSelect={handleStripeColorSelect}
                    defaultColor="#FFFFFF"
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
              <LogoPicker
                onLogoSelect={handleLogoSelect}
                defaultLogoUrl="/default.png"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
