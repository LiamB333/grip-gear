// components/StepStatusIndicator.tsx

import React from "react";

interface StepStatusIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[]; // Array of step names
}

const StepStatusIndicator: React.FC<StepStatusIndicatorProps> = ({
  currentStep,
  totalSteps,
  stepNames,
}) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-gray-100 text-sm mt-10">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start text-center lg:text-left gap-8">
        {stepNames.map((stepName, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <div
                className={`w-8 h-8 rounded-full border-2 ${
                  index < currentStep
                    ? "bg-blue-500 border-blue-500"
                    : "bg-gray-200 border-gray-300"
                }`}
              >
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 text-large font-semibold text-gray-800">
                  {stepName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepStatusIndicator;
