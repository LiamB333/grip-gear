import React, { useState } from "react";
import LogoPicker from "@/components/Designer/LogoPicker";
import ColorPickerComponent from "@/components/Designer/ColorPicker";
import TemplateSelector from "@/components/Designer/TemplateSelector"; // Adjust the import path as necessary

interface MobileConfigProps {
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

const MobileConfig: React.FC<MobileConfigProps> = ({
  handleLogoSelect,
  handleBackgroundColorSelect,
  handleStripeColorSelect,
  handleTemplateChange,
  selectedTemplate,
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
    <div className="flex flex-col p-4 space-y-4 pb-32 md:pb-24"> {/* Increased bottom padding */}
      <div className="bg-white shadow-md rounded p-2">
        <h1 className="text-xl p-2">Select Design</h1>
        <p className="text-xs p-2">Choose a standard design</p>
        <div className="grid grid-cols-2 gap-2 overflow-auto max-h-96 mt-2">
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
              <img src={template.image} alt={`Template ${template.id}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        <h1 className="text-xl pb-2">Select Colour</h1>
        <p className="text-xs pb-2">Decide on your colour combination</p>
        <ColorPickerComponent
          title="Background Colour"
          onSelect={handleBackgroundColorSelect}
        />
        {selectedTemplate !== 1 && (
          <ColorPickerComponent
            title="Stripe Colour"
            onSelect={handleStripeColorSelect}
            defaultColor="#FFFFFF"
          />
        )}
      </div>
      <div className="bg-white shadow-md rounded p-4 mb-40"> {/* Added margin-bottom */}
        <h1 className="text-xl pb-2">Select Logo</h1>
        <p className="text-xs pb-2">Decide on your sock badge</p>
        <div className="p-4">
          <LogoPicker
            onLogoSelect={handleLogoSelect}
            defaultLogoUrl="/default.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileConfig;
