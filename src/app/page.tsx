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
    router.push(`/color-selection?template=${templateNumber}`);
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
          {[1, 2, 3, 4].map((templateNumber) => (
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
