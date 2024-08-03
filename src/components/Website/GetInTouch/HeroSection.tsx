import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-28 text-white max-md:px-5 max-md:py-24">
      <Image
        src={backgroundImage}
        alt=""
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />
      <div className="flex relative flex-col flex-1 max-w-full w-[768px]">
        <h1 className="text-6xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg max-md:max-w-full">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
