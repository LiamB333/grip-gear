import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col items-center w-[33%] max-md:w-full text-center">
      <div className="flex flex-col items-center max-md:mt-10">
        <Image
          src={iconSrc}
          alt={title}
          width={48}
          height={48}
          className="aspect-square"
        />
        <h2 className="mt-6 text-2xl font-bold leading-9 text-white">
          {title}
        </h2>
        <p className="mt-12 text-sm leading-6 text-white">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
