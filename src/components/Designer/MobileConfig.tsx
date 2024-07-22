import React, { useState } from "react";
import LogoPicker from "@/components/Designer/LogoPicker";
import ColorPickerComponent from "@/components/Designer/ColorPicker";
import QuantitySelector from "./QuantitySelector";
import Image from "next/image";

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
  quantity: number;
  onQuantityChange: (value: number) => void;
  onQuantityBlur: () => void;
}

const MobileConfig: React.FC<MobileConfigProps> = ({
  handleLogoSelect,
  handleBackgroundColorSelect,
  handleStripeColorSelect,
  handleTemplateChange,
  selectedTemplate,
  quantity,
  onQuantityChange,
  onQuantityBlur,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const templates = [
    { id: 1, image: "/sock-1.png" },
    { id: 2, image: "/sock-2.png" },
    { id: 3, image: "/sock-3.png" },
    { id: 4, image: "/sock-4.png" },
  ];

  return (
    <div className="w-full fixed bottom-16 left-0 bg-white text-sm z-40 shadow-xl">
      {activeSection === "design" && (
        <div className="bg-white shadow-md p-2 relative">
          <button
            className="absolute top-2 right-2"
            onClick={() => setActiveSection(null)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-xl p-2">Select Design</h1>
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
      )}

      {activeSection === "colour" && (
        <div className="bg-white shadow-md p-4 relative">
          <button
            className="absolute top-2 right-2"
            onClick={() => setActiveSection(null)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-xl pb-2">Select Colour</h1>
          <div className="mt-2"> 
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
        </div>
      )}

      {activeSection === "logo" && (
        <div className="bg-white shadow-md p-4 relative">
          <button
            className="absolute top-2 right-2"
            onClick={() => setActiveSection(null)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-xl pb-2">Select Logo</h1>
          <div className="p-4">
            <LogoPicker
              onLogoSelect={handleLogoSelect}
              defaultLogoUrl="/default.png"
            />
          </div>
        </div>
      )}

      {activeSection === "quantity" && (
        <div className="bg-white shadow-md p-4 relative">
          <button
            className="absolute top-2 right-2"
            onClick={() => setActiveSection(null)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-xl pb-2">Select Quantity</h1>
          <QuantitySelector
            quantity={quantity}
            onChange={onQuantityChange}
            onBlur={onQuantityBlur}
          />
        </div>
      )}

      <div className="flex justify-between items-center p-4">
        <button
          className={`bg-white hover:bg-blue-100 text-black font-semibold py-2 px-4  ${
            activeSection === "design" ? "bg-blue-100" : ""
          }`}
          onClick={() => toggleSection("design")}
        >
          <Image
            src="/icons/pattern.svg"
            alt="Design icon"
            width={24}
            height={24}
            className="mx-auto mb-1"
          />
          Design
        </button>
        <button
          className={`bg-white hover:bg-blue-100 text-black font-semibold py-2 px-4  ${
            activeSection === "colour" ? "bg-blue-100" : ""
          }`}
          onClick={() => toggleSection("colour")}
        >
          <Image
            src="/icons/bucket.svg"
            alt="Colour icon"
            width={24}
            height={24}
            className="mx-auto mb-1"
          />
          Colour
        </button>
        <button
          className={`bg-white hover:bg-blue-100 text-black font-semibold py-2 px-4  ${
            activeSection === "logo" ? "bg-blue-100" : ""
          }`}
          onClick={() => toggleSection("logo")}
        >
          <Image
            src="/icons/export.svg"
            alt="Logo icon"
            width={24}
            height={24}
            className="mx-auto mb-1"
          />
          Logo
        </button>
        <button
          className={`bg-white hover:bg-blue-100 text-black font-semibold py-2 px-4  ${
            activeSection === "quantity" ? "bg-blue-100" : ""
          }`}
          onClick={() => toggleSection("quantity")}
        >
          <Image
            src="/icons/shopping.svg"
            alt="Quantity icon"
            width={24}
            height={24}
            className="mx-auto mb-1"
          />
          Quantity
        </button>
      </div>
    </div>
  );
};

export default MobileConfig;
