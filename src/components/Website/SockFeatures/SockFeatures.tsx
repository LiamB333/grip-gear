import React from "react";
import FeatureCard from "@/components/Website/SockFeatures/FeatureCard";

interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    iconSrc: "/grid-red.svg",
    title: "Endless Design Choices",
    description:
      "Express your unique style with endless design choices and personalisation.",
  },
  {
    iconSrc: "/medal-red.svg",
    title: "Enhanced Performance",
    description: "Boost your game with superior grip and unmatched stability.",
  },
  {
    iconSrc: "/football-red.svg",
    title: "Maximum Comfort",
    description: "Designed for ultimate comfort and grip during any activity.",
  },
];

const SocksFeatures: React.FC = () => {
  return (
    <>
      {/* Content Section */}
      <section className="flex flex-col px-16 pt-24 pb-[192px] bg-white max-md:px-5 z-30 relative">
        <div className="justify-center max-md:mt-5 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocksFeatures;
