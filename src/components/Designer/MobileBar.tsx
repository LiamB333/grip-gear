import React, { useState, useEffect } from "react";
import LogoPicker from "@/components/Designer/LogoPicker";
import QuantitySelector from "./QuantitySelector";
import Tooltip from "./ToolTip";
import Image from "next/image";

interface MobileBarProps {
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
  "#8E1E1E",
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

const MobileBar: React.FC<MobileBarProps> = ({
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
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(
    null
  );
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<
    string | null
  >(null);
  const [selectedStripeColor, setSelectedStripeColor] = useState<string | null>(
    null
  );

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const toggleTooltip = (
    message: string,
    position: { top: number; left: number }
  ) => {
    setTooltipMessage(message);
    setTooltipPosition(position);
    setTooltipVisible(!tooltipVisible);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (tooltipVisible) {
        setTooltipVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [tooltipVisible]);

  const handleInfoClick = (
    event: React.MouseEvent,
    message: string
  ) => {
    event.stopPropagation();
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    toggleTooltip(message, {
      top: rect.bottom + window.scrollY,
      left: rect.right + window.scrollX,
    });
  };

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const toggleColorPicker = (picker: string) => {
    if (activeColorPicker === picker) {
      setActiveColorPicker(null);
    } else {
      setActiveColorPicker(picker);
    }
  };

  const templates = [
    { id: 1, image: "/sock-1.png" },
    { id: 2, image: "/sock-2.png" },
    { id: 3, image: "/sock-3.png" },
    { id: 4, image: "/sock-4.png" },
    { id: 5, image: "/sock-5.png" },
    { id: 6, image: "/sock-6.png" },
  ];

  const handleColorSelect = (color: string, type: string) => {
    if (type === "background") {
      handleBackgroundColorSelect(color);
      setSelectedBackgroundColor(color);
    } else if (type === "stripe") {
      handleStripeColorSelect(color);
      setSelectedStripeColor(color);
    }
  };

  return (
    <div className="w-full fixed bottom-16 left-0 bg-white text-sm z-40 shadow-xl">
      {tooltipVisible && (
        <Tooltip
          message={tooltipMessage}
          isVisible={tooltipVisible}
          position={tooltipPosition}
        />
      )}
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
          <div className="flex items-center p-2">
            <h1 className="text-xl">Select Design</h1>
            <button
              onClick={(e) =>
                handleInfoClick(e, "Select a design template for your sock.")
              }
            >
              <Image
                src="/info-icon.svg"
                alt="Info Icon"
                width={16}
                height={16}
                className="ml-2"
              />
            </button>
          </div>
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
                <Image
                  src={template.image}
                  alt={`Template ${template.id}`}
                  width={200}
                  height={200}
                />
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
          <div className="flex items-center pb-2">
            <h1 className="text-xl">Select Colour</h1>
            <button
              onClick={(e) =>
                handleInfoClick(e, "Select a color for your sock.")
              }
            >
              <Image
                src="/info-icon.svg"
                alt="Info Icon"
                width={16}
                height={16}
                className="ml-2"
              />
            </button>
          </div>
          <div className="mt-2 space-y-4">
            <button
              className={`w-full p-2 border border-gray-300 rounded bg-white text-black hover:bg-blue-100 transition duration-300 ${
                activeColorPicker === "background" ? "bg-blue-100" : ""
              }`}
              onClick={() => toggleColorPicker("background")}
            >
              Background Colour
            </button>
            {activeColorPicker === "background" && (
              <div className="flex overflow-x-scroll space-x-2 py-2">
                {presetColors.map((color) => (
                  <div
                    key={color}
                    className="flex flex-col items-center relative"
                  >
                    <button
                      className="w-10 h-10 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color, "background")}
                    />
                    {selectedBackgroundColor === color && (
                      <div className="absolute bottom-0 right-0">
                        <svg
                          className="w-4 h-4 text-white bg-blue-500 rounded-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {selectedTemplate !== 1 && (
              <>
                <button
                  className={`w-full p-2 border border-gray-300 rounded bg-white text-black hover:bg-blue-100 transition duration-300 ${
                    activeColorPicker === "stripe" ? "bg-blue-100" : ""
                  }`}
                  onClick={() => toggleColorPicker("stripe")}
                >
                  Stripe Colour
                </button>
                {activeColorPicker === "stripe" && (
                  <div className="flex overflow-x-scroll space-x-2 py-2">
                    {presetColors.map((color) => (
                      <div
                        key={color}
                        className="flex flex-col items-center relative"
                      >
                        <button
                          className="w-10 h-10 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorSelect(color, "stripe")}
                        />
                        {selectedStripeColor === color && (
                          <div className="absolute bottom-0 right-0">
                            <svg
                              className="w-4 h-4 text-white bg-blue-500 rounded-full"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
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
          <div className="flex items-center pb-2">
            <h1 className="text-xl">Select Logo</h1>
            <button
              onClick={(e) =>
                handleInfoClick(e, "Upload or select a logo for your sock.")
              }
            >
              <Image
                src="/info-icon.svg"
                alt="Info Icon"
                width={16}
                height={16}
                className="ml-2"
              />
            </button>
          </div>
          <div className="p-4">
            <LogoPicker onLogoSelect={handleLogoSelect} />
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
          <div className="flex items-center pb-2">
            <h1 className="text-xl">Select Quantity</h1>
            <button
              onClick={(e) =>
                handleInfoClick(
                  e,
                  "Select the quantity of socks you want to order."
                )
              }
            >
              <Image
                src="/info-icon.svg"
                alt="Info Icon"
                width={16}
                height={16}
                className="ml-2"
              />
            </button>
          </div>
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
            src="/icons/add.svg"
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

export default MobileBar;
