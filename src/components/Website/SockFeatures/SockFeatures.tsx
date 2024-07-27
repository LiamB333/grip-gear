import React from 'react';
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
    description: "Create your own unique grip socks by selecting colours, patterns and logos."
  },
  {
    iconSrc: "/medal.svg",
    title: "Enhance Your Performance with High-Quality Grip Socks",
    description: "Our grip socks are designed to provide maximum comfort and traction during physical activities."
  },
  {
    iconSrc: "/football.svg",
    title: "Stay Stylish and Safe with Grip Socks for Every Occasion",
    description: "From casual wear to sports activities, our grip socks offer both fashion and functionality."
  }
];

const SocksFeatures: React.FC = () => {
  return (
    <section className="flex flex-col px-16 py-20 bg-neutral-100 max-md:px-5">
      <h1 className="mt-8 text-4xl font-bold leading-10 text-black max-md:max-w-full">
        Explore the versatility of our 2D designer as you personalise your grip socks with an extensive selection of colours, patterns and sizes.
      </h1>
      <div className="justify-center pb-20 mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocksFeatures;