"use client";
{
  /*

"use client"
import { useState } from "react";
import StepStatusIndicator from "@/components/StatusIndicator";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useNavigate from next/navigation

const Index = () => {
  const stepNames = ["1", "2", "3"]; // Example step names array

  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const router = useRouter(); // Use useNavigate hook for navigation

  const handleTemplateSelect = (templateNumber: number) => {
    setSelectedTemplate(templateNumber);
    // Navigate to the color selection page with selected template
    router.push(`/color?template=${templateNumber}`);
  };

  return (
    <div className="text-center mt-10">
      <StepStatusIndicator
        currentStep={1}
        totalSteps={3}
        stepNames={stepNames}
      />
      <h1 className="text-2xl font-semibold mt-10">
        Choose your design template
      </h1>
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-2 gap-10">
          {[1, 1, 1, 1].map((templateNumber) => (
            <div
              key={templateNumber}
              className={`flex justify-center items-center ${
                selectedTemplate === templateNumber ? "border border-blue-500" : ""
              }`}
              onClick={() => handleTemplateSelect(templateNumber)}
            >
              <Link href={`/color-selection?template=${templateNumber}`}>
             
                  <Image
                    src={`/img${templateNumber}.jpeg`}
                    alt={`Template ${templateNumber}`}
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

*/
}

// pages/color-selection.tsx

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ColorPickerComponent from "@/components/ColorPicker";
import LogoAdditionComponent from "@/components/LogoPicker";
import SockOutline from "@/components/SockOutline"; // Import SockOutline component

const ColorSelectionPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const template = searchParams.get("template");
  const [selectedColor, setSelectedColor] = useState<string>("#FF0000");
  const [selectedLogo, setSelectedLogo] = useState<string>(""); // State to hold selected logo URL

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleLogoSelect = (logoUrl: string) => {
    setSelectedLogo(logoUrl);
  };

  const navigateToDetailsPage = () => {
    if (template && selectedColor) {
      // Navigate to details page with selected template, color, and logo (if selected)
      const queryParams = {
        template: template,
        color: encodeURIComponent(selectedColor),
        logo: encodeURIComponent(selectedLogo),
      };
      const queryString = Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join("&");
      router.push(`/details?${queryString}`);
    } else {
      console.error("Template or selected color is missing.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Customize Your Socks</h1>
        <SockOutline selectedColor={selectedColor} />
        <ColorPickerComponent onSelect={handleColorSelect} />
        <LogoAdditionComponent onLogoSelect={handleLogoSelect} />
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
