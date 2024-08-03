import React from "react";
import StepItem from "./StepItem";

interface Step {
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: "/number-1.svg",
    title: "Select your sock template",
    description:
      "Choose from one of our six unique templates, ranging from stripes to chevrons, and design your perfect pair of custom socks.",
  },
  {
    icon: "/number-2.svg",
    title: "Select your colour",
    description:
      "Explore our wide range of vibrant colors to customise the stripes on your socks, ensuring your design is as bold and unique as you are.",
  },
  {
    icon: "/number-3.svg",
    title: "Add your logo",
    description:
      "Easily add your own logo to your custom socks with our design tool, making personalisation simple and seamless.",
  },
  {
    icon: "/number-4.svg",
    title: "Fill in your details",
    description:
      "Send us your details, and we will get back to you shortly with your order details and confirmation.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 py-28 bg-white max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink text-black basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h2 className="text-base font-semibold">How it works</h2>
            <h1 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              How to design your own grip socks
            </h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          {steps.map((step, index) => (
            <StepItem
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
