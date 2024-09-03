import React from "react";
import FeatureCard from "@/components/Website/SockFeatures/FeatureCard";

interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    iconSrc: "/grid.svg",
    title: "Choose from a Wide Selection of Grip Sock Styles",
    description:
      "Create your own unique grip socks by selecting colours, patterns and logos.",
  },
  {
    iconSrc: "/medal.svg",
    title: "Enhance Your Performance with High-Quality Grip Socks",
    description:
      "Our grip socks are designed to provide maximum comfort and traction during physical activities.",
  },
  {
    iconSrc: "/football.svg",
    title: "Stay Stylish and Safe with Grip Socks for Every Occasion",
    description:
      "From casual wear to sports activities, our grip socks offer both fashion and functionality.",
  },
];

const SocksFeatures: React.FC = () => {
  return (
    <>
      {/* Top SVG Wave */}
      <div className="relative -mb-1 mt-10 z-30">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1414 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1414 118.181C444 118.181 191.399 -19.9945 -25 2.46973V118.181H1414Z"
            fill="#CB3A3A"
          />
        </svg>
      </div>

      {/* Content Section */}
      <section className="flex flex-col px-16 py-24 pb-24 bg-[#CB3A3A] max-md:px-5 z-30 relative">
        <div className="justify-center max-md:mt-5 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom SVG Wave */}
      <div className="relative -mt-1 z-30">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1439 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0.180725C970 0.180832 1222.6 139.314 1439 116.694V0.180725H0Z"
            fill="#CB3A3A"
          />
        </svg>
      </div>
    </>
  );
};

export default SocksFeatures;
