"use client"
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ColorPickerComponent from "@/components/ColorPicker";
import LogoAdditionComponent from "@/components/LogoPicker";
import SockOutline from "@/components/SockOutline";

const ColorSelectionPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTemplate = parseInt(searchParams.get("template") || "1", 10);
  
  const [backgroundColor, setBackgroundColor] = useState("#FF0000");
  const [stripeColor, setStripeColor] = useState("#FFFFFF");
  const [selectedLogo, setSelectedLogo] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<number>(initialTemplate);

  const handleBackgroundColorSelect = (color: string) => {
    setBackgroundColor(color);
  };

  const handleStripeColorSelect = (color: string) => {
    setStripeColor(color);
  };

  const handleLogoSelect = (logoUrl: string) => {
    setSelectedLogo(logoUrl);
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Customize Your Socks</h1>
        <div className="mt-4">
          <select className="border p-1" value={selectedTemplate} onChange={handleTemplateChange}>
            <option value={1}>Pattern 1</option>
            <option value={2}>Pattern 2</option>
            <option value={3}>Pattern 3</option>
            <option value={4}>Pattern 4</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <SockOutline
            backgroundColor={backgroundColor}
            stripeColor={stripeColor}
            selectedTemplate={selectedTemplate}
          />
          <div className="ml-8">
            <div className="mb-2">
              <h2>Choose Background Color</h2>
              <ColorPickerComponent onSelect={handleBackgroundColorSelect} />
            </div>
            <div>
              <h2>Choose Stripe Color</h2>
              <ColorPickerComponent onSelect={handleStripeColorSelect} />
            </div>
          </div>
        </div>
        <LogoAdditionComponent onLogoSelect={handleLogoSelect} />
        <div className="mt-4">
          <button className="text-blue-500 hover:text-blue-700">
            Next: Enter Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorSelectionPage;
